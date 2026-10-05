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
]
