# Nella prosa italiana nessun trattino lungo

I campi `it` di questo repo non contengono `—`, e i segnaposto vuoti non usano un trattino come contenuto: l'editore o la città assenti spariscono dalla resa invece di comparire come lineetta. La ragione è che il trattino lungo tra inciso e inciso è il segno tipografico più riconoscibile del testo prodotto da una macchina, e questo è il sito pubblico di un'autrice di mestiere. L'inglese dei campi `en` lo conserva, perché in inglese è idioma.

Il vincolo non è visibile nel codice: lo verifica uno script esterno, che legge le stringhe decodificate dai moduli dati, dato che nel sorgente il carattere sta scritto come sequenza di escape e una ricerca testuale ordinaria sul file non lo vede.
