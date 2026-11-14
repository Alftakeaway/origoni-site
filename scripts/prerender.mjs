// Scrive la pagina dentro dist/index.html: `node scripts/prerender.mjs`, chiamato
// dalla build dopo `vite build` e prima dei dati strutturati.
//
// Il sito era un guscio vuoto: chi arrivava senza JavaScript, e i motori di
// ricerca che non eseguono script, trovavano il solo <head>. Qui la App si
// renderizza una volta in Node e il risultato finisce in #root; il browser poi
// idrata quel markup invece di riscriverlo (src/main.jsx).
//
// Si passa dal server di Vite in middlewareMode e non da una build SSR separata:
// il CSS resta quello che `vite build` ha già scritto nella testa, e non c'è un
// secondo bundle da tenere in pari con il primo. Nessuno script inline: la CSP
// in vercel.json ammette solo 'self'.
import { readFileSync, writeFileSync } from 'node:fs'
import { resolve, dirname } from 'node:path'
import { fileURLToPath } from 'node:url'
import { createServer } from 'vite'

const root = resolve(dirname(fileURLToPath(import.meta.url)), '..')
const htmlPath = resolve(root, 'dist/index.html')

const vite = await createServer({
  root,
  server: { middlewareMode: true },
  appType: 'custom',
  logLevel: 'warn',
})

let markup
try {
  const { render } = await vite.ssrLoadModule('/src/entry-server.jsx')
  markup = render()
} finally {
  await vite.close()
}

const html = readFileSync(htmlPath, 'utf8')
const vuoto = /<div id="root">\s*<\/div>/
if (!vuoto.test(html)) {
  console.error('prerender: dist/index.html non ha un <div id="root"></div> vuoto dove scrivere')
  process.exit(1)
}
if (/<script[\s>]/.test(markup)) {
  console.error('prerender: il markup contiene uno script, la CSP lo bloccherebbe')
  process.exit(1)
}

writeFileSync(htmlPath, html.replace(vuoto, `<div id="root">${markup}</div>`), 'utf8')
console.log(`prerender: ${markup.length} caratteri di pagina in dist/index.html`)
