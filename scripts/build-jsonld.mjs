// Scrive i dati strutturati nel dist/index.html: `node scripts/build-jsonld.mjs`,
// chiamato dalla build dopo `vite build`.
//
// Qui dentro non finisce niente che il sito non possa già provare. Le opere con
// la marca di bozza restano fuori, e con loro gli eventi senza giorno: un
// `startDate` inventato è peggio di un dato mancante, perché Google lo prende in
// parola. Stessa regola per l'ISBN, che c'è solo dove il codice torna al controllo
// della cifra di verifica (vedi scripts/validate-data.mjs).
//
// Le tipologie seguono il campo `type` della bibliografia: il volume d'autore sta
// in `Book`, l'articolo in rivista in `Article`, tutto ciò che è pezzo dentro
// l'opera di altri in `CreativeWork`, che non promette quello che non è.
import { readFileSync, writeFileSync } from 'node:fs'
import { resolve, dirname } from 'node:path'
import { fileURLToPath } from 'node:url'
import { works } from '../src/data/works.js'
import { events } from '../src/data/events.js'
import { posts } from '../src/data/posts.js'
import { contact, portrait } from '../src/data/site.js'
import { SITE } from './site-url.mjs'

const root = resolve(dirname(fileURLToPath(import.meta.url)), '..')
const htmlPath = resolve(root, 'dist/index.html')

const isBook = (w) => /^(Romanzo|Saggio|Volume)/.test(w.type?.it ?? '')
const isArticle = (w) => /Articolo in rivista/.test(w.type?.it ?? '')
const datedEvent = (e) =>
  !e.draft && !e.wholeMonth && e.sort !== '0000-00-00' && /^\d{4}-\d{2}-\d{2}$/.test(e.sort)

const PERSON_ID = `${SITE}/#autrice`

const person = {
  '@type': 'Person',
  '@id': PERSON_ID,
  name: 'Claudia Origoni',
  url: SITE,
  image: `${SITE}${portrait.src}`,
  description: 'Scrittrice e saggista',
  sameAs: (contact.socials ?? []).map((s) => s.href),
}

const workNode = (w) => {
  const url = `${SITE}/#opera/${w.id}`
  const node = {
    '@type': isBook(w) ? 'Book' : isArticle(w) ? 'Article' : 'CreativeWork',
    '@id': url,
    name: w.title.it,
    inLanguage: 'it',
    url,
    author: { '@id': PERSON_ID },
  }
  if (w.year) node.datePublished = String(w.year)
  // Il `subtitle` della bibliografia tiene insieme i sottotitoli veri e la riga
  // che dice in quale antologia sta il pezzo: la seconda non è un sottotitolo,
  // e il nome qui sotto resta il titolo alla lettera.
  if (w.publisher) {
    if (isArticle(w)) node.isPartOf = { '@type': 'Periodical', name: w.publisher }
    else node.publisher = { '@type': 'Organization', name: w.publisher }
  }
  if (w.isbn) node.isbn = w.isbn
  if (/^\d+$/.test(String(w.pages ?? ''))) node.numberOfPages = Number(w.pages)
  if (w.cover) node.image = `${SITE}${w.cover}`
  return node
}

const eventNode = (e) => ({
  '@type': 'Event',
  name: e.title.it,
  startDate: e.sort,
  url: `${SITE}/#events`,
  location: {
    '@type': 'Place',
    name: e.place?.it ?? e.city,
    ...(e.city ? { address: { '@type': 'PostalAddress', addressLocality: e.city } } : {}),
  },
})

const graph = [
  person,
  ...works.filter((w) => !w.draft).map(workNode),
  ...events.filter(datedEvent).map(eventNode),
  ...posts
    .filter((p) => !p.draft)
    .map((p) => ({
      '@type': 'Article',
      headline: p.title.it,
      datePublished: p.iso,
      url: `${SITE}/#journal/${p.id}`,
      author: { '@id': PERSON_ID },
    })),
]

const json = JSON.stringify({ '@context': 'https://schema.org', '@graph': graph })
  .replace(/</g, '\\u003c')
  .replace(/>/g, '\\u003e')

const tag = `  <!-- Dati strutturati generati in build da scripts/build-jsonld.mjs: bibliografia,
       appuntamenti e ritratto, solo dove il dato è verificato. -->
  <script type="application/ld+json">${json}</script>\n`

const html = readFileSync(htmlPath, 'utf8')
const existing = /  <!-- Dati strutturati generati in build[\s\S]*?<\/script>\n/
const next = existing.test(html)
  ? html.replace(existing, tag)
  : html.replace(/<\/head>/, `${tag}</head>`)
if (next === html && !existing.test(html)) {
  console.error('jsonld: la testa di dist/index.html non ha </head> e non ha il blocco del giro prima')
  process.exit(1)
}
writeFileSync(htmlPath, next, 'utf8')

const count = (t) => graph.filter((n) => n['@type'] === t).length
console.log(
  `jsonld: ${graph.length} nodi in dist/index.html, ${count('Book')} Book e ${count('Article')} Article e ${count(
    'CreativeWork',
  )} CreativeWork e ${count('Event')} Event e ${count('Person')} Person`,
)
