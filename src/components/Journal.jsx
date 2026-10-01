import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Clock, ArrowUpRight } from 'lucide-react'
import { posts, categoryKeys } from '../data/posts'
import { useLang } from '../i18n/LanguageContext'
import Reveal from './Reveal'
import PostView from './PostView'

const categoryStyles = {
  reviews: 'bg-terracotta/12 text-terracotta-dark',
  essays: 'bg-sage/15 text-sage-dark',
  notes: 'bg-gold/12 text-gold-dark',
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
            <h2 className="max-w-xl font-display text-4xl font-semibold leading-tight text-ink md:text-5xl">
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
                  {cats[c]}
                </button>
              ))}
            </div>
          </div>
        </Reveal>

        {/* Post cards */}
        <motion.div layout className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          <AnimatePresence mode="popLayout">
            {visible.map((p, i) => (
              <motion.article
                layout
                key={p.id}
                initial={{ opacity: 0, y: 28 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.96 }}
                transition={{ duration: 0.5, delay: i * 0.06, ease: [0.22, 1, 0.36, 1] }}
                data-hoverable
                onClick={() => setActive(p)}
                className="group flex cursor-pointer flex-col overflow-hidden rounded-xl border border-ink/8 bg-paper shadow-card transition-shadow duration-500 hover:shadow-book-hover"
              >
                <div className="relative h-44 overflow-hidden">
                  <img
                    src={p.cover}
                    alt=""
                    loading="lazy"
                    className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                  />
                  <span
                    className={`absolute left-4 top-4 rounded-full px-3 py-1 font-sans text-[10px] uppercase tracking-widest backdrop-blur ${categoryStyles[p.category]}`}
                  >
                    {cats[p.category]}
                  </span>
                </div>

                <div className="flex flex-1 flex-col p-6">
                  <div className="mb-3 flex items-center gap-4 font-sans text-[11px] uppercase tracking-widest text-ink-muted">
                    <time>{tr(p.date)}</time>
                    <span className="inline-flex items-center gap-1.5">
                      <Clock size={12} className="text-gold-dark" />
                      {p.readTime} {t('journal.readMin')}
                    </span>
                  </div>

                  <h3 className="font-display text-xl font-semibold leading-snug text-ink transition-colors duration-300 group-hover:text-gold-dark">
                    {tr(p.title)}
                  </h3>
                  <p className="mt-3 flex-1 text-sm leading-relaxed text-ink-muted">{tr(p.excerpt)}</p>

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
      <AnimatePresence>{active && <PostView post={active} onClose={() => setActive(null)} />}</AnimatePresence>
    </section>
  )
}
