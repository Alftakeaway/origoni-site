// Press kit di Claudia Origoni: un PDF A4 scritto dai dati del sito, non a mano.
// Uso: node scripts/make-press-kit.mjs  ->  public/press/press-kit-claudia-origoni.pdf
// Le parole vengono da src/i18n/strings.js e da src/data: se un dato cambia nel repo cambia
// qui, e il PDF non può dire qualcosa che il sito non dica già.
// Serve Chrome/Chromium per stampare: `CHROME=/percorso/chrome node scripts/make-press-kit.mjs`
// per indicare un binario fuori dalle sedi standard.
import { execFileSync } from 'node:child_process'
import { existsSync, mkdirSync, readFileSync, writeFileSync } from 'node:fs'
import { delimiter } from 'node:path'
import { fileURLToPath, pathToFileURL } from 'node:url'
import { works } from '../src/data/works.js'
import { events } from '../src/data/events.js'
import { portrait, contact } from '../src/data/site.js'
import { strings } from '../src/i18n/strings.js'

const ROOT = fileURLToPath(new URL('../', import.meta.url))
const TMP = `${ROOT}.press-build`
const DEST = `${ROOT}public/press/press-kit-claudia-origoni.pdf`
const PUBLIC = 'https://origoni-site.vercel.app'
const EDIZIONE = 'ottobre 2026'

// Chrome stampa l'HTML e lo restituisce in PDF: nessuna dipendenza annodata al progetto.
const SEGNI = [
  'C:/Program Files/Google/Chrome/Application/chrome.exe',
  'C:/Program Files (x86)/Google/Chrome/Application/chrome.exe',
  '/Applications/Google Chrome.app/Contents/MacOS/Google Chrome',
]
const inPath = (cmd) =>
  (process.env.PATH ?? '')
    .split(delimiter)
    .some((dir) => existsSync(`${dir}/${cmd}.exe`) || existsSync(`${dir}/${cmd}`))

const trovato =
  process.env.CHROME ||
  SEGNI.find(existsSync) ||
  ['chrome', 'google-chrome', 'chromium'].find(inPath)
if (!trovato) {
  console.error('Nessun Chrome trovato: passare CHROME=/percorso/del/binario.')
  process.exit(1)
}

const it = (b) => (typeof b === 'string' ? b : b?.it ?? '')
const esc = (s) =>
  String(s).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;')
const file = (p) => pathToFileURL(`${ROOT}public${p}`).href

const real = works
  .filter((w) => !w.draft)
  .sort((a, b) => Number(a.year) - Number(b.year))
const press = works.filter((w) => w.press?.length)
const photos = events.filter((e) => e.photo)
const bio = strings.it.about.paragraphs

const riga = (w) => {
  const dati = [it(w.publisher), w.pages ? `${w.pages} pp` : null, w.isbn]
    .filter(Boolean)
    .join(' · ')
  return `<tr><td class="t"><i>${esc(w.title.it)}</i></td><td>${esc(w.year)}</td><td>${esc(
    it(w.type),
  )}</td><td>${esc(dati)}</td></tr>`
}

const citazione = (w, p) => `
  <blockquote>
    <p>«${esc(p.quote)}»</p>
    <cite>${esc(p.outlet)}${p.byline ? `, ${esc(p.byline)}` : ''}${
      p.date ? `, ${esc(it(p.date))}` : ''
    } &middot; su <i>${esc(w.title.it)}</i></cite>
  </blockquote>`

const html = `<!doctype html>
<html lang="it"><head><meta charset="utf-8">
<title>${esc(strings.it.docTitle)} &middot; press kit</title>
<style>
  @page { size: A4; margin: 16mm 15mm; }
  /* A schermo il corpo largo come il box di stampa: le righe si spezzano come nel PDF. */
  @media screen { body { width: 180mm; margin: 0 auto; } }
  * { box-sizing: border-box; }
  body { font: 10.5pt/1.55 Georgia, 'Times New Roman', serif; color: #1a1a1a; margin: 0; }
  h1 { font: 700 26pt/1.1 Georgia, serif; margin: 0 0 2mm; letter-spacing: -.01em; }
  h2 { font: 700 13pt/1.2 Georgia, serif; margin: 0 0 4mm; text-transform: uppercase;
       letter-spacing: .12em; color: #8a6d1f; }
  .kicker { font: 9pt/1.4 Georgia, serif; text-transform: uppercase; letter-spacing: .2em;
            color: #6b6b6b; margin: 0 0 6mm; }
  .lead { font-size: 11.5pt; color: #3a3a3a; margin: 0 0 7mm; }
  .rule { border: 0; border-top: .6pt solid #d8d2c4; margin: 6mm 0; }
  .head { display: flex; gap: 8mm; align-items: flex-start; }
  .head div { flex: 1; }
  img.portrait { width: 48mm; height: 61mm; object-fit: cover; object-position: 50% 18%;
                 border: .6pt solid #d8d2c4; }
  p { margin: 0 0 3.5mm; text-align: justify; }
  table { width: 100%; border-collapse: collapse; font-size: 9.2pt; }
  td { padding: 1.8mm 2mm 1.8mm 0; border-bottom: .4pt solid #e6e1d5; vertical-align: top; }
  td.t { width: 38%; }
  blockquote { margin: 0 0 5mm; padding: 0 0 0 4mm; border-left: 1.4pt solid #b8a878; }
  blockquote p { font-style: italic; margin: 0 0 1.5mm; }
  cite { font-style: normal; font-size: 8.6pt; color: #5a5a5a; }
  code { font: 9pt Consolas, monospace; color: #6b6b6b; }
  .page { page-break-after: always; }
  .page:last-child { page-break-after: auto; }
  .foot { font-size: 8.4pt; color: #6b6b6b; margin-top: 8mm; border-top: .6pt solid #d8d2c4;
          padding-top: 3mm; }
  .grid { display: grid; grid-template-columns: 1fr 1fr; gap: 3mm; }
  figure { margin: 0 0 3mm; }
  figure img { width: 100%; height: 38mm; object-fit: cover; border: .6pt solid #d8d2c4; }
  figcaption { font-size: 7.2pt; line-height: 1.3; color: #5a5a5a; margin-top: 1.2mm; }
  figcaption code { font-size: 7pt; }
</style></head><body>

<div class="page">
  <p class="kicker">Materiali stampa &middot; ${EDIZIONE}</p>
  <div class="head">
    <div>
      <h1>Claudia Origoni</h1>
      <p class="lead">${esc(strings.it.hero.eyebrow)}. ${esc(strings.it.hero.tagline)}</p>
      <p class="lead" style="font-size:10pt">Sito: <code>${PUBLIC}</code> &middot;
        Testi e bibliografia in italiano e in inglese.</p>
      <p style="font-size:8.6pt;color:#5a5a5a;margin:0">Provenienza della frase citata:
        ${esc(strings.it.about.quoteSource)}.</p>
    </div>
    <img class="portrait" src="${file(portrait.src)}" alt="">
  </div>
  <hr class="rule">
  <h2>Chi scrive</h2>
  ${bio.slice(0, 3).map((p) => `<p>${esc(p)}</p>`).join('')}
  <hr class="rule">
  <h2>Contatti</h2>
  <p>Per richieste della stampa e inviti alle presentazioni: il modulo nella sezione
    «Contatti» di <code>${PUBLIC}/#contact</code>, che apre una lettera nel client di posta
    di chi scrive e non conserva nulla. Profilo: <code>${contact.socials
      .map((s) => s.href.replace(/^https?:\/\//, ''))
      .join(', ')}</code>.</p>
  <p>Le opere, gli incontri e le fonti stanno sul sito, in italiano e in inglese. Il Premio
    Letterario Mandrarossa e il collettivo Gli Olmi tornano nella nota di pagina tre.</p>
  <div class="foot">Il testo di questa pagina riproduce alla lettera la sezione «Sull’autrice»
    del sito. Ogni voce della bibliografia rimanda alla fonte che la documenta.</div>
</div>

<div class="page">
  <h2>Bibliografia verificata</h2>
  <table>${real.map(riga).join('')}</table>
  <div class="foot">Elenco le opere i cui dati di catalogo hanno una fonte controllata. Le schede
    segnate «bozza» sul sito restano fuori da questo elenco: titoli, anni e sinossi aspettano
    ancora conferma. ${real.length} titoli.</div>
</div>

<div class="page">
  <h2>Le sue parole, e la stampa</h2>
  ${bio.slice(3).map((p) => `<p>${esc(p)}</p>`).join('')}
  <hr class="rule">
  ${press.map((w) => w.press.map((p) => citazione(w, p)).join('')).join('')}
  <div class="foot">Le frasi di stampa sono quelle della pagina indicata, virgola per virgola,
    e restano italiane anche nella versione inglese del sito.</div>
</div>

<div class="page">
  <h2>Fotografie</h2>
  <div class="grid">
    ${photos
      .map(
        (e) => `<figure>
      <img src="${file(e.photo)}" alt="">
      <figcaption>${esc(it(e.photoCaption))}<br><code>${e.photo}</code></figcaption>
    </figure>`,
      )
      .join('')}
  </div>
  <div class="foot">Le immagini sono a risoluzione web e senza dati EXIF. Gli originali stanno
    nell’archivio dell’autrice e si forniscono su richiesta della testata. ${photos.length}
    scatti d’evento oltre al ritratto in prima pagina.</div>
</div>

</body></html>`

mkdirSync(TMP, { recursive: true })
mkdirSync(`${ROOT}public/press`, { recursive: true })
const src = `${TMP}/press-kit.html`
const pdf = `${TMP}/press-kit.pdf`
writeFileSync(src, html, 'utf8')
execFileSync(trovato, [
  '--headless=new',
  '--disable-gpu',
  '--no-sandbox',
  '--no-pdf-header-footer',
  `--print-to-pdf=${pdf}`,
  pathToFileURL(src).href,
])
writeFileSync(DEST, readFileSync(pdf))
console.log('HTML:', src)
console.log('PDF :', DEST)
