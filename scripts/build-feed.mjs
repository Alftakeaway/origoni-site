// Genera dist/feed.xml dai post reali di src/data/posts.js.
// Viene eseguito dopo `vite build` (vedi lo script `build` in package.json),
// così il feed non può divergere dai testi pubblicati.
// Il RSS non ha un modo per marcare una bozza: le voci con `draft: true` restano
// in pagina col badge, ma nel feed non ci vanno.
import { readFileSync, writeFileSync } from 'node:fs'
import { resolve } from 'node:path'
import { posts } from '../src/data/posts.js'
import { SITE } from './site-url.mjs'
const enc = (s) =>
  String(s ?? '')
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')

const rfc822 = (iso) => new Date(`${iso}T18:00:00`).toUTCString()

const published = posts.filter((p) => !p.draft)

const items = [...published]
  .sort((a, b) => (a.iso < b.iso ? 1 : -1))
  .map(
    (p) => `    <item>
      <title>${enc(p.title.it)}</title>
      <link>${SITE}/#journal</link>
      <guid isPermaLink="false">${SITE}/#journal/${p.id}</guid>
      <pubDate>${rfc822(p.iso)}</pubDate>
      <description>${enc(p.excerpt.it)}</description>
    </item>`,
  )
  .join('\n')

const xml = `<?xml version="1.0" encoding="UTF-8"?>
<rss version="2.0" xml:base="${SITE}/">
  <channel>
    <title>Claudia Origoni, appunti dalla scrivania</title>
    <link>${SITE}/#journal</link>
    <description>Recensioni, saggi brevi e note di scrittura di Claudia Origoni.</description>
    <language>it</language>
${published.length ? `${items}\n` : ''}  </channel>
</rss>
`

const out = resolve(process.cwd(), 'dist/feed.xml')
writeFileSync(out, xml, 'utf8')

// Un canale senza item è un feed valido che però non dice niente: finché il
// Giornale ha solo bozze, il puntatore in `<head>` non esce dalla build.
const htmlPath = resolve(process.cwd(), 'dist/index.html')
const html = readFileSync(htmlPath, 'utf8')
const tag = /<link\s+rel="alternate"\s+type="application\/rss\+xml"[\s\S]*?\/>\s*/
const stripped = published.length ? html : html.replace(tag, '')
if (stripped !== html) writeFileSync(htmlPath, stripped, 'utf8')

console.log(
  `feed: ${published.length} ${published.length === 1 ? 'articolo' : 'articoli'} su ${posts.length} (escluse ${posts.length - published.length} bozze) -> dist/feed.xml`,
  published.length ? '| puntatore RSS in pagina' : '| puntatore RSS tolto da dist/index.html',
)
