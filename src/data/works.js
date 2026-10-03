// Bibliografia reale: solo opere verificabili, con editore, anno e ISBN.
// I campi di testo sono bilingui: { it, en } — l'italiano è la lingua primaria.
// Le fonti sono raccolte in src/data/site.js e mostrate nella pagina.
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
    synopsis: {
      it:
        'Primo romanzo. Un giallo storico che riprende un vero cold case sardo: l\u2019omicidio di Vanda Serra, avvenuto ad Aidomaggiore nel 1925, e il sacerdote don Giovanni Spanu, di cui l\u2019autrice ricostruisce la difesa documenti alla mano. Il paese reale diventa il fittizio Aitadei \u2014 «trattandosi di un caso tuttora controverso, ho sentito la necessità di riformulare almeno il nome del paese» \u2014 e l\u2019indagine si spinge fino alla ricerca sulle vite precedenti.',
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
    tall: true,
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
    tall: false,
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
    tall: false,
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
    tall: true,
  },
]
