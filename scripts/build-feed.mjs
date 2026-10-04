// Genera dist/feed.xml dai post reali di src/data/posts.js.
// Viene eseguito dopo `vite build` (vedi lo script `build` in package.json),
// così il feed non può divergere dai testi pubblicati.
import { writeFileSync } from 'node:fs'
import { resolve } from 'node:path'
import { posts } from '../src/data/posts.js'

const SITE = 'https://origoni-site.vercel.app'
const enc = (s) =>
  String(s ?? '')
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')

const rfc822 = (iso) => new Date(`${iso}T18:00:00`).toUTCString()

const items = [...posts]
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
${items}
  </channel>
</rss>
`

const out = resolve(process.cwd(), 'dist/feed.xml')
writeFileSync(out, xml, 'utf8')
console.log(`feed: ${posts.length} articoli -> dist/feed.xml`)
