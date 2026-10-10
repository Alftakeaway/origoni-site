import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Clock, ArrowUpRight, Rss } from 'lucide-react'
import { posts, categoryKeys } from '../data/posts'
import { useLang } from '../i18n/LanguageContext'
import DraftBadge from './DraftBadge'
import Reveal from './Reveal'
import PostView from './PostView'

// Il feed esce dalla build senza le bozze: un'iscrizione che non riceve niente
// non va offerta.
const hasFeedItems = posts.some((p) => !p.draft)

// Nessuna foto stock come testata: senza immagine reale dell'autrice la
// intestazione della card è tipografica, con la lettera iniziale del titolo.
const categoryStyles = {
  reviews: 'bg-terracotta/12 text-terracotta-dark',
  essays: 'bg-sage/15 text-sage-dark',
  notes: 'bg-gold/12 text-gold-dark',
}

const categoryWash = {
  reviews: 'from-terracotta/12 via-paper to-paper',
  essays: 'from-sage/16 via-paper to-paper',
  notes: 'from-gold/15 via-paper to-paper',
}

// L'iniziale da mostrare in filigrana salta l'articolo: sei titoli su sei che
// cominciano per «Il» o «The» davano sei lettere identiche, tutte uguali e
// tutte mozzate dal bordo della fascia.
const ARTICOLO = /^(?:the|a|an|il|lo|la|le|i|gli|un|una|uno)\b\s*|^(?:l'|d'|d’)\s*/i

function inizialeTitolo(titolo) {
  let resto = titolo.trim()
  while (ARTICOLO.test(resto)) resto = resto.replace(ARTICOLO, '').trim()
  return (resto.charAt(0) || '').toUpperCase()
}

export default function Journal() {
  const [filter, setFilter] = useState('all')
  const [active, setActive] = useState(null)
  const { t, tr } = useLang()
  const cats = t('categories')

  const visible = filter === 'all' ? posts : posts.filter((p) => p.category === filter)

  return (
    <section id="journal" className="relative bg-paper-warm py-28 md:py-36">
      <div className="mx-auto max-w-6xl px-6">
        <Reveal>
          <p className="eyebrow mb-4">{t('journal.eyebrow')}</p>
          <div className="flex flex-wrap items-end justify-between gap-6">
            <h2 className="max-w-xl text-balance font-display text-4xl font-semibold leading-tight text-ink md:text-5xl">
              {t('journal.heading')}
            </h2>
            {/* Category filter */}
            <div className="flex flex-wrap gap-2">
              {['all', ...categoryKeys].map((c) => (
                <button
                  key={c}
                  onClick={() => setFilter(c)}
                  className={`rounded-full px-4 py-2 font-sans text-xs uppercase tracking-widest transition-all duration-300 ${
                    filter === c
                      ? 'bg-ink text-paper shadow-book'
                      : 'border border-ink/12 text-ink-muted hover:border-gold hover:text-gold-dark'
                  }`}
                >
                  {c === 'all' ? t('journal.filterAll') : cats[c]}
                </button>
              ))}
            </div>
          </div>
          <p className="mt-5 max-w-xl text-[15px] leading-relaxed text-ink-muted">
            {t('journal.intro')}
          </p>
          {hasFeedItems && (
            <a
              href="/feed.xml"
              type="application/rss+xml"
              className="mt-4 inline-flex items-center gap-2 font-sans text-[11px] uppercase tracking-widest text-ink-muted transition-colors hover:text-gold-dark"
            >
              <Rss size={13} className="text-gold-dark" />
              {t('journal.feed')}
            </a>
          )}
        </Reveal>

        {/* Post cards */}
        <motion.div layout className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          <AnimatePresence mode="popLayout">
            {visible.map((p, i) => (
              <motion.article
                layout
                key={p.id}
                role="button"
                tabIndex={0}
                aria-label={tr(p.title)}
                onKeyDown={(e) => {
                  if (e.key === 'Enter' || e.key === ' ') {
                    e.preventDefault()
                    setActive(p)
                  }
                }}
                initial={{ opacity: 0, y: 28 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.96 }}
                transition={{ duration: 0.5, delay: i * 0.06, ease: [0.22, 1, 0.36, 1] }}
                data-hoverable
                onClick={() => setActive(p)}
                className="group flex cursor-pointer flex-col overflow-hidden rounded-xl border border-ink/8 bg-paper shadow-card transition-shadow duration-500 hover:shadow-book-hover"
              >
                <div
                  className={`relative flex h-32 items-end overflow-hidden border-b border-ink/5 bg-gradient-to-br ${categoryWash[p.category]}`}
                >
                  <span
                    aria-hidden
                    className="pointer-events-none absolute bottom-0 right-3 select-none font-display text-[6.5rem] font-semibold leading-none text-ink/10"
                  >
                    {inizialeTitolo(tr(p.title))}
                  </span>
                  <span
                    className={`relative m-4 rounded-full px-3 py-1 font-sans text-[10px] uppercase tracking-widest ${categoryStyles[p.category]}`}
                  >
                    {cats[p.category]}
                  </span>
                  {p.draft && <DraftBadge className="absolute right-4 top-4" />}
                </div>

                <div className="flex flex-1 flex-col p-6">
                  <div className="mb-3 flex items-center gap-4 font-sans text-[11px] uppercase tracking-widest text-ink-muted">
                    <time>{tr(p.date)}</time>
                    <span className="inline-flex items-center gap-1.5">
                      <Clock size={12} className="text-gold-dark" />
                      {p.readTime} {t('journal.readMin')}
                    </span>
                  </div>

                  <h3 className="text-balance font-display text-xl font-semibold leading-snug text-ink transition-colors duration-300 group-hover:text-gold-dark">
                    {tr(p.title)}
                  </h3>
                  <p className="mt-3 flex-1 text-sm leading-relaxed text-ink-muted">
                    {tr(p.excerpt)}
                  </p>

                  <span className="mt-5 inline-flex items-center gap-1.5 font-sans text-xs uppercase tracking-widest text-gold-dark">
                    {t('journal.readArticle')}
                    <ArrowUpRight
                      size={14}
                      className="transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1"
                    />
                  </span>
                </div>
              </motion.article>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>

      {/* Full-screen reading view */}
      <AnimatePresence>
        {active && <PostView post={active} onClose={() => setActive(null)} />}
      </AnimatePresence>
    </section>
  )
}
