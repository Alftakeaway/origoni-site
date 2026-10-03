import { motion } from 'framer-motion'
import { Star, BookOpen, Bookmark, Library } from 'lucide-react'
import { shelf } from '../data/shelf'
import { useLang } from '../i18n/LanguageContext'
import Reveal from './Reveal'

function Stars({ rating }) {
  if (rating == null) return null
  return (
    <span className="inline-flex items-center gap-0.5" aria-label={`Rated ${rating} out of 5`}>
      {[1, 2, 3, 4, 5].map((n) => (
        <Star
          key={n}
          size={13}
          className={
            n <= Math.floor(rating)
              ? 'fill-gold text-gold'
              : n - 0.5 === rating
                ? 'fill-gold/50 text-gold'
                : 'text-ink/20'
          }
        />
      ))}
      <span className="ml-1.5 font-sans text-[11px] text-ink-muted">{rating.toFixed(1)}</span>
    </span>
  )
}

const statusMeta = {
  reading: { icon: BookOpen, text: 'text-sage-dark' },
  finished: { icon: Star, text: 'text-gold-dark' },
  queued: { icon: Bookmark, text: 'text-ink-muted' },
}

export default function Shelf() {
  const { t, tr } = useLang()
  const statuses = t('shelf.status')

  return (
    <section id="shelf" className="relative py-28 md:py-36">
      <div className="mx-auto max-w-6xl px-6">
        <Reveal>
          <p className="eyebrow mb-4">{t('shelf.eyebrow')}</p>
          <h2 className="max-w-xl font-display text-4xl font-semibold leading-tight text-ink md:text-5xl">
            {t('shelf.heading')}
          </h2>
          <p className="mt-5 max-w-xl text-[15px] leading-relaxed text-ink-muted">
            {t('shelf.intro')}
          </p>
        </Reveal>

        {shelf.length === 0 ? (
          <Reveal>
            <div className="mt-14 flex items-start gap-5 rounded-xl border border-dashed border-ink/15 bg-paper-warm/60 p-8">
              <Library size={22} className="mt-1 shrink-0 text-gold-dark" />
              <div>
                <h3 className="font-display text-xl font-semibold text-ink">
                  {t('shelf.emptyTitle')}
                </h3>
                <p className="mt-2 max-w-xl text-[15px] leading-relaxed text-ink-muted">
                  {t('shelf.empty')}
                </p>
              </div>
            </div>
          </Reveal>
        ) : (
          <div className="mt-14 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {shelf.map((book, i) => {
              const meta = statusMeta[book.status] || statusMeta.queued
              const Icon = meta.icon
              return (
                <Reveal key={book.id} delay={(i % 3) * 0.1}>
                  <motion.div
                    data-hoverable
                    whileHover={{ y: -6 }}
                    transition={{ type: 'spring', stiffness: 300, damping: 22 }}
                    className="group relative flex h-full flex-col overflow-hidden rounded-xl bg-paper shadow-card transition-shadow duration-500 hover:shadow-book-hover"
                  >
                    {/* Spine-tinted header */}
                    <div
                      className={`relative h-36 overflow-hidden bg-gradient-to-br ${book.tint || 'from-[#3D3A34] to-[#1A1A1A]'}`}
                    >
                      {book.cover ? (
                        <img
                          src={book.cover}
                          alt={book.title}
                          loading="lazy"
                          className="h-full w-full object-cover opacity-70 mix-blend-luminosity transition-all duration-700 group-hover:scale-105 group-hover:opacity-90 group-hover:mix-blend-normal"
                        />
                      ) : (
                        <div className="flex h-full items-center px-5">
                          <p className="font-display text-lg font-semibold leading-snug text-paper/90 [text-shadow:0_1px_8px_rgba(0,0,0,0.35)]">
                            {book.title}
                          </p>
                        </div>
                      )}
                      <span
                        className={`absolute bottom-3 left-4 inline-flex items-center gap-1.5 rounded-full bg-paper/95 px-3 py-1 font-sans text-[10px] font-semibold uppercase tracking-widest shadow-card backdrop-blur ${meta.text}`}
                      >
                        <Icon size={11} />
                        {statuses[book.status]}
                      </span>
                    </div>

                    <div className="flex flex-1 flex-col p-5">
                      <h3 className="font-display text-xl font-semibold leading-snug text-ink">
                        {book.title}
                      </h3>
                      <p className="mt-1 font-sans text-xs uppercase tracking-widest text-ink-muted">
                        {book.author}
                      </p>

                      <div className="mt-3">
                        <Stars rating={book.rating} />
                      </div>

                      {/* Progress bar for current reads */}
                      {book.status === 'reading' && book.progress != null && (
                        <div className="mt-3">
                          <div className="flex items-center justify-between font-sans text-[10px] uppercase tracking-widest text-ink-muted">
                            <span>{t('shelf.progress')}</span>
                            <span>{book.progress}%</span>
                          </div>
                          <div className="mt-1.5 h-1 w-full overflow-hidden rounded-full bg-ink/8">
                            <motion.div
                              className="h-full rounded-full bg-gradient-to-r from-gold-dark to-gold"
                              initial={{ width: 0 }}
                              whileInView={{ width: `${book.progress}%` }}
                              viewport={{ once: true }}
                              transition={{ duration: 1.1, delay: 0.2, ease: 'easeOut' }}
                            />
                          </div>
                        </div>
                      )}

                      {book.note && (
                        <p className="mt-4 flex-1 font-serif text-[15px] italic leading-relaxed text-ink-soft">
                          {tr(book.note)}
                        </p>
                      )}
                    </div>

                    {/* Wooden shelf edge */}
                    <div className="h-2 bg-gradient-to-b from-[#8a6a4a] to-[#6d5138] shadow-[0_6px_12px_-4px_rgba(109,81,56,0.5)]" />
                  </motion.div>
                </Reveal>
              )
            })}
          </div>
        )}
      </div>
    </section>
  )
}
