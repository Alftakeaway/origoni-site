// Eventi pubblici in cui i libri dell'autrice sono stati presentati o citati.
// Ogni voce rimanda alla fonte da cui è stata ricavata: niente date o ruoli di memoria.
// Le voci con `draft: true` hanno un dato che la fonte non conferma del tutto
// (anno, giorno o forma del pezzo) e sono marcate come bozza nel sito.
// I campi di testo sono bilingui: { it, en } — italiano prima.
//
// { id, sort: 'AAAA-MM-GG' per l'ordinamento, time?: 'HH:MM' (mancante = tutto il giorno),
//   year, dateLabel: { it, en },
//   title: { it, en }, kind: { it, en }, place: { it, en }, city,
//   role: { it, en }, detail: { it, en }, draft?, sources: [{ label, href }] }

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
        label: 'Portale Letterario — la segnalazione dell’incontro',
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
        'Il romanzo è stato presentato alla libreria Le Storie di Garbatella. La cronaca del quartiere riporta la sua dichiarazione sui documenti del caso e sulla scelta di cambiare il nome del paese: «trattandosi di un caso tuttora controverso, ho sentito la necessità di riformulare almeno il nome del paese».',
      en:
        'The novel was presented at the Le Storie bookshop in Garbatella. The local coverage reports her statement on the documents of the case and on renaming the village: “since the case is still contested, I felt I had to change at least the name of the town”.',
    },
    sources: [
      {
        label: 'Cara Garbatella — la cronaca della serata',
        href: 'https://caragarbatella.it/presentato-alla-libreria-le-storie-il-primo-romanzo-di-claudia-origoni/',
      },
    ],
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
    detail: {
      it:
        'Presentazione in Sardegna con Neria De Giovanni, in collaborazione con il festival Florinas in giallo: il romanzo torna nell’isola cui appartengono il caso e le radici familiari dell’autrice.',
      en:
        'A Sardinian presentation with Neria De Giovanni, in partnership with the Florinas in giallo festival: the novel returns to the island that holds both the case and the author’s family roots.',
    },
    sources: [
      {
        label: 'Portale Letterario — l’incontro di Alghero',
        href: 'https://www.portaleletterario.net/rubriche/segnalazioni-di-redazione/2352/il-cold-case-di-claudia-origoni-arriva-ad-alghero',
      },
    ],
  },
  {
    id: 'mandrarossa-prima-edizione',
    sort: '2025-06-28',
    year: 2025,
    dateLabel: { it: '28 giugno 2025', en: '28 June 2025' },
    title: { it: 'Premio Letterario Mandrarossa — prima premiazione', en: 'Premio Letterario Mandrarossa — first award ceremony' },
    kind: { it: 'Premio', en: 'Prize' },
    place: { it: 'Teatro Panoramico della Valle dei Templi, Agrigento', en: 'Panoramic Theatre of the Valley of the Temples, Agrigento' },
    city: 'Agrigento',
    role: { it: 'Fondatrice e responsabile del premio', en: 'Founder and director of the prize' },
    detail: {
      it:
        'Prima edizione del premio letterario fondato e diretto da Claudia Origoni, nato dall’unione tra narrazione e arte enologica con le etichette Mandrarossa di Cantine Settesoli: ogni sezione porta il nome di un vino. La giuria tecnica era presieduta da Aldo Cazzullo; il premio Narrativa è andato a Titti Marrone.',
      en:
        'First edition of the literary prize founded and directed by Claudia Origoni, built on the link between storytelling and winemaking with the Mandrarossa labels of Cantine Settesoli: each section carries the name of a wine. The technical jury was chaired by Aldo Cazzullo; the Narrative award went to Titti Marrone.',
    },
    sources: [
      {
        label: 'Welcome Network — il bilancio della prima edizione',
        href: 'https://www.welcomenetworkag.it/2025-07-05/successo-per-la-prima-edizione-del-premio-mandrarossa/',
      },
      {
        label: 'Rai Cultura — la prima edizione',
        href: 'https://www.raicultura.it/letteratura/eventi/Premio-Letterario-Mandrarossa-7eaf73f1-2628-457e-bf39-ce272ab6640b.html',
      },
    ],
  },
  {
    id: 'salone-2025-premio',
    sort: '2025-05-18',
    year: 2025,
    dateLabel: { it: 'maggio 2025', en: 'May 2025' },
    title: { it: 'Il Premio Mandrarossa al Salone del Libro', en: 'The Premio Mandrarossa at the Salone del Libro' },
    kind: { it: 'Incontro', en: 'Panel' },
    place: { it: 'Salone Internazionale del Libro, Torino — stand della Sicilia', en: 'Salone Internazionale del Libro, Turin — Sicilian pavilion' },
    city: 'Torino',
    role: { it: 'Responsabile del premio', en: 'Director of the prize' },
    detail: {
      it:
        'Il premio viene presentato al pubblico del Salone del Libro: la cronaca la descrive al tavolo dei relatori come responsabile del premio, tra i festival e i premi letterari della Sicilia.',
      en:
        'The prize is presented to the Salone del Libro audience: the coverage places her at the panel table as director of the prize, among the festivals and literary prizes of Sicily.',
    },
    draft: true,
    sources: [
      {
        label: 'Welcome Network — festival e premi in Sicilia al Salone 2025',
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
    place: { it: 'Salone del Libro, Lingotto — Spazio Sicilia', en: 'Salone del Libro, Lingotto — Spazio Sicilia' },
    city: 'Torino',
    role: { it: 'Relatrice', en: 'Panellist' },
    detail: {
      it:
        'Incontro dedicato alle biblioteche dimenticate di Sicilia, con gli scrittori che sostengono il recupero del patrimonio librario. Il programma ufficiale la elenca tra i relatori insieme ad Ambrosecchio, Auci, Barbàra, Bellomo, Di Natale, Grammatico, Maugeri, Savatteri e Terranova.',
      en:
        'A meeting on the forgotten libraries of Sicily, with the writers backing the recovery of their book collections. The official programme lists her among the panellists alongside Ambrosecchio, Auci, Barbàra, Bellomo, Di Natale, Grammatico, Maugeri, Savatteri and Terranova.',
    },
    sources: [
      {
        label: 'Salone del Libro — programma ufficiale',
        href: 'https://www.salonelibro.it/programma-eventi/da_niscemi_alle_biblioteche_di_sicilia/22576',
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
    city: '—',
    role: { it: 'Firma del pezzo (da confermare)', en: 'Byline (to be confirmed)' },
    detail: {
      it:
        'Un pezzo pubblicato su Vanity Fair Italia prende la biblioteca Marsiano di Niscemi — a lungo «sospesa sul ciglio del precipizio della frana», come la descrive il titolo — come caso di un patrimonio culturale lasciato indietro. La data di uscita è quella dei metadati della testata e la forma (intervista o articolo firmato) è da confermare sul testo integrale.',
      en:
        'A piece published in Vanity Fair Italia takes the Marsiano library in Niscemi — long “hanging on the edge of the landslide”, as the headline puts it — as a case of cultural heritage left behind. The publication date comes from the masthead’s metadata and the form of the piece (interview or signed article) still needs checking against the full text.',
    },
    draft: true,
    sources: [
      {
        label: 'Vanity Fair — il pezzo',
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
    title: { it: 'Premio Mandrarossa — finale della seconda edizione', en: 'Premio Mandrarossa — second edition final' },
    kind: { it: 'Premio', en: 'Prize' },
    place: { it: 'Tempio di Hera, Parco Archeologico di Selinunte', en: 'Temple of Hera, Archaeological Park of Selinunte' },
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
        label: 'Winenews — i vincitori',
        href: 'https://www.winenews.it/it/la-sicilia-terra-di-vino-e-di-scrittori-festeggia-i-vincitori-del-premio-letterario-mandrarossa_597888/',
      },
      {
        label: 'Linkiesta — le diciotto opere finaliste',
        href: 'https://www.linkiesta.it/2026/07/premio-mandrarossa-finalisti-selinunte-2026/',
      },
      {
        label: 'Rai Cultura — la seconda edizione',
        href: 'https://www.raicultura.it/letteratura/articoli/2026/07/Valeria-Parrella-vince-il-Premio-Mandrarossa-2026-c4163368-150c-4edc-996a-01daabf61016.html',
      },
    ],
  },
]
