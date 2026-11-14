# La pagina esce dalla build già scritta

Fino alla 1.3.3 il sito consegnava un guscio: `dist/index.html` aveva la testa con i caratteri e i
metadati, e un `<div id="root"></div>` vuoto. Tutto il resto, bibliografia compresa, compariva
quando il pacchetto JavaScript aveva finito di scaricarsi ed era stato eseguito. Chi legge senza
script, e i motori che il JavaScript non lo eseguono, trovavano una pagina senza contenuto; il
primo pittamento utile arrivava dopo il bundle, non dopo l'HTML.

Ora la stessa `App` che il browser idrata viene renderizzata una volta in Node durante la build
(`src/entry-server.jsx`, `scripts/prerender.mjs`) e il risultato finisce dentro `#root`. Il client
non riscrive quel markup: `src/main.jsx` sceglie `hydrateRoot` quando `#root` ha già un figlio, e
resta `createRoot` in dev, dove il prerender non gira. L'ordine della build è
`validate-data`, `vite build`, `prerender`, `build-jsonld`, `build-feed`: i dati strutturati
continuano a essere scritti nella testa dopo che il corpo è pieno, e il feed toglie il puntatore
RSS come prima.

Si passa dal server di Vite in `middlewareMode` con `ssrLoadModule`, non da una seconda build SSR:
il CSS resta quello che `vite build` ha già messo nella testa, e non c'è un secondo bundle da
tenere in pari con il primo. Il costo è un passo di build in più, circa due secondi.

## Cosa deve restare vero

Niente script inline. La CSP in `vercel.json` ammette `script-src 'self'`, quindi il prerender non
aggiunge nessun `<script>`: il markup viene controllato e la build si ferma se ne compare uno. I
dati strutturati restano un blocco `application/ld+json`, che non è codice eseguito.

Niente indirizzo nell'HTML (ADR 0008). La pagina intera ora sta nel sorgente consegnato, e la
regola dell'indirizzo a pixel vale anche lì: `MailGlyph` non scrive l'indirizzo nel markup, e il
`mailto` continua a nascere nell'istante del clic. `scripts/check-publication.mjs` lo verifica
insieme al resto. Il canvas però nasce 300×150 se non gli si danno misure, e quel vuoto adesso si
vedrebbe dal primo byte: gli attributi partono a 1×1 e lo stile riserva il posto della riga in
`ch` e `em`, poi l'effetto corregge al pixel quando il carattere è caricato.

Le bozze restano marcate (ADR 0002 e 0007). Il prerender scrive quello che la pagina mostra, badge
«Bozza» e nota editoriale compresi, mentre il grafo JSON-LD continua a escludere le opere in bozza
e gli eventi senza giorno. Le due cose non devono convergere: la pagina dichiara l'incertezza a
chi legge, i dati strutturati non la promettono a chi indicizza.

Il modulo non invia niente (ADR 0003) e Tailwind resta alla 3 (ADR 0004): il prerender non tocca
né l'uno né l'altro.

## Il moto non può nascondere quello che è già nell'HTML

La regola che ha richiesto più attenzione: nessun contenuto può partire nascosto per mano del
JavaScript, altrimenti l'HTML consegnato dice una cosa e lo schermo ne mostra un'altra.

L'entrata della prima schermata è passata da `framer-motion` al CSS (`.co-rise`, `.co-nav-in`,
`.co-fade` in `src/index.css`), con la stessa cadenza di prima: 0,3 s di attesa, 0,14 s fra un pezzo
e il seguente, 0,9 s di salita. Il CSS gira anche senza JavaScript, e il markup del server e del
client combacia perché non ci sono stili inline da confrontare. Sotto `prefers-reduced-motion` le
tre classi spengono l'animazione come già facevano `animate-drift` e compagne.

`Reveal` non parte più da `opacity: 0`. Si arma soltanto ciò che al montaggio sta sotto la piega,
e lo nasconde in un colpo solo; quello che il lettore vede già resta dov'è. Il risultato è che le
sezioni si rivelano allo scorrimento come prima, ma la prima schermata è piena fin dal primo
pittamento, e chi ha il moto ridotto non ha nessuno stacco.

Le schede del giornale usano `AnimatePresence initial={false}`, come già facevano le opere: quelle
del primo giro stanno nell'HTML, quelle che entrano filtrando si animano. I glifi dell'hero restano
montati anche a moto ridotto, fermi invece che assenti, perché un nodo che c'è sul server e non c'è
sul client è una differenza che l'idratazione deve sanare.

## La resa deve essere deterministica

In Node non esistono `window` e `document`. L'unica lettura che stava nella resa era l'indirizzo
dentro il file del calendario: ora viene da `siteUrl` in `src/data/site.js`, che
`scripts/site-url.mjs` riesporta per il feed e per i dati strutturati. Un appuntamento scaricato
da un'anteprima locale non si porta più dietro `localhost`, e l'indirizzo nel `.ics` è quello
pubblico, lo stesso della `canonical`.

Il `DTSTAMP` dentro il file resta l'istante in cui la pagina è stata scritta: la build e la visita
non coincidono, quindi quel solo collegamento porta `suppressHydrationWarning`, che è la via
prevista per un valore che nasce dal calendario. La lingua e le preferenze di lettura si applicano
negli effetti, dopo l'idratazione: il markup consegnato è sempre l'italiano di partenza, e chi
aveva scelto l'inglese lo vede tornare per un istante al ricaricamento. È il prezzo di non avere
un server che legga le preferenze, ed è lo stesso prezzo di prima, solo visibile più presto.

## Senza JavaScript

La pagina si legge: bibliografia, appuntamenti, biografia, scaffale e fonti sono nell'HTML, e il
calendario si scarica anche da lì, perché il `data:` URI è già nell'attributo. Restano chiuse le
schede delle opere, i filtri, la versione inglese e l'indirizzo dell'autrice. Un avviso in
`index.html`, dentro `<noscript>`, lo dichiara e rimanda al kit stampa, che riporta gli stessi
recapiti. L'avviso sta sotto la barra, con lo stesso stacco di 7 rem che le àncore già rispettano.

## Alternative scartate

Un framework con il rendering sul server (Next, Astro, Remix): rifarebbe il sito da capo, e il
progetto ha già deciso di restare su Vite e Tailwind 3. Una build SSR separata con il suo bundle:
due pacchetti da tenere allineati per una pagina sola. Un router con un HTML per ogni scheda: il
sito è una pagina, e le schede sono un dialogo sopra la bibliografia, non indirizzi separati.
Restare com'era con un avviso per chi non ha script: lascerebbe i motori davanti a una pagina
vuota, che è il problema da cui si partiva.

## Come si controlla

`npm run check-publication` ora verifica anche il prerender: `#root` non è vuoto, le otto sezioni
ci sono tutte, i tredici titoli della bibliografia stanno nel testo decodificato, il titolo
principale e la barra non escono nascosti, e nell'HTML non c'è nessun `mailto` né l'indirizzo in
chiaro. La resa in Node, l'idratazione senza differenze e il comportamento a 390, 768 e 1440 pixel,
con e senza moto ridotto, si misurano sulla build servita, non sul sorgente.
