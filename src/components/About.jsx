import { Quote, Link2 } from 'lucide-react'
import { useLang } from '../i18n/LanguageContext'
import { portrait, sources } from '../data/site'
import { works } from '../data/works'
import Reveal from './Reveal'

export default function About() {
  const { t, tr } = useLang()
  const cited = works.filter((w) => w.cover).sort((a, b) => a.year - b.year)

  return (
    <section id="about" className="relative bg-paper-warm py-28 md:py-36">
      <div className="mx-auto grid max-w-6xl gap-14 px-6 lg:grid-cols-[1fr_1.6fr] lg:gap-20">
        <Reveal className="lg:sticky lg:top-28 lg:self-start">
          <figure>
            <img
              src={portrait.src}
              alt={tr(portrait.alt)}
              loading="lazy"
              className="mx-auto block w-full max-w-[420px] rounded-xl shadow-card"
            />
            <figcaption className="mt-2 font-sans text-[10px] uppercase tracking-widest text-ink-muted">
              {tr(portrait.credit)}
            </figcaption>
          </figure>
          <p className="eyebrow mb-4 mt-10">{t('about.eyebrow')}</p>
          <h2 className="font-display text-4xl font-semibold leading-tight text-ink md:text-5xl">
            {t('about.heading')}
          </h2>
          <figure className="mt-8 border-l-2 border-gold pl-5">
            <Quote size={16} className="mb-3 text-gold-dark" />
            <blockquote className="font-serif text-2xl italic leading-snug text-ink-soft">
              {t('about.quote')}
            </blockquote>
            <figcaption className="mt-3 font-sans text-[11px] uppercase tracking-widest text-ink-muted">
              {t('about.quoteSource')}
            </figcaption>
          </figure>
        </Reveal>

        <div>
          {t('about.paragraphs').map((p, i) => (
            <Reveal key={i} delay={i * 0.05}>
              <p
                className={`text-[16px] leading-relaxed text-ink-soft ${
                  i === 0 ? 'first-letter:float-left first-letter:mr-3 first-letter:font-display first-letter:text-6xl first-letter:leading-[0.8] first-letter:text-gold-dark' : 'mt-6'
                }`}
              >
                {p}
              </p>
            </Reveal>
          ))}

          <Reveal>
            {cited.length > 0 && (
              <>
                <h3 className="mt-12 font-sans text-[11px] uppercase tracking-literary text-ink-muted">
                  {t('about.coversTitle')}
                </h3>
                <ul className="mt-5 flex flex-wrap gap-x-8 gap-y-5">
                  {cited.map((w) => (
                    <li key={w.id}>
                      <img
                        src={w.cover}
                        alt={tr(w.title)}
                        loading="lazy"
                        className="max-h-32 w-auto shadow-card"
                      />
                      <p className="mt-2 font-sans text-[10px] uppercase tracking-widest text-ink-muted">
                        {w.year}
                      </p>
                    </li>
                  ))}
                </ul>
              </>
            )}

            <h3 className="mt-12 font-sans text-[11px] uppercase tracking-literary text-ink-muted">
              {t('about.sourcesTitle')}
            </h3>
            <ul className="mt-4 space-y-2.5">
              {sources.map((s) => (
                <li key={s.href}>
                  <a
                    href={s.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group inline-flex items-start gap-2.5 py-0.5 font-serif text-[17px] leading-snug text-ink-soft transition-colors hover:text-gold-dark"
                  >
                    <Link2 size={14} className="mt-1.5 shrink-0 text-gold-dark" />
                    {tr(s.label)}
                  </a>
                </li>
              ))}
            </ul>
            <p className="mt-8 rounded-lg border border-ink/10 bg-paper p-5 text-sm leading-relaxed text-ink-muted">
              {t('about.note')}
            </p>
          </Reveal>
        </div>
      </div>
    </section>
  )
}
