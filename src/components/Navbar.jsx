import { useEffect, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X, Feather } from 'lucide-react'
import { useLang } from '../i18n/LanguageContext'

export function LangToggle({ className = '' }) {
  const { lang, setLang } = useLang()
  return (
    <div
      className={`inline-flex items-center rounded-full border border-ink/15 p-0.5 ${className}`}
      role="group"
      aria-label="Language / Lingua"
    >
      {['it', 'en'].map((l) => (
        <button
          key={l}
          onClick={() => setLang(l)}
          aria-pressed={lang === l}
          className={`rounded-full px-2.5 py-1 font-sans text-[10px] font-semibold uppercase tracking-widest transition-all duration-300 ${
            lang === l ? 'bg-ink text-paper' : 'text-ink-muted hover:text-gold-dark'
          }`}
        >
          {l}
        </button>
      ))}
    </div>
  )
}

export default function Navbar() {
  const { t } = useLang()
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const links = [
    { label: t('nav.works'), href: '#works' },
    { label: t('nav.about'), href: '#about' },
    { label: t('nav.shelf'), href: '#shelf' },
    { label: t('nav.contact'), href: '#contact' },
  ]

  return (
    <motion.header
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${
        scrolled
          ? 'border-b border-ink/8 bg-paper/85 py-3 shadow-[0_8px_30px_-18px_rgba(26,26,26,0.35)] backdrop-blur-md'
          : 'bg-transparent py-6'
      }`}
    >
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-6">
        <a href="#top" className="group flex items-center gap-2.5">
          <Feather
            size={20}
            className="text-gold transition-transform duration-500 group-hover:-rotate-12"
          />
          <span className="font-display text-lg font-semibold tracking-wide text-ink">
            Claudia <span className="text-gold-dark">Origoni</span>
          </span>
        </a>

        {/* Desktop links */}
        <ul className="hidden items-center gap-7 md:flex">
          {links.map((l) => (
            <li key={l.href}>
              <a
                href={l.href}
                className="link-underline font-sans text-[13px] uppercase tracking-literary text-ink-muted transition-colors hover:text-ink"
              >
                {l.label}
              </a>
            </li>
          ))}
          <li>
            <LangToggle />
          </li>
          <li>
            <a
              href="#contact"
              className="rounded-full border border-ink/15 bg-ink px-5 py-2.5 font-sans text-[12px] uppercase tracking-widest text-paper transition-all duration-300 hover:bg-gold-dark hover:shadow-book"
            >
              {t('nav.write')}
            </a>
          </li>
        </ul>

        {/* Mobile toggle */}
        <button
          className="text-ink md:hidden"
          onClick={() => setOpen((v) => !v)}
          aria-label={open ? 'Close menu' : 'Open menu'}
          aria-expanded={open}
        >
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
      </nav>

      {/* Mobile menu */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
            className="overflow-hidden bg-paper/95 backdrop-blur-md md:hidden"
          >
            <ul className="flex flex-col gap-1 px-6 pb-4 pt-2">
              {links.map((l) => (
                <li key={l.href}>
                  <a
                    href={l.href}
                    onClick={() => setOpen(false)}
                    className="block border-b border-ink/5 py-3.5 font-display text-xl text-ink-soft"
                  >
                    {l.label}
                  </a>
                </li>
              ))}
              <li className="flex items-center justify-between py-3.5">
                <span className="font-sans text-[11px] uppercase tracking-literary text-ink-muted">
                  Lingua / Language
                </span>
                <LangToggle />
              </li>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  )
}
