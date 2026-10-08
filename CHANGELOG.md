# Registro delle versioni

Tiene il conto di che cosa è cambiato nel sito, e di dove sta la prova. Le versioni
sono legate al deploy: ogni voce corrisponde a un push su `main`, quindi a una
messa in produzione su Vercel. Il numero segue `package.json`.

Le regole del registro sono quelle del progetto: un fatto entra solo se ha una
fonte, i testi provvisori portano il badge BOZZA (vedi `docs/adr/0002-badge-bozza-obbligatorio.md`),
e i titoli si citano come sono stampati (vedi `GLOSSARY.md`).

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
