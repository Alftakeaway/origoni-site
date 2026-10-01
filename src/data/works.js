// Featured works: novels, short fiction and critical essays.
// Text fields are bilingual: { it, en } — Italian is primary.
export const works = [
  {
    id: 'salt-season',
    title: { it: 'La stagione del sale', en: 'The Salt Season' },
    type: { it: 'Romanzo', en: 'Novel' },
    year: 2025,
    publisher: 'Marlowe & Finch',
    cover:
      'https://images.unsplash.com/photo-1544947950-fa07a98d237f?auto=format&fit=crop&w=800&q=80',
    synopsis: {
      it:
        'La figlia di un guardiano del faro torna sulla costa ligure per sistemare le cose della madre defunta e dissotterra quarant\u2019anni di lettere mai spedite. Un romanzo sull\u2019eredit\u00e0, il silenzio e le maree da cui non si fugge.',
      en:
        'A lighthouse keeper\u2019s daughter returns to the Ligurian coast to settle her late mother\u2019s affairs and unearths forty years of unsent letters. A novel about inheritance, silence, and the tides we cannot outrun.',
    },
    reviews: [
      {
        quote: {
          it: 'Origoni scrive frasi che vorresti sottolineare due volte. La stagione del sale \u00e8 un capolavoro silenzioso.',
          en: 'Origoni writes sentences you want to underline twice. The Salt Season is a quiet masterpiece.',
        },
        source: 'The Continental Review',
      },
      {
        quote: {
          it: 'Salino, tenero e sicurissimo \u2014 un esordio che si legge come un terzo romanzo.',
          en: 'Salt-stung, tender and utterly assured \u2014 a debut that reads like a third novel.',
        },
        source: 'Granta Shore',
      },
    ],
    links: [
      { label: { it: 'Compra il libro', en: 'Buy the book' }, href: '#' },
      { label: { it: 'Leggi un estratto', en: 'Read an excerpt' }, href: '#' },
    ],
    tall: true,
  },
  {
    id: 'marginalia',
    title: { it: 'Marginalia', en: 'Marginalia' },
    type: { it: 'Raccolta di saggi', en: 'Essay Collection' },
    year: 2024,
    publisher: 'Vellum House',
    cover:
      'https://images.unsplash.com/photo-1524578271613-d550eacf6090?auto=format&fit=crop&w=800&q=80',
    synopsis: {
      it:
        'Ventidue saggi sulla lettura come atto d\u2019amore e di disputa. Dall\u2019etica della pagina con l\u2019orecchio piegato al motivo per cui rileggiamo gli stessi tre romanzi a ogni decennio: Marginalia \u00e8 una difesa del lettore appassionato.',
      en:
        'Twenty-two essays on reading as an act of love and argument. From the ethics of the dog-eared page to why we reread the same three novels every decade, Marginalia is a defense of the passionate reader.',
    },
    reviews: [
      {
        quote: {
          it: 'Una critica con l\u2019orecchio da romanziere. Ogni saggio \u00e8 una piccola stanza da cui non vuoi uscire.',
          en: 'A critic with a novelist\u2019s ear. Every essay is a small room you never want to leave.',
        },
        source: 'Ledger of Letters',
      },
    ],
    links: [
      { label: { it: 'Compra il libro', en: 'Buy the book' }, href: '#' },
      { label: { it: 'Intervista all\u2019autrice', en: 'Author interview' }, href: '#' },
    ],
    tall: false,
  },
  {
    id: 'winter-grammar',
    title: { it: 'Grammatica d\u2019inverno', en: 'Winter Grammar' },
    type: { it: 'Racconto', en: 'Short Story' },
    year: 2024,
    publisher: 'The Paris Shelf, Issue 41',
    cover:
      'https://images.unsplash.com/photo-1516979187457-637abb4f9353?auto=format&fit=crop&w=800&q=80',
    synopsis: {
      it:
        'Due traduttrici bloccate da una nevicata in un archivio triestino scoprono di tradurre lo stesso poeta morto in lingue rivali da vent\u2019anni. Un racconto sulla fedelt\u00e0 \u2014 letteraria e non.',
      en:
        'Two translators stranded by a snowstorm in a Trieste archive discover they have been rendering the same dead poet into rival languages for twenty years. A story about fidelity \u2014 literary and otherwise.',
    },
    reviews: [
      {
        quote: {
          it: 'Selezionato per l\u2019antologia O. Henry 2025. Preciso, arguto e devastante nell\u2019ultima riga.',
          en: 'Selected for the 2025 O. Henry anthology. Precise, wry and devastating in the last line.',
        },
        source: 'O. Henry Prize Jury',
      },
    ],
    links: [{ label: { it: 'Leggi il racconto', en: 'Read the story' }, href: '#' }],
    tall: false,
  },
  {
    id: 'cartography-of-loss',
    title: { it: 'Cartografia della perdita', en: 'A Cartography of Loss' },
    type: { it: 'Saggio critico', en: 'Critical Essay' },
    year: 2023,
    publisher: 'The Quarterly Margin',
    cover:
      'https://images.unsplash.com/photo-1476275466078-4007374efbbe?auto=format&fit=crop&w=800&q=80',
    synopsis: {
      it:
        'Un\u2019analisi in forma lunga di come la narrativa europea contemporanea mappa il lutto sui paesaggi \u2014 dalle camminate di Sebald ai villaggi sommersi del nuovo romanzo climatico.',
      en:
        'A long-form examination of how contemporary European fiction maps grief onto landscapes \u2014 from Sebald\u2019s walks to the flooded villages of the new climate novel.',
    },
    reviews: [
      {
        quote: {
          it: 'Il miglior pezzo di critica pubblicato quest\u2019anno, senza confronti.',
          en: 'The best piece of criticism published this year, bar none.',
        },
        source: 'Letters & Latitudes',
      },
    ],
    links: [{ label: { it: 'Leggi il saggio', en: 'Read the essay' }, href: '#' }],
    tall: true,
  },
  {
    id: 'lantern-hours',
    title: { it: 'Le ore della lanterna', en: 'The Lantern Hours' },
    type: { it: 'Romanzo \u2014 in uscita', en: 'Novel \u2014 Forthcoming' },
    year: 2026,
    publisher: 'Marlowe & Finch',
    cover:
      'https://images.unsplash.com/photo-1519682337058-a94d519337bc?auto=format&fit=crop&w=800&q=80',
    synopsis: {
      it:
        'Primavera 2026. Un orologiaio in un villaggio alpino che scompare comincia a riparare orologi che vanno indietro, e i paesani iniziano a ricordare futuri mai accaduti.',
      en:
        'Spring 2026. A clockmaker in a disappearing Alpine village begins repairing timepieces that run backwards, and the villagers start remembering futures that never happened.',
    },
    reviews: [
      {
        quote: {
          it: 'Gi\u00e0 uno dei romanzi letterari pi\u00f9 attesi dell\u2019anno.',
          en: 'Already one of the most anticipated literary novels of the year.',
        },
        source: 'The Shelf List',
      },
    ],
    links: [{ label: { it: 'Preordinalo', en: 'Pre-order' }, href: '#' }],
    tall: false,
  },
  {
    id: 'nine-ways-of-reading',
    title: { it: 'Nove modi di leggere una stanza', en: 'Nine Ways of Reading a Room' },
    type: { it: 'Racconto', en: 'Short Story' },
    year: 2022,
    publisher: 'Nightjar Anthology',
    cover:
      'https://images.unsplash.com/photo-1455390582262-044cdead277a?auto=format&fit=crop&w=800&q=80',
    synopsis: {
      it:
        'Nove ospiti a una cena milanese raccontano la stessa serata \u2014 ciascuno convinto di essere l\u2019unico testimone onesto. Un racconto in frammenti sulla finzione che accettiamo di chiamare compagnia.',
      en:
        'Nine guests at a Milanese dinner party narrate the same evening \u2014 each convinced they are the only honest witness. A story in fragments about the fiction we agree to call company.',
    },
    reviews: [
      {
        quote: {
          it: 'Strutturalmente audace ed emotivamente esatto. Origoni \u00e8 una scrittrice da tenere d\u2019occhio.',
          en: 'Structurally daring and emotionally exact. Origoni is a writer to watch.',
        },
        source: 'Nightjar Annual',
      },
    ],
    links: [{ label: { it: 'Leggi il racconto', en: 'Read the story' }, href: '#' }],
    tall: false,
  },
]
