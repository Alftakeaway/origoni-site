# I caratteri si servono da casa, non da Google Fonts

Il foglio di stile di Google dichiarava ventuno facce su due connessioni a un dominio terzo per
una pagina che si legge in una lingua sola, e chiedeva i tipi dopo aver mostrato il testo, che
quindi si ricomponeva. Ora il sito porta cinque file woff2 nel solo subset latin, per un totale di
circa 139 KB dal proprio dominio: Cormorant al 400 dritto e corsivo, Playfair Display corsivo più
un file a peso variabile che tiene il dritto dal 400 al 600, Plus Jakarta Sans a peso variabile.
Tre di questi sono in preload perché stanno nella parte di pagina che si vede senza scorrere,
gli altri due arrivano quando servono. Il costo è che aggiornare un carattere non è più cambiare un indirizzo: si scarica
il subset dalla fonderia e si sostituisce il file. Il guadagno è che nessuna richiesta esce
dall'origine, nessun cookie di terze parti tocca chi arriva sul sito, e le parole restano dove sono.
