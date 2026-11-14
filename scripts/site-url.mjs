// L'indirizzo pubblico del sito, unico per gli script che generano feed e dati
// strutturati. Sta nei dati del sito perché lo legge anche il calendario che la
// pagina offre, e quella pagina si renderizza pure in Node dove `window` non
// esiste: quando arriva il dominio proprio si cambia una riga sola.
export { siteUrl as SITE } from '../src/data/site.js'
