// Diario di lettura. Solo libri realmente letti o in lettura, con la nota dell'autrice.
// Gli stati ammessi sono 'reading', 'finished', 'queued'.
// `cover` è facoltativa: senza immagine la card mostra il titolo sul dorso colorato.
// `rating` (0–5, anche mezzo punto) e `progress` (percentuale) sono facoltativi.
//
// {
//   id: 'lettura-1',
//   title: 'Titolo',
//   author: 'Nome Autore',
//   status: 'reading',
//   rating: null,
//   progress: 40,
//   note: { it: 'Una riga in italiano.', en: 'One line in English.' },
//   cover: '/shelf/lettura-1.jpg',
//   tint: 'from-[#8A9A7B] to-[#6B7A5E]',
// }
export const shelf = [
  {
    id: 'la-mala-notte',
    title: 'La mala notte',
    author: 'Ugo Barbàra',
    status: 'finished',
    rating: null,
    note: null,
    cover: '/shelf/la-mala-notte.jpg',
    tint: 'from-[#7C9AA6] to-[#5B7A86]',
  },
  {
    id: 'mare-e-sardegna',
    title: 'Mare e Sardegna',
    author: 'David Herbert Lawrence',
    status: 'reading',
    rating: null,
    note: {
      it:
        'La sta leggendo in questi giorni, e le serve per documentarsi su un altro mistero sardo su cui sta scrivendo.',
      en:
        'She is reading it these days, and she needs it to document herself on another Sardinian mystery she is writing about.',
    },
    cover: '/shelf/mare-e-sardegna.jpg',
    tint: 'from-[#C4705C] to-[#9C4E42]',
  },
  {
    id: 'la-strage-di-modica',
    title: 'La strage di Modica (29 maggio 1921)',
    author: 'Giovanni Criscione',
    status: 'reading',
    rating: null,
    note: {
      it:
        'La sta studiando negli archivi, senza averne discusso con nessuno dal vivo. Qualcosa del caso è accennato nel suo racconto «Salvate i mobili», uscito nell’antologia «Radici di carta».',
      en:
        'She is studying it in the archives, having discussed it with no one in person. Something of the case is hinted at in her short story “Salvate i mobili”, published in the anthology “Radici di carta”.',
    },
    cover: '/shelf/la-strage-di-modica.jpg',
    tint: 'from-[#C0503F] to-[#96372C]',
  },
  {
    id: 'il-canto-della-terra',
    title: 'Il canto della terra',
    author: 'Stefano Mancuso',
    status: 'finished',
    rating: null,
    note: null,
    cover: '/shelf/il-canto-della-terra.jpg',
    tint: 'from-[#A8484A] to-[#7E3236]',
  },
  {
    id: 'l-idiota-di-famiglia',
    title: "L’idiota di famiglia",
    author: 'Dario Ferrari',
    status: 'finished',
    rating: null,
    note: null,
    cover: '/shelf/l-idiota-di-famiglia.jpg',
    tint: 'from-[#3E4A5F] to-[#2A3444]',
  },
]
