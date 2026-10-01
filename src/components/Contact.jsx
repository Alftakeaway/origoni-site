import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Send, Check, Mail, Instagram, Twitter, Newspaper, AtSign } from 'lucide-react'
import { useLang } from '../i18n/LanguageContext'
import Reveal from './Reveal'

const inquiryTypes = ['agent', 'press', 'newsletter', 'other']

const socials = [
  { label: 'Substack', icon: Newspaper, href: '#' },
  { label: 'Instagram', icon: Instagram, href: '#' },
  { label: 'Bluesky', icon: AtSign, href: '#' },
  { label: 'Twitter', icon: Twitter, href: '#' },
]

export default function Contact() {
  const { t } = useLang()
  const [form, setForm] = useState({ name: '', email: '', type: 'newsletter', message: '' })
  const [sent, setSent] = useState(false)

  const set = (k) => (e) => setForm((f) => ({ ...f, [k]: e.target.value }))

  const onSubmit = (e) => {
    e.preventDefault()
    // Placeholder submit — wire to a form service (Formspree, Resend, etc.) in production.
    setSent(true)
    setTimeout(() => setSent(false), 5000)
    setForm({ name: '', email: '', type: 'newsletter', message: '' })
  }

  const inputCls =
    'w-full rounded-lg border border-ink/12 bg-paper px-4 py-3 font-sans text-sm text-ink placeholder:text-ink-muted/60 outline-none transition-all duration-300 focus:border-gold focus:ring-2 focus:ring-gold/20'

  return (
    <section id="contact" className="relative overflow-hidden bg-ink py-28 text-paper md:py-36">
      {/* Ambient glow */}
      <div aria-hidden className="pointer-events-none absolute inset-0">
        <div className="absolute -left-20 top-0 h-96 w-96 rounded-full bg-gold/10 blur-3xl" />
        <div className="absolute -right-16 bottom-0 h-80 w-80 rounded-full bg-sage/10 blur-3xl" />
      </div>

      <div className="relative mx-auto grid max-w-6xl gap-14 px-6 lg:grid-cols-2 lg:gap-20">
        {/* Left: pitch */}
        <Reveal>
          <p className="eyebrow mb-4 text-gold-light">{t('contact.eyebrow')}</p>
          <h2 className="font-display text-4xl font-semibold leading-tight md:text-5xl">
            {t('contact.headingA')}
            <br />
            <span className="italic text-gold-light">{t('contact.headingB')}</span>
          </h2>
          <p className="mt-6 max-w-md text-[15px] leading-relaxed text-paper/60">{t('contact.body')}</p>

          <div className="mt-10 flex flex-wrap gap-3">
            {socials.map((s) => (
              <a
                key={s.label}
                href={s.href}
                aria-label={s.label}
                className="group inline-flex items-center gap-2.5 rounded-full border border-paper/15 px-5 py-2.5 font-sans text-xs uppercase tracking-widest text-paper/70 transition-all duration-300 hover:border-gold hover:text-gold-light"
              >
                <s.icon
                  size={14}
                  className="text-gold-light transition-transform duration-300 group-hover:-translate-y-0.5"
                />
                {s.label}
              </a>
            ))}
          </div>

          <a
            href="mailto:studio@claudiaorigoni.com"
            className="link-underline mt-10 inline-flex items-center gap-2 font-serif text-lg italic text-paper/80"
          >
            <Mail size={16} className="text-gold-light" />
            studio@claudiaorigoni.com
          </a>
        </Reveal>

        {/* Right: form */}
        <Reveal delay={0.15}>
          <form
            onSubmit={onSubmit}
            className="rounded-2xl border border-paper/10 bg-paper/[0.04] p-7 backdrop-blur-sm md:p-9"
          >
            <div className="grid gap-5 sm:grid-cols-2">
              <label className="block">
                <span className="mb-2 block font-sans text-[11px] uppercase tracking-widest text-paper/50">
                  {t('contact.name')}
                </span>
                <input
                  required
                  type="text"
                  value={form.name}
                  onChange={set('name')}
                  placeholder={t('contact.phName')}
                  className={`${inputCls} border-paper/15 bg-paper/[0.06] text-paper placeholder:text-paper/30`}
                />
              </label>
              <label className="block">
                <span className="mb-2 block font-sans text-[11px] uppercase tracking-widest text-paper/50">
                  {t('contact.email')}
                </span>
                <input
                  required
                  type="email"
                  value={form.email}
                  onChange={set('email')}
                  placeholder={t('contact.phEmail')}
                  className={`${inputCls} border-paper/15 bg-paper/[0.06] text-paper placeholder:text-paper/30`}
                />
              </label>
            </div>

            <label className="mt-5 block">
              <span className="mb-2 block font-sans text-[11px] uppercase tracking-widest text-paper/50">
                {t('contact.topic')}
              </span>
              <select
                value={form.type}
                onChange={set('type')}
                className={`${inputCls} border-paper/15 bg-paper/[0.06] text-paper`}
              >
                {inquiryTypes.map((k) => (
                  <option key={k} value={k} className="bg-ink text-paper">
                    {t(`contact.types.${k}`)}
                  </option>
                ))}
              </select>
            </label>

            <label className="mt-5 block">
              <span className="mb-2 block font-sans text-[11px] uppercase tracking-widest text-paper/50">
                {t('contact.message')}
              </span>
              <textarea
                required
                rows={5}
                value={form.message}
                onChange={set('message')}
                placeholder={t('contact.phMessage')}
                className={`${inputCls} resize-none border-paper/15 bg-paper/[0.06] text-paper placeholder:text-paper/30`}
              />
            </label>

            <motion.button
              type="submit"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="mt-7 inline-flex w-full items-center justify-center gap-2.5 rounded-full bg-gold px-8 py-4 font-sans text-sm uppercase tracking-widest text-ink shadow-book transition-colors duration-300 hover:bg-gold-light"
            >
              <AnimatePresence mode="wait" initial={false}>
                {sent ? (
                  <motion.span
                    key="sent"
                    initial={{ opacity: 0, y: 8 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -8 }}
                    className="inline-flex items-center gap-2"
                  >
                    <Check size={16} /> {t('contact.sent')}
                  </motion.span>
                ) : (
                  <motion.span
                    key="send"
                    initial={{ opacity: 0, y: 8 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -8 }}
                    className="inline-flex items-center gap-2"
                  >
                    <Send size={15} /> {t('contact.send')}
                  </motion.span>
                )}
              </AnimatePresence>
            </motion.button>
          </form>
        </Reveal>
      </div>
    </section>
  )
}
