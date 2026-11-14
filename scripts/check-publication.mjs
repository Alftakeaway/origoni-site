import assert from 'node:assert/strict'
import { readFileSync, readdirSync } from 'node:fs'
import { works } from '../src/data/works.js'
import { events } from '../src/data/events.js'
import { posts } from '../src/data/posts.js'
import { flashes } from '../src/data/flashes.js'
import { contact } from '../src/data/site.js'
import { demoWorks } from '../docs/editorial/demo-works.js'

const html = readFileSync(new URL('../dist/index.html', import.meta.url), 'utf8')
const assets = new URL('../dist/assets/', import.meta.url)
const js = readdirSync(assets).filter(p => p.endsWith('.js')).map(p => readFileSync(new URL(p, assets), 'utf8')).join('\n')
for (const demo of demoWorks) {
  assert(!works.some(w => w.id === demo.id), `Demonstration published: ${demo.id}`)
  assert(!js.includes(demo.id), `Demonstration bundled: ${demo.id}`)
}
for (const row of [...works, ...events].filter(r => r.draft)) {
  assert(row.missingDetails?.it && row.missingDetails?.en, `Missing editorial note: ${row.id}`)
}
assert(posts.every(p => !p.draft), 'Unapproved journal post published')
assert(flashes.every(f => !f.draft), 'Unapproved note published')
const graph = JSON.parse(html.match(/<script type="application\/ld\+json">([\s\S]*?)<\/script>/)[1])['@graph']
for (const w of works.filter(w => w.draft)) assert(!graph.some(n => n.url?.endsWith(`/opera/${w.id}`) || n.url?.endsWith(`#opera/${w.id}`)))

// La pagina esce dalla build già scritta (scripts/prerender.mjs): se #root torna
// vuoto, chi legge senza JavaScript e i motori che non eseguono script trovano
// il solo head, e la bibliografia sparisce.
const radice = html.slice(html.indexOf('<div id="root">') + '<div id="root">'.length)
assert(radice.trimStart().startsWith('<'), 'Prerender mancante: #root è vuoto')
for (const id of ['top', 'works', 'journal', 'events', 'about', 'shelf', 'contact', 'flashes']) {
  assert(html.includes(`id="${id}"`), `Sezione non prerenderizzata: ${id}`)
}
// React scrive le entità: il confronto coi titoli va fatto sul testo decodificato.
const testo = radice
  .replace(/&#x27;/g, "'")
  .replace(/&quot;/g, '"')
  .replace(/&lt;/g, '<')
  .replace(/&gt;/g, '>')
  .replace(/&amp;/g, '&')
for (const w of works) assert(testo.includes(w.title.it), `Opera non prerenderizzata: ${w.id}`)
assert(!/opacity:\s*0/.test(html.match(/<h1[^>]*>/)[0]), 'Il titolo principale esce nascosto dalla build')
assert(!/opacity:\s*0/.test(html.match(/<header[^>]*>/)[0]), 'La barra di navigazione esce nascosta dalla build')
// ADR 0008: l'indirizzo sta nei pixel, non nell'HTML, nemmeno ora che l'HTML
// contiene la pagina intera.
assert(!html.includes('mailto:'), 'Mailto nell\'HTML prerenderizzato')
if (contact.email) assert(!html.includes(contact.email), 'Indirizzo dell\'autrice nell\'HTML prerenderizzato')

console.log('Publication checks passed: demo material excluded, incomplete records labelled, JSON-LD verified, page prerendered.')
