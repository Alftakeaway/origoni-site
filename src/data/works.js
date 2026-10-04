// Bibliografia reale: solo opere verificabili, con editore, anno e ISBN.
// I campi di testo sono bilingui: { it, en }, con l'italiano come lingua primaria.
// Le fonti sono raccolte in src/data/site.js e mostrate nella pagina.
// `cover` è la copertina editoriale (in public/covers, con `coverCredit`):
// dove manca, BookCover disegna una copertina tipografica.
export const works = [
  {
    id: 'non-escludo-il-ritorno',
    title: { it: 'Non escludo il ritorno', en: 'Non escludo il ritorno' },
    type: { it: 'Romanzo', en: 'Novel' },
    year: 2023,
    publisher: 'Nemapress',
    isbn: '9788876293023',
    pages: '160',
    tone: 'ink',
    cover: '/covers/non-escludo-il-ritorno.jpg',
    coverCredit: 'ibs.it',
    synopsis: {
      it:
        'Primo romanzo. Un giallo storico che riprende un vero cold case sardo: l\u2019omicidio di Vanda Serra, avvenuto ad Aidomaggiore nel 1925, e il sacerdote don Giovanni Spanu, di cui l\u2019autrice ricostruisce la difesa documenti alla mano. Il paese reale diventa il fittizio Aitadei (\u00abtrattandosi di un caso tuttora controverso, ho sentito la necessità di riformulare almeno il nome del paese\u00bb), e l\u2019indagine si spinge fino alla ricerca sulle vite precedenti.',
      en:
        'Her first novel. A historical mystery built on a real Sardinian cold case: the 1925 murder of Vanda Serra in Aidomaggiore and the priest Don Giovanni Spanu, whose defence Origoni reconstructs from the documents. The real village becomes the fictional Aitadei \u2014 “since the case is still contested, I felt I had to change at least the name of the town” \u2014 and the inquiry reaches as far as research into past lives.',
    },
    notes: [
      {
        it: 'Nemapress la presenta come «Un\u2019autrice con radici sarde»: l\u2019isola da cui proviene una parte della sua famiglia.',
        en: 'Nemapress bills her as “an author with Sardinian roots”: the island her family comes from on one side.',
      },
      {
        it: 'Presentato il 23 marzo 2024 alla libreria “Le Storie” di Garbatella, a Roma.',
        en: 'Presented on 23 March 2024 at the bookshop “Le Storie” in Garbatella, Rome.',
      },
    ],
    links: [
      {
        label: { it: 'Scheda editoriale', en: 'Publisher listing' },
        href: 'https://www.unilibro.it/libri/f/autore/claudia_origoni/',
      },
      {
        label: { it: 'La presentazione a Roma', en: 'The Rome presentation' },
        href: 'https://caragarbatella.it/presentato-alla-libreria-le-storie-il-primo-romanzo-di-claudia-origoni/',
      },
    ],
  },
  {
    id: 'i-fiori-dei-santi',
    title: { it: 'I fiori dei santi', en: 'I fiori dei santi' },
    subtitle: {
      it: 'I simboli floreali nell\u2019iconografia sacra. Storie e leggende',
      en: 'Floral symbols in sacred iconography. Stories and legends',
    },
    type: { it: 'Saggio illustrato', en: 'Illustrated study' },
    year: 2000,
    publisher: 'Barbieri',
    isbn: '9788886187626',
    tone: 'sage',
    cover: '/covers/i-fiori-dei-santi.jpg',
    coverCredit: 'ibs.it',
    synopsis: {
      it:
        'Il libro d\u2019esordio, catalogo di un\u2019iconografia letta attraverso i fiori: i gigli, le rose, le palme e le erbe che compongono gli attributi dei santi, seguiti nelle storie e nelle leggende che li hanno messi in immagine.',
      en:
        'Her first book, a catalogue of sacred iconography read through its flowers: lilies, roses, palms and herbs as the attributes of the saints, followed through the stories and legends that put them into images.',
    },
    notes: [
      {
        it: 'Edito da Barbieri nel 2000, classificato dai cataloghi come volume illustrato.',
        en: 'Published by Barbieri in 2000, listed in library catalogues as an illustrated volume.',
      },
    ],
    links: [
      {
        label: { it: 'Scheda del libro', en: 'Book record' },
        href: 'https://www.ibs.it/fiori-dei-santi-simboli-floreali-libro-claudia-origoni/e/9788886187626',
      },
    ],
  },
  {
    id: 'alza-gli-occhi-e-guarda',
    title: { it: 'Alza gli occhi e guarda', en: 'Alza gli occhi e guarda' },
    subtitle: {
      it: 'Immagini di due quartieri di Napoli tra contrasti sociali e nascoste potenzialità: Sanità e Forcella',
      en: 'Images of two Naples quarters between social contrasts and hidden potential: Sanità and Forcella',
    },
    type: { it: 'Saggio a tre voci', en: 'Three-voice non-fiction' },
    year: 2005,
    publisher: 'Edizioni Intra Moenia',
    isbn: '9788874210527',
    coAuthors: 'Elisabetta Valentini, Simona Filippini',
    tone: 'terracotta',
    cover: '/covers/alza-gli-occhi-e-guarda.jpg',
    coverCredit: 'ibs.it',
    synopsis: {
      it:
        'Con Elisabetta Valentini e Simona Filippini, un lavoro a tre voci su Sanità e Forcella: due quartieri di Napoli osservati nelle immagini, tra i contrasti sociali che li attraversano e le potenzialità che restano invisibili a chi li attraversa senza guardarli. Edizione illustrata, per la collana «Città si diventa».',
      en:
        'With Elisabetta Valentini and Simona Filippini, a three-voice work on the Sanità and Forcella: two quarters of Naples observed through their images, between the social contrasts that run through them and the potential invisible to anyone who passes without looking. Illustrated edition, in the “Città si diventa” series.',
    },
    notes: [
      {
        it: 'Il titolo è un\u2019istruzione rivolta a chi guarda: sollevare lo sguardo invece di abbassarlo.',
        en: 'The title is an instruction to the viewer: lift the gaze instead of dropping it.',
      },
    ],
    links: [
      {
        label: { it: 'Scheda del libro', en: 'Book record' },
        href: 'https://books.google.com/books/about/Alza_gli_occhi_e_guarda_Immagini_di_due.html?id=ysdWAAAACAAJ',
      },
    ],
  },
  {
    id: 'loro-nero-di-modica',
    title: { it: 'L\u2019oro nero di Modica', en: 'L\u2019oro nero di Modica' },
    type: { it: 'Saggio a quattro mani', en: 'Co-authored non-fiction' },
    year: 2009,
    publisher: 'Coppola Editore',
    isbn: '9788887432916',
    coAuthors: 'Elena La Delfa',
    tone: 'gold',
    cover: '/covers/oro-nero-di-modica.jpg',
    coverCredit: 'ancorastore.it',
    synopsis: {
      it:
        'Scritto con Elena La Delfa e dedicato all’«oro nero» di Modica: il cioccolato della città barocca, la sua lavorazione e il legame che tiene insieme un centro urbano, la sua storia artigianale e una materia che è insieme economia e identità.',
      en:
        'Written with Elena La Delfa about the “black gold” of Modica: the chocolate of the Baroque town, how it is made, and the bond between a city, its craft history and a substance that is at once an economy and an identity.',
    },
    notes: [
      {
        it: 'Pubblicato da Coppola Editore nel 2009; oggi segnalato come non ordinabile dai distributori.',
        en: 'Published by Coppola Editore in 2009; now listed as unavailable by distributors.',
      },
    ],
    links: [
      {
        label: { it: 'Scheda del libro', en: 'Book record' },
        href: 'https://www.ancorastore.it/scheda-libro/claudia-origoni-elena-la-delfa/loro-nero-di-modica-9788887432916-2208133.html',
      },
    ],
  },

  // ─────────────────────────────────────────────────────────────────────────────
  // Segnaposto decisi con l'autrice (3 ottobre 2026): titoli, anni e sinossi sono
  // provvisori, da sostituire con i testi definitivi. `draft: true` li marca come
  // bozza nel sito; togliere il flag voce per voce quando il testo è confermato.
  // ─────────────────────────────────────────────────────────────────────────────
  {
    id: 'salt-season',
    title: { it: 'La stagione del sale', en: 'The Salt Season' },
    type: { it: 'Romanzo', en: 'Novel' },
    year: 2025,
    publisher: '',
    tone: 'ink',
    draft: true,
    synopsis: {
      it:
        'La figlia di un guardiano del faro torna sulla costa ligure per sistemare le cose della madre defunta e dissotterra quarant’anni di lettere mai spedite. Un romanzo sull’eredità, il silenzio e le maree da cui non si fugge.',
      en:
        'A lighthouse keeper’s daughter returns to the Ligurian coast to settle her late mother’s affairs and unearths forty years of unsent letters. A novel about inheritance, silence, and the tides we cannot outrun.',
    },
  },
  {
    id: 'marginalia',
    title: { it: 'Marginalia', en: 'Marginalia' },
    type: { it: 'Raccolta di saggi', en: 'Essay collection' },
    year: 2024,
    publisher: '',
    tone: 'sage',
    draft: true,
    synopsis: {
      it:
        'Ventidue saggi sulla lettura come atto d’amore e di disputa. Dall’etica della pagina con l’orecchio piegato al motivo per cui rileggiamo gli stessi tre romanzi a ogni decennio.',
      en:
        'Twenty-two essays on reading as an act of love and argument. From the ethics of the dog-eared page to why we reread the same three novels every decade.',
    },
  },
  {
    id: 'winter-grammar',
    title: { it: 'Grammatica d’inverno', en: 'Winter Grammar' },
    type: { it: 'Racconto', en: 'Short story' },
    year: 2024,
    publisher: '',
    tone: 'terracotta',
    draft: true,
    synopsis: {
      it:
        'Due traduttrici bloccate da una nevicata in un archivio triestino scoprono di tradurre lo stesso poeta morto in lingue rivali da vent’anni. Un racconto sulla fedeltà, letteraria e non.',
      en:
        'Two translators stranded by a snowstorm in a Trieste archive discover they have been rendering the same dead poet into rival languages for twenty years. A story about fidelity — literary and otherwise.',
    },
  },
  {
    id: 'cartography-of-loss',
    title: { it: 'Cartografia della perdita', en: 'A Cartography of Loss' },
    type: { it: 'Saggio critico', en: 'Critical essay' },
    year: 2023,
    publisher: '',
    tone: 'gold',
    draft: true,
    synopsis: {
      it:
        'Un’analisi in forma lunga di come la narrativa europea contemporanea mappa il lutto sui paesaggi: dalle camminate di Sebald ai villaggi sommersi del nuovo romanzo climatico.',
      en:
        'A long-form examination of how contemporary European fiction maps grief onto landscapes — from Sebald’s walks to the flooded villages of the new climate novel.',
    },
  },
  {
    id: 'lantern-hours',
    title: { it: 'Le ore della lanterna', en: 'The Lantern Hours' },
    type: { it: 'Romanzo', en: 'Novel' },
    year: 2026,
    publisher: '',
    tone: 'ink',
    draft: true,
    synopsis: {
      it:
        'Primavera 2026. Un orologiaio in un villaggio alpino che scompare comincia a riparare orologi che vanno indietro, e i paesani iniziano a ricordare futuri mai accaduti.',
      en:
        'Spring 2026. A clockmaker in a disappearing Alpine village begins repairing timepieces that run backwards, and the villagers start remembering futures that never happened.',
    },
  },
  {
    id: 'nine-ways-of-reading',
    title: { it: 'Nove modi di leggere una stanza', en: 'Nine Ways of Reading a Room' },
    type: { it: 'Racconto', en: 'Short story' },
    year: 2022,
    publisher: '',
    tone: 'sage',
    draft: true,
    synopsis: {
      it:
        'Nove ospiti a una cena milanese raccontano la stessa serata, ciascuno convinto di essere l’unico testimone onesto. Un racconto in frammenti sulla finzione che accettiamo di chiamare compagnia.',
      en:
        'Nine guests at a Milanese dinner party narrate the same evening — each convinced they are the only honest witness. A story in fragments about the fiction we agree to call company.',
    },
  },
]
