import assert from 'node:assert/strict'
import { readFileSync, readdirSync } from 'node:fs'
import { works } from '../src/data/works.js'
import { events } from '../src/data/events.js'
import { posts } from '../src/data/posts.js'
import { flashes } from '../src/data/flashes.js'
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
console.log('Publication checks passed: demo material excluded, incomplete records labelled, JSON-LD verified.')
