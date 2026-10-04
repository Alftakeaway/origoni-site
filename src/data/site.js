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

// Il ritratto in «Sull'autrice»: la foto d'archivio che l'editore Kalòs ha usato
// per la scheda dell'autrice nel 2026. Il fotografo non è indicato sul file,
// quindi il credito resta quello dell'archivio e non un nome inventato.
export const portrait = {
  src: '/foto/autrice-ritratto.jpg',
  alt: {
    it: 'Claudia Origoni, mezzo busto con una giacca rossa su fondo neutro',
    en: 'Claudia Origoni, head and shoulders in a red jacket against a plain ground',
  },
  credit: {
    it: 'Archivio dell’autrice, dalla scheda editoriale Kalòs 2026',
    en: 'Author’s archive, from the Kalòs author card 2026',
  },
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
  {
    label: 'Unilibro, scheda dell’antologia Viaggiare con bisaccia & penna (LietoColle, 2009)',
    href: 'https://www.unilibro.it/libro/viaggiare-con-bisaccia-penna-lungo-la-via-francigena-laziale/9788878484832',
  },
  {
    label: 'Unilibro, scheda del volume Prima colazione: come & perché (Agra, 2006)',
    href: 'https://www.unilibro.it/libro/mazzetti-di-pietralata-mario/prima-colazione-come-perche-storia-scienza-cultura/9788861400054',
  },
  {
    label: 'Tottus in Pari, l’articolo di Claudia Origoni su Lia Origoni (2016)',
    href: 'https://www.tottusinpari.it/2016-11-29/io-sono-lumile-ancella-lia-origoni-storia-di-unartista-sarda-degli-anni-4060-tra-opera-lirica-rivista-e-teatro/',
  },
  {
    label: 'Wikipedia, la voce su Lia Origoni',
    href: 'https://it.wikipedia.org/wiki/Lia_Origoni',
  },
  {
    label: 'Unilibro, scheda dell’antologia Radici di carta (Kalòs, 2026)',
    href: 'https://www.unilibro.it/libro/auci-s-cur-terranova-n-cur-/radici-di-carta/9791281956568',
  },
  {
    label: 'AGI, «Radici di carta», il libro degli Olmi sulle biblioteche siciliane',
    href: 'https://www.agi.it/cultura/news/2026-10-03/radici-di-carta-olmi-biblioteche-sicilia-lettura-39367446/',
  },
  {
    label: 'Vanity Fair Italia, intervista a Claudia Origoni del 5 luglio 2026',
    href: 'https://www.vanityfair.it/article/claudia-origoni-la-biblioteca-marsiano-di-niscemi-premio-mandrarossa',
  },
  {
    label: 'Premio Mandrarossa, il sito ufficiale e la pagina Gli Olmi',
    href: 'https://www.premiomandrarossa.it/gli-olmi/',
  },
  {
    label: 'Sicilia da Gustare, il comunicato della prima edizione del premio',
    href: 'https://siciliadagustare.com/premio-letterario-mandrarossa/',
  },
]
