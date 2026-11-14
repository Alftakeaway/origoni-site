import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import './contrast.css'

const container = document.getElementById('root')
const albero = (
  <React.StrictMode>
    <App />
  </React.StrictMode>
)

// La build consegna la pagina già scritta (scripts/prerender.mjs): quando #root
// ha del contenuto si idrata, così il primo pittamento non viene cancellato e
// ridisegnato. Senza prerender, in dev, si parte dal guscio vuoto come prima.
if (container.firstElementChild) {
  ReactDOM.hydrateRoot(container, albero)
} else {
  ReactDOM.createRoot(container).render(albero)
}
