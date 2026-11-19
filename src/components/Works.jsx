import { useEffect, useRef, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { BookOpen, Search } from 'lucide-react'
import { works } from '../data/works'
import { useLang } from '../i18n/LanguageContext'
import { filterWorks } from '../utils/filterWorks'
import BookCover from './BookCover'
import DraftBadge from './DraftBadge'
import Reveal from './Reveal'
import WorkModal from './WorkModal'

// L'indirizzo di una scheda: `#opera/echi`. I dati strutturati che escono dalla
// build promettono questi indirizzi, quindi devono aprirsi davvero.
const hashOf = (id) => `#opera/${id}`
const idFromHash = (hash) => (hash?.startsWith('#opera/') ? decodeURIComponent(hash.slice(7)) : null)
const byId = (id) => works.find((w) => w.id === id) ?? null
const workTypes = [...new Map(works.map((work) => [work.type.it, work.type])).entries()]

export default function Works() {
  const [active, setActive] = useState(null)
  const [query, setQuery] = useState('')
  const [type, setType] = useState('all')
  const pushed = useRef(false)
  const { t, tr } = useLang()
  const visibleWorks = filterWorks(works, { query, type })

  useEffect(() => {
    const id = idFromHash(window.location.hash)
    if (!id) return
    const w = byId(id)
    if (!w) return
    // La pagina arriva da un link esterno: la scheda si apre sopra le opere,
    // e lo scorrimento porta lì sotto, non in cima.
    document.getElementById('works')?.scrollIntoView({ behavior: 'instant', block: 'start' })
    setActive(w)
  }, [])

  useEffect(() => {
    // Il tasto Indietro del browser deve chiudere la scheda, non scappare via.
    const onPop = () => {
      pushed.current = false
      setActive(byId(idFromHash(window.location.hash)))
    }
    window.addEventListener('popstate', onPop)
    return () => window.removeEventListener('popstate', onPop)
  }, [])

  const open = (w) => {
    setActive(w)
    window.history.pushState({ opera: w.id }, '', hashOf(w.id))
    pushed.current = true
  }

  const close = () => {
    setActive(null)
    if (pushed.current) {
      pushed.current = false
      window.history.back()
      return
    }
    // Aperta dall'indirizzo altrui: chiudendola l'indirizzo non deve restare
    // a metà, altrimenti un ricaricamento riapre la scheda da sola.
    if (idFromHash(window.location.hash)) {
      window.history.replaceState(null, '', window.location.pathname + window.location.search)
    }
  }

  return (
    <section id="works" className="relative py-28 md:py-36">
      <div className="mx-auto max-w-6xl px-6">
        <Reveal>
          <p className="eyebrow mb-4">{t('works.eyebrow')}</p>
          <h2 className="max-w-2xl text-balance font-display text-4xl font-semibold leading-tight text-ink md:text-5xl md:leading-none">
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

        <div className="mt-10 grid grid-cols-1 gap-4 border-y border-ink/10 py-5 sm:grid-cols-[minmax(0,1fr)_minmax(14rem,0.6fr)] sm:items-end">
          <label className="relative block">
            <span className="sr-only">{t('works.searchLabel')}</span>
            <Search
              size={17}
              aria-hidden
              className="pointer-events-none absolute left-4 top-1/2 -translate-y-1/2 text-ink-muted"
            />
            <input
              type="search"
              value={query}
              onChange={(event) => setQuery(event.target.value)}
              placeholder={t('works.searchPlaceholder')}
              className="w-full rounded-full border border-ink/15 bg-white/65 py-3 pl-11 pr-4 font-sans text-sm text-ink placeholder:text-ink-muted/75 transition-colors duration-200 focus:border-gold-dark focus:outline-none focus:ring-2 focus:ring-gold/25"
            />
          </label>

          <label className="block">
            <span className="mb-2 block font-sans text-[10px] uppercase tracking-widest text-ink-muted">
              {t('works.filterLabel')}
            </span>
            <select
              value={type}
              onChange={(event) => setType(event.target.value)}
              className="w-full rounded-full border border-ink/15 bg-white/65 px-4 py-3 font-sans text-sm text-ink transition-colors duration-200 focus:border-gold-dark focus:outline-none focus:ring-2 focus:ring-gold/25"
            >
              <option value="all">{t('works.filterAll')}</option>
              {workTypes.map(([key, label]) => (
                <option key={key} value={key}>{tr(label)}</option>
              ))}
            </select>
          </label>
          <p
            aria-live="polite"
            aria-atomic="true"
            className="font-sans text-[11px] uppercase tracking-widest text-ink-muted sm:col-span-2"
          >
            {t('works.resultCount').replace('{count}', visibleWorks.length).replace('{total}', works.length)}
          </p>
        </div>

        <motion.div layout className="mt-8 grid grid-cols-1 gap-6 sm:grid-cols-2">
          <AnimatePresence mode="popLayout" initial={false}>
            {visibleWorks.map((w, i) => (
              <motion.div
                key={w.id}
                layout
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{
                  layout: { type: 'spring', stiffness: 320, damping: 32 },
                  opacity: { duration: 0.18 },
                }}
                className="h-full"
              >
                <Reveal delay={(i % 2) * 0.08} className="h-full">
                  <motion.button
                    type="button"
                    data-hoverable
                    onClick={() => open(w)}
                    whileHover={{ transform: 'translateY(-6px)' }}
                    transition={{ type: 'spring', stiffness: 300, damping: 22 }}
                    className="group flex min-h-64 w-full cursor-pointer overflow-hidden rounded-xl border border-ink/8 bg-white/70 text-left shadow-card transition-shadow duration-300 hover:shadow-book-hover"
                  >
                    <div className="h-full w-24 shrink-0 overflow-hidden border-r border-ink/5 sm:w-40">
                      <BookCover work={w} pane />
                    </div>
                    <div className="flex min-w-0 flex-1 flex-col justify-between gap-4 p-5">
                      <div className="flex flex-wrap items-start justify-between gap-3">
                        <span className="rounded-full bg-paper px-3 py-1 font-sans text-[10px] uppercase tracking-widest text-ink-soft">
                          {tr(w.type)}
                        </span>
                        {w.draft && <DraftBadge />}
                      </div>
                      <div>
                        <h3 className="text-balance font-display text-2xl font-semibold leading-tight text-ink transition-colors duration-300 group-hover:text-gold-dark">
                          {tr(w.title)}
                        </h3>
                        {w.missingDetails && (
                          <p className="mt-2 text-sm leading-relaxed text-ink-soft">{tr(w.missingDetails)}</p>
                        )}
                        <p className="mt-1.5 font-sans text-xs uppercase tracking-widest text-ink-muted">
                          {[w.publisher, w.year].filter(Boolean).join(' · ')}
                        </p>
                      </div>
                      <span className="flex items-center gap-1.5 font-sans text-[11px] uppercase tracking-widest text-ink-muted transition-colors duration-300 group-hover:text-gold-dark">
                        <BookOpen size={13} className="text-gold-dark" /> {t('works.readMore')}
                      </span>
                    </div>
                  </motion.button>
                </Reveal>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
        {visibleWorks.length === 0 && (
          <div className="mt-8 rounded-xl border border-dashed border-ink/20 bg-white/45 px-6 py-10 text-center">
            <p className="font-display text-2xl text-ink">{t('works.emptyTitle')}</p>
            <p className="mx-auto mt-2 max-w-md text-sm leading-relaxed text-ink-muted">{t('works.empty')}</p>
            <button
              type="button"
              onClick={() => {
                setQuery('')
                setType('all')
              }}
              className="mt-5 rounded-full border border-ink/15 px-4 py-2 font-sans text-[11px] uppercase tracking-widest text-ink-soft transition-colors duration-200 hover:border-gold-dark hover:text-ink"
            >
              {t('works.clearFilters')}
            </button>
          </div>
        )}
      </div>

      <AnimatePresence>
        {active && <WorkModal work={active} onClose={close} />}
      </AnimatePresence>
    </section>
  )
}
