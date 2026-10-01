// Reading log / shelf entries. Statuses are i18n keys (reading / finished / queued).
export const shelf = [
  {
    id: 's1',
    title: 'The Remains of the Day',
    author: 'Kazuo Ishiguro',
    status: 'reading',
    rating: null,
    progress: 62,
    note: {
      it: 'Terza rilettura. La misura \u00e8 quasi insopportabile \u2014 nel modo migliore.',
      en: 'Third reread. The restraint is almost unbearable \u2014 in the best way.',
    },
    cover:
      'https://images.unsplash.com/photo-1589998059171-988d887df646?auto=format&fit=crop&w=600&q=80',
    tint: 'from-[#8A9A7B] to-[#6B7A5E]',
  },
  {
    id: 's2',
    title: 'Orbital',
    author: 'Samantha Harvey',
    status: 'reading',
    rating: null,
    progress: 34,
    note: {
      it: 'Un romanzo in orbita bassa. Ogni capitolo \u00e8 un\u2019alba.',
      en: 'A novel in low Earth orbit. Every chapter is one sunrise.',
    },
    cover:
      'https://images.unsplash.com/photo-1533327325824-76bc4e62d560?auto=format&fit=crop&w=600&q=80',
    tint: 'from-[#4A5568] to-[#2D3748]',
  },
  {
    id: 's3',
    title: 'Trust',
    author: 'Hernan Diaz',
    status: 'finished',
    rating: 4.5,
    note: {
      it: 'Quattro narrazioni incastonate, ognuna corregge la precedente. La struttura come colpo di scena.',
      en: 'Four nested narratives, each correcting the last. Structure as plot twist.',
    },
    cover:
      'https://images.unsplash.com/photo-1543002588-bfa74002ed7e?auto=format&fit=crop&w=600&q=80',
    tint: 'from-[#C5A059] to-[#A5823C]',
  },
  {
    id: 's4',
    title: 'Piranesi',
    author: 'Susanna Clarke',
    status: 'finished',
    rating: 5,
    note: {
      it: 'Il libro strano pi\u00f9 gentile che abbia letto da anni. La Casa \u00e8 buona.',
      en: 'The kindest strange book I have read in years. The House is good.',
    },
    cover:
      'https://images.unsplash.com/photo-1495446815901-a7297e633e8d?auto=format&fit=crop&w=600&q=80',
    tint: 'from-[#C07A5E] to-[#A25F45]',
  },
  {
    id: 's5',
    title: 'The Vegetarian',
    author: 'Han Kang',
    status: 'finished',
    rating: 4,
    note: {
      it: 'Freddo, esatto e quietamente furioso. Han Kang non alza mai la voce: non ne ha bisogno.',
      en: 'Cold, exact, and quietly furious. Deborah Smith\u2019s translation hums.',
    },
    cover:
      'https://images.unsplash.com/photo-1524578271613-d550eacf6090?auto=format&fit=crop&w=600&q=80',
    tint: 'from-[#6B7A5E] to-[#4A5540]',
  },
  {
    id: 's6',
    title: 'Austerlitz',
    author: 'W. G. Sebald',
    status: 'queued',
    rating: null,
    progress: 0,
    note: {
      it: 'Lo serbo per novembre, quando gli appartiene.',
      en: 'Saving it for November, when it belongs.',
    },
    cover:
      'https://images.unsplash.com/photo-1519682337058-a94d519337bc?auto=format&fit=crop&w=600&q=80',
    tint: 'from-[#3D3A34] to-[#1A1A1A]',
  },
]
