// Bibliografia reale: solo opere verificabili, con editore, anno e ISBN.
// I campi di testo sono bilingui: { it, en }, con l'italiano come lingua primaria.
// Le fonti stanno in src/data/site.js, e la pagina le elenca.
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
        'Primo romanzo. Un giallo storico che riprende un vero caso irrisolto della cronaca sarda: l\u2019omicidio di Vanda Serra, avvenuto ad Aidomaggiore nel 1925, e il sacerdote don Giovanni Spanu, di cui l\u2019autrice ricostruisce la difesa documenti alla mano. Il paese reale diventa il fittizio Aitadei (\u00abtrattandosi di un caso tuttora controverso, ho sentito la necessità di riformulare almeno il nome del paese\u00bb), e l\u2019indagine si spinge fino alla ricerca sulle vite precedenti.',
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
    id: 'salvate-i-mobili',
    title: { it: 'Salvate i mobili', en: 'Salvate i mobili' },
    subtitle: {
      it: 'In «Radici di carta», antologia a cura di Stefania Auci e Nadia Terranova',
      en: 'In “Radici di carta”, an anthology edited by Stefania Auci and Nadia Terranova',
    },
    type: { it: 'Racconto in antologia', en: 'Short story in an anthology' },
    year: 2026,
    publisher: 'Edizioni Kalòs',
    isbn: '9791281956568',
    tone: 'sage',
    cover: '/covers/radici-di-carta.jpg',
    coverCredit: 'scheda Kalòs, ottobre 2026',
    synopsis: {
      it:
        'Racconto compreso in «Radici di carta», l’antologia che Stefania Auci e Nadia Terranova hanno raccolto per Edizioni Kalòs e che è uscita a ottobre 2026: ventisei firme narrano le biblioteche e gli archivi siciliani in pericolo, e il ricavo del volume finanzia una campagna per lo sviluppo delle biblioteche e la promozione della lettura. Il racconto si apre su don Guglielmo Melisurgo, che ripete ai nipoti: «Salvate i mobili… ricordate che i mobili devono sopravviverci». Le mura possono cambiare, i mobili no: trasportabili, continuano a raccontare le case e le famiglie che li hanno abitati, e fra essi, la madia comperata di seconda, forse di terza mano, da un rigattiere di Calcata, antico borgo alle porte di Roma.',
      en:
        'A story included in “Radici di carta”, the anthology Stefania Auci and Nadia Terranova gathered for Edizioni Kalòs, published in October 2026: twenty-six writers tell of Sicilian libraries and archives in danger, and the proceeds of the volume fund a campaign for library development and the promotion of reading. The story opens on Don Guglielmo Melisurgo, telling his grandchildren: “Save the furniture… remember that the furniture must outlive us”. Walls may change, furniture may not: portable, it goes on telling of the houses and families that lived with it; among them the breadbin bought secondhand, perhaps thirdhand, from a rag-and-iron man in Calcata, an old village at the gates of Rome.',
    },
    notes: [
      {
        it:
          'Il volume è la prima antologia del collettivo Gli Olmi, il cui marchio compare sulla scheda editoriale insieme a quello di Kalòs. Listino di 20,00 euro.',
        en:
          'The volume is the first anthology of the Gli Olmi collective, whose mark appears on the publisher’s card beside Kalòs’s. Cover price €20.00.',
      },
      {
        it:
          'L’elenco delle firme pubblicato dall’AGI il 3 ottobre 2026 comprende Claudia Origoni; la scheda dell’editore porta il titolo del pezzo e l’attacco del testo.',
        en:
          'The list of contributors published by AGI on 3 October 2026 includes Claudia Origoni; the publisher’s card carries the title of the piece and its opening.',
      },
      {
        it:
          'L’antologia nasce dall’appello di Stefania Auci per la biblioteca Marsiano di Niscemi. Nell’intervista a Vanity Fair del 5 luglio 2026 l’autrice racconta di essere entrata a far parte del movimento Gli Olmi, «un collettivo composto da oltre quaranta scrittori, giornalisti e intellettuali», e spiega che il nome viene da Fata Nascim, il nome originario di Niscemi, «passo dell’olmo». Nello stesso colloquio annuncia la rassegna «Radici di carta» a Niscemi dal 20 al 28 agosto e la destinazione dei proventi del libro alle biblioteche e agli archivi in difficoltà.',
        en:
          'The anthology grew out of Stefania Auci’s appeal for the Marsiano library in Niscemi. In her interview with Vanity Fair on 5 July 2026 she says she joined the Gli Olmi movement, “a collective of more than forty writers, journalists and intellectuals”, and explains that the name comes from Fata Nascim, the original name of Niscemi, “pass of the elm”. In the same conversation she announces the Radici di carta festival in Niscemi from 20 to 28 August, and the book’s proceeds going to libraries and archives in difficulty.',
      },
      {
        it:
          'La pagina Gli Olmi del sito del premio dichiara: «Il Premio Mandrarossa sostiene fin dall’inizio il gruppo degli Olmi». La stessa testata ufficiale presenta il premio come Premio Letterario Mandrarossa, «la Sicilia che non ti aspetti», e ne conta due edizioni, oltre trenta librerie coinvolte e cinque sezioni tematiche.',
        en:
          'The Gli Olmi page on the prize’s own site states: “Il Premio Mandrarossa sostiene fin dall’inizio il gruppo degli Olmi”. The same official page names the prize Premio Letterario Mandrarossa, “la Sicilia che non ti aspetti”, and counts two editions, more than thirty bookshops and five thematic sections.',
      },
    ],
    links: [
      {
        label: { it: 'La scheda del volume', en: 'The volume record' },
        href: 'https://www.unilibro.it/libro/auci-s-cur-terranova-n-cur-/radici-di-carta/9791281956568',
      },
      {
        label: { it: 'Premio Mandrarossa, la pagina Gli Olmi', en: 'Premio Mandrarossa, the Gli Olmi page' },
        href: 'https://www.premiomandrarossa.it/gli-olmi/',
      },
      {
        label: { it: 'AGI, «Radici di carta», il libro degli Olmi', en: 'AGI, “Radici di carta”, the Olmi book' },
        href: 'https://www.agi.it/cultura/news/2026-10-03/radici-di-carta-olmi-biblioteche-sicilia-lettura-39367446/',
      },
      {
        label: { it: 'Vanity Fair, l’intervista del 5 luglio 2026', en: 'Vanity Fair, the interview of 5 July 2026' },
        href: 'https://www.vanityfair.it/article/claudia-origoni-la-biblioteca-marsiano-di-niscemi-premio-mandrarossa',
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
    coverCredit: 'copia dell’autrice',
    synopsis: {
      it:
        'Il libro d\u2019esordio, catalogo di un\u2019iconografia letta attraverso i fiori: i gigli, le rose, le palme e le erbe che compongono gli attributi dei santi, seguiti nelle storie e nelle leggende che li hanno raffigurati.',
      en:
        'Her first book, a catalogue of sacred iconography read through its flowers: lilies, roses, palms and herbs as the attributes of the saints, followed through the stories and legends that put them into images.',
    },
    notes: [
      {
        it: 'Edito da Barbieri nel 2000, classificato dai cataloghi come volume illustrato. La copertina lo numera 14 del «Catalogo» dell’editore.',
        en: 'Published by Barbieri in 2000, listed in library catalogues as an illustrated volume. Its jacket numbers it 14 in the publisher’s “Catalogo”.',
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
    type: { it: 'Volume fotografico con testo', en: 'Photography volume with a text' },
    year: 2005,
    publisher: 'Edizioni Intra Moenia',
    isbn: '9788874210527',
    pages: '150',
    coAuthors: 'Elisabetta Valentini, Simona Filippini',
    tone: 'terracotta',
    cover: '/covers/alza-gli-occhi-e-guarda.jpg',
    coverCredit: 'copia dell’autrice',
    synopsis: {
      it:
        'Volume fotografico sui quartieri napoletani della Sanità e di Forcella. La copertina dichiara il ruolo di ciascuno: fotografie di Elisabetta Valentini e Simona Filippini, testo di Claudia Origoni, con interventi di Mauro Giancaspro, Antonio Ghirelli, Vittorio Dini, Carmine Nappo e Antonio Loffredo.',
      en:
        'A photography volume on the Neapolitan quarters of Sanità and Forcella. The jacket states each role: photographs by Elisabetta Valentini and Simona Filippini, text by Claudia Origoni, with contributions from Mauro Giancaspro, Antonio Ghirelli, Vittorio Dini, Carmine Nappo and Antonio Loffredo.',
    },
    notes: [
      {
        it:
          'Il titolo è un’istruzione rivolta a chi guarda: sollevare lo sguardo invece di abbassarlo.',
        en:
          'The title is an instruction to the viewer: lift the gaze instead of dropping it.',
      },
      {
        it:
          'Edizione illustrata di 150 pagine, nella collana «Città si diventa» delle Edizioni Intra Moenia. Dalla quarta di copertina: «Questo volume fotografico sui popolari e storici quartieri napoletani della Sanità e di Forcella fa parte di una serie di iniziative finalizzate alla valorizzazione delle energie umane, culturali e storiche di questi luoghi». Il volume reca il prezzo di 12,00 euro e l’ISBN editoriale 88-7421-052-3.',
        en:
          'Illustrated edition of 150 pages, in the “Città si diventa” series of Edizioni Intra Moenia. From the back cover: “this photography volume on the popular and historic Neapolitan quarters of Sanità and Forcella is part of a series of initiatives meant to enhance the human, cultural and historical energies of these places”. The book carries a price of €12.00 and the publisher’s ISBN 88-7421-052-3.',
      },
      {
        it:
          'Dalla prefazione di Antonio Ghirelli: «Simona Filippini ed Elisabetta Valentini attraverso le foto e Claudia Origoni con una suggestiva analisi del territorio, hanno colto ad un tempo la straordinaria bellezza delle antiche chiese e dei nobili palazzi nascosti nell’inferno di Forcella e della Sanità, e l’umanissimo, talora dolce, talora disperato, messaggio delle strade, dei fanciulli, delle famiglie che scandiscono la vita quotidiana di quei quartieri».',
        en:
          'From Antonio Ghirelli’s preface: “through their photographs Simona Filippini and Elisabetta Valentini, and Claudia Origoni through a suggestive reading of the territory, have grasped at once the extraordinary beauty of the old churches and noble palaces hidden in the inferno of Forcella and the Sanità, and the most human, sometimes sweet, sometimes desperate message of the streets, the children, the families that mark the daily life of those quarters”.',
      },
      {
        it:
          'A pagina 45 il testo dell’autrice corre in italiano e in inglese, con il titolo «Raise your eyes and behold». Dall’attacco: «Alza gli occhi e guarda: guarda Napoli, guardala con gli occhi dell’anima, guarda dentro le pieghe di questa città, fuori dalle immagini delle cartoline che mostrano il Vesuvio, il pino e palazzo reale».',
        en:
          'On page 45 her text runs in Italian and in English, under the title “Raise your eyes and behold”. From her own English opening: “behold Napoli, behold with the eyes of your soul, behold within the creases of this city, out of the postcard images which show Mt. Vesuvius, the famous pine tree and the Royal Palace”.',
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
    publisher: 'Coppola Editore · Edizioni Nemapress',
    isbn: '9788887432916',
    coAuthors: 'Elena La Delfa',
    tone: 'gold',
    cover: '/covers/oro-nero-di-modica.jpg',
    coverCredit: 'copia dell’autrice',
    synopsis: {
      it:
        'Scritto con Elena La Delfa e dedicato all’«oro nero» di Modica: il cioccolato della città barocca, la sua lavorazione e il legame che tiene insieme un centro urbano, la sua storia artigianale e una materia che è insieme economia e identità. Il volume esce con i due marchi impressi in copertina, Coppola Editore ed Edizioni Nemapress.',
      en:
        'Written with Elena La Delfa about the “black gold” of Modica: the chocolate of the Baroque town, how it is made, and the bond between a city, its craft history and a substance that is at once an economy and an identity. The book carries the two imprints printed on its jacket, Coppola Editore and Edizioni Nemapress.',
    },
    notes: [
      {
        it: 'Pubblicato nel 2009; oggi segnalato come non ordinabile dai distributori.',
        en: 'Published in 2009; now listed as unavailable by distributors.',
      },
      {
        it:
          'Dalla nota biografica dell’editore in quarta: Claudia Origoni «ha studiato ed ha ideato la cioccolata modicana astrologicamente compatibile con i vari segni zodiacali». Elena La Delfa, che firma con lei, è maestra di cucina AICI e sommelier AIS, e nelle sue relazioni torna sullo stesso tema: «La cioccolata modicana variamente aromatizzata».',
        en:
          'From the publisher’s biographical note on the back cover: Claudia Origoni “studied and devised the Modica chocolate astrologically compatible with the various zodiac signs”. Elena La Delfa, her co-author, is an AICI cooking teacher and an AIS sommelier, and returns to the same subject in her talks: “Modica chocolate, variously flavoured”.',
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
  // Materiale dell'autrice arrivato il 4 ottobre 2026: fotografie dei volumi e un
  // documento. Qui stanno le opere emerse da quelle carte, distinte per natura:
  // un libro a sé, un capitolo in volume collettaneo, un racconto in antologia.
  // Dove l'anno manca non è stato trovato a catalogo: la voce resta bozza.
  // ─────────────────────────────────────────────────────────────────────────────
  {
    id: 'io-son-l-umile-l-ancella',
    title: { it: 'Io son l’umile l’ancella…', en: 'Io son l’umile l’ancella…' },
    subtitle: {
      it: 'Storia di una artista sarda: Lia Origoni',
      en: 'The story of a Sardinian artist: Lia Origoni',
    },
    type: { it: 'Biografia d’artista', en: 'Artist biography' },
    publisher: 'Edizioni di Salpare',
    tone: 'sage',
    cover: '/covers/io-son-l-umile-l-ancella.jpg',
    coverCredit: 'copia dell’autrice',
    draft: true,
    synopsis: {
      it:
        'La vita di Lia Origoni, attrice e cantante nata a La Maddalena il 20 ottobre 1919 e morta nella stessa città il 26 ottobre 2022: esordio nella rivista romana «Quando meno te l’aspetti» al Teatro Valle nel 1940, i teatri Wintergarten e Scala di Berlino, la «Traviata» alla Scala di Milano, «L’opera da tre soldi» al Sistina, e una carriera che le cronache seguono fino al 2014. Il titolo del libro riprende le parole di Maria all’annuncio: «Ecco l’ancella del Signore».',
      en:
        'The life of Lia Origoni, actress and singer born in La Maddalena on 20 October 1919 and who died in the same town on 26 October 2022: her debut in the Roman revue “Quando meno te l’aspetti” at the Teatro Valle in 1940, the Wintergarten and the Scala of Berlin, “La traviata” at the Teatro alla Scala in Milan, “The Threepenny Opera” at the Sistina, and a career the press followed as far as 2014. The title of the book takes up Mary’s words at the Annunciation: “Behold the handmaid of the Lord”.',
    },
    notes: [
      {
        it:
          'Il frontespizio stampa il volume per «Edizioni di Salpare», il marchio che nessuna scheda in rete riportava. L’anno e l’ISBN restano da confermare, e finché nessun catalogo li pubblica la voce rimane bozza.',
        en:
          'The title page prints the book under “Edizioni di Salpare”, the imprint no online record carried. The year and ISBN still need confirming, and until a catalogue publishes them the entry stays a draft.',
      },
      {
        it:
          'Una pagina d’apertura elenca la carriera di Lia Origoni, «sarda de La Maddalena»: i teatri dal Valle al Sistina, dal Teatro dell’Opera di Roma alla Scala di Milano, dal Winter Garten di Berlino al Moulin Rouge di Parigi fino al San Carlo di Napoli; il primo contratto stipulato dalla televisione sperimentale di Stato EIAR, nel 1939; l’essere stata la prima italiana ad aver interpretato «L’Opera da tre soldi» di Bertold Brecht; e gli artisti con cui ha recitato, fra i più famosi del tempo, da Totò ad Anna Magnani, da Macario a Maurice Chevalier, da Tito Schipa a Giorgio Strehler ad Anton Giulio Bragaglia.',
        en:
          'An opening page lists the career of Lia Origoni, “sarda de La Maddalena”: the theatres from the Valle to the Sistina, from the Teatro dell’Opera in Rome to the Scala of Milan, from the Winter Garten in Berlin to the Moulin Rouge in Paris and as far as the San Carlo in Naples; the first contract drawn up by the EIAR state experimental television, in 1939; her being the first Italian to act in Bertold Brecht’s “The Threepenny Opera”; and the artists she shared the bill with, among the most famous of the day, from Totò to Anna Magnani, from Macario to Maurice Chevalier, from Tito Schipa to Giorgio Strehler and Anton Giulio Bragaglia.',
      },
      {
        it:
          'L’autrice aveva già scritto di Lia Origoni per «Tottus in Pari», il 29 novembre 2016, con un articolo che la presenta come artista musicale tra le più dotate del suo tempo.',
        en:
          'The author had already written about Lia Origoni for “Tottus in Pari”, on 29 November 2016, in an article that presents her as one of the most gifted musical artists of her time.',
      },
    ],
    links: [
      {
        label: { it: 'L’articolo del 2016', en: 'The 2016 article' },
        href: 'https://www.tottusinpari.it/2016-11-29/io-sono-lumile-ancella-lia-origoni-storia-di-unartista-sarda-degli-anni-4060-tra-opera-lirica-rivista-e-teatro/',
      },
      {
        label: { it: 'La voce biografica', en: 'The biographical entry' },
        href: 'https://it.wikipedia.org/wiki/Lia_Origoni',
      },
    ],
  },
  {
    id: 'la-colazione-dei-santi',
    title: { it: 'La colazione dei santi', en: 'La colazione dei santi' },
    subtitle: {
      it: 'In «Prima colazione: come & perché. Storia, scienza e cultura»',
      en: 'In “Prima colazione: come & perché. Storia, scienza e cultura”',
    },
    type: { it: 'Capitolo in volume collettaneo', en: 'Chapter in an edited volume' },
    year: 2006,
    publisher: 'Agra Editrice',
    isbn: '9788861400054',
    tone: 'gold',
    draft: true,
    synopsis: {
      it:
        'Un capitolo del volume collettaneo «Prima colazione: come & perché. Storia, scienza e cultura», dato alle stampe da Agra Editrice a Roma nel 2006 sotto la cura di Mario Mazzetti di Pietralata. Il libro indaga il primo pasto della giornata con storici dell’alimentazione e delle religioni, nutrizionisti, scrittori e critici cinematografici; il contributo di Claudia Origoni lo affronta dalla parte dell’agiografia e dell’iconografia sacra.',
      en:
        'A chapter of the collective volume “Prima colazione: come & perché. Storia, scienza e cultura”, published in Rome by Agra Editrice in 2006 under the editorship of Mario Mazzetti di Pietralata. The book studies the first meal of the day with historians of food and religion, nutritionists, writers and film critics; Claudia Origoni’s contribution takes it from the side of hagiography and sacred iconography.',
    },
    notes: [
      {
        it:
          'Il record del Servizio Bibliotecario Nazionale conferma il volume (Roma, Agra, 2006, ISBN 9788861400054) e lo dà di 206 pagine, mentre le schede commerciali ne contano 180. L’attribuzione del capitolo poggia sull’indicazione dell’autrice: nessun catalogo pubblica i singoli contributi, e finché una copia del volume non li conferma la voce resta bozza.',
        en:
          'The volume is confirmed by the record of the Servizio Bibliotecario Nazionale (Rome, Agra, 2006, ISBN 9788861400054), which counts 206 pages where the trade listings count 180. The chapter attribution rests on the author’s own indication: no catalogue publishes the individual contributions, and until a copy of the volume confirms them the entry stays a draft.',
      },
    ],
    links: [
      {
        label: { it: 'La scheda del volume', en: 'The volume record' },
        href: 'https://www.amazon.it/Prima-colazione-perch%C3%A9-scienza-cultura/dp/8861400051',
      },
    ],
  },
  {
    id: 'l-acqua-cotta-con-le-merangole',
    title: { it: 'L’acqua cotta con le merangole', en: 'L’acqua cotta con le merangole' },
    subtitle: {
      it: 'In «Viaggiare con bisaccia & penna. Lungo la via Francigena laziale»',
      en: 'In “Viaggiare con bisaccia & penna. Lungo la via Francigena laziale”',
    },
    type: { it: 'Racconto in antologia', en: 'Short story in an anthology' },
    year: 2009,
    publisher: 'LietoColle · Pandora Onlus',
    isbn: '9788878484832',
    pages: '104',
    tone: 'terracotta',
    cover: '/covers/viaggiare-con-bisaccia.jpg',
    coverCredit: 'copia dell’autrice',
    synopsis: {
      it:
        'Racconto in dialetto romanesco pubblicato a pagina 89 dell’antologia «Viaggiare con bisaccia & penna. Lungo la via Francigena laziale», centoquattro pagine di racconti brevi uscite da LietoColle nel 2009 per un’iniziativa promossa dall’associazione culturale Pandora Onlus con il contributo della Regione Lazio. Porta Massimo davanti al convento dei padri minori di San Lorenzo, nel giorno in cui i suoi lo lasciano a studiare dai preti, sulla strada che il padre Corrado tredici anni prima aveva percorso scalzo insieme a Leda. Corrado della Francigena non sapeva nulla: vide soltanto un pellegrino venuto dal Piemonte fermarsi a chiedere dell’acqua, e dividere con lui l’acqua cotta con le merangole, le arance amare.',
      en:
        'A story in Roman dialect published on page 89 of the anthology “Viaggiare con bisaccia & penna. Lungo la via Francigena laziale”, one hundred and four pages of short stories issued by LietoColle in 2009 for an initiative promoted by the cultural association Pandora Onlus with the contribution of the Regione Lazio. It sets Massimo in front of the convent of the lesser friars of San Lorenzo, on the day his family leaves him to study with the priests, on the road his father Corrado had walked barefoot thirteen years earlier with Leda. Corrado knew nothing of the Francigena: he only saw a pilgrim come from Piedmont stop to ask for water, and share with him the cooked water made with merangole, the bitter oranges.',
    },
    notes: [
      {
        it:
          'I cataloghi confermano l’antologia (LietoColle, 2009, ISBN 9788878484832). La pagina 89, fotografata dall’autrice insieme alla copertina del volume, dà conto del racconto: nessun catalogo pubblica l’elenco dei contributori, e la voce resta aperta a una conferma dell’editore.',
        en:
          'The anthology is confirmed in catalogues (LietoColle, 2009, ISBN 9788878484832). The story is documented by page 89, photographed by the author together with the jacket of the volume: no catalogue publishes the list of contributors, and the entry remains open to a confirmation from the publisher.',
      },
      {
        it:
          'L’apertura del racconto, da pagina 89: «Massimo era lì, davanti al convento dei padri minori di San Lorenzo lungo la via Francigena e come un pellegrino stanco aspettava il suo turno per entrare».',
        en:
          'The opening of the story, from page 89: “Massimo was there, in front of the convent of the lesser friars of San Lorenzo along the Francigena, and like a tired pilgrim he waited his turn to go in”.',
      },
    ],
    links: [
      {
        label: { it: 'La scheda dell’antologia', en: 'The anthology record' },
        href: 'https://www.unilibro.it/libro/viaggiare-con-bisaccia-penna-lungo-la-via-francigena-laziale/9788878484832',
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
        'Ventidue saggi sulla lettura come atto d’amore e di disputa: dall’angolo piegato su una pagina al motivo per cui rileggiamo gli stessi tre romanzi a ogni decennio.',
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
