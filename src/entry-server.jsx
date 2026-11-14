import { renderToString } from 'react-dom/server'
import App from './App.jsx'

// La stessa App che il browser idrata: niente albero separato da tenere
// allineato. Gli effetti non girano qui, quindi tutto ciò che legge il browser
// deve stare in un effetto o dietro un controllo.
export function render() {
  return renderToString(<App />)
}
