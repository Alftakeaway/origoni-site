import { motion, useReducedMotion } from 'framer-motion'
import { ArrowDown, Quote } from 'lucide-react'
import { useLang } from '../i18n/LanguageContext'

// Floating serif glyphs drifting behind the hero copy
const glyphs = [
  { char: '\u00B6', x: '8%', y: '18%', size: 'text-[110px]', dur: 12, delay: 0, rot: -8 },
  { char: '\u201C', x: '84%', y: '12%', size: 'text-[150px]', dur: 15, delay: 1.5, rot: 6 },
  { char: '\u00A7', x: '76%', y: '68%', size: 'text-[100px]', dur: 11, delay: 0.8, rot: 10 },
  { char: '&', x: '14%', y: '72%', size: 'text-[90px]', dur: 14, delay: 2.2, rot: -6 },
  { char: '\u2020', x: '46%', y: '8%', size: 'text-[70px]', dur: 10, delay: 1.1, rot: 4 },
  { char: '\u201D', x: '92%', y: '44%', size: 'text-[80px]', dur: 13, delay: 0.4, rot: -4 },
]

// L'entrata della prima schermata sta nel CSS (.co-rise in src/index.css) e non
// in uno stile inline: la build consegna il testo già nell'HTML, e un'opacity
// scritta dal JavaScript lo nasconderebbe a chi legge senza script e ai motori
// che non lo eseguono. La cadenza è la stessa di prima: 0.3 s di attesa, poi
// 0.14 s fra un pezzo e il seguente.
const ritmo = (i) => ({ '--co-i': i })

export default function Hero() {
  const reduce = useReducedMotion()
  const { t } = useLang()

  return (
    <section
      id="top"
      className="relative flex min-h-screen items-center justify-center overflow-hidden"
    >
      {/* Layered atmospheric background */}
      <div aria-hidden className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-b from-paper-warm via-paper to-paper" />
        <motion.div
          className="absolute -left-32 top-1/4 h-[34rem] w-[34rem] rounded-full bg-gold/12 blur-3xl"
          animate={reduce ? undefined : { x: [0, 60, 0], y: [0, -40, 0], scale: [1, 1.15, 1] }}
          transition={{ duration: 22, repeat: Infinity, ease: 'easeInOut' }}
        />
        <motion.div
          className="absolute -right-24 bottom-0 h-[30rem] w-[30rem] rounded-full bg-sage/15 blur-3xl"
          animate={reduce ? undefined : { x: [0, -50, 0], y: [0, 30, 0], scale: [1, 1.1, 1] }}
          transition={{ duration: 26, repeat: Infinity, ease: 'easeInOut' }}
        />
        <motion.div
          className="absolute right-1/4 top-10 h-72 w-72 rounded-full bg-terracotta/8 blur-3xl"
          animate={reduce ? undefined : { y: [0, 40, 0] }}
          transition={{ duration: 18, repeat: Infinity, ease: 'easeInOut' }}
        />
      </div>

      {/* Floating typography glyphs: con il moto ridotto restano fermi invece di
          sparire, così il markup del server e quello del client combaciano. */}
      {glyphs.map((g, i) => (
        <motion.span
          key={i}
          aria-hidden
          className={`absolute select-none font-display text-ink/[0.07] ${g.size}`}
          style={{ left: g.x, top: g.y }}
          animate={reduce ? undefined : { y: [0, -22, 0], rotate: [g.rot, g.rot + 5, g.rot] }}
          transition={{ duration: g.dur, repeat: Infinity, delay: g.delay, ease: 'easeInOut' }}
        >
          {g.char}
        </motion.span>
      ))}

      {/* Copy */}
      <div className="relative z-10 mx-auto max-w-4xl px-6 text-center">
        <p className="eyebrow co-rise mb-6" style={ritmo(0)}>
          {t('hero.eyebrow')}
        </p>

        <h1
          className="co-rise font-display text-[clamp(2.8rem,8vw,6rem)] font-semibold leading-[1.05] text-ink"
          style={ritmo(1)}
        >
          Claudia Origoni
        </h1>

        <p
          className="co-rise mx-auto mt-7 max-w-xl font-serif text-2xl italic leading-snug text-ink-soft md:text-3xl"
          style={ritmo(2)}
        >
          {t('hero.tagline')}
        </p>

        <p
          className="co-rise mx-auto mt-5 max-w-xl text-[15px] leading-relaxed text-ink-muted"
          style={ritmo(3)}
        >
          {t('hero.bioA')}
          <span className="font-medium text-ink-soft">{t('hero.bio1')}</span>
          {t('hero.bioB')}
        </p>

        <div
          className="co-rise mt-10 flex flex-wrap items-center justify-center gap-4"
          style={ritmo(4)}
        >
          <a
            href="#works"
            className="group inline-flex items-center gap-3 rounded-full bg-ink px-8 py-4 font-sans text-sm uppercase tracking-widest text-paper shadow-book transition-all duration-300 hover:-translate-y-0.5 hover:bg-gold-dark hover:shadow-book-hover"
          >
            {t('hero.ctaWork')}
            <ArrowDown
              size={16}
              className="transition-transform duration-300 group-hover:translate-y-1"
            />
          </a>
          <a
            href="#about"
            className="inline-flex items-center gap-2 rounded-full border border-ink/15 px-8 py-4 font-sans text-sm uppercase tracking-widest text-ink-soft transition-all duration-300 hover:border-gold hover:text-gold-dark"
          >
            <Quote size={15} />
            {t('hero.ctaAbout')}
          </a>
        </div>
      </div>

      {/* Scroll cue */}
      <div className="co-fade absolute bottom-8 left-1/2 -translate-x-1/2" aria-hidden>
        <motion.div
          animate={reduce ? undefined : { y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
          className="flex flex-col items-center gap-2 text-ink-muted"
        >
          <span className="font-sans text-[10px] uppercase tracking-literary">{t('hero.scroll')}</span>
          <div className="h-10 w-px bg-gradient-to-b from-gold to-transparent" />
        </motion.div>
      </div>
    </section>
  )
}
