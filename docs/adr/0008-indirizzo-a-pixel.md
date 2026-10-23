# L’indirizzo si mostra a pixel, non come testo

Decisione presa dall’utente il 23 ottobre 2026 per tutti e due gli indirizzi del sito: quello
dell’autrice nella sezione «Scrivimi» e il credito di chi ha fatto il sito nel footer.

Fino alla 1.3.1 l’indirizzo era ricomposto a runtime e poi messo nel DOM come testo, nella
sezione «Scrivimi», e come attributo `href`, nel credito. La codifica nel repository teneva
lontano chi legge i sorgenti, ma non chi passa un programma sulla pagina e raccoglie quello che
la pagina mostra: entrambi gli indirizzi erano lì, in chiaro e selezionabili.

Ora l’indirizzo viene dipinto su un canvas (`src/components/MailGlyph.jsx`) con i caratteri e il
colore ereditati dal blocco che lo ospita, e il `mailto:` si costruisce nell’istante del clic,
dentro l’`onClick` del pulsante. Nel DOM non resta nessuna stringa con la chiocciola: letto sulla
pagina resa, il testo della pagina non contiene chiocciole e non c’è nessun attributo `mailto`.
Il pulsante porta un `aria-label` tradotto, si raggiunge con Tab e prende il contorno di focus da
3 px del foglio di stile globale.

Un dipinto non segue la pagina come segue il testo, e le preferenze di lettura agiscono sulla
radice (`ReadingControls.jsx` mette `zoom` sullo stile di `html` e la classe `co-contrast`): senza
un rifacimento, l’indirizzo restava del corpo e del colore con cui era stato dipinto la prima
volta. `MailGlyph.jsx` osserva quindi gli attributi di `html` e ripittura, moltiplicando il canvas
per lo zoom — il `font-size` computato, sotto `zoom`, resta quello piccolo. Misurato: a zoom 1,25
il buffer passa da 156×28 a 195×35 pixel con l’inchiostro che cresce (1064 → 1425 pixel), quindi
la riga si ingrandisce nitida e non sgranata; l’alto contrasto non tocca queste due righe, che
stanno chiare su fondo scuro, ma il rifacimento lo copre comunque.

Le alternative scartate. Un’immagine statica del testo: fuori dal repository non ci sarebbe niente
di leggibile, ma l’immagine non si adatta al colore, alla dimensione né al webfont caricato, e
sarebbe sgranata sugli schermi ad alta densità. Un link che dice solo «scrivi all’autrice» senza
mostrare l’indirizzo: protegge, ma toglie a chi legge la possibilità di copiare l’indirizzo dove
serve, e Claudia riceve comunque posta da chi non usa il modulo. Un modulo con backend: è la
soluzione vera contro i raccoglitori, ma il progetto ha deciso di non immagazzinare né inoltrare
nulla (vedi `docs/adr/0003-form-senza-backend.md`).

Va detto senza giri di parole: è nascondimento, non protezione. Una fotografia dello schermo letta
dai caratteri la riprende, e chi vuole l’indirizzo con insistenza lo ottiene. Tiene lontano il
raccoglitore che legge il testo della pagina, che è il caso per cui si paga qualcosa. Il costo è
che la riga non è più selezionabile né copiabile, che non si apre in una scheda nuova col clic
centrale, e che diventa un pulsante dove prima c’era un collegamento. Chi legge con un sintetizzatore
non sente i caratteri dell’indirizzo ma il nome dell’etichetta, che qui è più utile di una chiocciola
detta a voce; i due ingrandimenti restano coperti tutti e due, quello del sito dal rifacimento qui
sopra e quello della finestra di navigazione dall’ascoltatore di `resize`, che porta con sé la nuova
densità dello schermo.
