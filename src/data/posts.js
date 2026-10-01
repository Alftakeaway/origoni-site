// Journal posts. `blocks` render the long-form reading view:
// { type: 'p', text: { it, en } } for paragraphs, { type: 'quote', text: { it, en } } for pull quotes.
// Categories are stable keys; labels come from the i18n dictionaries.
export const categoryKeys = ['reviews', 'essays', 'notes']

export const posts = [
  {
    id: 'pachinko-review',
    title: {
      it: 'Il secolo lungo di \u00abPachinko\u00bb di Min Jin Lee',
      en: 'The Long Century in Min Jin Lee\u2019s \u2018Pachinko\u2019',
    },
    category: 'reviews',
    date: { it: '18 settembre 2026', en: 'September 18, 2026' },
    readTime: 9,
    excerpt: {
      it:
        'La storia chiede a questo romanzo un\u2019attenzione paziente, e Lee la ripaga quattro volte. Sull\u2019architettura di una saga familiare che rifiuta la consolazione di una sola patria.',
      en:
        'History asked of this novel is patient attention, and Lee repays it fourfold. On the architecture of a family saga that refuses the comfort of a single homeland.',
    },
    cover:
      'https://images.unsplash.com/photo-1512820790803-83ca734da794?auto=format&fit=crop&w=900&q=80',
    blocks: [
      {
        type: 'p',
        text: {
          it:
            'Le grandi saghe familiari condividono un segreto: non parlano mai davvero delle famiglie. Parlano delle correnti in cui le famiglie sono costrette a nuotare \u2014 la storia, la migrazione, il denaro, la vergogna. Pachinko di Min Jin Lee lo capisce meglio di quasi ogni romanzo dell\u2019ultimo decennio, ed \u00e8 per questo che il suo celebre incipit, \u00abLa storia ci ha traditi, ma non importa\u00bb, suona non come rassegnazione ma come promessa.',
          en:
            'Great family sagas share a secret: they are never really about families. They are about the currents that families are forced to swim in \u2014 history, migration, money, shame. Min Jin Lee\u2019s Pachinko understands this better than almost any novel of the last decade, which is why its famous opening line, \u201cHistory has failed us, but no matter,\u201d lands not as resignation but as a promise.',
        },
      },
      {
        type: 'quote',
        text: {
          it: 'La storia ci ha traditi, ma non importa. La frase d\u2019apertura pi\u00f9 generosa della narrativa contemporanea.',
          en: 'History has failed us, but no matter. The most generous opening sentence in contemporary fiction.',
        },
      },
      {
        type: 'p',
        text: {
          it:
            'A rileggerlo, ci\u00f2 che colpisce \u00e8 la misura di Lee. La tentazione, con quattro generazioni di coreani zainichi in Giappone, \u00e8 il melodramma, e il melodramma sarebbe stato perdonabile. Invece la prosa resta piana, quasi austera, e l\u2019emozione si accumula come la neve su un ramo \u2014 invisibile, finch\u00e9 il suo peso non spezza qualcosa.',
          en:
            'What strikes me on rereading is Lee\u2019s restraint. The temptation with four generations of Zainichi Koreans in Japan is melodrama, and melodrama would have been forgivable. Instead, the prose stays plain, almost austere, and the emotion accumulates the way snow accumulates on a branch \u2014 invisibly, until the weight of it breaks something.',
        },
      },
      {
        type: 'p',
        text: {
          it:
            'Sunja, la matriarca del romanzo, \u00e8 una delle madri meno sentimentali della narrativa. Il suo amore si esprime come lavoro: kimchi preparato al buio, mercati attraversati a piedi, bocche sfamate. Lee non la spiega mai, non ci concede il monologo interiore nei momenti in cui lo desideriamo di pi\u00f9. Come i suoi figli, siamo costretti a dedurre l\u2019amore da ci\u00f2 che fa.',
          en:
            'Sunja, the novel\u2019s matriarch, is one of the least sentimental mothers in fiction. Her love expresses itself as labor: kimchi made in the dark, markets walked, mouths fed. Lee never explains her, never grants us interior monologue at the moments we most want it. We are made, as her children are, to infer love from what it does.',
        },
      },
      {
        type: 'quote',
        text: {
          it: 'Come i suoi figli, siamo costretti a dedurre l\u2019amore da ci\u00f2 che fa.',
          en: 'We are made, as her children are, to infer love from what it does.',
        },
      },
      {
        type: 'p',
        text: {
          it:
            'Se il romanzo ha un difetto, \u00e8 quello che aveva anche Tolstoj: l\u2019ultima generazione \u00e8 meno viva della prima. Noa e Mozasu reggono il tema magnificamente, ma non il dolore. Eppure anche questo potrebbe essere intenzionale \u2014 l\u2019appiattirsi della memoria mentre un popolo si assimila, la saga che diventa quietamente una vita.',
          en:
            'If the novel has a flaw, it is the one Tolstoy also had: the later generation is less vivid than the first. Noa and Mozasu carry the theme beautifully but not the ache. Yet this too may be intentional \u2014 the flattening of memory as a people assimilates, the saga quietly becoming a life.',
        },
      },
      {
        type: 'p',
        text: {
          it:
            'Verdetto: essenziale. Leggetelo in autunno, lentamente, tenendo vicino l\u2019elenco dei nomi. Quattro stelle e mezza; la mezza \u00e8 un omaggio a quanto raramente una pazienza simile sopravviva al lavoro editoriale.',
          en:
            'Verdict: essential. Read it in autumn, slowly, and keep the glossary of names close. Four and a half stars, the half a tribute to how rarely patience like this survives the editing process.',
        },
      },
    ],
  },
  {
    id: 'against-speed-reading',
    title: { it: 'In difesa della lettura lenta', en: 'In Defense of Slow Reading' },
    category: 'essays',
    date: { it: '30 agosto 2026', en: 'August 30, 2026' },
    readTime: 7,
    excerpt: {
      it:
        'Oggi ottimizziamo tutto \u2014 i tragitti, il sonno, i libri. Ma un romanzo non \u00e8 contenuto da consumare: \u00e8 una macchina per produrre un certo tipo di tempo.',
      en:
        'We optimize everything now \u2014 our commutes, our sleep, our books. But a novel is not content to be consumed. It is a machine for producing a particular kind of time.',
    },
    cover:
      'https://images.unsplash.com/photo-1481627834876-b7833e8f5570?auto=format&fit=crop&w=900&q=80',
    blocks: [
      {
        type: 'p',
        text: {
          it:
            'Da qualche parte, negli ultimi dieci anni, la lettura \u00e8 entrata nell\u2019economia del benessere. Le app contano le pagine come i passi; i corsi di lettura veloce promettono tutto Middlemarch in un pomeriggio. Vorrei sostenere che \u00e8 un errore di categoria \u2014 e dei pi\u00f9 costosi.',
          en:
            'Somewhere in the last ten years, reading joined the wellness economy. Apps now track our pages like steps; speed-reading courses promise the whole of Middlemarch in an afternoon. I want to argue that this is a category error \u2014 and a costly one.',
        },
      },
      {
        type: 'p',
        text: {
          it:
            'Un romanzo non \u00e8 contenuto. \u00c8 una macchina per produrre un certo tipo di tempo. Quando George Eliot rallenta per descrivere la luce in una biblioteca, non sta allungando il conteggio delle parole: sta insegnando al vostro sistema nervoso a muoversi alla velocit\u00e0 della sua attenzione morale. Leggetelo in fretta e ricevete la trama. Leggetelo lentamente e ricevete la persona che il libro sta cercando di farvi diventare per quattrocento pagine.',
          en:
            'A novel is not content. It is a machine for producing a particular kind of time. When George Eliot slows to describe the light in a library, she is not padding the word count; she is teaching your nervous system to move at the speed of her moral attention. Read it fast and you receive the plot. Read it slowly and you receive the person she is trying to make you become for four hundred pages.',
        },
      },
      {
        type: 'quote',
        text: {
          it: 'Leggetelo in fretta e ricevete la trama. Leggetelo lentamente e ricevete la persona che il libro sta cercando di farvi diventare.',
          en: 'Read it fast and you receive the plot. Read it slowly and you receive the person the book is trying to make you become.',
        },
      },
      {
        type: 'p',
        text: {
          it:
            'C\u2019\u00e8 anche una ragione di mestiere. Le frasi migliori della prosa narrativa sono costruite per essere rilette \u2014 una cerniera di sintassi che gira il significato al secondo contatto. La lettura veloce \u00e8 strutturalmente incapace di coglierle, come un turista su un autobus non pu\u00f2 cogliere il volto di nessuno, in strada.',
          en:
            'There is a craft reason for this too. The best sentences in prose fiction are built to be reread \u2014 a hinge of syntax that turns the meaning on second contact. Speed reading is structurally incapable of catching these, the way a tourist on a bus cannot catch the face of anyone on the street.',
        },
      },
      {
        type: 'p',
        text: {
          it:
            'Ecco dunque la mia prescrizione impopolare: un libro alla volta. Margini incoraggiati. Ritornate sui paragrafi come si ritorna su una piazza. Lasciate che un romanzo si prenda tre settimane, e pazienza se la vostra app di lettura disapprova. Non siete una macchina che consuma contenuti. Siete una persona, in corso di lenta riscrittura.',
          en:
            'So here is my unfashionable prescription: one book at a time. Marginalia encouraged. Revisit paragraphs the way you\u2019d revisit a town square. Let a novel take three weeks and be the worse for it in the eyes of your reading app. You are not a machine consuming content. You are a person, being slowly rewritten.',
        },
      },
    ],
  },
  {
    id: 'second-act-problem',
    title: { it: 'Il secondo atto \u00e8 tutto l\u2019atto', en: 'The Second Act Is the Whole Act' },
    category: 'notes',
    date: { it: '12 agosto 2026', en: 'August 12, 2026' },
    readTime: 6,
    excerpt: {
      it:
        'Appunti da diciotto mesi di revisione di un romanzo che crollava sempre nel mezzo \u2014 e dall\u2019accorgimento strutturale che alla fine l\u2019ha retto.',
      en:
        'Notes from eighteen months of revising a novel that kept collapsing in the middle \u2014 and the structural trick that finally held it up.',
    },
    cover:
      'https://images.unsplash.com/photo-1456513080510-7bf3a84b82f8?auto=format&fit=crop&w=900&q=80',
    blocks: [
      {
        type: 'p',
        text: {
          it:
            'Ogni stesura di Le ore della lanterna moriva nello stesso punto: intorno a pagina centoquaranta, dove la premessa era spesa e il finale non ancora visibile. Per un anno l\u2019ho trattato come un problema di scene. Era un problema di struttura.',
          en:
            'Every draft of The Lantern Hours died in the same place: around page one hundred and forty, where the premise had been spent and the ending was not yet visible. For a year I treated this as a scene problem. It was a structure problem.',
        },
      },
      {
        type: 'p',
        text: {
          it:
            'L\u2019accorgimento che ha salvato il libro viene dalla saggistica: ho scritto in una frase che cosa il secondo atto dovesse davvero sostenere. Non ci\u00f2 che accade \u2014 ci\u00f2 che afferma. Il mio \u00e8 risultato essere: \u00abla memoria \u00e8 un lavoro di riparazione\u00bb. Ogni scena che non faceva avanzare o complicava quell\u2019affermazione \u00e8 stata tagliata, per quanto bella. Quaranta pagine sono morte. Il libro ha cominciato a respirare.',
          en:
            'The trick that saved the book was borrowed from nonfiction: I wrote a one-sentence claim for what the second act was actually about. Not what happens \u2014 what it argues. Mine turned out to be \u201cmemory is a kind of repair work.\u201d Every scene that didn\u2019t advance or complicate that claim got cut, however beautiful. Forty pages died. The book started breathing.',
        },
      },
      {
        type: 'quote',
        text: {
          it: 'Non ci\u00f2 che accade \u2014 ci\u00f2 che afferma. Ogni scena che non faceva avanzare l\u2019affermazione \u00e8 stata tagliata, per quanto bella.',
          en: 'Not what happens \u2014 what it argues. Every scene that didn\u2019t advance the claim got cut, however beautiful.',
        },
      },
      {
        type: 'p',
        text: {
          it:
            'Una seconda abitudine ha aiutato altrettanto: il rovesciamento di met\u00e0 libro deve rileggere il primo atto, non scalarlo. I lettori perdonano un mezzo lento quando il mezzo spiega segretamente di nuovo tutto ci\u00f2 che precede. Sebald lo fa di continuo; e anche ogni buon giallo che meriti il nome.',
          en:
            'A second habit helped equally: the midpoint reversal should reframe the first act, not escalate it. Readers forgive a slow middle when the middle secretly re-explains everything before it. Sebald does this constantly; so does every good mystery worth the name.',
        },
      },
      {
        type: 'p',
        text: {
          it:
            'Se la vostra stesura si affloscia, resistete alla tentazione di aggiungere. Chiedetevi che cosa sostiene il mezzo, poi sottraete finch\u00e9 resta solo l\u2019argomento. Il secondo atto non \u00e8 la parte difficile dello scrivere un romanzo. \u00c8 tutto l\u2019atto.',
          en:
            'If your draft is sagging, resist the urge to add. Ask what the middle is arguing, then subtract until only the argument remains. The second act isn\u2019t the hard part of writing a novel. It\u2019s the whole act.',
        },
      },
    ],
  },
  {
    id: 'gilead-review',
    title: { it: 'Rileggere \u00abGilead\u00bb a quarant\u2019anni', en: 'Rereading \u2018Gilead\u2019 at Forty' },
    category: 'reviews',
    date: { it: '22 luglio 2026', en: 'July 22, 2026' },
    readTime: 8,
    excerpt: {
      it:
        'La lettera di Robinson a un figlio che non vediamo si legge diversamente a ogni decennio della vita. A venticinque anni pensavo fosse un libro sulla fede. Ora so che \u00e8 un libro sui padri.',
      en:
        'Robinson\u2019s letter to an unseen son reads differently every decade of your life. At twenty-five I thought it was a book about faith. Now I know it is a book about fathers.',
    },
    cover:
      'https://images.unsplash.com/photo-1507842217343-583bb7270b66?auto=format&fit=crop&w=900&q=80',
    blocks: [
      {
        type: 'p',
        text: {
          it:
            'Gilead di Marilynne Robinson \u00e8 scritto come la lettera di un pastore morente al figlio piccolo, il che ne fa uno dei pochi romanzi il cui vero destinatario \u00e8 il futuro. A venticinque anni lo lessi come un libro sulla fede. A quaranta, \u00e8 inconfondibilmente un libro sui padri.',
          en:
            'Marilynne Robinson\u2019s Gilead is written as a dying minister\u2019s letter to his young son, which means it is one of the few novels whose actual addressee is the future. At twenty-five I read it as a book about faith. At forty, it is unmistakably a book about fathers.',
        },
      },
      {
        type: 'quote',
        text: {
          it: 'Ovunque volgi gli occhi, il mondo pu\u00f2 brillare come una trasfigurazione. Non devi portargli niente, se non un po\u2019 di volont\u00e0 di vedere.',
          en: 'Wherever you turn your eyes the world can shine like transfiguration. You don\u2019t have to bring anything to it except a little willingness to see.',
        },
      },
      {
        type: 'p',
        text: {
          it:
            'La pazienza del romanzo per le cose piccole \u2014 l\u2019acqua, la luce, il rumore di un bambino al piano di sopra \u2014 non \u00e8 decorazione. \u00c8 la teologia di Ames resa tattile: il mondo come dono che continua ad arrivare. Robinson si fida del lettore fino a fargliene sentire il peso senza una sola voce alzata.',
          en:
            'The novel\u2019s patience with small things \u2014 water, light, the sound of a child upstairs \u2014 is not decoration. It is Ames\u2019s theology made tactile: the world as a gift that keeps arriving. Robinson trusts the reader to feel the weight of this without a single raised voice.',
        },
      },
      {
        type: 'p',
        text: {
          it:
            'La sottotrama di Boughton, che a venticinque anni mi irritava come un\u2019interruzione, \u00e8 ora il cuore scuro del romanzo: la grazia pi\u00f9 difficile \u00e8 quella che dobbiamo porgere alla persona che pi\u00f9 ci \u00e8 antipatica. Ogni rilettura ha spostato il centro del libro, e sospetto che sia esattamente il suo disegno. Un romanzo che invecchia con te \u00e8 pi\u00f9 raro di uno che invecchia bene.',
          en:
            'The Boughton subplot, which irritated me at twenty-five as an interruption, is now the novel\u2019s dark heart: the grace that comes hardest is the grace we must extend to the person we most resent. Every rereading has moved the center of the book, and I suspect that is precisely its design. A novel that ages with you is rarer than one that ages well.',
        },
      },
    ],
  },
  {
    id: 'notebooks-ritual',
    title: { it: 'I miei quaderni non servono alle idee', en: 'My Notebooks Are Not for Ideas' },
    category: 'notes',
    date: { it: '30 giugno 2026', en: 'June 30, 2026' },
    readTime: 5,
    excerpt: {
      it:
        'Perch\u00e9 tengo un commonplace book, un diario dei sogni e un archivio degli scarti \u2014 e come mai \u00e8 il terzo a fare quasi tutto il lavoro.',
      en:
        'Why I keep a commonplace book, a dream journal and a \u2018rubbish\u2019 file \u2014 and how the third one does most of the work.',
    },
    cover:
      'https://images.unsplash.com/photo-1517842645767-c639042777db?auto=format&fit=crop&w=900&q=80',
    blocks: [
      {
        type: 'p',
        text: {
          it:
            'La gente crede che il quaderno di uno scrittore serva a conservare le idee. Il mio somiglia piuttosto a un cumulo di compost. Il punto non \u00e8 la conservazione ma la fermentazione: frasi sentite sui treni, sogni ricordati a met\u00e0, il colore esatto di un livido visto in un corridoio d\u2019ospedale.',
          en:
            'People assume a writer\u2019s notebook is where ideas are stored. Mine is closer to a compost heap. The point is not preservation but fermentation \u2014 phrases overheard on trains, half-remembered dreams, the exact color of a bruise seen in a hospital corridor.',
        },
      },
      {
        type: 'p',
        text: {
          it:
            'Tengo tre archivi. Il commonplace book ospita le frasi degli altri: versi dai romanzi, necrologi, scatole di cereali. Il diario dei sogni sono due pagine al risveglio, senza interpretazioni. Il terzo, niente affatto glamour, \u00e8 l\u2019archivio degli scarti \u2014 ogni paragrafo tagliato, ogni incipit abbandonato. \u00c8 quello a fare quasi tutto il lavoro.',
          en:
            'I keep three files. The commonplace book holds other people\u2019s sentences: lines from novels, obituaries, cereal boxes. The dream journal is two pages on waking, no interpretation. The third, unglamorous one, is the rubbish file \u2014 every cut paragraph, every abandoned opening. That file does most of the work.',
        },
      },
      {
        type: 'quote',
        text: {
          it: 'Il mio quaderno non \u00e8 un archivio di idee. \u00c8 un cumulo di compost. Il punto \u00e8 la fermentazione, non la conservazione.',
          en: 'My notebook is not an archive of ideas. It is a compost heap. The point is fermentation, not preservation.',
        },
      },
      {
        type: 'p',
        text: {
          it:
            'Perch\u00e9 i paragrafi tagliati non sono fallimenti: sono scorte. Met\u00e0 delle scene migliori di Le ore della lanterna \u00e8 nata come pagina scartata da La stagione del sale, compostata per due anni finch\u00e9 non trovava un posto nuovo. Niente si cancella: tutto matura.',
          en:
            'Because cut paragraphs are not failures; they are inventory. Half the best scenes in The Lantern Hours began as discarded pages from The Salt Season, composted for two years until they fit somewhere new. Nothing is deleted, only ripening.',
        },
      },
    ],
  },
  {
    id: 'translation-essay',
    title: { it: 'Che cosa dobbiamo al traduttore', en: 'What We Owe the Translator' },
    category: 'essays',
    date: { it: '14 maggio 2026', en: 'May 14, 2026' },
    readTime: 10,
    excerpt: {
      it:
        'Ogni romanzo che avete amato in italiano \u00e8 stato, in un certo senso, scritto due volte. Un caso per accreditare, pagare e leggere i traduttori come autori.',
      en:
        'Every novel you have loved in English was, in some sense, written twice. A case for crediting, paying and reading translators as authors.',
    },
    cover:
      'https://images.unsplash.com/photo-1457369804613-52c61a468e7d?auto=format&fit=crop&w=900&q=80',
    blocks: [
      {
        type: 'p',
        text: {
          it:
            'Quando diciamo di \u00abamare Murakami\u00bb, quale Murakami amiamo? Per i lettori italiani \u00e8 in buona parte quello di Antonietta Pastore e di Giorgio Amitrano; per una generazione di lettori americani, Jay Rubin e Philip Gabriel. Le frasi che hanno riordinato la vostra vita interiore sono state scelte, una a una, da una persona il cui nome appare in corpo otto sul colophon.',
          en:
            'When we say we \u201clove Murakami,\u201d which Murakami do we love? For American readers it is substantially Jay Rubin and Philip Gabriel; for a generation of British readers, Alfred Birnbaum. The sentences that rearranged your interior life were chosen, one by one, by a person whose name appears on the copyright page in eight-point type.',
        },
      },
      {
        type: 'p',
        text: {
          it:
            'Tradurre non \u00e8 copiare con difficolt\u00e0. \u00c8 scrivere sotto vincolo \u2014 il vincolo del significato altrui \u2014 e ogni traduttore prende migliaia di piccole decisioni autoriali che un romanziere prende una volta sola. Il traduttore che rende un gioco di parole intraducibile ha scritto una battuta che non \u00e8 mai esistita.',
          en:
            'Translation is not copying with difficulty. It is writing under constraint \u2014 the constraint of another person\u2019s meaning \u2014 and every translator makes thousands of small authorial decisions that a novelist makes once. The translator who renders a pun untranslatable has written a joke that never existed.',
        },
      },
      {
        type: 'quote',
        text: {
          it: 'Le frasi che hanno riordinato la vostra vita interiore sono state scelte, una a una, da una persona in corpo otto sul colophon.',
          en: 'The sentences that rearranged your interior life were chosen, one by one, by a person in eight-point type on the copyright page.',
        },
      },
      {
        type: 'p',
        text: {
          it:
            'Ci\u00f2 che dobbiamo \u00e8 concreto: il nome del traduttore in copertina, royalty invece di compensi forfettari, e \u2014 la cosa pi\u00f9 alla portata di un lettore \u2014 curiosit\u00e0. Seguite i traduttori come seguite gli autori. Leggete un libro perch\u00e9 l\u2019ha tradotto quella persona. Il canone della letteratura mondiale \u00e8, in pratica, un canone di persone che l\u2019hanno scritta due volte.',
          en:
            'What we owe is concrete: the translator\u2019s name on the cover, royalties rather than flat fees, and \u2014 most within a reader\u2019s power \u2014 curiosity. Follow translators the way you follow authors. Read a book because Ann Goldstein translated it. The canon of world literature is, in practice, a canon of people who wrote it twice.',
        },
      },
    ],
  },
]
