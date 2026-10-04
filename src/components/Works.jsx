import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { BookOpen } from 'lucide-react'
import { works } from '../data/works'
import { useLang } from '../i18n/LanguageContext'
import BookCover from './BookCover'
import DraftBadge from './DraftBadge'
import Reveal from './Reveal'
import WorkModal from './WorkModal'

export default function Works() {
  const [active, setActive] = useState(null)
  const { t, tr } = useLang()

  return (
    <section id="works" className="relative py-28 md:py-36">
      <div className="mx-auto max-w-6xl px-6">
        <Reveal>
          <p className="eyebrow mb-4">{t('works.eyebrow')}</p>
          <h2 className="max-w-2xl font-display text-4xl font-semibold leading-tight text-ink md:text-5xl">
            {t('works.heading')}
          </h2>
          <p className="mt-5 max-w-xl text-[15px] leading-relaxed text-ink-muted">
            {t('works.intro')}
          </p>
          {works.some((w) => w.draft) && (
            <div className="mt-4 flex max-w-xl items-start gap-3 rounded-lg border border-dashed border-terracotta/45 bg-terracotta/8 p-4">
              <DraftBadge />
              <p className="text-[13px] leading-relaxed text-ink-soft">{t('works.draftNote')}</p>
            </div>
          )}
        </Reveal>

        {/* Masonry-style grid via CSS columns */}
        <div className="mt-14 columns-1 gap-6 sm:columns-2 lg:columns-3 [column-fill:_balance]">
          {works.map((w, i) => (
            <Reveal key={w.id} delay={(i % 3) * 0.1} className="mb-6 break-inside-avoid">
              <motion.button
                data-hoverable
                onClick={() => setActive(w)}
                whileHover={{ y: -6 }}
                transition={{ type: 'spring', stiffness: 300, damping: 22 }}
                className="group block w-full cursor-pointer overflow-hidden rounded-xl border border-ink/8 bg-white/70 text-left shadow-card transition-shadow duration-500 hover:shadow-book-hover"
                aria-label={tr(w.title)}
              >
                <div className={`relative overflow-hidden ${w.tall ? 'h-80' : 'h-64'}`}>
                  <BookCover work={w} />
                  <div className="absolute inset-x-0 bottom-0 h-16 bg-gradient-to-t from-ink/25 to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
                  <span className="absolute left-4 top-4 rounded-full bg-paper/90 px-3 py-1 font-sans text-[10px] uppercase tracking-widest text-ink-soft backdrop-blur">
                    {tr(w.type)}
                  </span>
                  {w.draft && <DraftBadge className="absolute right-4 top-4" />}
                  <span className="absolute bottom-4 right-4 flex translate-y-3 items-center gap-1.5 rounded-full bg-paper/90 px-3 py-1.5 font-sans text-[11px] uppercase tracking-widest text-ink opacity-0 backdrop-blur transition-all duration-500 group-hover:translate-y-0 group-hover:opacity-100">
                    <BookOpen size={13} className="text-gold-dark" /> {t('works.readMore')}
                  </span>
                </div>
                <div className="p-5">
                  <h3 className="font-display text-2xl font-semibold text-ink transition-colors duration-300 group-hover:text-gold-dark">
                    {tr(w.title)}
                  </h3>
                  <p className="mt-1.5 font-sans text-xs uppercase tracking-widest text-ink-muted">
                    {[w.publisher, w.year].filter(Boolean).join(' · ')}
                  </p>
                </div>
              </motion.button>
            </Reveal>
          ))}
        </div>
      </div>

      <AnimatePresence>
        {active && <WorkModal work={active} onClose={() => setActive(null)} />}
      </AnimatePresence>
    </section>
  )
}
