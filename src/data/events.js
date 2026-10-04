// Eventi pubblici di presentazione e di citazione dei libri dell'autrice.
// Ogni voce rimanda alla fonte che la documenta: niente date o ruoli di memoria.
// Le voci con `draft: true` hanno un dato che la fonte non conferma del tutto
// (anno, giorno o forma del pezzo) e il sito le marca come bozza.
// I campi di testo sono bilingui: { it, en }, italiano prima.
//
// `photo` è la fotografia dell'evento in public/foto, con `photoCaption`;
// `sources` può essere vuoto o senza `href`, quando la fonte è un documento
// cartaceo o una fotografia dell'archivio dell'autrice.
// `wholeMonth: true` dice che il giorno non è noto: la data serve solo
// all'ordinamento e il calendario .ics non viene offerto, per non mentire.
// `sort: '0000-00-00'` marca le voci senza data, che finiscono in fondo.
//
// { id, sort, time?, wholeMonth?, year?, dateLabel: { it, en },
//   title: { it, en }, kind: { it, en }, place?: { it, en }, city?,
//   role: { it, en }, detail: { it, en }, draft?, photo?, photoCaption?,
//   sources: [{ label, href? }] }

export const events = [
  {
    id: 'libroteca-roma',
    sort: '2024-01-26',
    year: 2024,
    dateLabel: { it: '26 gennaio 2024', en: '26 January 2024' },
    title: {
      it: '“Non escludo il ritorno”, romanzo cold case',
      en: '“Non escludo il ritorno”, a cold case novel',
    },
    kind: { it: 'Presentazione', en: 'Book presentation' },
    place: { it: 'Libroteca di Roma, via Sandulli 80', en: 'Libroteca di Roma, via Sandulli 80' },
    city: 'Roma',
    role: { it: 'Autrice, con Anna Maria Anselmi e Gianni Caruso', en: 'Author, with Anna Maria Anselmi and Gianni Caruso' },
    detail: {
      it:
        'Prima presentazione romana del romanzo, insieme ad Anna Maria Anselmi e Gianni Caruso. La recensione della testata la introduce come autrice di saggi, anche sociologici, alla sua prova narrativa d’esordio, con radici familiari in Sardegna.',
      en:
        'The novel’s first Roman presentation, alongside Anna Maria Anselmi and Gianni Caruso. The outlet’s review introduces her as an author of essays, sociological ones too, making her narrative debut, with family roots in Sardinia.',
    },
    sources: [
      {
        label: 'Portale Letterario, la segnalazione dell’incontro',
        href: 'https://www.portaleletterario.net/rubriche/segnalazioni-di-redazione/2272/a-libroteca-di-roma-claudia-origoni-e-il-suo-romanzo-cold-case',
      },
    ],
  },
  {
    id: 'le-storie-garbatella',
    sort: '2024-03-23',
    year: 2024,
    dateLabel: { it: '23 marzo 2024', en: '23 March 2024' },
    title: { it: 'Presentazione di “Non escludo il ritorno”', en: 'Presentation of “Non escludo il ritorno”' },
    kind: { it: 'Presentazione', en: 'Book presentation' },
    place: { it: 'Libreria Le Storie, Garbatella', en: 'Le Storie bookshop, Garbatella' },
    city: 'Roma',
    role: { it: 'Autrice ospite', en: 'Guest author' },
    detail: {
      it:
        'Claudia Origoni presenta il romanzo alla libreria Le Storie di Garbatella. La cronaca del quartiere riporta la sua dichiarazione sui documenti del caso e sulla scelta di cambiare il nome del paese: «trattandosi di un caso tuttora controverso, ho sentito la necessità di riformulare almeno il nome del paese».',
      en:
        'Claudia Origoni presents the novel at the Le Storie bookshop in Garbatella. The local coverage reports her statement on the documents of the case and on renaming the village: “since the case is still contested, I felt I had to change at least the name of the town”.',
    },
    sources: [
      {
        label: 'Cara Garbatella, la cronaca della serata',
        href: 'https://caragarbatella.it/presentato-alla-libreria-le-storie-il-primo-romanzo-di-claudia-origoni/',
      },
    ],
  },
  {
    id: 'salone-2024-torino',
    sort: '2024-05-18',
    wholeMonth: true,
    year: 2024,
    dateLabel: { it: 'maggio 2024', en: 'May 2024' },
    title: {
      it: '«Non escludo il ritorno» al Salone del Libro',
      en: '“Non escludo il ritorno” at the Salone del Libro',
    },
    kind: { it: 'Fiera del libro', en: 'Book fair' },
    place: { it: 'Salone Internazionale del Libro', en: 'Salone Internazionale del Libro' },
    city: 'Torino',
    role: { it: 'Autrice', en: 'Author' },
    draft: true,
    photo: '/foto/torino-salone-2024.jpg',
    photoCaption: {
      it: 'L’autrice mostra il romanzo sugli scaffali di una libreria al Salone.',
      en: 'The author holds up the novel on a bookshop shelf at the Salone.',
    },
    detail: {
      it:
        'Una fotografia dell’archivio dell’autrice la ritrae al Salone del Libro del 2024 con in mano il romanzo, e data l’incontro a maggio. Il giorno, lo stand e la forma dell’appuntamento non risultano da nessuna cronaca: la voce resta bozza finché non arriva la data.',
      en:
        'A photograph from the author’s archive shows her at the 2024 Salone del Libro holding the novel, and dates the appearance to May. The day, the stand and the shape of the event appear in no report: the entry stays a draft until the date arrives.',
    },
    sources: [{ label: 'Fotografia dell’autrice, archivio privato' }],
  },
  {
    id: 'cyrano-alghero',
    sort: '2024-06-13',
    time: '19:00',
    year: 2024,
    dateLabel: { it: '13 giugno 2024', en: '13 June 2024' },
    title: { it: 'Il cold case arriva ad Alghero', en: 'The cold case reaches Alghero' },
    kind: { it: 'Presentazione', en: 'Book presentation' },
    place: { it: 'Libreria Cyrano, ore 19', en: 'Cyrano bookshop, 7 p.m.' },
    city: 'Alghero',
    role: { it: 'Autrice, con Neria De Giovanni', en: 'Author, with Neria De Giovanni' },
    draft: true,
    photo: '/foto/alghero-cyrano-2024.jpg',
    photoCaption: {
      it: 'Alla libreria Cyrano, giugno 2024: l’incontro si tiene fra gli scaffali del «Libri · Vino · Swago» di Alghero.',
      en: 'At the Cyrano bookshop, June 2024: the meeting takes place among the shelves of the «Libri · Vino · Swago» in Alghero.',
    },
    detail: {
      it:
        'Presentazione in Sardegna con Neria De Giovanni, in collaborazione con il festival Florinas in giallo: il romanzo torna nell’isola cui appartengono il caso e le radici familiari dell’autrice.',
      en:
        'A Sardinian presentation with Neria De Giovanni, in partnership with the Florinas in giallo festival: the novel returns to the island that holds both the case and the author’s family roots.',
    },
    sources: [
      {
        label: 'Portale Letterario, l’incontro di Alghero',
        href: 'https://www.portaleletterario.net/rubriche/segnalazioni-di-redazione/2352/il-cold-case-di-claudia-origoni-arriva-ad-alghero',
      },
    ],
  },
  {
    id: 'roma-trastevere-2024',
    sort: '2024-10-15',
    wholeMonth: true,
    year: 2024,
    dateLabel: { it: 'ottobre 2024', en: 'October 2024' },
    title: {
      it: 'Presentazione del romanzo a Trastevere',
      en: 'Presentation of the novel in Trastevere',
    },
    kind: { it: 'Presentazione', en: 'Book presentation' },
    place: { it: 'Trastevere', en: 'Trastevere' },
    city: 'Roma',
    role: { it: 'Autrice', en: 'Author' },
    draft: true,
    photo: '/foto/roma-trastevere-2024.jpg',
    photoCaption: {
      it: 'Un tavolo, il romanzo chiuso davanti a lei, la sera dell’incontro.',
      en: 'A table, the novel closed in front of her, on the evening of the meeting.',
    },
    detail: {
      it:
        'La fotografia di un incontro romano d’autunno la ritrae seduta a un tavolo con il romanzo davanti. Il locale che ha ospitato la serata, il giorno e chi è intervenuto con lei non compaiono in nessuna cronaca consultata: la voce resta bozza.',
      en:
        'The photograph of a Roman autumn meeting shows her seated at a table with the novel in front of her. The venue, the day and whoever spoke with her appear in no report consulted: the entry stays a draft.',
    },
    sources: [{ label: 'Fotografia dell’autrice, archivio privato' }],
  },
  {
    id: 'mandrarossa-prima-presentazione',
    sort: '2025-02-19',
    year: 2025,
    dateLabel: { it: '19 febbraio 2025', en: '19 February 2025' },
    title: {
      it: 'Presentazione della prima edizione del Premio Letterario Mandrarossa',
      en: 'Presentation of the first edition of the Premio Letterario Mandrarossa',
    },
    kind: { it: 'Premio', en: 'Prize' },
    place: { it: 'Sala Cinema dell’Europa Experience David Sassoli', en: 'Sala Cinema dell’Europa Experience David Sassoli' },
    city: 'Roma',
    role: { it: 'Fondatrice e responsabile del premio', en: 'Founder and director of the prize' },
    photo: '/foto/roma-parlamento-2025.jpg',
    photoCaption: {
      it: 'L’autrice sul palco della sala del Parlamento europeo, quinta da sinistra nella fotografia che il sito del premio mette in fondo alla pagina Gli Olmi, senza didascalia.',
      en: 'The author on the stage of the European Parliament’s hall, fifth from the left in the photograph the prize’s site places at the foot of its Gli Olmi page without a caption.',
    },
    detail: {
      it:
        'Il comunicato stampa datato Roma 19 febbraio 2025 annuncia la prima edizione del Premio Letterario Mandrarossa, «La Sicilia che non ti aspetti», presentata nella sala Cinema dell’Europa Experience David Sassoli, sede dell’Ufficio del Parlamento europeo in Italia. Il documento elenca fra i presenti Giuseppe Bursi, presidente delle Cantine Settesoli, Fabrizio Spada per il Parlamento europeo, il vicepresidente della Camera Giorgio Mulè, la deputata Giovanna Iacono e «Claudia Origoni del Premio Letterario Mandrarossa», e indica in Roberta Urso la moderatrice. Nella stessa occasione il premio descrive come funziona: le librerie indipendenti delle città capitali della cultura dal 2015, più Roma, Milano e Napoli, compongono la giuria territoriale e propongono i titoli, che una giuria tecnica con Aldo Cazzullo alla presidenza valuta.',
      en:
        'The press release, dated Rome 19 February 2025, announces the first edition of the Premio Letterario Mandrarossa, “La Sicilia che non ti aspetti”, presented in the Sala Cinema dell’Europa Experience David Sassoli, home of the European Parliament’s office in Italy. The document lists among those present Giuseppe Bursi, president of Cantine Settesoli, Fabrizio Spada for the European Parliament, the Deputy Speaker of the Chamber Giorgio Mulè, the MP Giovanna Iacono and “Claudia Origoni del Premio Letterario Mandrarossa”, with Roberta Urso moderating. On the same occasion the prize sets out how it works: the independent bookshops of the Italian Cities of Culture since 2015, plus Rome, Milan and Naples, form the territorial jury and put forward the titles that a technical jury with Aldo Cazzullo as chair then assesses.',
    },
    sources: [
      {
        label: 'Sicilia da Gustare, il comunicato stampa',
        href: 'https://siciliadagustare.com/premio-letterario-mandrarossa/',
      },
      {
        label: 'Mantova Uno, la presentazione romana',
        href: 'https://mantovauno.it/lavoro/con-il-premio-mandrarossa-arte-enologica-e-letteraria-a-braccetto/',
      },
      {
        label: 'Premio Mandrarossa, la fotografia',
        href: 'https://www.premiomandrarossa.it/gli-olmi/',
      },
    ],
  },
  {
    id: 'mandrarossa-presentazione-2025',
    sort: '2025-05-09',
    year: 2025,
    dateLabel: { it: '9 maggio 2025', en: '9 May 2025' },
    title: {
      it: 'Premio Letterario Mandrarossa, l’incontro di maggio',
      en: 'Premio Letterario Mandrarossa, the May meeting',
    },
    kind: { it: 'Premio', en: 'Prize' },
    role: { it: 'Fondatrice e responsabile del premio', en: 'Founder and director of the prize' },
    draft: true,
    photo: '/foto/premio-mandrarossa-2025.jpg',
    photoCaption: {
      it: 'Le etichette Mandrarossa sul tavolo: il premio nasce dal legame fra i vini di Settesoli e le sezioni del riconoscimento.',
      en: 'The Mandrarossa labels on the table: the prize grows out of the link between Settesoli’s wines and the sections of the award.',
    },
    detail: {
      it:
        'Un ritratto firmato «Premio Letterario Mandrarossa 9 maggio 2025» la mostra a un tavolo all’aperto, con le bottiglie dell’azienda davanti. È la prova fotografica di un appuntamento che precede di poche settimane la prima premiazione di giugno, e che nessuna delle fonti finora raccolte descrive: manca il luogo, e manca il nome esatto della serata.',
      en:
        'A portrait captioned “Premio Letterario Mandrarossa 9 May 2025” shows her at an outdoor table with the estate’s bottles in front of her. It is photographic evidence of an appointment that comes a few weeks before the first award ceremony in June, and that none of the sources gathered so far describes: the place is missing, and so is the exact name of the evening.',
    },
    sources: [{ label: 'Fotografia dell’autrice, archivio privato' }],
  },
  {
    id: 'salone-2026-dajani',
    sort: '2026-05-16',
    wholeMonth: true,
    year: 2026,
    dateLabel: { it: 'maggio 2026', en: 'May 2026' },
    title: {
      it: 'Tavolo al Salone del Libro con Antonio Dajani',
      en: 'Panel at the Salone del Libro with Antonio Dajani',
    },
    kind: { it: 'Incontro', en: 'Panel' },
    place: { it: 'Salone Internazionale del Libro', en: 'Salone Internazionale del Libro' },
    city: 'Torino',
    role: { it: 'Relatrice', en: 'Panellist' },
    draft: true,
    photo: '/foto/autrice-salone-2026.jpg',
    photoCaption: {
      it:
        'Il microfono fra le mani, lo stand con i libri alle spalle: la fotografia viene dall’archivio dell’autrice.',
      en: 'The microphone in her hands, the book stand behind: the photograph comes from the author’s archive.',
    },
    detail: {
      it:
        'Una fotografia la ritrae a un tavolo del Salone del Libro 2026, il microfono fra le mani, con un allestimento di libri alle spalle; il file reca i nomi «Mandrarossa» e «Antonio Dajani» e la data dell’edizione. Lo striscione sullo sfondo è tagliato dalla cornice e lascia leggere soltanto «L’identità s…», quindi il titolo esatto dell’incontro, il giorno e chi sedeva al tavolo restano da confermare.',
      en:
        'A photograph shows her at a table of the 2026 Salone del Libro, microphone in hand, a display of books behind; the file carries the names “Mandrarossa” and “Antonio Dajani” and the date of the edition. The banner in the background is cut by the frame and yields only “L’identità s…”, so the exact title of the panel, the day and who sat at the table remain to be confirmed.',
    },
    sources: [{ label: 'Fotografia dell’autrice, archivio privato' }],
  },
  {
    id: 'palermo-presentazione',
    sort: '0000-00-00',
    dateLabel: { it: 'senza data', en: 'undated' },
    title: {
      it: 'Presentazione a Palermo, a Palazzo del Poeta',
      en: 'Presentation in Palermo, at Palazzo del Poeta',
    },
    kind: { it: 'Presentazione', en: 'Book presentation' },
    place: { it: 'Palazzo del Poeta', en: 'Palazzo del Poeta' },
    city: 'Palermo',
    role: { it: 'Autrice', en: 'Author' },
    draft: true,
    photo: '/foto/palermo-presentazione.jpg',
    photoCaption: {
      it:
        'Tre donne sotto le volte di pietra, il romanzo in mano e una borsa dell’editore: la data dell’incontro non è scritta da nessuna parte.',
      en: 'Three women under stone vaults, the novel in hand and a bag from the publisher: the date of the meeting is written nowhere.',
    },
    detail: {
      it:
        'Una fotografia d’archivio documenta una presentazione palermitana del romanzo: l’autrice fra due interlocutrici, il volume esposto, una borsa con il marchio Nemapress. La scheda promozionale dell’editore, che accompagna il libro con il ritratto dell’autrice e una sua frase sul romanzo, colloca l’incontro a «Palazzo del Poeta, Palermo»; né quella scheda né altre fonti danno l’anno, e la voce resta bozza e in fondo alla timeline finché la data non arriva.',
      en:
        'An archive photograph documents a Palermitan presentation of the novel: the author between two interlocutors, the volume on show, a bag carrying the Nemapress mark. The publisher’s card that accompanies the book places the meeting at “Palazzo del Poeta, Palermo”, but neither that card nor other sources give the year: the entry stays a draft, and at the bottom of the timeline, until the date arrives.',
    },
    sources: [{ label: 'Fotografia dell’autrice, archivio privato' }],
  },
  {
    id: 'mandrarossa-prima-edizione',
    sort: '2025-06-28',
    year: 2025,
    dateLabel: { it: '28 giugno 2025', en: '28 June 2025' },
    title: { it: 'Premio Letterario Mandrarossa: la prima premiazione', en: 'Premio Letterario Mandrarossa — first award ceremony' },
    kind: { it: 'Premio', en: 'Prize' },
    place: { it: 'Teatro Panoramico della Valle dei Templi', en: 'Panoramic Theatre of the Valley of the Temples' },
    city: 'Agrigento',
    role: { it: 'Fondatrice e responsabile del premio', en: 'Founder and director of the prize' },
    detail: {
      it:
        'Prima edizione del premio letterario fondato e diretto da Claudia Origoni, nato dall’unione tra narrazione e arte enologica con le etichette Mandrarossa di Cantine Settesoli: ogni sezione porta il nome di un vino. Aldo Cazzullo ha presieduto la giuria tecnica; il premio Narrativa è andato a Titti Marrone.',
      en:
        'First edition of the literary prize founded and directed by Claudia Origoni, built on the link between storytelling and winemaking with the Mandrarossa labels of Cantine Settesoli: each section carries the name of a wine. Aldo Cazzullo chaired the technical jury; the Narrative award went to Titti Marrone.',
    },
    sources: [
      {
        label: 'Welcome Network, il bilancio della prima edizione',
        href: 'https://www.welcomenetworkag.it/2025-07-05/successo-per-la-prima-edizione-del-premio-mandrarossa/',
      },
      {
        label: 'Rai Cultura, la prima edizione',
        href: 'https://www.raicultura.it/letteratura/eventi/Premio-Letterario-Mandrarossa-7eaf73f1-2628-457e-bf39-ce272ab6640b.html',
      },
    ],
  },
  {
    id: 'salone-2025-premio',
    sort: '2025-05-18',
    wholeMonth: true,
    year: 2025,
    dateLabel: { it: 'maggio 2025', en: 'May 2025' },
    title: { it: 'Il Premio Mandrarossa al Salone del Libro', en: 'The Premio Mandrarossa at the Salone del Libro' },
    kind: { it: 'Incontro', en: 'Panel' },
    place: { it: 'Stand della Sicilia al Salone del Libro', en: 'Salone Internazionale del Libro, Turin — Sicilian pavilion' },
    city: 'Torino',
    role: { it: 'Responsabile del premio', en: 'Director of the prize' },
    detail: {
      it:
        'Presentazione del premio al pubblico del Salone del Libro: la cronaca la descrive al tavolo dei relatori come responsabile del premio, tra i festival e i premi letterari della Sicilia.',
      en:
        'Presentation of the prize to the Salone del Libro audience: the coverage places her at the panel table as director of the prize, among the festivals and literary prizes of Sicily.',
    },
    draft: true,
    sources: [
      {
        label: 'Welcome Network, festival e premi in Sicilia al Salone 2025',
        href: 'https://www.welcomenetworkag.it/2025-05-20/salone-del-libro-2025-festival-e-premi-in-sicilia/',
      },
    ],
  },
  {
    id: 'salone-2026-biblioteche',
    sort: '2026-05-17',
    time: '10:30',
    year: 2026,
    dateLabel: { it: '17 maggio 2026, ore 10:30', en: '17 May 2026, 10:30 a.m.' },
    title: {
      it: '«Da Niscemi alle biblioteche di Sicilia. Gli Olmi»',
      en: '“From Niscemi to the libraries of Sicily. Gli Olmi”',
    },
    kind: { it: 'Tavola rotonda', en: 'Round table' },
    place: { it: 'Lo Spazio Sicilia al Lingotto', en: 'Salone del Libro, Lingotto — Spazio Sicilia' },
    city: 'Torino',
    role: { it: 'Relatrice', en: 'Panellist' },
    detail: {
      it:
        'Incontro dedicato alle biblioteche dimenticate di Sicilia, con gli scrittori che sostengono il recupero del patrimonio librario. Il titolo è quello del movimento Gli Olmi, di cui l’autrice fa parte. Il programma ufficiale la elenca tra i relatori insieme ad Ambrosecchio, Auci, Barbàra, Bellomo, Di Natale, Grammatico, Maugeri, Savatteri e Terranova.',
      en:
        'A meeting on the forgotten libraries of Sicily, with the writers backing the recovery of their book collections. The title is that of the Gli Olmi movement, which she belongs to. The official programme lists her among the panellists alongside Ambrosecchio, Auci, Barbàra, Bellomo, Di Natale, Grammatico, Maugeri, Savatteri and Terranova.',
    },
    sources: [
      {
        label: 'Salone del Libro, programma ufficiale',
        href: 'https://www.salonelibro.it/programma-eventi/da_niscemi_alle_biblioteche_di_sicilia/22576',
      },
      {
        label: 'Premio Mandrarossa, la pagina Gli Olmi',
        href: 'https://www.premiomandrarossa.it/gli-olmi/',
      },
    ],
  },
  {
    id: 'vanity-fair-niscemi',
    sort: '2026-07-05',
    year: 2026,
    dateLabel: { it: '5 luglio 2026', en: '5 July 2026' },
    title: {
      it: 'La biblioteca Marsiano di Niscemi su Vanity Fair',
      en: 'The Marsiano library of Niscemi in Vanity Fair',
    },
    kind: { it: 'Pubblicazione', en: 'Publication' },
    place: { it: 'Vanity Fair Italia', en: 'Vanity Fair Italia' },
    city: '',
    role: { it: 'Intervistata', en: 'Interviewee' },
    detail: {
      it:
        'Il pezzo riporta una sua intervista a cura di Gabriella Cantafio, nella quale Vanity Fair la presenta come «ideatrice e responsabile del Premio Narrativo Mandrarossa», forma che il premio non usa: il nome è Premio Letterario Mandrarossa, «la Sicilia che non ti aspetti». Parlando della biblioteca Marsiano, rimasta «sospesa sul ciglio del precipizio della frana», afferma che è diventata «il simbolo di un problema più ampio: troppo spesso ci si occupa del patrimonio culturale solo quando è in emergenza». Racconta anche di essere entrata nel movimento Gli Olmi, nato dall’appello di Stefania Auci per la biblioteca di Niscemi: il gruppo dona alla Marsiano una copia di tutte le opere in concorso, con l’obiettivo di aprirvi una sezione di narrativa contemporanea.',
      en:
        'The piece carries an interview edited by Gabriella Cantafio, in which Vanity Fair presents her as “ideatrice e responsabile del Premio Narrativo Mandrarossa”, a wording the prize itself does not use: its name is Premio Letterario Mandrarossa, “la Sicilia che non ti aspetti”. Speaking of the Marsiano library, left “sospesa sul ciglio del precipizio della frana”, she says it has become “il simbolo di un problema più ampio: troppo spesso ci si occupa del patrimonio culturale solo quando è in emergenza”. She also describes joining Gli Olmi, the movement that grew out of Stefania Auci’s appeal for the Niscemi library: the group donates a copy of every competing work to the Marsiano, hoping to open a contemporary fiction section there.',
    },
    sources: [
      {
        label: 'Vanity Fair, l’intervista',
        href: 'https://www.vanityfair.it/article/claudia-origoni-la-biblioteca-marsiano-di-niscemi-premio-mandrarossa',
      },
    ],
  },
  {
    id: 'mandrarossa-finale',
    sort: '2026-07-25',
    time: '20:00',
    year: 2026,
    dateLabel: { it: '25 luglio 2026, ore 20', en: '25 July 2026, 8 p.m.' },
    title: { it: 'Premio Mandrarossa: finale della seconda edizione', en: 'Premio Mandrarossa — second edition final' },
    kind: { it: 'Premio', en: 'Prize' },
    place: { it: 'Tempio di Hera, Parco archeologico', en: 'Temple of Hera, Archaeological Park' },
    city: 'Selinunte',
    role: { it: 'Fondatrice e responsabile del premio', en: 'Founder and director of the prize' },
    detail: {
      it:
        'La cerimonia finale della seconda edizione si è svolta al Tempio di Hera di Selinunte. La presidenza della giuria è passata da Aldo Cazzullo a Concita De Gregorio; tra i giurati Franco Cardini, Neria De Giovanni, Eleonora Lombardo, Carlo Alberto Moretti, Christian Rocca e Nadia Terranova. Il premio Narrativa è andato a “La ragazzina” di Valeria Parrella, con Dario Ferrari e Monica Acito secondi. Il premio sostiene la biblioteca comunale di Niscemi, e nelle cronache della serata il nome di Claudia Origoni compare accanto a quello di Gianni Caruso e dell’organizzazione.',
      en:
        'The final ceremony of the second edition took place at the Temple of Hera in Selinunte. The jury presidency passed from Aldo Cazzullo to Concita De Gregorio; among the jurors Franco Cardini, Neria De Giovanni, Eleonora Lombardo, Carlo Alberto Moretti, Christian Rocca and Nadia Terranova. The Narrative award went to “La ragazzina” by Valeria Parrella, with Dario Ferrari and Monica Acito as runners-up. The prize supports the municipal library of Niscemi, and the reports of the evening place Claudia Origoni’s name beside Gianni Caruso’s and the organisation’s.',
    },
    sources: [
      {
        label: 'Winenews, i vincitori',
        href: 'https://www.winenews.it/it/la-sicilia-terra-di-vino-e-di-scrittori-festeggia-i-vincitori-del-premio-letterario-mandrarossa_597888/',
      },
      {
        label: 'Linkiesta, le diciotto opere finaliste',
        href: 'https://www.linkiesta.it/2026/07/premio-mandrarossa-finalisti-selinunte-2026/',
      },
      {
        label: 'Rai Cultura, la seconda edizione',
        href: 'https://www.raicultura.it/letteratura/articoli/2026/07/Valeria-Parrella-vince-il-Premio-Mandrarossa-2026-c4163368-150c-4edc-996a-01daabf61016.html',
      },
    ],
  },
]
