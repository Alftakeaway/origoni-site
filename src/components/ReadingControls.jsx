import { useEffect, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Type, Contrast, X } from 'lucide-react'
import { useLang } from '../i18n/LanguageContext'

// Il sito misura il testo in px (text-[15px] e simili), quindi la sola
// root font-size non lo ingrandirebbe: si agisce su `zoom` dell'html, che
// scala px e rem insieme. Firefox lo supporta dalla 126.
const ZOOMS = ['', '1.1', '1.22']
const STORE = 'co-read'

const load = () => {
  try {
    const saved = JSON.parse(localStorage.getItem(STORE))
    return { size: saved?.size ?? 0, contrast: !!saved?.contrast }
  } catch {
    return { size: 0, contrast: false }
  }
}

export default function ReadingControls() {
  const { t } = useLang()
  const [open, setOpen] = useState(false)
  const [{ size, contrast }, setPrefs] = useState(load)

  useEffect(() => {
    const root = document.documentElement
    root.style.zoom = ZOOMS[size]
    root.classList.toggle('co-contrast', contrast)
    try {
      localStorage.setItem(STORE, JSON.stringify({ size, contrast }))
    } catch {
      /* storage pieno o bloccato: le preferenze restano per la visita */
    }
  }, [size, contrast])

  const sizes = [t('a11y.size1'), t('a11y.size2'), t('a11y.size3')]

  return (
    <div className="fixed bottom-6 left-6 z-40 print:hidden">
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 10 }}
            transition={{ duration: 0.25 }}
            className="absolute bottom-16 left-0 w-64 rounded-xl border border-ink/10 bg-paper p-5 shadow-book-hover"
          >
            <div className="mb-4 flex items-center justify-between">
              <p className="font-sans text-[10px] uppercase tracking-widest text-ink-muted">
                {t('a11y.title')}
              </p>
              <button
                onClick={() => setOpen(false)}
                aria-label={t('a11y.close')}
                className="text-ink-muted transition-colors hover:text-ink"
              >
                <X size={15} />
              </button>
            </div>

            <p className="mb-2 font-sans text-[11px] uppercase tracking-widest text-ink-soft">
              {t('a11y.text')}
            </p>
            <div className="mb-5 flex gap-2">
              {sizes.map((label, i) => (
                <button
                  key={label}
                  onClick={() => setPrefs({ size: i, contrast })}
                  aria-pressed={size === i}
                  aria-label={label}
                  className={`flex-1 rounded-lg border px-2 py-2 font-display leading-none transition-all duration-300 ${
                    size === i
                      ? 'border-ink bg-ink text-paper'
                      : 'border-ink/12 text-ink-soft hover:border-gold hover:text-gold-dark'
                  }`}
                >
                  <span style={{ fontSize: `${13 + i * 4}px` }}>Aa</span>
                </button>
              ))}
            </div>

            <button
              onClick={() => setPrefs({ size, contrast: !contrast })}
              aria-pressed={contrast}
              className={`flex w-full items-center gap-2.5 rounded-lg border px-3 py-2.5 font-sans text-[11px] uppercase tracking-widest transition-all duration-300 ${
                contrast
                  ? 'border-ink bg-ink text-paper'
                  : 'border-ink/12 text-ink-soft hover:border-gold hover:text-gold-dark'
              }`}
            >
              <Contrast size={14} />
              {t('a11y.contrast')}
            </button>
          </motion.div>
        )}
      </AnimatePresence>

      <button
        onClick={() => setOpen((v) => !v)}
        aria-expanded={open}
        aria-label={t('a11y.open')}
        className="flex h-11 w-11 items-center justify-center rounded-full border border-ink/12 bg-paper/90 text-ink-soft shadow-card backdrop-blur transition-all duration-300 hover:border-gold hover:text-gold-dark"
      >
        <Type size={17} />
      </button>
    </div>
  )
}
