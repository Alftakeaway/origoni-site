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
    status: 'finished',
    rating: null,
    note: null,
    cover: '/shelf/mare-e-sardegna.jpg',
    tint: 'from-[#C4705C] to-[#9C4E42]',
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
