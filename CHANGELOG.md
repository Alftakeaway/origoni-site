# Interventi P1, 16 ottobre 2026

- Su approvazione dell’utente: archivio dei segnaposto fuori dal sito; dati mancanti espliciti per opere e incontri reali, senza promuoverli a verificati.
- Contrasto di badge, categoria saggi e footer; controlli nativi del giornale, filtri con stato, salto al contenuto e nomi dei controlli tradotti.
- Toolchain Vite aggiornata, Node 24 in CI e header di sicurezza Vercel.
- Decisione editoriale documentata in ADR 0007; contenuti storici conservati in docs/editorial/.

# Registro delle versioni

Tiene il conto di che cosa è cambiato nel sito, e di dove sta la prova. Le versioni
sono legate al deploy: ogni voce corrisponde a un push su `main`, quindi a una
messa in produzione su Vercel. Il numero segue `package.json`.

Le regole del registro sono quelle del progetto: un fatto entra solo se ha una
fonte, i testi provvisori portano il badge BOZZA (vedi `docs/adr/0002-badge-bozza-obbligatorio.md`),
e i titoli si citano come sono stampati (vedi `GLOSSARY.md`).

## 1.5.1 - 19 novembre 2026

**Le fotografie degli incontri si vedono intere, sopra il testo.**

- **Otto incontri su quindici hanno una foto, e in tutti la foto stava in una colonna da 240 px con `object-cover`.** Il manifesto del Premio Martoglio è quadrato (1254×1254): nella colonna restava una fetta verticale, senza titolo né data. Lo stesso per i manifesti e i ritratti verticali degli altri incontri.
- **Ora la foto sta sopra, intera e centrata**, in una fascia color carta con ombra leggera: `object-contain`, altezza massima 520 px, larghezza al massimo quella della scheda. Nessun ritaglio, proporzione dell'originale conservata (prova al browser: 1254×1254 → 520×520; 780×975 → 416×520).
- **Prova.** Build verde con 165.437 caratteri prerenderizzati, `npm test` 5 su 5; misure sulle schede Martoglio e Mandrarossa con rapporto larghezza/altezza identico all'originale.

## 1.5.0 - 19 novembre 2026

**Il motore del sito va avanti di tre major e la pagina resta identica al pixel.**

- **React 18.3 → 19.3, Vite 7 → 8 (Rolldown e Oxc), Tailwind 3.4 → 4.3, framer-motion 11 → 13.** `tailwind.config.js` e `postcss.config.js` spariscono: i token (colori, font, ombre, cadenze) sono ora un blocco `@theme` in `src/index.css`, compilato dal plugin Vite di Tailwind. `autoprefixer` non serve più: i prefissi li mette Lightning CSS.
- **Due trappole della migrazione, trovate misurando.** In Tailwind 4 `leading-tight` vince sempre sulla riga di `md:text-5xl` (passa da `--tw-leading`), mentre in 3 la dimensione responsive la sovrascriveva: ogni titolo desktop cresceva di 12 px e la pagina di 134. Riportato l'intento con `md:leading-none` sulle h2 da 48 px e `md:leading-[2.5rem]` su quelle da 36 px (7 file). Le cadenze `drift`/`floaty` usavano `var(--tw-rotate)`, che in 4 non esiste: ora usano `translate` e `rotate`.
- **Controllati i cambi silenziosi di Tailwind 4** (colore bordo di default, `rounded-sm`, `shadow-sm`): il progetto non ne fa uso, tutti i bordi hanno colore esplicito e le ombre sono token.
- **Prova.** Confronto con la produzione al browser, stessa finestra: le otto sezioni e l'altezza totale combaciano (`16453 px`), stessi `h1` da 96 px in Playfair, stessi colori, nessun overflow orizzontale, zero errori in console dopo il reload (idratazione React 19 pulita). `npm test` 5 su 5, `npm run check-publication` verde, JSON-LD presente, build in 0,87 s con 165.180 caratteri di pagina prerenderizzata.
- **Costo dichiarato.** Il pacchetto JavaScript passa da 142,4 a 167,4 kB gzip e il CSS da 8,0 a 10,5: è il prezzo di React 19.3 e Motion 13 (il CSS cresce perché i token ora sono variabili). Recuperabile con `LazyMotion` se servirà.

## 1.4.2 - 19 novembre 2026

**Il kit stampa torna in pari con i dati, e l'avviso senza JavaScript non promette più un recapito che non c'è.**

- **Kit stampa rigenerato, edizione novembre 2026.** Dodici titoli in bibliografia, con «Citazioni di una vita» e il suo ISBN, e otto fotografie d'evento, con il manifesto di Belpasso. La pagina Contatti ora dichiara dove si legge l'indirizzo di posta dell'autrice (la sezione Contatti del sito, con JavaScript attivo) e perché il PDF non lo stampa: tenerlo fuori dagli elenchi automatici.
- **L'avviso per chi naviga senza JavaScript dice il vero.** Prima prometteva «gli stessi recapiti» nel kit stampa, ma il kit non contiene l'indirizzo e non può contenerlo, perché il repository è pubblico. Ora l'avviso dichiara che l'indirizzo compare solo a JavaScript acceso e indica il profilo Instagram, che il kit elenca davvero insieme a biografia, bibliografia e fotografie. Letto al browser con JavaScript spento: la banda si legge e la pagina sotto resta intera.
- **Il commento in `src/data/site.js` descrive la protezione attuale.** L'indirizzo non è più soltanto spezzato e codificato contro i crawler: la pagina lo dipinge come pixel su un canvas, e il commento lo dice.
- **I cinque link che rispondono male ai programmi, provati con un browser vero.** IBS, Salone del Libro e le tre schede Unilibro danno 504/403/401 alle richieste automatiche; con Chrome rispondono 200 e i titoli corrispondono. Restano come sono: il blocco è contro i bot, non contro chi legge.
- **Archivio.** La lista di quanto manca dopo il materiale del 19 novembre sta in `docs/corrispondenza/claudia-novembre-2026.md`, in versione redatta.
- **Prova.** `npm run validate`: 12 opere, 15 eventi, zero bozze fra le opere. Gate italiano e inglese riletti (exit 0; i passivi segnalati sono quelli già letti e lasciati, i cinque titoli verbatim in inglese restano). `npm test` 5 su 5, `npm run check-publication` e `npm run check-links` verdi (29 esterni, 1 file, 7 àncore, nessuno rotto). PDF riletto pagina per pagina: edizione, conteggi, Contatti e assenza dell'indirizzo in chiaro.

## 1.4.1 - 19 novembre 2026

**Il materiale del 19 novembre: il contenitore della pagina 69 e una cerimonia nuova.**

- **«Citazioni di una vita» esce dalla bozza.** Insieme alla pagina del contributo l'autrice ha mandato copertina, frontespizio, colophon e indice del volume che la tiene: «Il miraggio del futuro fra Covid e Fata Morgana», a cura di Antonella Pellettieri, Zaccara, 2023, ISBN 9791280537133, collana MenSALe, Documenta et Monumenta, 10. Le due voci provvisorie (il volume senza contributo e la pagina senza contenitore) diventano una sola scheda, con la sinossi della pagina e tre note che dicono che cosa la documenta: il colophon fotografato («© 2023 Grafiche Zaccara Snc», Lagonegro, «Finito di stampare nel mese di dicembre 2023»), il numero 69 in calce alla pagina con la qualifica «Imprenditrice e Scrittrice», e il limite rimasto, cioè la pagina d'indice precedente a quella fotografata, che parte da 77. L'ISBN passa al carattere di controllo del validatore.
- **Un appuntamento nuovo, con due fonti cartacee.** Sabato 21 novembre 2026, ore 18, al Teatro Comunale "Nino Martoglio" di Belpasso (CT): la XXXIX edizione del Premio Letterario Internazionale "Nino Martoglio" premia gli Olmi, la comunità di scrittori siciliani di cui l'autrice fa parte, insieme a «Radici di carta» (Kalòs), l'antologia che ospita il suo racconto «Salvate i mobili». Il manifesto della cerimonia e il ritaglio stampa «Alla Letturina il «Nino Martoglio»», entrambi dall'archivio dell'autrice e senza testata dichiarata, stanno nelle fonti; il manifesto è la fotografia della scheda, e la data piena offre il calendario .ics.
- **Prova.** `npm run validate`: 12 opere, 15 eventi, zero bozze fra le opere e due fra gli eventi (i due incontri col solo mese). Gate italiano e inglese riletti sui nuovi testi: l'unico passivo nuovo nomina chi agisce e resta, i titoli verbatim in inglese restano segnalati e lasciati. `npm test` 5 su 5, `npm run check-publication` e `npm run check-links` verdi; sulla build servita la scheda del contributo e la nuova scheda evento lette al browser in italiano e in inglese.

## 1.4.0 - 14 novembre 2026

**La pagina arriva già scritta, e il JavaScript la riprende invece di rifarla.**

- **Il corpo della pagina esce dalla build.** La stessa `App` che il browser idrata viene renderizzata una volta in Node (`src/entry-server.jsx`, `scripts/prerender.mjs`) e scritta dentro `#root`; `src/main.jsx` sceglie `hydrateRoot` quando il contenitore ha già un figlio e resta `createRoot` in dev, dove il prerender non gira. Misurato su `dist/index.html`: 176.564 byte, 24.936 con gzip, 19.584 con brotli, otto sezioni e tutti e tredici i titoli della bibliografia nel testo consegnato. Prima il corpo era un `<div>` vuoto e la bibliografia compariva dopo il bundle.
- **Senza JavaScript la pagina si legge.** Bibliografia, appuntamenti, biografia, scaffale e fonti stanno nell'HTML, e il calendario si scarica anche da lì perché il `data:` URI è già nell'attributo. Restano chiuse le schede delle opere, i filtri, la versione inglese e l'indirizzo dell'autrice: lo dichiara un avviso in `<noscript>`, che rimanda al kit stampa per gli stessi recapiti. Verificato con l'esecuzione degli script disattivata: titolo e barra visibili, otto sezioni, tredici opere, quattordici appuntamenti, cinque libri nello scaffale, calendario da dodici eventi, nessun contenuto della prima schermata nascosto.
- **Il moto non nasconde quello che è già nell'HTML.** L'entrata della prima schermata è passata da `framer-motion` al CSS (`.co-rise`, `.co-nav-in`, `.co-fade`), con la stessa cadenza di prima e spenta sotto `prefers-reduced-motion`; `Reveal` arma soltanto ciò che al montaggio sta sotto la piega, e le schede del giornale usano `AnimatePresence initial={false}`. Nell'HTML consegnato non c'è nessuno `opacity: 0` inline. Il confronto prima e dopo l'idratazione trova lo stesso testo (18.759 caratteri) e due soli nodi in più, il cursore decorativo e il suo anello, che nascono soltanto dove il puntatore è fine e il moto non è ridotto.
- **L'indirizzo resta fuori dal sorgente (ADR 0008).** Ora che la pagina intera sta nel file consegnato, la regola vale anche lì: nessun `mailto:` e nessuna chiocciola nel testo, verificati sia nell'HTML sia nella pagina resa. Il canvas che dipinge la riga parte a 1×1 con il posto riservato in `ch` ed `em`, perché un canvas senza misure nasce 300×150 e quel vuoto si vedrebbe dal primo byte.
- **La resa in Node è deterministica.** L'indirizzo dentro il file del calendario viene da `siteUrl` in `src/data/site.js`, lo stesso della `canonical`, e non più dalla finestra del browser: un `.ics` scaricato da un'anteprima locale non si porta dietro `localhost`. Il `DTSTAMP`, che è l'istante della scrittura, porta `suppressHydrationWarning` sul solo collegamento che lo contiene.
- **La barra non si stringe più dove non c'è posto.** Fra 768 e 1023 pixel il nome dell'autrice andava a capo e le cinque voci, la lingua e il pulsante restavano addossate al marchio: la riga del desktop ora compare da `lg` in su, e sotto quella soglia comanda il menu, che a 768 pixel si apre e si chiude con le stesse sei voci del telefono. Il nome non si spezza (`whitespace-nowrap`). Misurato: a 768 nome su una riga e menu al suo posto, a 1440 nome su una riga e voci staccate dal marchio.
- **Prova.** `npm run check-publication` controlla anche il prerender (`#root` pieno, otto sezioni, tredici titoli, titolo e barra non nascosti, nessun indirizzo); `npm test` 5 su 5; sulla build servita 60 controlli su 60 con moto normale e 49 su 49 con moto ridotto, zero errori e zero avvisi in console, nessuna traboccatura a 390, 768 e 1440 pixel, e dopo la scorsa completa nessun pezzo resta chiuso. Decisione, invarianti e alternative scartate in `docs/adr/0009-pagina-gia-scritta.md`.

## 1.3.3 - 24 ottobre 2026

- Ricerca bilingue e filtri per tipologia nella bibliografia: titolo, editore, anno, ISBN e dati collegati; i risultati si riordinano con una transizione breve e rispettano la preferenza di movimento ridotto.
- Indicatore di avanzamento della lettura accessibile e sincronizzato con lo scorrimento.
- Test unitari senza dipendenze per ricerca, filtri, accenti e contenuti bilingui.

## 1.3.2 - 23 ottobre 2026

**Gli indirizzi si vedono, ma nel testo della pagina non ci sono.**

- **Tutti e due gli indirizzi passano dai pixel.** Quella dell'autrice in «Scrivimi» era ricomposta
  a runtime e poi scritta come testo nel DOM, quindi un programma che legge la pagina resa la
  raccoglieva come prima; il credito del footer, che sulla riga appena spedita stava in un `href`,
  offriva l'indirizzo nello stesso modo. Ora `src/components/MailGlyph.jsx` li dipinge entrambi su
  un canvas, con i caratteri, il colore e la dimensione del blocco che li ospita, e costruisce il
  `mailto:` solo nell'istante del clic. Misurato sulla pagina resa: nessun testo con la chiocciola,
  nessun attributo `mailto`, entrambe le righe dipinte coi loro caratteri (Cormorant corsivo
  nell'autrice, Plus Jakarta Sans nel credito).
- **Il pulsante, non il collegamento.** `aria-label` tradotto in entrambe le lingue, raggiungimento
  con Tab e contorno di focus da 3 px verificati con la tastiera vera, bersagli da 180×28 e 156×24.
  Il costo sta nella decisione, che è un ADR a sé: la riga non si può più selezionare né copiare, e
  uno schermo fotografato la legge comunque (`docs/adr/0008-indirizzo-a-pixel.md`).
- **Le preferenze di lettura rifanno il dipinto.** Un canvas non ingrandisce né scurisce con la
  pagina, e `ReadingControls.jsx` agisce sulla radice: l'indirizzo sarebbe restato del corpo e del
  colore di prima. `MailGlyph.jsx` osserva gli attributi di `html` e ripittura, moltiplicando il
  buffer per lo zoom, che il `font-size` computato non segue. Misurato a zoom 1,25: il buffer passa
  da 156×28 a 195×35 e l'inchiostro da 1064 a 1425 pixel, quindi la riga cresce nitida; l'alto
  contrasto non tocca queste due righe chiare su fondo scuro, ma il rifacimento lo copre.

- **Una fonte che non c'è più, messa in copia.** Il CI si è fermato sulla scheda bibliografica del
  Centro Studi sul Teatro Napoletano, che l'ateneo ha tolto: 404 da ieri, e la stessa pagina aveva
  passato il controllo alla consegna della 1.3.1. La citazione di «Alza gli occhi e guarda» resta
  lì, ma ora punta alla copia conservata del 20 settembre 2024, dove la frase citata e il
  «contributo di Claudia Origoni» si leggono ancora parola per parola. `npm run check-links` passa:
  29 indirizzi esterni, nessuno rotto, cinque da rivedere perché rispondono 401, 403 e 504 ai
  programmi.

## 1.3.1 - 23 ottobre 2026

**Il credito di chi ha fatto il sito, e la prova che sta sotto la pagina.**

- **Chi ha fatto il sito ora sta in pagina.** Il footer chiude con «Design e sviluppo» in italiano
  e «Designed & Developed» in inglese, seguiti dall'indirizzo di posta di chi lo ha progettato e
  scritto. L'indirizzo fa la stessa strada di quello dell'autrice: `src/data/site.js` lo tiene
  spezzato e codificato, e lo ricompone solo a runtime, così nel repository pubblico non resta in
  chiaro per chi raccoglie gli indirizzi. `scripts/validate-data.mjs` ne controlla la forma, come
  già faceva per l'altro.
- **La fascia scura, misurata.** L'audit di contrasto si ferma al settanta per cento della pagina e
  il footer non l'aveva mai letto. Misurato ora, il credito prende `paper/70` come le righe accanto
  e tutti e sei i testi della fascia stanno a 8,74:1 sul nero. L'indirizzo è un collegamento `mailto`
  alto 24 px, dentro i bersagli della WCAG 2.5.8.

## 1.3.0 - 10 ottobre 2026

**Caratteri di casa, dati che non si fidano più di noi, indirizzi che aprono una scheda.**

- **I dati si validano da soli.** `scripts/validate-data.mjs` gira prima della build e si ferma
  se qualcosa non tiene: le due lingue sempre piene, nessun trattino lungo nell'italiano, gli ISBN
  controllati sulla cifra di sicurezza (EAN-13 e modulo 11), ogni copertina col suo creditore, ogni
  fatto con la sua fonte, ogni file citato davvero presente in `public/`, gli id non ripetuti. La
  prima passata ha trovato quattro bugie vere: tre eventi con `wholeMonth`, cioè senza giorno
  conosciuto, avevano un giorno inventato nel campo tecnico `sort`. Ora chiudono con `-00`, che è
  il modo onesto di scrivere che non si sa.
- **I caratteri restano in casa.** Il foglio di Google Fonts dichiarava ventuno facce su due
  connessioni a un dominio terzo; ora `public/fonts/` ne contiene cinque, nel solo subset latin,
  per 139 KB dal nostro dominio (vedi `docs/adr/0006-caratteri-self-host.md`). Tre sono in preload
  perché stanno nella parte di pagina che si vede senza scorrere. La sonda di rete conferma che
  nessuna richiesta esce dall'origine e che le famiglie effettive sono quelle giuste: Playfair 600
  nei titoli, Cormorant corsivo 400 nelle righe citate, Jakarta 400 nel corpo.
- **Le immagini pesano meno e non si spostano.** Quattro fotografie di eventi e una copertina
  ricompresse: 861 KB in 491, a 780 px di larghezza, che è il doppio di quanto la card mostra.
  Il ritratto porta `width` e `height` veri (677 × 792) e la fila delle copertine citate sta in
  una casella alta 128 px, così niente si ricompone quando arriva un file. Controle anche che
  nessuno dei venticinque file pubblici porti EXIF o coordinate: un repository pubblico non è il
  posto dove l'indirizzo di casa finisce nei metadati.
- **I dati strutturati dicono il vero.** `scripts/build-jsonld.mjs` scrive nella pagina costruita
  venti nodi schema.org: un `Person`, quattro `Book`, un `Article`, sei `CreativeWork`, otto
  `Event`. Entrano solo le voci senza marca di bozza, niente `birthDate` e niente `alumniOf`, e i
  titoli stanno come sono stampati: il sottotitolo non viene accodato, perché in alcuni casi è la
  riga del contenitore, non una parte del nome.
- **Una scheda ha un indirizzo.** `#opera/echi` apre davvero quella scheda, con le opere sotto e
  non la pagina in cima; il tasto Indietro la chiude e, se la si apre col pulsante, chiudendola
  l'indirizzo si pulisce. Sono gli stessi `@id` che il JSON-LD promette, quindi un link condiviso e
  un dato per il motore di ricerca dicono la stessa cosa.
- **I titoli si bilanciano da soli.** `text-wrap: balance` sui nove titoli di sezione, sull'h1
  della lettura, sulla testata della scheda opera e sui quattro tipi di card. A 390 px
  «Il secolo lungo di «Pachinko» di Min Jin Lee» fa tre righe da 237, 233 e 227 px invece di
  lasciare «Lee» tutta sola; «Non escludo il ritorno» passa da 152 e 70 a 135 e 100.
- **La card dell'Ancella non taglia più niente.** Con il titolo verbatim di sei righe l'altezza
  fissa nascondeva l'editore e il link: `h-64` diventa `min-h-64`, il pavimento resta e la card
  cresce quando il nome del libro lo chiede.
- **La CI prova i legami.** `.github/workflows/ci.yml` valida, costruisce, controlla che i dati
  strutturati siano nella pagina e passa i collegamenti al setaccio ogni lunedì, anche quando
  nessuno tocca il codice. `scripts/check-links.mjs` fallisce solo per i rotti certi; un 403
  dell'anti-bot è un avviso.

- **Che cosa non è stato fatto, e perché.** Vitest sui dati: il validatore fa quel lavoro meglio
  di un test unitario, e due strumenti che dicono la stessa cosa divergono. Playwright: le sonde
  sul protocollo DevTools provano lo stesso comportamento in due secondi. `:has()` per gli stati
  delle card: in questa marcatura non c'è un caso che non risolva un selettore figlio, e
  aggiungere un pseudo-classe per tre selettori non li rende più onesti. La modalità scura: la
  carta è l'identità del sito, non un tema. I pulsanti «Acquista» e la ricerca sul giornale:
  vorrebbero dati che non ci sono, e sei articoli su sei sono bozze. Le pagine con un URL proprio,
  il prerender, l'inglese su `/en/` e la mappa del sito più larga restano in attesa del dominio,
  perché hanno un indirizzo da promettere.

- **Prova.** `npm run validate` passa con 19 opere, 14 eventi, 6 articoli, 5 libri, 1 appunto e
  17 fonti; `npm run check-links` dà 29 indirizzi esterni, 1 file e 6 àncore interne, nessuno
  rotto e sei avvisi (403, 401 e un 504 da servizi anti-bot). Le sonde: cinque file di caratteri
  caricati e nessun dominio terzo, sette casi di link profondo chiusi bene, ventitré titoli
  bilanciati misurati a 390 px. Dodici scatti a 1440 e sei a 390, in italiano e in inglese:
  l'inglese mobile passa dal menu, dove sta l'interruttore, e la prova è nell'attributo `lang`
  della pagina oltre che nel testo. I due gate dell'italiano sono puliti.

## 1.2.8 - 9 ottobre 2026

**Correzione: i bersagli piccoli, dove il dito non arriva.**

- **Che cosa è cambiato.** Quarantuno link alle fonti erano più bassi dei 24 px di WCAG 2.5.8:
  diciassette nelle fonti di «Chi scrive», ventiquattro tra le righe «Fonte» degli Eventi e il
  pulsante «Aggiungi al calendario», due nelle testate delle citazioni di stampa dentro la scheda
  opera, uno su «Torna al giornale» nella lettura. Tutti sistemati con un `py` sull'elemento
  stesso, non con un margine del contenitore: la riga non si sposta, cresce solo l'area sensibile.
  La testata di stampa passa da `<a>` inline a `inline-flex`, così l'icona sta in linea senza la
  correzione di `mb-px` che serviva prima.
- **Che cosa è rimasto com'è.** Le etichette «Fonte» e i nomi di testata senza link sono `span`,
  non bersagli: non sono stati toccati. Gli scatti di controllo confermano che le righe sono
  cresciute di dodici px senza spostare una parola.
- **Prova.** La sonda di accessibilità gira ora anche dentro la modale, dentro la lettura e sul
  piè di pagina: `target <24px` a zero in tutte e nove le sezioni, zero nella modale, zero nella
  lettura, zero aree cliccabili orfane; il fuoco entra ed esce dal pannello come prima. Contrast
  invariato: 47 nodi a 1440 e 27 a 390, nessuno sotto soglia.

## 1.2.7 - 9 ottobre 2026

**Correzione: la passata di Design QA sul sito reso, sezione per sezione.**

- **Che cosa è stato controllato.** Dodici scatti del sito in produzione a 1440 e 390 px, in
  italiano e in inglese, più due audit automatici: il primo misura il rapporto di contrasto di
  ogni nodo di testo visibile (colore reale contro fondo effettivo, con la regola larga di 3:1
  per il testo grande), il secondo chiede tre cose alla tastiera: le aree cliccabili sono
  raggiungibili, le modali si prendono il fuoco, i pulsanti hanno un nome.
- **L'oro sui fondi chiari.** `gold-dark` passa a `#7C5E28`. Il valore precedente era l'oro
  della copertina, e sulle tre tonalità della carta scendeva a 3.47:1: le etichette a 11 px
  degli `eyebrow`, dei campi ISBN e delle fonti non erano leggibili. Un solo valore di tavolozza
  risolve la famiglia intera, perché `.eyebrow` eredita da lì.
- **La tastiera.** Le card del Giornale erano `cursor-pointer` senza essere raggiungibili: sei
  articoli apribili solo col mouse. Ora sono `role="button"` con `tabindex="0"` e si aprono con
  Invio e Spazio. `src/utils/dialog.js` dà a modale e lettura il comportamento che mancava:
  fuoco al pannello all'apertura, Tab che gira dentro, Escape che chiude, scroll della pagina
  restituito e fuoco che torna alla card da cui si era partiti.
- **La scheda opera.** La colonna della copertina è sticky: la colonna di destra con sinossi,
  dati, stampa e note cresce più del volume, e sotto la copertina restava una fascia vuota.
- **Il pannello di lettura.** Il pulsante fluttuante a sinistra finiva sopra le copertine della
  griglia, cioè sopra contenuto: è una preferenza di lettura e ora compare solo dove il testo
  scorre, intercettato dalle sezioni `events`, `journal`, `about`, `shelf`, `flashes`.
- **Le etichette.** «Close» e «Close article» erano inglesi dentro l'interfaccia italiana: ora
  `Chiudi la scheda` e `Chiudi l'articolo`. La voce «bozza» del piè di pagina dice in modo
  compiuto che cosa è provvisorio e che cosa aspetta un dato di catalogo.
- **Virgolette.** Le citazioni di titoli nei testi italiani passano a caporali, come nel resto
  del sito; restano diritte dove il testo è inglese e dove la pagina fotografata è trascritta
  com'è stampata.
- **Prova.** Contrast: 47 nodi a 1440 e 25 a 390, zero sotto soglia (prima otto). Tastiera: zero
  aree cliccabili orfane in tutte le sezioni, `activeIsInside` vero su modale e lettura, fuoco di
  ritorno alla card vero. Invio apre la recensione di *Pachinko*, Escape la chiude.

## 1.2.6 - 9 ottobre 2026

**Aggiunta: il testo sul catalogo «Echi» entra per intero, dalla prima riga alla firma.**

- **La lettura.** La pagina del catalogo della mostra di Alessandra Festuccia arriva in tre
  colonne, fotografate dall'autrice, e le colonne sono state rilette sull'immagine ingrandita,
  riga per riga. Il pezzo si apre con l'epigrafe dal Timeo, «Sta' a udire, o Socrate una molto
  maravigliosa Istoria…», e chiude con «Usiamo bene la mostra di Alessandra Festuccia… è un
  viaggio interiore e una Eco da non sottovalutare…»; in fondo alla terza colonna sta la firma
  «Claudia Origoni». Il campo `excerpt` di `works.js` riceve sedici capoversi, l'epigrafe
  compresa, e non riceve una versione inglese: la riga di credito dice che il testo resta
  italiano anche nella versione inglese del sito.
- **Che cosa non si tocca.** La pagina stampa «sommerso» dove la grammatica vorrebbe «sommerse»,
  scrive «Qumram» senza l'acca, apre il discorso del sacerdote con una virgoletta e non la
  chiude. Sono parole sue e la trascrizione le lascia dove stanno. Il gate accetta sette
  segnalazioni nuove, tutte con lo stesso motivo, e il motivo è scritto accanto a ciascuna: le
  righe di ECCEZIONI in `italian-gate.mjs` diventano diciotto.
- **Titoli, due correzioni.** Le sovracoperte fotografate stampano «La mia maturità “Notte prima
  degli esami”. Antologia di racconti» e «Il mio intervallo al Liceo Classico “Sannazaro” di
  Napoli. Antologia di racconti in memoria del Preside Michele De Vivo», con il titolo dentro le
  virgolette. La scheda aveva un punto al posto delle virgolette in un caso e le aveva perse del
  tutto nell'altro, e la sinossi portava la stessa svista. I titoli sono corretti in `it` e in
  `en` insieme, dove le caporali cedono il posto alle virgolette alte e il titolo di secondo
  grado passa agli apici.
- **La copia con la penna.** Una fotografia dà un'altra copertina di «Io son l'umile
  l'ancella…»: il nome dell'autrice in maiuscoletto sopra il titolo, il marchio «Edizioni
  Nemapress» sotto il sottotitolo, una linea a penna su entrambi e una dedica a mano che
  l'immagine non rende leggibile. La copertina pubblicata nel sito è quella senza marchio, e il
  frontespizio della stessa serie di foto stampa «Edizioni di Salpare». Le due cose stanno in
  una nota nuova, che non prova a metterle d'accordo.
- **Che cosa resta.** «Citazioni di una vita» non ha ancora un contenitore. La caccia ha
  attraversato tutte le foto del 5 ottobre: i due colophon fotografati dicono «Volume stampato
  nel giugno del 2024 presso Grafica Elettronica srl, Napoli per la Valle del Tempo» e «Volume
  stampato nel giugno del 2025 per la Valle del Tempo», e riguardano altre due antologie. La
  pagina 69 continua a dare soltanto il proprio numero, e la voce resta bozza.
- **Prova.** Scheda aperta in browser in italiano e in inglese: sedici capoversi, la riga di
  credito nella lingua giusta, la scheda dell'Ancella con la nota nuova e il credito della
  copertina rimasto su «Edizioni di Salpare». Console ferma, `npm run build` pulito, gate e
  `scan-en.mjs` senza sorprese.
- **Bozze dopo il giro:** invariate, otto in `works.js`, sei nel Giornale, sei negli
  appuntamenti, una negli appunti.

## 1.2.5 - 8 ottobre 2026

**Corretto: il racconto in dialetto porta il titolo come lo stampa il volume.**

- **La decisione.** A pagina 89 di *«Viaggiare con bisaccia & penna»* il racconto si apre con
  «L'Acqua cotta con le Merangole», la A e la M maiuscole. La scheda lo teneva in minuscolo,
  e la differenza era scritta nella riga di credito in attesa di un parere. Il parere è
  arrivato: un titolo stampato non si corregge da soli, quindi è la scheda che cede.
- **Che cosa tocca.** Il campo `title` di `works.js`, in `it` e in `en` insieme: la forma
  dialettale non si traduce, e la versione inglese del sito la riporta com'è. Il corpo del
  testo resta minuscolo dove non è il titolo, perché lì nomina la vivanda e non l'opera, e la
  riga di credito continua a dire come apre la pagina.
- **Fuori dal sito.** Il press kit si è rigenerato dai dati e la sua tabella prende il titolo
  nuovo da sola; lo stesso per la voce del profilo professionale, che `make-profilo.mjs`
  scrive e da cui il documento esce aggiornato.
- **Prova.** Scheda aperta in browser: il titolo della card, quello in testa alla scheda e
  quello nella riga di credito sono la stessa stringa. Console ferma. Il gate passa pulito, e
  `scan-en.mjs` non conta più il titolo dialettale fra i suoi colpi.
- **Bozze dopo il giro:** invariate, otto in `works.js`, sei nel Giornale, sei negli
  appuntamenti, una negli appunti.

## 1.2.4 - 8 ottobre 2026

**Aggiunta: «Fuori dai libri», gli appunti che non riguardano i libri.**

- **Che cosa è cambiato.** L'autrice ha chiesto uno spazio a piè pagina dove mettere
  un'esperienza di tanto in tanto, «un flash su una notizia speciale», senza un tema da
  seguire. Non c'era una newsletter da togliere: nel sito non ha mai avuto un blocco suo. Lo
  spazio nuovo sta sotto i contatti, in una banda chiara fra il buio della sezione e quello
  del piè di pagina, e si chiama «Fuori dai libri».
- **Perché non è il Giornale.** Il Giornale tiene le categorie e resta legato alla lettura;
  gli appunti no. Due contenitori diversi, e la differenza sta nella prima riga: «Notizie,
  incontri, cose viste. Non riguardano i libri e non hanno un tema: poche righe quando ho
  qualcosa da dire».
- **I dati.** `src/data/flashes.js`: una riga, o due, con la sua data. Niente titolo, niente
  categorie, niente «leggi tutto», perché l'appunto finisce dove sta. I campi sono `id`, `iso`
  per l'ordine, `date` bilingue per la pagina, `text` bilingue, `draft`.
- **La pagina.** `Flashes.jsx` ordina per `iso` e ne dà al massimo tre, con la data in
  maiuscoletto nella colonna di sinistra e la riga in serif, più grande della prosa delle
  altre sezioni. Se l'elenco si svuota, la sezione resta in pagina e lo dice: «Non c'è ancora
  nessun appunto. Il primo arriva quando c'è qualcosa da dire», anziché inventarsi una voce
  che non c'è.
- **La regola nuova.** Le esperienze non si inventano, e questa volta il vincolo è nel file,
  non solo nel registro: la sezione apre con un appunto che si dichiara di prova, porta il
  marchio BOZZA e lo scrive dentro il testo stesso. Le voci vere le scrive chi le vive.
- **Registro.** `flashes.js` e `Flashes.jsx` entrano nella struttura del readme, che aggiunge
  una voce sua per gli appunti e mette `flashes.js` fra i file dove `draft: true` accende il
  marchio. Le etichette stanno nel blocco `flashes` di `strings.js`, in italiano e in inglese.
- **Gate.** `italian-gate.mjs` importa `flashes.js` e legge `date.it` e `text.it` con gli
  stessi pattern delle altre prose.
- **Prova.** Banda verificata in browser in italiano e in inglese su `#flashes`: titolo,
  occhiello, intro, data, marchio e testo, con l'inglese che rispecchia solo i fatti. Console
  ferma.
- **Bozze dopo il giro:** otto in `works.js`, sei nel Giornale, sei negli appuntamenti, una
  negli appunti.

## 1.2.3 - 8 ottobre 2026

**Aggiunta: i materiali stampa escono in PDF, e il PDF lo scrivono i dati del sito.**

- **Press kit.** `scripts/make-press-kit.mjs` compone quattro pagine A4: il ritratto con la
  nota bio-bibliografica e i contatti, la bibliografia verificata con editore, anno, pagine e
  ISBN, le frasi di stampa con la pagina da cui vengono, e le sette fotografie degli incontri
  con il nome del file. Le parole non sono riscritte: lo script importa `works.js`,
  `events.js`, `site.js` e `strings.js` e stampa quel che il sito già dice, così il PDF non
  può divergere dalle pagine. Chrome fa da compositore, e `CHROME=` serve solo se il binario
  non sta in una delle sedi note.
- **Download.** Il percorso sta in `pressKit.href` dentro `site.js`; `Contact.jsx` lo offre
  fra Instagram e l'indirizzo, con l'etichetta «Materiali stampa in PDF» e, in inglese,
  «Press kit (PDF)». La riga sopra avverte che i testi restano italiani.
- **Che cosa non entra.** Le sei schede BOZZA restano fuori, e la bibliografia del PDF conta
  undici titoli. Le pagine fotografate non stanno nel kit, che rimanda alle schede del sito.
  Un recapito di posta nel PDF non c'è: l'indirizzo resta nel modulo, e il kit lo dice senza
  scriverlo.
- **Registro.** `npm run press-kit` fra gli script; `.press-build/`, dove il PDF si forma,
  entra nel `.gitignore`, che intanto perde la riga `.vercel` scritta due volte. Il readme
  documenta il campo `excerpt` arrivato con la voce precedente senza una riga sua, la regola
  con cui una pagina entra fra gli estratti, e dove sta il press kit.
- **Gate.** `italian-gate.mjs` con un HTML in argomento toglie i tag e il foglio di stile
  prima di leggere, così la prosa del press kit passa dal suo pattern. Resta un solo passivo
  segnalato, ed è dentro la citazione dell'AGI: suo, non nostro.
- **Prova.** Il PDF esce in quattro pagine e le quattro sono quelle volute, a schermo largo
  come il box di stampa. Il modulo di contatto verificato in browser in italiano e in
  inglese: etichetta, nota e link al file, che il primo clic scarica. Console ferma.
- **Bozze dopo il giro:** invariate, otto in `works.js`, sei nel Giornale, sei negli
  appuntamenti.

## 1.2.2 - 8 ottobre 2026

**Aggiunte: tre pagine dell'autrice entrano nelle schede. Sistemato: il readme non descrive più uno scaffale vuoto.**

- **Estratti.** `works.js` prende il campo `excerpt`: una pagina dell'opera fotografata
  dall'autrice e trascritta alla lettera, con `credit` che nomina la pagina e il volume.
  Entrano «Alza gli occhi e guarda» da pagina 45, dove il testo corre in italiano e in
  inglese e le due colonne sono date come sono stampate, «L'acqua cotta con le merangole»
  da pagina 89 dell'antologia, sette capoversi di dialetto romanesco, e «Io son l'umile
  ancella» dalla pagina che nell'opuscolo «Edizioni di Salpare» sta sotto il ritratto di
  Lia Origoni.
- **Resa.** `WorkModal.jsx` stampa l'estratto fra i dati di catalogo e le citazioni di
  stampa, su un pannello color carta col bordo di terracotta. Dove la pagina è sola
  italiana `en` manca, e la versione inglese del sito lascia il testo nell'originale:
  lo dichiara la riga di credito, come già fanno le note in calce.
- **Che cosa non è entrato.** «Salvate i mobili» ha la sua apertura in una grafica
  dell'editore, non in una pagina fotografata, e resta fuori: serve lo scatto del volume.
  Lo stesso per la pagina 65 di «Prima colazione: come & perché», che fra le foto non c'è.
  «Trappole e Intervalli» ha una pagina intera, ma il margine interno cade nella rilegatura
  e un paio di lettere per riga si perdono.
- **Corsivi.** A pagina 89 le parole dialettali stanno in corsivo nel volume; qui il
  corsivo non c'è e le parole sì, e la riga di credito lo avverte.
- **Maiuscole del titolo.** A pagina 89 il racconto si intitola «L'Acqua cotta con le
  Merangole», con la A e la M maiuscole, mentre la scheda lo porta in minuscolo. La
  differenza è scritta nella riga di credito, e aspetta una decisione: un titolo stampato
  non si corregge da soli.
- **Docs.** Il readme non dice più che lo scaffale è vuoto: `shelf.js` ha cinque schede,
  e il ramo di riserva in `Shelf.jsx` scatta soltanto se l'array si svuota.
- **Gate.** `italian-gate.mjs` legge ora anche gli estratti. Le tre pagine passano pulite;
  dei passivi che il gate segnala per giudicarli, due sono frasi sue, «è stata acclamata»
  ed «era compiuto», e sono rimasti.
- **Prova.** Le tre schede aperte in browser, in italiano e in inglese: l'estratto
  bilingue segue la lingua, gli altri due restano italiani, la console è ferma.
- **Bozze dopo il giro:** invariate, otto in `works.js`, sei nel Giornale, sei negli
  appuntamenti.

## 1.2.1 - 8 ottobre 2026

**Sistemati: due dettagli del form di contatto.**

- **Firma della lettera.** Il corpo della mail che il visitatore compone non apre più la
  riga finale con un trattino lungo: la firma è `Nome <indirizzo>`, senza segno davanti.
  Il trattino non stava nei dati, quindi il gate non lo vedeva; compariva però nella mail
  che l'autrice riceve, e in entrambe le lingue.
- **Autocompletamento.** I tre campi prendono `name` (`name`, `email`, `message`), e i due
  di testo anche `autocomplete` (`name`, `email`): così il browser offre i dati già
  salvati. La select del motivo resta senza `name`, perché propone quattro scelte e non
  chiede un dato da ricordare.
- **Prova.** Con i campi vuoti l'invio si blocca e tutti e tre risultano `:invalid`; con
  un indirizzo scorretto si blocca solo `email`; corretto il valore, il modulo è valido e
  compare il messaggio di conferma. Nessuna delle prove ha lasciato la pagina.
- **Bozze dopo il giro:** invariate, otto in `works.js`, sei nel Giornale, sei negli
  appuntamenti.

## 1.2.0 - 8 ottobre 2026

**Inserite: le citazioni di stampa nelle schede, i metadati di condivisione, robots e sitemap.**

- **Opere.** Tre schede prendono il campo `press`: «Non escludo il ritorno» porta
  Anna Di Cesare su Cara Garbatella (26 marzo 2024: «si presenta fin da subito come un
  libro molto enigmatico») e la segnalazione di Portale Letterario (7 giugno 2024: «un
  giallo storico che riprende un vero cold case»); «Salvate i mobili» porta il sommario
  dell'AGI del 3 ottobre 2026 sull'antologia; «Alza gli occhi e guarda» porta la scheda
  bibliografica 2005 del Centro Studi sul Teatro Napoletano Meridionale ed Europeo, che
  del volume dice «un vero e proprio viaggio fotografico».
- **Resa.** `WorkModal.jsx` stampa le citazioni fra i dati di catalogo e le note: un
  `blockquote` per ciascuna, con il nome della testata collegato alla pagina da cui viene,
  la firma dove la pagina la mostra e la data. L'etichetta è «Ne hanno scritto», e in
  inglese «From the press, in the original Italian»: la frase citata resta italiana in
  entrambe le lingue, perché tradurla metterebbe in bocca al critico parole che non ha
  scritto. `GLOSSARY.md` aggiunge il termine.
- **Nota nuova.** La stessa scheda del Centro registra che il contributo dell'autrice
  afferma «la Sanità è femmina e Forcella è maschio»: è una sua frase di pagina, e sta
  nelle note con la fonte.
- **Metadati.** `index.html` prende `canonical`, `theme-color` e i gruppi `og:*` e
  `twitter:*`, con l'immagine di condivisione a 1200x630 (`public/og.jpg`: il ritratto
  dell'autrice e le parole che l'hero già usa) e la lingua dichiarata, `og:locale it_IT`.
  Gli indirizzi sono assoluti e vanno cambiati insieme alla sitemap quando il sito avrà
  un dominio proprio.
- **Indicizzazione.** `public/robots.txt` e `public/sitemap.xml` rispondono 200: prima
  entrambi 404. La sitemap elenca la sola pagina, perché `#works`, `#journal` e `#events`
  sono frammenti della stessa risorsa.
- **Gate.** `italian-gate.mjs` legge ora anche `press` (citazione, testata, firma, data),
  così che una frase aggiunta distrattamente ricada negli stessi pattern del resto.
- **Bozze dopo il giro:** invariate, otto in `works.js`, sei nel Giornale, sei negli
  appuntamenti.

## 1.1.3 - 8 ottobre 2026

**README riallineato ai sorgenti.**

- **Documentazione.** Il `README.md` descriveva uno stato di due giri fa: lo scaffale era
  detto «attualmente vuoto» mentre ha cinque schede, l'elenco della struttura non conosceva
  `ReadingControls.jsx`, `contrast.css`, `src/utils/ics.js`, `scripts/build-feed.mjs` né i
  file delle immagini, e nessuno ricordava più che cosa stanno a fare `CHANGELOG.md`,
  `GLOSSARY.md` e i cinque ADR. Riscritto ricontrollando ogni affermazione sui file: chiavi
  reali dei dati, quattro toni di `BookCover`, `co-read` e `co-lang` in `localStorage`, il
  `pointer: fine` del cursore, e le sette foto degli eventi, che hanno tutte una fonte
  dichiarata sulla card. Tolti anche due accenti che non erano più veri: la provenienza
  delle copertine (ora catalogo o copia dell'autrice, lo dice `coverCredit`) e un servizio
  di posta nominato per ipotesi nella sezione del form.

## 1.1.2 - 8 ottobre 2026

**Il sito non pubblicizza più un feed vuoto.**

- **Feed.** `scripts/build-feed.mjs`, dopo aver scritto `dist/feed.xml`, toglie il
  `<link rel="alternate">` da `dist/index.html` quando gli item sono zero, e
  `Journal.jsx` non mostra la scritta «Feed RSS» finché il Giornale non ha almeno un
  articolo. Il feed continua a essere generato al suo indirizzo, e `index.html` in
  sorgente tiene il tag: è la build a deciderne la sorte, perché solo lei sa che cosa
  è pubblicato.
- **Collaudo.** Provato su entrambi i rami: con tutte e sei le voci in bozza l'HTML
  servito non contiene il tag e la pagina non ha il link; rimettendo `draft: false` su
  un pezzo il feed esce con un `<item>`, il tag resta e «Feed RSS» ricompare. Il file
  dei dati è poi tornato com'era, `git diff` su `posts.js` a zero.

## 1.1.1 - 8 ottobre 2026

**Tolte le bozze: la presentazione di Alghero.**

- **Eventi.** La scheda `cyrano-alghero` perde il badge BOZZA: ogni suo campo è
  confermato dalla cronaca di Portale Letterario, che dà il giorno e l'ora (giovedì 13
  giugno 2024, ore 19), il luogo (libreria Cyrano di Alghero), i partecipanti (Claudia
  Origoni in dialogo con Neria De Giovanni, sul romanzo «Non escludo il ritorno»,
  Nemapress Edizioni) e il festival partner, «Florinas in giallo, l'isola dei misteri».
  Non mancava niente, quindi il badge era un residuo. Restano bozze le sei schede di
  `events.js` che hanno ancora un dato in cerca di fonte.
- **Bozze dopo il giro:** sei in `events.js`, erano sette. Fermo il conteggio di
  `works.js` e del Giornale.

## 1.1.0 - 8 ottobre 2026

**Inserito: il capitolo di Claudia Origoni nel volume Agra, con titolo e pagina.**

- **Opere.** La voce `prima-colazione-come-e-perche` prende il titolo del suo testo,
  «La colazione dei Santi e la colazione con i Santi», e passa al sottotitolo il
  contenitore: «Prima colazione: come & perché. Storia, scienza e cultura», volume
  collettaneo a cura di Mario Mazzetti di Pietralata, capitolo 4 a pagina 65. È la
  convenzione delle altre schede uscite in antologia, e scioglie l'equivoco del 5
  ottobre, quando il titolo «La colazione dei santi» era sembrato inventato: era il
  titolo vero, dimezzato. Sulla pagina «dei» e «con» sono in corsivo, e la nota lo
  registra.
- **Badge tolto.** La scheda non è più bozza: ogni campo viene dal volume o dal
  catalogo, e la sinossi racconta il capitolo dalla pagina. Restano dichiarate nella
  seconda nota le due cose non risolte, cioè che nessun catalogo pubblica i singoli
  contributi e che l'SBN conta 206 pagine dove l'editore ne conta 180.
- **Fonte.** La pagina 65, fotografata dalla copia dell'autrice e depositata l'8
  ottobre 2026. Commit `1ba3013`.
- **Feed.** `scripts/build-feed.mjs` esclude le voci con `draft: true`, che l'RSS non
  ha modo di marcare. Effetto: `feed.xml` passa da sei item a zero, perché tutte e sei
  le voci del Giornale sono testi provvisori. Commit `5522ad8`.
- **Profilo professionale.** Il `.docx` aggiornato (resta fuori dal repository, che
  è pubblico) perde la dizione «titolo e pagina da verificare» sulla voce Agra e la
  sposta da «Volumi» a «Racconti e testi in antologia o in volume collettaneo».
- **Bozze dopo il giro:** otto in `works.js`, erano nove.

## 1.0.0 - 1 ottobre 2026

Primo deploy del sito su Vercel, dal repository `Alftakeaway/origoni-site`. Da qui al
5 ottobre le versioni non erano ancora registrate: lo storico riprende i soli punti
che hanno cambiato la faccia pubblica del sito.

### Storico ripreso da `git log`

- **1 ottobre** - `b9ef404` portfolio letterario e giornale pubblicati; `34463de` i
  deploy automatici su push a `main`.
- **3 ottobre** - `cedd132` il portfolio inventato è sostituito dalla bibliografia
  reale dell'autrice; `0c9ff42` le copertine editoriali vere; `568c96f`, `4df69e8`
  l'indirizzo email dell'autrice non finisce nel bundle; `65788c2` lo Scaffale torna
  vuoto; `21b6bfd` Giornale e Eventi ripristinati; `eb4b622` esportazioni `.ics`,
  feed RSS e controlli di lettura.
- **4 ottobre** - `3b51d9c` glossario del dominio e cinque ADR; `6776a2e`, `8bfed4a`,
  `2b5f2c8`, `3882305` l'italiano ripulito dall'impronta automatica, passivi e calchi;
  `0de17a5` il motto del footer ripristinato.
- **5 ottobre** - `14ee316` tre opere nuove e sei foto d'archivio; `75e90f6`, `24ada36`
  l'intervista Vanity Fair e la pagina Gli Olmi come fonti; `7f808da` il nome del
  premio confermato dall'autrice; `932a2f6` la presentazione di Roma del 19 febbraio
  2025; `3e1efd4` l'inglese delle schede; `06aceb0` le due lettere redatte in
  `docs/corrispondenza/`; `c9a9233` copertine e scaffale dalle sue foto; `650a1e3` il
  titolo stampato del volume Agra; `e0a297b` «Io son l'umile ancella» riclassificata
  come articolo; `6b2041e` levato il nome del fotografo dal tavolo del Salone;
  `c1811fd` quattro opere e tre libri letti; `42912f7` scaffale, conferenza stampa del
  Salone e opuscolo Salpare.

## Come si tiene questo file

Ogni voce dice che cosa è cambiato, dove sta la prova e quale commit l'ha portata
online. Quando una bozza perde il badge, la sua promozione merita una riga qui: è
l'unico posto, fuori dalla memoria di lavoro, dove si può ricostruire perché un
dato è stato accettato.
