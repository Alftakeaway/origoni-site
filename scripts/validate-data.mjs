// Controlla i dati del sito prima che finiscano in pagina: `npm run validate`.
// Esce con codice 1 se qualcosa non tiene, così la build e la CI si fermano.
// Le regole vengono dalle promesse fatte al sito: niente testi a metà in due
// lingue, niente date o codici inventati, ogni copertina con il suo creditore,
// ogni fatto con la sua fonte, e tutto ciò che una fonte non conferma marcato
// come bozza.
import { existsSync } from 'node:fs'
import { resolve, dirname } from 'node:path'
import { fileURLToPath } from 'node:url'
import { works } from '../src/data/works.js'
import { events } from '../src/data/events.js'
import { posts, categoryKeys } from '../src/data/posts.js'
import { shelf } from '../src/data/shelf.js'
import { flashes } from '../src/data/flashes.js'
import { contact, portrait, sources } from '../src/data/site.js'

const root = resolve(dirname(fileURLToPath(import.meta.url)), '..')
const publicDir = resolve(root, 'public')
const errors = []
const warn = (where, msg) => errors.push(`${where}: ${msg}`)

const isBilingual = (v) =>
  v && typeof v === 'object' && !Array.isArray(v) && Object.keys(v).length === 2 && 'it' in v && 'en' in v

// Percorsi di file, etichette `{ it, en }` e indirizzi: il resto è un campo
// che le regole sotto non conoscono, e un campo nuovo va aggiunto qui.
const ASSET_KEYS = new Set(['cover', 'photo', 'src'])
const HREF_KEYS = new Set(['href'])

function walk(value, where, key = '') {
  if (typeof value === 'string') {
    if (ASSET_KEYS.has(key) && value.startsWith('/')) {
      if (!existsSync(resolve(publicDir, value.slice(1)))) warn(where, `il file ${value} non c'è in public/`)
    }
    if (HREF_KEYS.has(key) && value && !value.startsWith('/') && !value.startsWith('https://')) {
      warn(where, `l'indirizzo ${value} non è https e non è interno`)
    }
    return
  }
  if (Array.isArray(value)) {
    value.forEach((v, i) => walk(v, `${where}[${i}]`, key))
    return
  }
  if (value && typeof value === 'object') {
    if (isBilingual(value)) {
      for (const lang of ['it', 'en']) {
        const t = value[lang]
        if (typeof t !== 'string' || !t.trim()) warn(`${where}.${lang}`, 'manca il testo in questa lingua')
      }
      if (value.it.includes('\u2014')) {
        warn(`${where}.it`, 'l\u2019em dash non sta nell\u2019italiano del sito: va riscritto l\u2019inciso')
      }
      return
    }
    for (const [k, v] of Object.entries(value)) walk(v, `${where}.${k}`, k)
  }
}

function checkIsbn(where, isbn) {
  if (isbn == null || isbn === '') return
  const digits = String(isbn).replace(/[^0-9Xx]/g, '')
  if (digits.length === 13) {
    let sum = 0
    for (let i = 0; i < 12; i++) sum += Number(digits[i]) * (i % 2 ? 3 : 1)
    const check = (10 - (sum % 10)) % 10
    if (check !== Number(digits[12])) warn(where, `EAN-13 ${digits} non torna: il carattere di controllo dovrebbe essere ${check}`)
    return
  }
  if (digits.length === 10) {
    let sum = 0
    for (let i = 0; i < 9; i++) sum += Number(digits[i]) * (10 - i)
    const last = digits[9].toUpperCase() === 'X' ? 10 : Number(digits[9])
    if ((sum + last) % 11 !== 0) warn(where, `ISBN-10 ${digits} non torna al controllo modulo 11`)
    return
  }
  warn(where, `isbn ${isbn} non è né un ISBN-10 né un ISBN-13`)
}

const isDate = (s) => typeof s === 'string' && /^\d{4}-\d{2}-\d{2}$/.test(s)

function uniqueIds(name, rows) {
  const seen = new Set()
  for (const r of rows) {
    if (!r.id) {
      warn(name, 'una voce senza id: i link profondi e il feed non la raggiungono')
      continue
    }
    if (seen.has(r.id)) warn(`${name}#${r.id}`, 'id ripetuto in due voci')
    seen.add(r.id)
  }
}

works.forEach((w) => {
  const at = `opera ${w.id}`
  walk(w, at)
  checkIsbn(at, w.isbn)
  if (!w.title?.it?.trim()) warn(at, "un'opera senza titolo non è un'opera")
  if ((!w.publisher || !w.year) && !w.draft) warn(at, 'editore o anno che mancano e la voce non è marcata come bozza')
  if (w.cover && !w.coverCredit) warn(at, 'copertina editoriale senza coverCredit: non si sa chi la presta')
  if (w.excerpt && !w.excerpt.credit) warn(at, 'estratto senza crediti: serve il nome della pagina e del volume')
  if (w.pages && !/^\d+(-\d+)?$/.test(String(w.pages))) warn(at, `pagine ${w.pages}: ci sta un numero o un intervallo`)
})

events.forEach((e) => {
  const at = `evento ${e.id}`
  walk(e, at)
  if (!isDate(e.sort) && e.sort !== '0000-00-00') warn(at, `sort ${e.sort}: la data tecnica serve per ordinare`)
  if (e.wholeMonth && /\d-\d{2}$/.test(e.sort) && !e.sort.endsWith('-00'))
    warn(at, `wholeMonth dice che il giorno non si sa, ma sort ${e.sort} lo scrive`)
  if (!(e.sources?.length) && !e.draft) warn(at, 'nessuna fonte e nessuna marca di bozza')
  if (!e.dateLabel?.it && !e.draft) warn(at, 'senza data leggibile e senza marca di bozza')
})

posts.forEach((p) => {
  const at = `articolo ${p.id}`
  walk(p, at)
  if (!isDate(p.iso)) warn(at, `iso ${p.iso}: il feed RSS legge una data tecnica AAAA-MM-GG`)
  if (!categoryKeys.includes(p.category)) warn(at, `categoria ${p.category} non è fra ${categoryKeys.join(', ')}`)
  if (!(p.blocks?.length)) warn(at, 'nessun paragrafo: la lettura integrale resta vuota')
  if (!(p.readTime > 0)) warn(at, 'il tempo di lettura deve essere un numero positivo')
})

shelf.forEach((s) => {
  const at = `scaffale ${s.id}`
  walk(s, at)
  if (!['reading', 'finished', 'queued'].includes(s.status)) warn(at, `stato ${s.status} non ammesso`)
  if (s.rating != null && !(s.rating >= 0 && s.rating <= 5)) warn(at, `valutazione ${s.rating} fuori da 0-5`)
  if (s.progress != null && !(s.progress >= 0 && s.progress <= 100)) warn(at, `avanzamento ${s.progress} fuori da 0-100`)
})

flashes.forEach((f) => {
  const at = `appunto ${f.id}`
  walk(f, at)
  if (!isDate(f.iso)) warn(at, `iso ${f.iso}: serve una data tecnica`)
})

const at = 'contatto'
if (contact.email && !/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(contact.email)) warn(at, 'l\u2019indirizzo ricomposto non è un indirizzo')
;(contact.socials ?? []).forEach((s, i) => walk(s, `${at}.socials[${i}]`, 'social'))
walk(portrait, 'ritratto')
sources.forEach((s, i) => {
  walk(s, `fonte[${i}]`)
  if (!s.href?.startsWith('https://')) warn(`fonte ${i}`, 'le fonti elencate in pagina devono essere apribili')
})

uniqueIds('opere', works)
uniqueIds('eventi', events)
uniqueIds('articoli', posts)
uniqueIds('scaffale', shelf)
uniqueIds('appunti', flashes)

const bozze = {
  opere: works.filter((w) => w.draft).length,
  eventi: events.filter((e) => e.draft).length,
  articoli: posts.filter((p) => p.draft).length,
  appunti: flashes.filter((f) => f.draft).length,
}

if (errors.length) {
  console.error(`validazione dati: ${errors.length} ${errors.length === 1 ? 'errore' : 'errori'}`)
  errors.forEach((e) => console.error('  - ' + e))
  process.exit(1)
}

const plural = (n, one, many) => `${n} ${n === 1 ? one : many}`

console.log(
  `validazione dati: ${plural(works.length, 'opera', 'opere')}, ${plural(events.length, 'evento', 'eventi')}, ${plural(
    posts.length,
    'articolo',
    'articoli',
  )}, ${plural(shelf.length, 'libro', 'libri')}, ${plural(flashes.length, 'appunto', 'appunti')}, ${plural(
    sources.length,
    'fonte',
    'fonti',
  )}: tutto a posto`,
)
console.log('  bozze marcate:', JSON.stringify(bozze))
