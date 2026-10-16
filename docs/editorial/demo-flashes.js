// «Fuori dai libri»: gli appunti che non riguardano i libri.
// Un flash è una riga, o due, con la sua data: niente titolo, niente categorie,
// niente «leggi tutto», perché l'appunto finisce dove sta.
// I testi sono bilingui { it, en }. `draft: true` segna quello che è provvisorio,
// e la voce vera la scrive chi vive l'esperienza: questo file la accoglie, non la inventa.
export const flashes = [
  {
    id: 'appunto-di-prova',
    iso: '2026-10-08',
    date: { it: '8 ottobre 2026', en: 'October 8, 2026' },
    draft: true,
    text: {
      it: 'Appunto di prova, messo in pagina per far vedere come sta: due righe al massimo, la data a sinistra, nessuna categoria. Il marchio che vedi sopra è la regola del sito, e quello che è provvisorio lo dichiara da sé.',
      en: 'A test note, placed on the page to show how it sits: two lines at most, the date on the left, no category. The badge above is the rule of the site, and whatever is provisional says so itself.',
    },
  },
]
