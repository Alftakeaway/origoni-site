import { useEffect, useRef, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { BookOpen } from 'lucide-react'
import { works } from '../data/works'
import { useLang } from '../i18n/LanguageContext'
import BookCover from './BookCover'
import DraftBadge from './DraftBadge'
import Reveal from './Reveal'
import WorkModal from './WorkModal'

// L'indirizzo di una scheda: `#opera/echi`. I dati strutturati che escono dalla
// build promettono questi indirizzi, quindi devono aprirsi davvero.
const hashOf = (id) => `#opera/${id}`
const idFromHash = (hash) => (hash?.startsWith('#opera/') ? decodeURIComponent(hash.slice(7)) : null)
const byId = (id) => works.find((w) => w.id === id) ?? null

export default function Works() {
  const [active, setActive] = useState(null)
  const pushed = useRef(false)
  const { t, tr } = useLang()

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
          <h2 className="max-w-2xl text-balance font-display text-4xl font-semibold leading-tight text-ink md:text-5xl">
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

        {/* Due colonne d'appoggio: con dieci titoli la griglia a colonne di
            altezza diversa lasciava un vuoto irregolare in fondo alla sezione.
            La card è orizzontale perché le copertine vere sono verticali e
            piccole: in una fascia larga galleggiavano nel colore. */}
        <div className="mt-14 grid gap-6 sm:grid-cols-2">
          {works.map((w, i) => (
            <Reveal key={w.id} delay={(i % 2) * 0.1}>
              <motion.button
                data-hoverable
                onClick={() => open(w)}
                whileHover={{ y: -6 }}
                transition={{ type: 'spring', stiffness: 300, damping: 22 }}
                className="group flex min-h-64 w-full cursor-pointer overflow-hidden rounded-xl border border-ink/8 bg-white/70 text-left shadow-card transition-shadow duration-500 hover:shadow-book-hover"
                aria-label={tr(w.title)}
              >
                <div className="h-full w-36 shrink-0 overflow-hidden border-r border-ink/5 sm:w-40">
                  <BookCover work={w} pane />
                </div>
                <div className="flex flex-1 flex-col justify-between gap-4 p-5">
                  <div className="flex items-start justify-between gap-3">
                    <span className="rounded-full bg-paper px-3 py-1 font-sans text-[10px] uppercase tracking-widest text-ink-soft">
                      {tr(w.type)}
                    </span>
                    {w.draft && <DraftBadge />}
                  </div>
                  <div>
                    <h3 className="text-balance font-display text-2xl font-semibold leading-tight text-ink transition-colors duration-300 group-hover:text-gold-dark">
                      {tr(w.title)}
                    </h3>
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
          ))}
        </div>
      </div>

      <AnimatePresence>
        {active && <WorkModal work={active} onClose={close} />}
      </AnimatePresence>
    </section>
  )
}
