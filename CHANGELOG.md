# Registro delle versioni

Tiene il conto di che cosa è cambiato nel sito, e di dove sta la prova. Le versioni
sono legate al deploy: ogni voce corrisponde a un push su `main`, quindi a una
messa in produzione su Vercel. Il numero segue `package.json`.

Le regole del registro sono quelle del progetto: un fatto entra solo se ha una
fonte, i testi provvisori portano il badge BOZZA (vedi `docs/adr/0002-badge-bozza-obbligatorio.md`),
e i titoli si citano come sono stampati (vedi `GLOSSARY.md`).

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
