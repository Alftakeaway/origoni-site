import { useEffect, useState } from 'react'
import { motion, useMotionValue, useSpring, useReducedMotion } from 'framer-motion'

/**
 * Soft gold cursor follower with spring physics.
 * Only shown on fine-pointer devices; disabled for reduced-motion users.
 */
export default function Cursor() {
  const reduce = useReducedMotion()
  const [enabled, setEnabled] = useState(false)
  const x = useMotionValue(-100)
  const y = useMotionValue(-100)
  const sx = useSpring(x, { stiffness: 250, damping: 28, mass: 0.6 })
  const sy = useSpring(y, { stiffness: 250, damping: 28, mass: 0.6 })
  const [hovering, setHovering] = useState(false)

  useEffect(() => {
    const fine = window.matchMedia('(pointer: fine)').matches
    const motionOk = !window.matchMedia('(prefers-reduced-motion: reduce)').matches
    setEnabled(fine && motionOk)
    if (!fine || !motionOk || reduce) return

    const move = (e) => {
      x.set(e.clientX)
      y.set(e.clientY)
    }
    const over = (e) => {
      setHovering(!!e.target.closest('a, button, [data-hoverable]'))
    }
    window.addEventListener('mousemove', move)
    window.addEventListener('mouseover', over)
    return () => {
      window.removeEventListener('mousemove', move)
      window.removeEventListener('mouseover', over)
    }
  }, [x, y, reduce])

  if (!enabled) return null

  return (
    <motion.div
      aria-hidden
      className="pointer-events-none fixed left-0 top-0 z-[90] hidden md:block"
      style={{ x: sx, y: sy }}
    >
      <motion.div
        className="-ml-3 -mt-3 rounded-full border border-gold/70"
        animate={{
          width: hovering ? 44 : 24,
          height: hovering ? 44 : 24,
          backgroundColor: hovering ? 'rgba(197,160,89,0.14)' : 'rgba(197,160,89,0.05)',
        }}
        transition={{ type: 'spring', stiffness: 300, damping: 25 }}
        style={{ marginLeft: hovering ? -22 : -12, marginTop: hovering ? -22 : -12 }}
      />
    </motion.div>
  )
}
