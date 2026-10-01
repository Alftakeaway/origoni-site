import { motion, useReducedMotion } from 'framer-motion'

/**
 * Fade-up-on-scroll wrapper. Respects prefers-reduced-motion by
 * rendering children with no transform/opacity animation.
 */
export default function Reveal({ children, delay = 0, className = '', y = 32 }) {
  const reduce = useReducedMotion()

  if (reduce) return <div className={className}>{children}</div>

  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-80px' }}
      transition={{ duration: 0.7, delay, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </motion.div>
  )
}
