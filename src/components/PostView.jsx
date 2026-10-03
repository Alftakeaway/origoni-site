import { useEffect, useRef } from 'react'
import { motion, useScroll, useSpring, useReducedMotion } from 'framer-motion'
import { X, ArrowLeft, Clock, PencilLine } from 'lucide-react'
import { useLang } from '../i18n/LanguageContext'

/**
 * Full-screen long-form reading view with a gold progress bar,
 * drop cap paragraphs and pull quotes.
 */
export default function PostView({ post, onClose }) {
  const reduce = useReducedMotion()
  const { t, tr } = useLang()
  const cats = t('categories')
  const ref = useRef(null)
  const { scrollYProgress } = useScroll({ container: ref })
  const progress = useSpring(scrollYProgress, { stiffness: 120, damping: 30 })

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
      className="fixed inset-0 z-[80] bg-paper"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      role="dialog"
      aria-modal="true"
      aria-label={tr(post.title)}
    >
      {/* Reading progress */}
      <motion.div
        className="fixed left-0 right-0 top-0 z-20 h-[3px] origin-left bg-gradient-to-r from-gold-dark via-gold to-terracotta"
        style={{ scaleX: progress }}
      />

      {/* Header bar */}
      <div className="fixed inset-x-0 top-0 z-10 flex items-center justify-between border-b border-ink/8 bg-paper/85 px-6 py-4 backdrop-blur-md">
        <button
          onClick={onClose}
          className="group inline-flex items-center gap-2 font-sans text-xs uppercase tracking-widest text-ink-muted transition-colors hover:text-gold-dark"
        >
          <ArrowLeft
            size={15}
            className="transition-transform duration-300 group-hover:-translate-x-1"
          />
          {t('journal.back')}
        </button>
        <button
          onClick={onClose}
          aria-label="Close article"
          className="rounded-full p-2 text-ink-soft transition-all duration-300 hover:rotate-90 hover:text-gold-dark"
        >
          <X size={18} />
        </button>
      </div>

      {/* Article */}
      <div ref={ref} className="h-full overflow-y-auto pt-24 pb-24">
        <motion.article
          initial={reduce ? { opacity: 0 } : { opacity: 0, y: 28 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="mx-auto max-w-2xl px-6"
        >
          <p className="eyebrow mb-4">{cats[post.category]}</p>
          <h1 className="font-display text-4xl font-semibold leading-[1.15] text-ink md:text-5xl">
            {tr(post.title)}
          </h1>
          <div className="mt-5 flex items-center gap-4 font-sans text-xs uppercase tracking-widest text-ink-muted">
            <time>{tr(post.date)}</time>
            <span className="inline-flex items-center gap-1.5">
              <Clock size={13} className="text-gold-dark" />
              {post.readTime} {t('journal.readMin')}
            </span>
          </div>

          {post.draft && (
            <div className="mt-6 flex items-start gap-3 rounded-lg border border-dashed border-terracotta/45 bg-terracotta/8 p-4">
              <PencilLine size={15} className="mt-0.5 shrink-0 text-terracotta" />
              <p className="text-[13px] leading-relaxed text-ink-soft">{t('draft.banner')}</p>
            </div>
          )}

          <div className="mt-8 h-px w-full bg-gradient-to-r from-gold/60 via-ink/10 to-transparent" />

          <div className="article-body mt-10">
            {post.blocks.map((b, i) =>
              b.type === 'quote' ? (
                <figure key={i} className="my-10 border-y border-gold/40 py-6 text-center">
                  <blockquote className="font-display text-2xl italic leading-snug text-ink md:text-[28px]">
                    &ldquo;{tr(b.text)}&rdquo;
                  </blockquote>
                </figure>
              ) : (
                <p key={i}>{tr(b.text)}</p>
              ),
            )}
          </div>

          <div className="mt-14 flex items-center gap-5 rounded-xl border border-ink/8 bg-paper-warm p-6">
            {/* Monogram tipografico: senza un ritratto reale non si mettono volti in pagina */}
            <span
              aria-hidden
              className="flex h-16 w-16 shrink-0 items-center justify-center rounded-full bg-ink font-display text-xl font-semibold text-gold-light ring-2 ring-gold/50"
            >
              CO
            </span>
            <div>
              <p className="font-display text-lg font-semibold text-ink">Claudia Origoni</p>
              <p className="text-sm text-ink-muted">{t('journal.authorBio')}</p>
            </div>
          </div>
        </motion.article>
      </div>
    </motion.div>
  )
}
