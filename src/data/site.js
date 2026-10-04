// Dati di contatto e fonti pubbliche.
// Recapiti forniti dall'autrice (ottobre 2026).
// L'indirizzo è tenuto spezzato e codificato, e ricomposto solo a runtime:
// i crawler che estraggono gli indirizzi dal sorgente non lo trovano in chiaro.
// Per disattivare la posta in uscita cancellare la riga `email`.
const encodedEmail = ['Y2xhdWRpYW9yaWdvbmk=', 'eWFob28uaXQ=']

export const contact = {
  email: `${atob(encodedEmail[0])}@${atob(encodedEmail[1])}`,
  socials: [{ label: 'Instagram', href: 'https://www.instagram.com/claudiaorigoni' }],
}

// Fonti usate per compilare bibliografia e biografia: solo pagine verificabili.
export const sources = [
  {
    label: 'Unilibro, tutti i libri di Claudia Origoni',
    href: 'https://www.unilibro.it/libri/f/autore/claudia_origoni/',
  },
  {
    label: 'La presentazione di “Non escludo il ritorno”, libreria Le Storie, Roma',
    href: 'https://caragarbatella.it/presentato-alla-libreria-le-storie-il-primo-romanzo-di-claudia-origoni/',
  },
  {
    label: 'IBS, scheda del libro I fiori dei santi (Barbieri, 2000)',
    href: 'https://www.ibs.it/fiori-dei-santi-simboli-floreali-libro-claudia-origoni/e/9788886187626',
  },
  {
    label: 'Google Books, scheda del libro Alza gli occhi e guarda (Intra Moenia, 2005)',
    href: 'https://books.google.com/books/about/Alza_gli_occhi_e_guarda_Immagini_di_due.html?id=ysdWAAAACAAJ',
  },
  {
    label: 'Ancora Store, scheda del libro L’oro nero di Modica (Coppola, 2009)',
    href: 'https://www.ancorastore.it/scheda-libro/claudia-origoni-elena-la-delfa/loro-nero-di-modica-9788887432916-2208133.html',
  },
]
