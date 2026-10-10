// Controlla gli indirizzi che il sito promette: `npm run check-links`.
// Esce con 1 solo per i rotti certi: dominio che non risolve, 404, 410, un file
// o un'àncora che in pagina non ci sono. Le fonti di stampa tolgono gli
// articoli, e quando succede si deve sapere. Un 403 dato dal servizio anti-bot,
// un 429, una rete lenta restano avvertimenti: la CI non deve arrossire per
// colpa di chi risponde.
import { existsSync, readdirSync, readFileSync } from 'node:fs'
import { resolve, dirname } from 'node:path'
import { fileURLToPath } from 'node:url'
import { works } from '../src/data/works.js'
import { events } from '../src/data/events.js'
import { posts } from '../src/data/posts.js'
import { shelf } from '../src/data/shelf.js'
import { flashes } from '../src/data/flashes.js'
import { contact, portrait, pressKit, sources } from '../src/data/site.js'

const root = resolve(dirname(fileURLToPath(import.meta.url)), '..')
const publicDir = resolve(root, 'public')
const errors = []
const warnings = []

// Racimola gli `href` ovunque stiano, negli stessi dati che finiscono in pagina.
function collect(value, acc) {
  if (typeof value === 'string') return
  if (Array.isArray(value)) {
    value.forEach((v) => collect(v, acc))
    return
  }
  if (value && typeof value === 'object') {
    for (const [k, v] of Object.entries(value)) {
      if (k === 'href' && typeof v === 'string') acc.add(v)
      else collect(v, acc)
    }
  }
}

const hrefs = new Set()
;[works, events, posts, shelf, flashes, contact, portrait, pressKit, sources].forEach((x) => collect(x, hrefs))

function sorgenti(dir) {
  const out = []
  for (const entry of readdirSync(dir, { withFileTypes: true })) {
    const at = resolve(dir, entry.name)
    if (entry.isDirectory()) out.push(...sorgenti(at))
    else if (/\.(jsx?|html)$/.test(entry.name)) out.push(readFileSync(at, 'utf8'))
  }
  return out
}

// Le àncore del menu contro gli id delle sezioni: se un titolo cambia id, chi
// clicca resta in cima alla pagina senza un errore da nessuna parte.
const ancore = new Set()
const ids = new Set()
for (const text of [readFileSync(resolve(root, 'index.html'), 'utf8'), ...sorgenti(resolve(root, 'src'))]) {
  for (const m of text.matchAll(/href="#([\w-]+)"/g)) ancore.add(m[1])
  for (const m of text.matchAll(/href:\s*['"]#([\w-]+)['"]/g)) ancore.add(m[1])
  for (const m of text.matchAll(/href=\{['"`]#([\w-]+)['"`]\}/g)) ancore.add(m[1])
  for (const m of text.matchAll(/id="([\w-]+)"/g)) ids.add(m[1])
}
// `#top` non chiede un id: il browser porta lì l'inizio della pagina da solo.
ancore.delete('top')

const interni = [...hrefs].filter((h) => h.startsWith('/'))
const esterni = [...hrefs].filter((h) => h.startsWith('https://')).sort()

interni.forEach((h) => {
  if (!existsSync(resolve(publicDir, h.slice(1)))) errors.push(`${h} porta a un file che non c'è in public/`)
})
for (const a of ancore) {
  if (!ids.has(a)) errors.push(`#${a}: nessuna sezione porta quest'id, il link resta nel vuoto`)
}

const TIMEOUT = 15000

async function testa(url) {
  const richiedi = async (method) =>
    (
      await fetch(url, {
        method,
        redirect: 'follow',
        headers: {
          'user-agent':
            'Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/126 Safari/537.36',
          accept: 'text/html,application/xhtml+xml,application/xml;q=0.9,*/*;q=0.8',
          'accept-language': 'it,en;q=0.8',
        },
        signal: AbortSignal.timeout(TIMEOUT),
      })
    ).status

  try {
    let status = await richiedi('HEAD')
    // Non tutti rispondono alla sola intestazione: se la rifiutano, si chiede la pagina piena.
    if (status === 405 || status === 501) status = await richiedi('GET')
    if (status >= 200 && status < 400) return { ok: true }
    if (status === 404 || status === 410) return { errore: `${url} risponde ${status}: la pagina non c'è più` }
    return { avviso: `${url} risponde ${status}` }
  } catch (e) {
    const codice = `${e?.cause?.code ?? ''} ${e?.name ?? ''}`
    if (/ENOTFOUND|EAI_AGAIN|ENORECORD/.test(codice)) {
      return { errore: `${url}: il dominio ${new URL(url).hostname} non risolve` }
    }
    if (/ETIMEDOUT|TimeoutError|AbortError/.test(codice)) {
      return { avviso: `${url} tace oltre ${TIMEOUT / 1000} s` }
    }
    return { avviso: `${url}: ${e?.cause?.code ?? e?.message ?? 'rete'}` }
  }
}

// Sei alla volta: lesto in CI, abbastanza cauto da non sembrare un assalto ai
// siti che ospitano le fonti.
const coda = [...esterni]
while (coda.length) {
  const gruppo = coda.splice(0, 6)
  for (const r of await Promise.all(gruppo.map(testa))) {
    if (r.errore) errors.push(r.errore)
    else if (r.avviso) warnings.push(r.avviso)
  }
}

warnings.forEach((w) => console.log(`  avviso  ${w}`))
if (errors.length) {
  console.error(`link: ${errors.length} ${errors.length === 1 ? 'rotto' : 'rotti'}`)
  errors.forEach((e) => console.error('  errore  ' + e))
  process.exit(1)
}
console.log(
  `link: ${esterni.length} indirizzi esterni, ${interni.length} file e ${ancore.size} àncore interne: nessuno rotto` +
    (warnings.length ? `, ${warnings.length} da rivedere` : ''),
)
