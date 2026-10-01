import { useEffect } from 'react'
import { motion, useReducedMotion } from 'framer-motion'
import { X, ExternalLink, Quote } from 'lucide-react'
import { useLang } from '../i18n/LanguageContext'

/**
 * Immersive detail view for a featured work: synopsis, press quotes, links.
 * Locks body scroll and closes on Escape / backdrop click.
 */
export default function WorkModal({ work, onClose }) {
  const reduce = useReducedMotion()
  const { tr } = useLang()

  useEffect(() => {
    const onKey = (e) => e.key === 'Escape' && onClose()
    document.addEventListener('keydown', onKey)
    document.body.style.overflow = 'hidden'
    return () => {
      document.removeEventListener('keydown', onKey)
      document.body.style.overflow = ''
    }
  }, [onClose])

  return (
    <motion.div
      className="fixed inset-0 z-[70] flex items-center justify-center p-4 md:p-8"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      role="dialog"
      aria-modal="true"
      aria-label={tr(work.title)}
    >
      {/* Backdrop */}
      <div className="absolute inset-0 bg-ink/60 backdrop-blur-sm" onClick={onClose} />

      <motion.div
        initial={reduce ? { opacity: 0 } : { opacity: 0, y: 48, scale: 0.97 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        exit={reduce ? { opacity: 0 } : { opacity: 0, y: 32, scale: 0.97 }}
        transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
        className="relative max-h-[88vh] w-full max-w-3xl overflow-y-auto rounded-2xl bg-paper shadow-book-hover"
      >
        <button
          onClick={onClose}
          aria-label="Close"
          className="absolute right-4 top-4 z-10 rounded-full bg-paper/90 p-2.5 text-ink-soft shadow-card backdrop-blur transition-all duration-300 hover:rotate-90 hover:text-gold-dark"
        >
          <X size={18} />
        </button>

        <div className="grid md:grid-cols-[2fr_3fr]">
          {/* Cover */}
          <div className="relative h-64 overflow-hidden md:h-full">
            <img
              src={work.cover}
              alt={tr(work.title)}
              className="h-full w-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-ink/40 to-transparent md:bg-gradient-to-r" />
          </div>

          {/* Details */}
          <div className="p-7 md:p-9">
            <p className="eyebrow mb-3">
              {tr(work.type)} &middot; {work.year}
            </p>
            <h3 className="font-display text-3xl font-semibold leading-tight text-ink md:text-4xl">
              {tr(work.title)}
            </h3>
            <p className="mt-2 font-sans text-xs uppercase tracking-widest text-ink-muted">
              {work.publisher}
            </p>

            <p className="mt-6 text-[15px] leading-relaxed text-ink-soft">{tr(work.synopsis)}</p>

            {/* Press quotes */}
            <div className="mt-7 space-y-4">
              {work.reviews.map((r, i) => (
                <figure key={i} className="rounded-lg border-l-2 border-gold bg-paper-warm p-4">
                  <Quote size={14} className="mb-2 text-gold-dark" />
                  <blockquote className="font-serif text-lg italic leading-snug text-ink-soft">
                    {tr(r.quote)}
                  </blockquote>
                  <figcaption className="mt-2 font-sans text-[11px] uppercase tracking-widest text-ink-muted">
                    &mdash; {r.source}
                  </figcaption>
                </figure>
              ))}
            </div>

            {/* Links */}
            <div className="mt-8 flex flex-wrap gap-3">
              {work.links.map((l, i) => (
                <a
                  key={i}
                  href={l.href}
                  className={
                    i === 0
                      ? 'inline-flex items-center gap-2 rounded-full bg-ink px-6 py-3 font-sans text-xs uppercase tracking-widest text-paper transition-all duration-300 hover:bg-gold-dark hover:shadow-book'
                      : 'inline-flex items-center gap-2 rounded-full border border-ink/15 px-6 py-3 font-sans text-xs uppercase tracking-widest text-ink-soft transition-all duration-300 hover:border-gold hover:text-gold-dark'
                  }
                >
                  <ExternalLink size={13} />
                  {tr(l.label)}
                </a>
              ))}
            </div>
          </div>
        </div>
      </motion.div>
    </motion.div>
  )
}
