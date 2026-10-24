import { useState } from 'react'
import { motion, useMotionValueEvent, useReducedMotion, useScroll, useSpring } from 'framer-motion'
import { useLang } from '../i18n/LanguageContext'

export default function ScrollProgress() {
  const { t } = useLang()
  const reduce = useReducedMotion()
  const { scrollYProgress } = useScroll()
  const easedProgress = useSpring(scrollYProgress, { stiffness: 180, damping: 36, restDelta: 0.001 })
  const [value, setValue] = useState(() => {
    if (typeof window === 'undefined') return 0
    const range = document.documentElement.scrollHeight - window.innerHeight
    return range > 0 ? Math.round((window.scrollY / range) * 100) : 0
  })

  useMotionValueEvent(scrollYProgress, 'change', (progress) => {
    setValue(Math.round(progress * 100))
  })

  return (
    <motion.div
      role="progressbar"
      aria-label={t('a11y.pageProgress')}
      aria-valuemin={0}
      aria-valuemax={100}
      aria-valuenow={value}
      className="pointer-events-none fixed inset-x-0 top-0 z-[60] h-[3px] origin-left bg-gradient-to-r from-gold-dark via-gold to-terracotta"
      style={{ scaleX: reduce ? scrollYProgress : easedProgress }}
    />
  )
}
