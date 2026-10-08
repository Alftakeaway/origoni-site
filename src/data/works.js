// Bibliografia reale: solo opere verificabili, con editore, anno e ISBN.
// I campi di testo sono bilingui: { it, en }, con l'italiano come lingua primaria.
// Le fonti stanno in src/data/site.js, e la pagina le elenca.
// `cover` è la copertina editoriale (in public/covers, con `coverCredit`):
// dove manca, BookCover disegna una copertina tipografica.
// `press` sono frasi di stampa sull'opera: testo ripreso alla lettera dalla fonte,
// che resta italiana anche nella versione inglese del sito, quindi non bilingue.
// `excerpt` è una pagina dell'opera fotografata dall'autrice: `it` e `en` sono array di
// capoversi trascritti alla lettera, con `credit` che nomina la pagina e il volume.
// Sta solo dove la pagina esiste: dove `en` manca, l'estrato resta quello italiano stampato.
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
    press: [
      {
        quote:
          'Tratto da un fatto di cronaca nera degli anni ’20, «Non escludo il ritorno» è il primo romanzo di Claudia Origoni e si presenta fin da subito come un libro molto enigmatico.',
        outlet: 'Cara Garbatella',
        byline: 'Anna Di Cesare',
        date: { it: '26 marzo 2024', en: '26 March 2024' },
        href: 'https://caragarbatella.it/presentato-alla-libreria-le-storie-il-primo-romanzo-di-claudia-origoni/',
      },
      {
        quote:
          'Il romanzo può essere definito un giallo storico che riprende un vero cold case rielaborando con la fantasia artistica un episodio di cronaca nera avvenuto in Sardegna negli anni ’20.',
        outlet: 'Portale Letterario',
        date: { it: '7 giugno 2024', en: '7 June 2024' },
        href: 'https://www.portaleletterario.net/rubriche/segnalazioni-di-redazione/2352/il-cold-case-di-claudia-origoni-arriva-ad-alghero',
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
    press: [
      {
        quote:
          'L’antologia curata da Stefania Auci e Nadia Terranova raccoglie racconti, memoir e reportage dedicati a biblioteche e archivi dell’isola. Il ricavato sarà destinato a un progetto di sviluppo di una biblioteca e di promozione della lettura.',
        outlet: 'AGI',
        date: { it: '3 ottobre 2026', en: '3 October 2026' },
        href: 'https://www.agi.it/cultura/news/2026-10-03/radici-di-carta-olmi-biblioteche-sicilia-lettura-39367446/',
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
      {
        it:
          'La scheda bibliografica del Centro Studi sul Teatro Napoletano Meridionale ed Europeo registra che nel volume è «seguito dal contributo di Claudia Origoni che offre un ritratto affascinante dei due quartieri affermando che “la Sanità è femmina e Forcella è maschio”».',
        en:
          'The bibliographic sheet kept by the Centro Studi sul Teatro Napoletano Meridionale ed Europeo records that the volume carries “the contribution of Claudia Origoni, who offers a fascinating portrait of the two quarters, stating that Sanità is female and Forcella is male”.',
      },
    ],
    press: [
      {
        quote:
          'Questo volume è un vero e proprio viaggio fotografico attraverso due popolari e storici quartieri di Napoli: Sanità e Forcella.',
        outlet: 'Centro Studi sul Teatro Napoletano Meridionale ed Europeo',
        date: { it: 'schede bibliografiche 2005', en: 'bibliographic sheets 2005' },
        href: 'https://www.unisa.it/centri_e_vari/teatro_napoletano/la_critica/schede_biblio/2005',
      },
    ],
    links: [
      {
        label: { it: 'Scheda del libro', en: 'Book record' },
        href: 'https://books.google.com/books/about/Alza_gli_occhi_e_guarda_Immagini_di_due.html?id=ysdWAAAACAAJ',
      },
    ],
    excerpt: {
      credit: {
        it: 'Da pagina 45 del volume, fotografata dall’autrice. Il testo corre in italiano e in inglese, e le parole sono quelle stampate, corsivi e maiuscoletti compresi. La pagina prosegue oltre l’immagine.',
        en: 'From page 45 of the volume, photographed by the author. The text runs in Italian and in English, and the wording is the one on the page, italics and small capitals included. The page continues beyond the image.',
      },
      it: [
        'ALZA GLI OCCHI E GUARDA: guarda Napoli, guardala con gli occhi dell’anima, guardala dentro le pieghe di questa città, fuori dalle immagini delle cartoline che mostrano il Vesuvio, il pino e palazzo reale;',
        'mira Napoli, nobilissima sirena, che incanta e sorprende ancor di più quando ne scopri la vera essenza nei quartieri dimenticati e giudicati malfamati, ma antichi e ricchi di storia, che non vengono mostrati... come i parenti poveri ai pranzi di nozze degli “arrivati” che dimenticano, a volte volentieri, da dove sono “partiti”; quartieri che diventano sconosciuti agli stessi napoletani.',
        'Vieni, guarda e ascolta...',
        'Ascolta il silenzio dietro il suono assordante dei motorini che si inseguono nei vicoli della...',
      ],
      en: [
        'BEHOLD NAPOLI: behold with the eyes of your soul, behold within the creases of this city, out of the “postcard” images which show Mt. Vesuvius, the famous pine tree and the Royal Palace.',
        'Cherish Napoli, regal mermaid, ever more enchanting and surprising once it’s real essence is revealed in the forgotten illreputed quarters, yet antique and full of history, hidden... like the poor relatives at a wedding banquet of someone who “made it” and willingly forgot his starting point, quarters which are often unknown to the Neapolitans themselves.',
        'Come, behold and listen...',
        'Listen to the silence behind the blaring sound of the motorbikes chasing one another in the...',
      ],
    },
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
  // Materiale dell'autrice arrivato il 4 e il 5 ottobre 2026: fotografie dei
  // volumi, pagine firmate, colophon. Qui stanno le opere emerse da quelle
  // carte, distinte per natura: un articolo in rivista, un contributo in volume
  // collettaneo, racconti in antologia, un testo in catalogo di mostra. Dove il
  // contenitore non si riconosce dalle carte, la voce resta bozza.
  // ─────────────────────────────────────────────────────────────────────────────
  {
    id: 'io-son-l-umile-ancella',
    title: {
      it: 'Io son l’umile ancella. Lia Origoni: Storia di un’artista sarda tra Opera Lirica, Rivista e Teatro',
      en: 'Io son l’umile ancella. Lia Origoni: Storia di un’artista sarda tra Opera Lirica, Rivista e Teatro',
    },
    subtitle: {
      it: 'In «Almanacco Gallurese», Sassari, n. 11, annata 2003-2004, a pagina 297',
      en: 'In “Almanacco Gallurese”, Sassari, no. 11, the 2003-2004 issue, on page 297',
    },
    type: { it: 'Articolo in rivista', en: 'Article in a journal' },
    publisher: 'Almanacco Gallurese',
    year: 2003,
    tone: 'sage',
    cover: '/covers/io-son-l-umile-ancella.jpg',
    coverCredit: 'stampa Edizioni di Salpare, copia dell’autrice',
    synopsis: {
      it:
        'La vita di Lia Origoni, attrice e cantante nata a La Maddalena il 20 ottobre 1919 e morta nella stessa città il 26 ottobre 2022: esordio nella rivista romana «Quando meno te l’aspetti» al Teatro Valle nel 1940, i teatri Wintergarten e Scala di Berlino, la «Traviata» alla Scala di Milano, «L’opera da tre soldi» al Sistina, e una carriera che le cronache seguono fino al 2014. Il titolo prende la romanza di Adriana, primo atto dell’«Adriana Lecouvreur» di Francesco Cilea, che fu il cavallo di battaglia della cantante.',
      en:
        'The life of Lia Origoni, actress and singer born in La Maddalena on 20 October 1919 and who died in the same town on 26 October 2022: her debut in the Roman revue “Quando meno te l’aspetti” at the Teatro Valle in 1940, the Wintergarten and the Scala of Berlin, “La traviata” at the Teatro alla Scala in Milan, “The Threepenny Opera” at the Sistina, and a career the press followed as far as 2014. The title takes Adriana’s romanza from the first act of Francesco Cilea’s “Adriana Lecouvreur”, which was the singer’s signature piece.',
    },
    notes: [
      {
        it:
          'Il pezzo è un articolo, non un libro: esce nell’«Almanacco Gallurese», annuario di studi galluresi pubblicato a Sassari, numero 11 dell’annata 2003-2004, a pagina 297, come registra l’indice degli argomenti dell’annuario stesso. Un periodico non porta ISBN, e nessuno se ne aspetta uno.',
        en:
          'The piece is an article, not a book: it appears in the “Almanacco Gallurese”, the yearbook of Gallura studies published in Sassari, number 11 of the 2003-2004 issue, on page 297, as the yearbook’s own index of contents records. A periodical carries no ISBN, and none is expected.',
      },
      {
        it:
          'L’opuscolo fotografato dall’autrice è una pubblicazione autonoma «Edizioni di Salpare», uno dei marchi editoriali di Alghero, ed è stato presentato in Campidoglio. Una pagina d’apertura porta il stemma SPQR del Comune di Roma e ringrazia la «Commissione per le Politiche Sociali». Per parola dell’autrice il testo era già uscito in parte nell’«Almanacco Gallurese», che resta la stampa con l’indicazione del numero e della pagina.',
        en:
          'The booklet photographed by the author is a standalone publication under the “Edizioni di Salpare” imprint, one of the publishing houses of Alghero, and it was presented in the Campidoglio. An opening page carries the SPQR coat of arms of the Comune di Roma and thanks the “Commissione per le Politiche Sociali”. In the author’s words, the text had already appeared in part in the “Almanacco Gallurese”, which remains the printing that gives the issue and the page number.',
      },
      {
        it:
          'Una copia diversa reca in copertina il nome «Claudia Origoni» in maiuscoletto sopra il titolo e il marchio «Edizioni Nemapress» sotto il sottotitolo: in quell’esemplare una linea a penna taglia il nome dell’autrice e il marchio editoriale, e a destra corre una dedica a mano che nell’immagine non si legge. La copertina dell’opuscolo «Edizioni di Salpare», che è quella pubblicata nel sito, porta soltanto il titolo e il sottotitolo, e il frontespizio dà il nome dell’autrice in alto e il marchio in basso.',
        en:
          'A different copy carries the name “Claudia Origoni” in small capitals above the title on its cover and the imprint “Edizioni Nemapress” below the subtitle: in that copy a line in pen strikes through the author’s name and the publisher’s mark, and a dedication runs in handwriting at the right, which the image does not let us read. The cover of the “Edizioni di Salpare” booklet, the one published on the site, carries the title and subtitle only, and its title page gives the author’s name above and the imprint below.',
      },
      {
        it:
          'Una pagina d’apertura elenca la carriera di Lia Origoni, «sarda de La Maddalena»: i teatri dal Valle al Sistina, dal Teatro dell’Opera di Roma alla Scala di Milano, dal Winter Garten di Berlino al Moulin Rouge di Parigi fino al San Carlo di Napoli; il primo contratto stipulato dalla televisione sperimentale di Stato EIAR, nel 1939; l’essere stata la prima italiana ad aver interpretato «L’Opera da tre soldi» di Bertold Brecht; e gli artisti con cui ha recitato, fra i più famosi del tempo, da Totò ad Anna Magnani, da Macario a Maurice Chevalier, da Tito Schipa a Giorgio Strehler ad Anton Giulio Bragaglia.',
        en:
          'An opening page lists the career of Lia Origoni, “sarda de La Maddalena”: the theatres from the Valle to the Sistina, from the Teatro dell’Opera in Rome to the Scala of Milan, from the Winter Garten in Berlin to the Moulin Rouge in Paris and as far as the San Carlo in Naples; the first contract drawn up by the EIAR state experimental television, in 1939; her being the first Italian to act in Bertold Brecht’s “The Threepenny Opera”; and the artists she shared the bill with, among the most famous of the day, from Totò to Anna Magnani, from Macario to Maurice Chevalier, from Tito Schipa to Giorgio Strehler and Anton Giulio Bragaglia.',
      },
      {
        it:
          'L’autrice è tornata sul ritratto di Lia Origoni per «Tottus in Pari», il 29 novembre 2016, presentandola come artista musicale tra le più dotate del suo tempo.',
        en:
          'The author returned to the portrait of Lia Origoni for “Tottus in Pari”, on 29 November 2016, presenting her as one of the most gifted musical artists of her time.',
      },
    ],
    links: [
      {
        label: { it: 'L’indice dell’Almanacco', en: 'The Almanacco index' },
        href: 'https://almanaccodisardegna.wordpress.com/argomenti-2/',
      },
      {
        label: { it: 'La ripresa del 2016', en: 'The 2016 reprint' },
        href: 'https://www.tottusinpari.it/2016-11-29/io-sono-lumile-ancella-lia-origoni-storia-di-unartista-sarda-degli-anni-4060-tra-opera-lirica-rivista-e-teatro/',
      },
      {
        label: { it: 'La voce biografica', en: 'The biographical entry' },
        href: 'https://it.wikipedia.org/wiki/Lia_Origoni',
      },
    ],
    excerpt: {
      credit: {
        it: 'Dalla pagina con il ritratto di Lia Origoni nell’opuscolo «Edizioni di Salpare», fotografata dall’autrice. Le parole sono quelle stampate, «Winter Garten» e «Bertold Brecht» compresi, e restano italiane anche nella versione inglese del sito.',
        en: 'From the page carrying Lia Origoni’s portrait in the “Edizioni di Salpare” booklet, photographed by the author. The wording is the one on the page, “Winter Garten” and “Bertold Brecht” included, and it stays in Italian in the English version of the site too.',
      },
      it: [
        'Lia Origoni, sarda de La Maddalena, è stata acclamata artista nei teatri più importanti d’Europa: dal Valle al Sistina e al Teatro dell’Opera di Roma, dalla Scala di Milano al Winter Garten di Berlino, dal Moulin Rouge di Parigi al San Carlo di Napoli.',
        'E’ stata lei a ricevere nel 1939 il primo contratto stipulato dalla TV sperimentale di Stato EIAR.',
        'Prima italiana ad aver interpretato “L’Opera da tre soldi” di Bertold Brecht.',
        'Ha recitato in compagnia dei più famosi artisti, quali Totò, Anna Magnani, Macario, Maurice Chevalier, Tito Schipa, Giorgio Strehler, Anton Giulio Bragaglia.',
      ],
    },
  },
  {
    id: 'prima-colazione-come-e-perche',
    title: {
      it: 'La colazione dei Santi e la colazione con i Santi',
      en: 'La colazione dei Santi e la colazione con i Santi',
    },
    subtitle: {
      it:
        'In «Prima colazione: come & perché. Storia, scienza e cultura», volume collettaneo a cura di Mario Mazzetti di Pietralata, capitolo 4 a pagina 65',
      en:
        'In “Prima colazione: come & perché. Storia, scienza e cultura”, collective volume edited by Mario Mazzetti di Pietralata, chapter 4 on page 65',
    },
    type: { it: 'Contributo in volume collettaneo', en: 'Contribution to an edited volume' },
    year: 2006,
    publisher: 'Agra Editrice',
    isbn: '9788861400054',
    pages: '180',
    tone: 'ink',
    cover: '/covers/prima-colazione.jpg',
    coverCredit: 'copertina editoriale Agra',
    synopsis: {
      it:
        'Volume collettaneo dato alle stampe da Agra Editrice a Roma nel 2006 sotto la cura di Mario Mazzetti di Pietralata: venti capitoli che prendono il primo pasto della giornata da più lati, con storici dell’alimentazione e delle religioni, nutrizionisti e dietologi, scrittori e critici cinematografici, e un’introduzione di Massimo Montanari. Il capitolo 4, a pagina 65, apre su un paradosso: scrivere sulla colazione dei Santi può essere un non-sense, perché il santo in quanto tale pratica l’astinenza e il digiuno, e prima di diventarlo ha comunque vissuto i pasti quotidiani degli uomini del suo tempo. Il viaggio comincia dalla regola di San Benedetto, che dà il nome all’oggetto della ricerca. A partire dal IX secolo gli abati benedettini concessero ai religiosi di bere verso sera, per ristorare le forze stanche del giorno, un bicchiere di vino prima di Compieta: un ristoro preso in comune mentre si faceva la lezione della sera, chiamata Conferenza, Collatio in latino. Durante quelle sedute si leggevano le Collationes di Cassiano, e al vino si accompagnò presto un leggero puntino per ovviare ai disagi del bere a digiuno. La colazione era dunque il prodromo della cena, non l’inizio della giornata, e divenne con il tempo il secondo pasto: il primo a ora sexta intorno a mezzogiorno, il secondo dopo i Vesperi tra le cinque e le sei, finché in alcuni ordini non si ritenne opportuno concedere ai confratelli e alle consorelle un ristoro mattutino.',
      en:
        'A collective volume published in Rome by Agra Editrice in 2006 under the editorship of Mario Mazzetti di Pietralata: twenty chapters that take the first meal of the day from several sides, with historians of food and of religions, nutritionists and dietologists, writers and film critics, and an introduction by Massimo Montanari. Chapter 4, on page 65, opens on a paradox: writing on the breakfast of the Saints may be a nonsense, because the saint as such practises abstinence and fasting, and before becoming one he lived the daily meals of the men of his time. The journey begins with the rule of Saint Benedict, which gives the name to the object of the enquiry. From the ninth century Benedictine abbots allowed the religious to drink towards evening, to restore the day’s exhausted strength, a glass of wine before Compline: a refreshment taken in common while the evening reading was given, called Conferenza, Collatio in Latin. During those meetings the Collationes of Cassian were read, and the wine was soon accompanied by a light snack to offset the discomfort of drinking on an empty stomach. Breakfast was therefore the forerunner of supper, not the start of the day, and in time it became the second meal: the first at sexta around midday, the second after Vespers between five and six, until some orders thought it proper to grant the brothers and sisters a morning refreshment.',
    },
    notes: [
      {
        it:
          'Il titolo del capitolo ha mezzo gioco tipografico: sulla pagina «dei» e «con» sono in corsivo, «La colazione dei Santi e la colazione con i Santi», a distinguere i pasti dei santi dal pasto consumato in loro compagnia. La voce di questo sito portava in passato il solo primo membro, «La colazione dei santi», e per questo era stata corretta sul titolo del volume: la pagina fotografata scioglie l’equivoco, perché quel titolo era il suo, soltanto dimezzato.',
        en:
          'The chapter title carries half a typographic game: on the page “dei” and “con” are set in italic, “La colazione dei Santi e la colazione con i Santi”, telling apart the meals of the saints from the meal taken in their company. This entry once carried only the first half, “La colazione dei santi”, and was for that reason corrected to the title of the volume: the photographed page dissolves the misunderstanding, because that title was hers, merely halved.',
      },
      {
        it:
          'Il record del Servizio Bibliotecario Nazionale conferma il volume (Roma, Agra, 2006, ISBN 9788861400054) e lo dà di 206 pagine, mentre l’editore e le schede commerciali ne contano 180: qui resta il numero dell’editore, e la differenza non è risolta. Nessun catalogo pubblica i singoli contributi, né il nome dei collaboratori: il capitolo 4 e la sua pagina vengono dalla copia dell’autrice, fotografata e depositata l’8 ottobre 2026.',
        en:
          'The volume is confirmed by the record of the Servizio Bibliotecario Nazionale (Rome, Agra, 2006, ISBN 9788861400054), which counts 206 pages where the publisher and the trade listings count 180: the publisher’s number is the one kept here, and the difference is unresolved. No catalogue publishes the individual contributions or the names of the contributors: chapter 4 and its page come from the author’s own copy, photographed and deposited on 8 October 2026.',
      },
    ],
    links: [
      {
        label: { it: 'La scheda del volume', en: 'The volume record' },
        href: 'https://www.unilibro.it/libro/mazzetti-di-pietralata-mario/prima-colazione-come-perche-storia-scienza-cultura/9788861400054',
      },
    ],
  },
  {
    id: 'l-acqua-cotta-con-le-merangole',
    title: { it: 'L’Acqua cotta con le Merangole', en: 'L’Acqua cotta con le Merangole' },
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
    excerpt: {
      credit: {
        it: 'Da pagina 89 dell’antologia, fotografata dall’autrice. Il racconto è in dialetto romanesco, e nel volume le parole dialettali stanno in corsivo: questo impaginato il corsivo non lo conserva, le parole sì. La pagina si apre con il titolo «L’Acqua cotta con le Merangole» e la firma «di Claudia Origoni».',
        en: 'From page 89 of the anthology, photographed by the author. The story is in Roman dialect, and in the volume the dialect words sit in italics: this rendering does not keep the italics, but it keeps the words. The page opens with the heading “L’Acqua cotta con le Merangole” and the signature “di Claudia Origoni”.',
      },
      it: [
        'Massimo era lì, davanti al convento dei padri minori di San Lorenzo lungo la via Francigena e come un pellegrino stanco aspettava il suo turno per entrare.',
        'Leda e Corrado l’avevano accompagnato con gli abiti da festa; “ ’sto figliolo doveva da studia’, mica doveva spacca’ la pietra e montare le traversine nella ferrovia come il padre”...',
        'Il voto era compiuto: ’sto fijo era cresciuto e ora lo lasciavano a studia’ lì, da li preti, in mezzo a quella strada che 13 anni prima Corrado aveva percorso scalzo insieme a Leda.',
        'Corrado non sapeva gnente de la via Francigena, ma d’estate vedeva ’sti pellegrini anna’ verso Roma attraversando la campagna, la su campagna, er su podere: La Bandita.',
        'Un giorno uno de loro se fermò a chiede un tantinello d’acqua, era stanco e affamato. Corrado s’era appena fatto un po’ d’acqua cotta con le merangole e si misero a mangiare insieme.',
        'Il pellegrino veniva dal Piemonte, dal sacro Monte d’Oropa e annava a Roma a sciogliere un voto: era finalmente diventato padre di una bella bimba doppo tant’anni.',
        'A ’ste parole l’occhi chiari e azzurri di Corrado presero d’acqua, quel pellegrino gli parlava al cuore e ravvivava quel desiderio mai appagato di un figliolo.',
      ],
    },
  },

  {
    id: 'il-miraggio-del-futuro-fra-covid-e-fata-morgana',
    title: {
      it: 'Il miraggio del futuro fra Covid e Fata Morgana',
      en: 'Il miraggio del futuro fra Covid e Fata Morgana',
    },
    subtitle: {
      it: 'Antologia a cura di Antonella Pellettieri, collana MenSALe',
      en: 'An anthology edited by Antonella Pellettieri, MenSALe series',
    },
    type: { it: 'Testo in antologia', en: 'Text in an anthology' },
    publisher: 'Zaccara',
    tone: 'terracotta',
    draft: true,
    synopsis: {
      it:
        'Il volume è fra le carte che l’autrice ha fotografato e fra le pubblicazioni che elenca nel proprio profilo professionale. Che cosa contenga di suo, e a quale pagina, resta da scrivere: la scheda si ferma qui e aspetta.',
      en:
        'The volume is among the papers the author photographed and among the publications she lists in her professional profile. What her own contribution contains, and on which page, is still to be written: the entry stops here and waits.',
    },
    notes: [
      {
        it:
          'La copertina fotografata dall’autrice reca il titolo, la cura di Antonella Pellettieri e la collana MenSALe. L’elenco dei contributori che circola in rete non la nomina, e la voce si tiene sulla parola dell’autrice, che lo comprende fra le sue pubblicazioni.',
        en:
          'The cover photographed by the author carries the title, Antonella Pellettieri’s editorship and the MenSALe series. The list of contributors circulating online does not name her, and the entry rests on the author’s own word, which counts the volume among her publications.',
      },
      {
        it:
          'Nel profilo professionale l’antologia è ricordata come pubblicazione del Consiglio Nazionale delle Ricerche; la copertina porta il nome dell’editore e della collana. Le due indicazioni stanno nella scheda senza che una escluda l’altra.',
        en:
          'In the professional profile the anthology is remembered as a publication of the Consiglio Nazionale delle Ricerche; the cover carries the publisher’s name and the series. Both statements stand in the entry, and neither cancels the other.',
      },
    ],
  },

  // ─────────────────────────────────────────────────────────────────────────────
  // Carte arrivate il 5 ottobre 2026: due antologie della Valle del Tempo, un
  // catalogo di mostra e una pagina senza contenitore. Ogni voce rimanda alla
  // pagina firmata che l'autrice ha fotografato nel proprio esemplare.
  // ─────────────────────────────────────────────────────────────────────────────
  {
    id: '7-7-7-numero-palindromo',
    title: {
      it: '7/7/7 è un numero palindromo, esotericamente importante',
      en: '7/7/7 è un numero palindromo, esotericamente importante',
    },
    subtitle: {
      it: 'In «La mia maturità “Notte prima degli esami”. Antologia di racconti», a cura di Emilio Bova, Mario Rovinello e Andrea Tartaglia, a pagina 75',
      en: 'In “La mia maturità ‘Notte prima degli esami’. Antologia di racconti”, edited by Emilio Bova, Mario Rovinello and Andrea Tartaglia, on page 75',
    },
    type: { it: 'Racconto in antologia', en: 'Short story in an anthology' },
    publisher: 'La Valle del Tempo Edizioni',
    year: 2025,
    isbn: '9791281993785',
    pages: '120',
    tone: 'terracotta',
    cover: '/covers/la-mia-maturita.jpg',
    coverCredit: 'copia dell’autrice',
    synopsis: {
      it:
        'Pagina 75 dell’antologia «La mia maturità “Notte prima degli esami”», e il pezzo nasce da una data. Il 7 luglio 1977 è una ripetizione che numerologicamente significava qualcosa: quell’anno, nei Paesi del nord Europa, municipi e chiese si erano intasati di coppie che vollero sposarsi in quella data per buon auspicio. Chissà se la stessa regola valeva per l’esame di stato, visto che l’inizio degli orali era stato sorteggiato sulla lettera O: «O come Origoni, il mio cognome». La sorte la destinava prima di tutti nel primo giorno, a lei che non aveva mai assistito a un esame di maturità negli anni precedenti. All’ansia si era aggiunta la scelta delle materie: aveva portato filosofia confidando che italiano le toccasse d’ufficio, inseguendo la vecchia regola non scritta che vuole premiata agli scrutini la materia scelta dallo studente, quasi a disporre gli esaminatori alla benevolenza. Era andata diversamente, perché l’insegnante di quegli anni, Italia Anziano, era stata scelta, per colmo di disdetta, come membro interno della commissione: fu presentata con la semplice sufficienza, un misero 6. Il ricordo si chiude sulla stima che quel conflitto non scalfì, «come docente e come donna».',
      en:
        'Page 75 of the anthology “La mia maturità ‘Notte prima degli esami’”, and the piece is born from a date. 7 July 1977 is a repetition that numerologically meant something: that year, in the countries of northern Europe, town halls and churches were crowded with couples who wanted to marry on that day for luck. Who knows whether the same rule held for the state exam, given that the start of the oral tests had been drawn on the letter O: “O as in Origoni, my surname”. Fate made her the first of all on the first day, for someone who had never sat in on a matura exam in the previous years. To the anxiety came the choice of subjects: she took philosophy, trusting that Italian would fall to her by default, chasing the old unwritten rule that has the subject chosen by the student rewarded at the class councils, as if to dispose the examiners to benevolence. It went otherwise, because the teacher of those years, Italia Anziano, had been chosen, to complete the discomfiture, as an internal member of the board: she was presented with bare sufficiency, a miserable 6. The memory closes on the esteem that conflict did not scratch, “as a teacher and as a woman”.',
    },
    notes: [
      {
        it:
          'Il volume è confermato dalla scheda dell’editore: La Valle del Tempo Edizioni, 2025, ISBN 9791281993785, 120 pagine, euro 14,25. Il colophon dell’esemplare fotografato reca «Volume stampato nel giugno del 2025 per la Valle del Tempo».',
        en:
          'The volume is confirmed by the publisher’s record: La Valle del Tempo Edizioni, 2025, ISBN 9791281993785, 120 pages, €14.25. The colophon of the copy photographed reads “Volume stampato nel giugno del 2025 per la Valle del Tempo”.',
      },
      {
        it:
          'La scheda dell’editore non elenca i contributori dell’antologia: il racconto è documentato dalla pagina 75, fotografata insieme alla copertina del volume.',
        en:
          'The publisher’s record does not list the anthology’s contributors: the story is documented by page 75, photographed together with the jacket of the volume.',
      },
      {
        it:
          'Il pezzo esce con la firma «Claudia Origoni*» e una nota a piè di pagina che data gli anni del liceo: «Alunno dal 1972 al 1977».',
        en:
          'The piece carries the signature “Claudia Origoni*” and a footnote dating the school years: “Alunno dal 1972 al 1977”.',
      },
    ],
    links: [
      {
        label: { it: 'La scheda dell’antologia', en: 'The anthology record' },
        href: 'https://www.lavalledeltempo.com/la-mia-maturita-notte-prima-degli-esami-antologia-di-racconti/',
      },
    ],
  },
  {
    id: 'trappole-e-intervalli',
    title: { it: 'Trappole e Intervalli', en: 'Trappole e Intervalli' },
    subtitle: {
      it: 'In «Il mio intervallo al Liceo Classico “Sannazaro” di Napoli. Antologia di racconti in memoria del Preside Michele De Vivo», a cura di Emilio Bova, Mario Rovinello e Andrea Tartaglia',
      en: 'In “Il mio intervallo al Liceo Classico ‘Sannazaro’ di Napoli. Antologia di racconti in memoria del Preside Michele De Vivo”, edited by Emilio Bova, Mario Rovinello and Andrea Tartaglia',
    },
    type: { it: 'Racconto in antologia', en: 'Short story in an anthology' },
    publisher: 'La Valle del Tempo Edizioni',
    year: 2024,
    isbn: '9791281678712',
    pages: '108',
    tone: 'sage',
    cover: '/covers/il-mio-intervallo.jpg',
    coverCredit: 'copia dell’autrice',
    synopsis: {
      it:
        'Il racconto si apre su una trappola che doveva scattare durante l’intervallo, ed era duplice, perché due dei soggetti non sapevano che ne sarebbero diventati protagonisti, e entrambi, senza saperlo, avevano organizzato il blitz nello stesso momento. Le protagoniste vere erano ragazze, e tre venivano dalla sez. D dell’ultima classe esclusivamente femminile del Liceo Sannazaro: l’ultima costretta al grembiule blu dall’ordinanza negli anni di ginnasio 1972/74, l’ultima a sedersi per tre anni davanti alla mitica professoressa di storia dell’arte Girosi, e a provare le terribili versioni di greco di Nike Cuzzopaulo Pannone, le lezioni dell’ultimo anno del sempre infreddolito professor Veltri. Soprattutto, erano quelle che avevano fondato il primo collettivo femminista di Napoli, il F.A.S. (Femministe Autonome Sannazzaro), che dal loro liceo si era esteso ad altre scuole e alla città intera. Sullo sfondo c’è l’occupazione di terzo liceo, finita su «Il Mattino» con un reportage fotografico che aveva alimentato i malumori di molti genitori; per fortuna i suoi, trasferitisi a Napoli da Roma, erano rimasti fedeli a «Il Messaggero», e quell’articolo non ebbe ripercussioni in casa.',
      en:
        'The story opens on a trap that was to spring during the break, and it was a double one, because two of the parties did not know they would become its protagonists, and both, unknowingly, had organised the blitz at the same moment. The real protagonists were girls, three of them from class D of the last all-female form of the Liceo Sannazaro: the last forced to wear the blue pinafore by the school regulation during the gymnasium years 1972/74, the last to sit for three years before the legendary art history teacher Girosi, and to try the terrible Greek versions of Nike Cuzzopaulo Pannone, the lessons of the final year of the always-cold professor Veltri. Above all, they were the ones who had founded the first feminist collective in Naples, the F.A.S. (Femministe Autonome Sannazzaro), which from their school had spread to other schools and to the whole city. In the background is the occupation of the third year of liceo, which filled the pages of “Il Mattino”, with a photo report that had fed the displeasure of many parents; fortunately hers, having moved to Naples from Rome, had stayed loyal to “Il Messaggero”, and that article had no repercussions at home.',
    },
    notes: [
      {
        it:
          'Il volume è confermato dalla scheda dell’editore: La Valle del Tempo Edizioni, 2024, ISBN 9791281678712, 108 pagine, euro 12,35. La copertina reca il titolo per intero, la dicitura «Antologia di racconti in memoria del Preside Michele De Vivo» e i tre curatori.',
        en:
          'The volume is confirmed by the publisher’s record: La Valle del Tempo Edizioni, 2024, ISBN 9791281678712, 108 pages, €12.35. The jacket carries the title in full, the wording “Antologia di racconti in memoria del Preside Michele De Vivo”, and the three editors.',
      },
      {
        it:
          'L’elenco dei contributori non si ricava dalle schede pubbliche consultate: il racconto è documentato dalla pagina del volume, che porta la firma «Claudia Origoni*» e la nota «Alunno dal 1972 al 1977».',
        en:
          'The list of contributors does not follow from the public records consulted: the story is documented by a page of the volume, which carries the signature “Claudia Origoni*” and the note “Alunno dal 1972 al 1977”.',
      },
    ],
    links: [
      {
        label: { it: 'La scheda dell’antologia', en: 'The anthology record' },
        href: 'https://www.lavalledeltempo.com/il-mio-intervallo-al-liceo-classico-sannazaro-di-napoli/',
      },
    ],
  },
  {
    id: 'echi',
    title: { it: 'Echi', en: 'Echi' },
    subtitle: {
      it: 'In «Echi», catalogo della mostra di Alessandra Festuccia, Galleria Atelier Morbiducci, Roma',
      en: 'In “Echi”, catalogue of Alessandra Festuccia’s exhibition, Galleria Atelier Morbiducci, Rome',
    },
    type: { it: 'Testo in catalogo di mostra', en: 'Exhibition catalogue text' },
    publisher: 'Galleria Atelier Morbiducci',
    year: 2013,
    tone: 'gold',
    cover: '/covers/echi.jpg',
    coverCredit: 'copia dell’autrice',
    synopsis: {
      it:
        'Il testo che introduce la mostra di Alessandra Festuccia alla Galleria Atelier Morbiducci di Roma prende la parola di Crizia nel Timeo di Platone, «Sta’ a udire, o Socrate una molto maravigliosa Istoria…», e con quella riapre il racconto di Atlantide, l’isola che il sacerdote di Sais espone a Solone perché gli uomini non dimentichino ciò che ciclicamente si ripropone. Le opere della Festuccia sono «bagnate» dell’acqua che sommerge quella terra mitica e ancestrale, presente da millenni nell’anima umana: sono fatte di terra argillosa ricca di sabbia, la chamotte, cotta al forno a 950/1000 gradi come un’eruzione e un incendio, con fogli di giornale e segatura, poi immerse nell’acqua che spegne il pezzo e ne fa emergere le incrostazioni metalliche, simili all’oricalco di cui erano rivestite le mura della città. La chiusura sposta il piano dal mito all’allarme: «Ecco cosa è “Echi” di Atlantide… una ricerca interiore, ma anche e soprattutto un campanello d’allarme per il PIANETA e per il Futuro degli Uomini e delle Donne». Il pezzo firma Claudia Origoni.',
      en:
        'The text introducing Alessandra Festuccia’s exhibition at the Galleria Atelier Morbiducci in Rome takes Critias’s words in Plato’s Timaeus, “Listen, Socrates, to a very marvellous story…”, and with them reopens the tale of Atlantis, the island the priest of Sais sets out to Solon so that men do not forget what cyclically returns. Festuccia’s works are “bathed” in the water that submerges that mythical and ancestral land, present for millennia in the human soul: they are made of clay rich in sand, the chamotte, fired in the kiln at 950/1000 degrees like an eruption and a fire, with newspaper sheets and sawdust, then plunged into the water that quenches the piece and brings out its metal encrustations, like the orichalcum that lined the walls of the city. The closing shifts the ground from myth to alarm: “This is what the ‘Echi’ of Atlantis is… an inner search and, above all, an alarm bell for the PLANET and for the Future of Men and Women”. The text is signed Claudia Origoni.',
    },
    notes: [
      {
        it:
          'Il colophon del catalogo dà il volume senza ISBN né prezzo: a cura di Renato Flenghi, testi di Claudia Origoni e Renato Flenghi, sonoro di Chino.K, riprese fotografiche di Martina Citro, grafica di Armando Bianchi, «finito di stampare Maggio 2013» presso Arti Grafiche Pomezia.',
        en:
          'The catalogue colophon gives the volume without ISBN or price: edited by Renato Flenghi, texts by Claudia Origoni and Renato Flenghi, sound by Chino.K, photographs by Martina Citro, graphics by Armando Bianchi, “finito di stampare Maggio 2013” printed by Arti Grafiche Pomezia.',
      },
      {
        it:
          'A tenere insieme il testo è il mito nelle sue tappe: Clito e Poseidone, le cinque coppie di gemelli, le dieci circoscrizioni governate da dieci re che una volta l’anno si giudicavano nel tempio di Poseidone, le caste di dodicimila anni fa che dispersero il sapere e la gloria dell’isola. Echi di Atlantide, per l’autrice, sono i rifiuti di plastica che viaggiano dispersi nei mari del pianeta formando isole di detriti, «segno solo della nostra improvvida arroganza e indifferenza».',
        en:
          'What holds the text together is the myth in its stages: Cleito and Poseidon, the five pairs of twins, the ten districts ruled by ten kings who judged one another once a year in the temple of Poseidon, the castes of twelve thousand years ago that scattered the island’s knowledge and glory. Echoes of Atlantis, for the author, are the plastic wastes drifting through the seas of the planet forming islands of debris, “only a sign of our heedless arrogance and indifference”.',
      },
    ],
    excerpt: {
      credit: {
        it:
          'Dalla pagina del catalogo «Echi», fotografata dall’autrice: il testo corre in tre colonne e qui si legge per intero, fino alla firma «Claudia Origoni» in fondo alla terza. L’epigrafe d’apertura, che nel volume esce in grassetto, qui sta nello stesso corpo della prosa. Le parole sono quelle stampate, refusi compresi, «sommerso» al posto di «sommerse» e «Qumram» per Qumran; la virgoletta che apre le parole del sacerdote resta senza chiusura, come nel volume. Il testo resta italiano anche nella versione inglese del sito.',
        en:
          'From the page in the “Echi” catalogue, photographed by the author: the text runs in three columns and appears here in full, down to the signature “Claudia Origoni” at the foot of the third. The opening epigraph, printed in bold in the volume, sits here at the weight of the prose. The wording is the one on the page, slips included, “sommerso” for “sommerse” and “Qumram” for Qumran; the quote mark that opens the priest’s words is left unclosed, as it is in the volume. The text stays in Italian in the English version of the site too.',
      },
      it: [
        '“Sta’ a udire, o Socrate una molto maravigliosa Istoria…”',
        'Con queste parole Crizia inizia il racconto di Atlantide nel Timeo di Platone e con le stesse è opportuno iniziare anche a presentare il lavoro e le opere di Alessandra Festuccia che proprio in questo momento storico così difficile per il Mondo e per il nostro Paese, ci lancia con i suoi Echi da Atlantide, messaggi antichi e avvertimenti preziosi.',
        'Le opere della Festuccia sono “bagnate” dell’acqua che sommerso questa terra mitica e ancestrale, presente da millenni nell’anima umana, intrise di riferimenti evanescenti e di effettivi richiami tecnici e reali altamente simbolici tanto da fare dell’Artista una “atlantidea reincarnazione”…',
        'Ma procediamo con ordine: il mito di Atlantide è connesso con l’epopea dell’Umanità, continente scomparso, ma riaffiorante e presente per mille e mille generazioni successive, attraverso ipotesi e ricerche scientifiche, esoteriche e archeologiche, sempre nuove e diverse, che ne alimentano il Mito e l’Utopia.',
        'Platone è il primo a parlarne nel Timeo e nel Crizia (355 a.c) e lo stesso Crizia nel raccontarlo la prima volta, ne colloca la sparizione 9000 anni prima, a causa di un inabissamento seguito forse ad un’eruzione vulcanica o ad un terremoto… facendo dire al sacerdote di Sais che accolse Solone (antenato di Crizia) quanto gli Uomini siano dimentichi delle cose che accadono e che ciclicamente si ripropongono: “O Solone, Solone, voi Greci siete sempre fanciulli”.',
        'Il monito è chiaro… gli uomini in genere, non mantengono traccia dei tanti disastri accaduti, delle cicliche catastrofi che si abbattono su di loro, soprattutto quando la Natura viene devastata e sfruttata in modo improprio e ognuno pensa di essere sempre l’evoluzione migliore di un passato oscuro… “Voi non ricordate che un solo diluvio sulla terra, là dove furono molti per lo passato - dice il sacerdote - e ritenete la vostra generazione migliore e più giusta e florida delle altre - mentre ancor più florida e meravigliosa fu Atlantide isola che si estendeva davanti alle colonne di Ercole che teneva imperio sovra la Libia in fino all’Egitto, e sovra l’Europa infino a Tirrenia che provò a conquistare anche la Grecia ma che fu invece respinta e poi successivamente vittima di disastri ecologici si inabissò.',
        'Atlantide era abitata da Clito una giovane di cui Poseidone s’innamorò, e prese con la forza. Per lei costruì una dimora sull’alto della montagna recintata da muri e fossati pieni di acqua.',
        'Visse a lungo con Clito e da lei ebbe 5 coppie di gemelli.',
        'Il maggiore dei figli si chiamava Atlante, a cui Poseidone concesse la supremazia dividendo il territorio in dieci circoscrizioni che a loro volta vennero governate da 10 re che si consultavano e si giudicavano tra loro una volta l’anno nel tempio di Poseidone. L’isola, che era ricchissima di minerali, di flora e di vegetazione, aveva numerose città ricche di ponti, sotterranei, passaggi segreti che nei secoli hanno alimentato la fantasia di generazioni di studiosi.',
        'La capitale era disegnata ad anelli concentrici le cui mura esterne erano ricoperte di un misterioso materiale: l’Oricalco, metallo dal colore del fuoco, mai più ritrovato nei secoli successivi, forse una lega di stagno e rame…',
        'Questo è il mito e la leggenda… Alessandra Festuccia è partita da qui e per riannodare i fili di una memoria esistenziale che lega cicli di generazioni, ha utilizzato una tecnica, il Raku, che ben simboleggia Atlantide:',
        'la terra argillosa (dell’isola) ricca di sabbia (chamotte) come quella che la bagnava, s’incendia nel forno a 950/1000° come per un’eruzione e un incendio… (che invano i cittadini atlantidei cercheranno di fermare soffocandone la forza) esattamente come accade nella fase della riduzione del pezzo attraverso l’utilizzo di segatura, fogli di giornale, ecc… fino all’immersione nell’acqua che spegne il pezzo… sommerge Atlantide, e ne fa emergere le iridescenze metallifere della ceramica che somigliano all’oricalco di cui erano rivestite le mura della città. La tecnica utilizzata da Alessandra per realizzare questi pezzi ci riporta al dramma di Atlantide e simbolicamente ed efficacemente lo sublima.',
        'Guardate nei riverberi dei pezzi che compongono i Frammenti, i visi evanescenti degli atlantidei che vi appaiono fermati dal fuoco dell’Oricalco, oppure nelle pergamene di Qumram gli ideogrammi e i simboli che riportavano i precetti dettati da Poseidone nella sala del Giudizio del Tempio che era nel centro della città, oppure gli Anemoni di mare che coprono “fluttuanti” i resti della civiltà troppo evoluta (a detta di numerosi interpreti) sepolta nel fango dell’Oceano e quindi causa essa stessa della sua rovina… mentre le Bolle ci parlano dei gorgogli dell’inabissamento, gli Elementi ci parlano dei relitti del naufragio del continente… i resti di abiti, di alberi, di costruzioni, trasportate dal vento e dal mare che, sulle coste di 12000 anni fa dispersero il Sapere e la Gloria di Atlantide per tutto il Mediterraneo e tutto il mondo conosciuto… simili nella loro tragedia ai nostri rifiuti di plastica che viaggiano dispersi nei mari del pianeta formando isole di detriti, segno solo della nostra improvvida arroganza e indifferenza che ci colpirà prima o poi come avvenne per Atlantide se non corriamo ai ripari.',
        'Ecco cosa è “Echi” di Atlantide… una ricerca interiore, ma anche e soprattutto un campanello d’allarme per il PIANETA e per il Futuro degli Uomini e delle Donne… queste Donne sul cui corpo ogni giorno viene commessa una violenza dall’India all’Italia, dall’America alla Polinesia e che nello sfrangiato e scomposto vestito di Clito ritrovano la forza per ricostruirsi una identità pezzo per pezzo, emozione su emozione, dolore su dolore, ricomponendo quella corazza che da sempre è in grado di Generare Vita…',
        'Atlantide in fin dei conti è la Metafora della Vita, dal liquido amniotico che la genera e che la sommerge all’utopia di un mondo perfetto che ci viene tramandato… e mai raggiunto.',
        'Usiamo bene la mostra di Alessandra Festuccia… è un viaggio interiore e una Eco da non sottovalutare…',
      ],
    },
  },
  {
    id: 'citazioni-di-una-vita',
    title: { it: 'Citazioni di una vita', en: 'Citazioni di una vita' },
    subtitle: {
      it: 'A pagina 69 di un volume collettaneo non ancora identificato',
      en: 'On page 69 of an edited volume not yet identified',
    },
    type: { it: 'Racconto in volume collettaneo', en: 'Short story in an edited volume' },
    tone: 'ink',
    draft: true,
    synopsis: {
      it:
        'Una pagina d’autore, e il pezzo prende due citazioni per tenerle aperte come una cornice. La prima è di Ennio Flaiano, dal «Tempo di uccidere»: «Forse l’esperienza è nel capire il valore di certe parole che la vita ci rivela lentamente e a volte non invano». La seconda è la frase di un uomo incontrato a Rabat: «Ogni uomo o donna di questo mondo ha la sua zattera per raggiungere Dio: tu sei cristiana perché sei nata a Roma, io musulmano perché nato a Rabat, ma Dio è Uno: accetta questo dono, non sporchiamo con il denaro queste parole». Da lì il racconto porta al 1 gennaio 1990 dentro una bottega del suk di Rabat, alla ricerca di una fibula d’argento antica: l’uomo che ha regalato quelle parole è seduto a terra su un tappeto berbero dai colori sgargianti, indossa una djellaba a righe bianche e nere e ha una barba lunga come quella di Zaccaria nella Cappella Sistina. Apre una bacheca impolverata e ne cava la fibula, un oggetto berbero fuso in modo approssimativo, chissà in quale villaggio del deserto, successivamente al 1906, con una moneta di vecchio corso che porta incisa la data 1284, l’anno da cui il Marocco conta le sue monete dall’Egira voluta da Maometto nel 622 d.C. L’avrebbe pagata volentieri qualche migliaio di lire, e invece Seffar gliela regala al termine di un discorso incominciato chissà perché intorno a Dio, in francese, fra due sconosciuti. Il suo negozio, all’ingresso della medina, si chiamava «L’ottava meraviglia del mondo».',
      en:
        'An author’s page, and the piece takes two quotations to hold them open like a frame. The first is Ennio Flaiano’s, from “Tempo di uccidere”: “Perhaps experience lies in understanding the value of certain words that life reveals to us slowly and sometimes not in vain”. The second is a sentence heard from a man met in Rabat: “Every man or woman in this world has their own raft to reach God: you are Christian because you were born in Rome, I Muslim because I was born in Rabat, but God is One: accept this gift, let us not soil these words with money”. From there the story carries us on 1 January 1990 into a workshop in the suk of Rabat, in search of an ancient silver fibula: the man who gave those words is sitting on the ground on a Berber carpet of blazing colours, wearing a djellaba with black and white stripes, his beard as long as Zachariah’s in the Sistine Chapel. He opens a dusty case and takes out the fibula, a Berber object roughly cast, who knows in what village of the desert, after 1906, from an old circulating coin engraved with the date 1284, the year Morocco counts its coins from the Hijra decreed by Muhammad in 622 AD. She would have gladly paid several thousand lire for it; instead Seffar gives it to her at the end of a conversation begun for reasons unknown around God, in French, between two strangers. His shop, at the entrance of the medina, was called “L’ottava meraviglia del mondo”, the eighth wonder of the world.',
    },
    notes: [
      {
        it:
          'La pagina arriva da una fotografia del volume inviata dall’autrice: fra le carte ricevute non ci sono né il frontespizio né il colophon, quindi contenitore, editore e anno restano da accertare, e la voce si pubblica come bozza.',
        en:
          'The page comes from a photograph of the volume sent by the author: among the papers received there is neither the title page nor the colophon, so container, publisher and year remain to be established, and the entry is published as a draft.',
      },
      {
        it:
          'Sopra il titolo stanno il nome dell’autrice e la qualifica «Imprenditrice e Scrittrice», in calce il numero 69: è quanto la pagina lascia sapere di sé.',
        en:
          'Above the title stand the author’s name and the qualification “Imprenditrice e Scrittrice”, at the foot the number 69: this is what the page lets be known about itself.',
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
