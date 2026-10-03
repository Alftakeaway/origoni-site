import { useEffect } from 'react'
import { motion, useReducedMotion } from 'framer-motion'
import { X, ExternalLink, BookMarked } from 'lucide-react'
import { useLang } from '../i18n/LanguageContext'
import BookCover from './BookCover'

/**
 * Immersive detail view for a work: synopsis, verified bibliographic facts,
 * external links. Locks body scroll and closes on Escape / backdrop click.
 */
export default function WorkModal({ work, onClose }) {
  const reduce = useReducedMotion()
  const { t, tr } = useLang()

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
          <div className="relative h-64 overflow-hidden md:h-[30rem] md:self-start">
            <BookCover work={work} large />
          </div>

          {/* Details */}
          <div className="p-7 md:p-9">
            <p className="eyebrow mb-3">
              {tr(work.type)} &middot; {work.year}
            </p>
            <h3 className="font-display text-3xl font-semibold leading-tight text-ink md:text-4xl">
              {tr(work.title)}
            </h3>
            {work.subtitle && (
              <p className="mt-2 font-serif text-lg italic leading-snug text-ink-muted">
                {tr(work.subtitle)}
              </p>
            )}
            <p className="mt-3 font-sans text-xs uppercase tracking-widest text-ink-muted">
              {work.publisher}
            </p>

            <p className="mt-6 text-[15px] leading-relaxed text-ink-soft">{tr(work.synopsis)}</p>

            {/* Dati bibliografici verificati */}
            <dl className="mt-7 grid grid-cols-2 gap-x-6 gap-y-3 rounded-lg border border-ink/10 bg-paper-warm p-5 text-sm">
              <div>
                <dt className="font-sans text-[10px] uppercase tracking-widest text-ink-muted">
                  {t('work.isbn')}
                </dt>
                <dd className="mt-1 tabular-nums text-ink-soft">{work.isbn}</dd>
              </div>
              <div>
                <dt className="font-sans text-[10px] uppercase tracking-widest text-ink-muted">
                  {t('work.year')}
                </dt>
                <dd className="mt-1 text-ink-soft">{work.year}</dd>
              </div>
              {work.pages && (
                <div>
                  <dt className="font-sans text-[10px] uppercase tracking-widest text-ink-muted">
                    {t('work.pages')}
                  </dt>
                  <dd className="mt-1 text-ink-soft">{work.pages}</dd>
                </div>
              )}
              {work.coAuthors && (
                <div>
                  <dt className="font-sans text-[10px] uppercase tracking-widest text-ink-muted">
                    {t('work.coAuthors')}
                  </dt>
                  <dd className="mt-1 text-ink-soft">{work.coAuthors}</dd>
                </div>
              )}
            </dl>

            {/* Note e contesto */}
            <div className="mt-7 space-y-4">
              {(work.notes ?? []).map((n, i) => (
                <div key={i} className="flex gap-3 border-l-2 border-gold pl-4">
                  <BookMarked size={15} className="mt-1 shrink-0 text-gold-dark" />
                  <p className="font-serif text-[17px] leading-snug text-ink-soft">{tr(n)}</p>
                </div>
              ))}
            </div>

            {/* Links */}
            <div className="mt-8 flex flex-wrap gap-3">
              {work.links.map((l, i) => (
                <a
                  key={i}
                  href={l.href}
                  target="_blank"
                  rel="noopener noreferrer"
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

            {work.coverCredit && (
              <p className="mt-6 font-sans text-[10px] uppercase tracking-widest text-ink-muted">
                {t('work.coverSource')} {work.coverCredit}
              </p>
            )}
          </div>
        </div>
      </motion.div>
    </motion.div>
  )
}
