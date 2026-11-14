import { useEffect, useRef, useState } from 'react'
import { motion, useInView, useReducedMotion } from 'framer-motion'

/**
 * Fade-up-on-scroll wrapper. Respects prefers-reduced-motion by
 * rendering children with no transform/opacity animation.
 *
 * La pagina esce dalla build già scritta, quindi il contenuto non può partire
 * nascosto: si arma soltanto ciò che al montaggio sta sotto la piega, e lo si
 * nasconde in un colpo solo. Quello che il lettore vede già resta dov'è, anche
 * senza JavaScript e durante l'idratazione.
 */
export default function Reveal({ children, delay = 0, className = '', y = 32 }) {
  const reduce = useReducedMotion()
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })
  const [armed, setArmed] = useState(false)

  useEffect(() => {
    const el = ref.current
    if (reduce || !el || !('IntersectionObserver' in window)) return
    if (el.getBoundingClientRect().top < window.innerHeight - 80) return
    setArmed(true)
  }, [reduce])

  const nascosto = armed && !inView

  return (
    <motion.div
      ref={ref}
      className={className}
      initial={false}
      animate={nascosto ? { opacity: 0, y } : { opacity: 1, y: 0 }}
      transition={nascosto ? { duration: 0 } : { duration: 0.7, delay, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </motion.div>
  )
}
