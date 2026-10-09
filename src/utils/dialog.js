import { useEffect, useRef } from 'react'

// Un pannello che copre la pagina deve prendersi anche il fuoco: senza, chi
// usa la tastiera resta a scorrere il contenuto che non vede più, e al ritorno
// perde il punto da cui era partito. Si apre una volta sola, perché il
// `onClose` del chiamante è una funzione nuova a ogni render.
export function useDialog(onClose) {
  const ref = useRef(null)
  const close = useRef(onClose)
  close.current = onClose

  useEffect(() => {
    const panel = ref.current
    const previous = document.activeElement
    const overflow = document.body.style.overflow
    panel?.focus()
    document.body.style.overflow = 'hidden'

    const onKey = (e) => {
      if (e.key === 'Escape') {
        close.current()
        return
      }
      if (e.key !== 'Tab' || !panel) return
      const stops = [...panel.querySelectorAll('a[href], button:not([disabled]), [tabindex]:not([tabindex="-1"])')]
      if (!stops.length) return
      const first = stops[0]
      const last = stops[stops.length - 1]
      const at = document.activeElement
      if (e.shiftKey && (at === first || at === panel)) {
        e.preventDefault()
        last.focus()
      } else if (!e.shiftKey && at === last) {
        e.preventDefault()
        first.focus()
      }
    }

    document.addEventListener('keydown', onKey, true)
    return () => {
      document.removeEventListener('keydown', onKey, true)
      document.body.style.overflow = overflow
      if (previous instanceof HTMLElement) previous.focus()
    }
  }, [])

  return ref
}
