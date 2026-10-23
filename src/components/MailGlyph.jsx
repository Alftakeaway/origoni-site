import { useEffect, useRef } from 'react'

// L'indirizzo si dipinge su un canvas: resta leggibile a chi guarda la pagina, ma
// nel DOM non c'è nessuna stringa con la chiocciola da raccogliere, e il `mailto`
// si costruisce solo nell'istante del clic, quindi non sta nemmeno negli
// attributi. È nascondimento, non protezione: uno screenshot con OCR lo riprende.
export default function MailGlyph({ email, label, className = '', children }) {
  const ref = useRef(null)

  useEffect(() => {
    const canvas = ref.current
    if (!canvas || !email) return
    let vivo = true

    const disegno = () => {
      if (!vivo) return
      const st = getComputedStyle(canvas)
      // `zoom` sul radice è come il sito ingrandisce il testo su richiesta: il
      // font-size computato resta quello piccolo, quindi il canvas va moltiplicato
      // a mano, altrimenti la riga si ingrandisce sgranata.
      const zoom = parseFloat(getComputedStyle(document.documentElement).zoom) || 1
      const spec = [st.fontStyle, st.fontWeight, st.fontSize, st.fontFamily].join(' ')
      const misura = canvas.getContext('2d')
      misura.font = spec
      const largo = Math.ceil(misura.measureText(email).width)
      const alto = Math.ceil(parseFloat(st.lineHeight) || parseFloat(st.fontSize) * 1.4)
      const dpr = (window.devicePixelRatio || 1) * zoom
      canvas.width = Math.round(largo * dpr)
      canvas.height = Math.round(alto * dpr)
      canvas.style.width = `${largo}px`
      canvas.style.height = `${alto}px`
      const ctx = canvas.getContext('2d')
      ctx.scale(dpr, dpr)
      ctx.font = spec
      ctx.fillStyle = st.color
      ctx.textBaseline = 'middle'
      ctx.clearRect(0, 0, largo, alto)
      ctx.fillText(email, 0, alto / 2)
    }

    // Il webfont arriva dopo il primo pittamento: senza aspettare, le misure
    // sono quelle del carattere sostitutivo e la riga viene larga male.
    const st = getComputedStyle(canvas)
    const spec = [st.fontStyle, st.fontWeight, st.fontSize, st.fontFamily].join(' ')
    Promise.all([document.fonts.ready, document.fonts.load(spec, email).catch(() => null)]).then(disegno)
    window.addEventListener('resize', disegno)
    // Le preferenze di lettura cambiano gli attributi di `html` (zoom e alto
    // contrasto) e un canvas non si rifà da solo: senza questo resterebbe fermo
    // al corpo e al colore con cui è stato dipinto la prima volta.
    const osserva = new MutationObserver(disegno)
    osserva.observe(document.documentElement, { attributes: true, attributeFilter: ['class', 'style'] })
    return () => {
      vivo = false
      osserva.disconnect()
      window.removeEventListener('resize', disegno)
    }
  }, [email])

  return (
    <button
      type="button"
      aria-label={label}
      onClick={() => {
        window.location.href = `mailto:${email}`
      }}
      className={className}
    >
      {children}
      <canvas ref={ref} aria-hidden="true" className="block" />
    </button>
  )
}
