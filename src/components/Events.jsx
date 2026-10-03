import { Calendar, CalendarPlus, MapPin, ExternalLink, Users } from 'lucide-react'
import { events } from '../data/events'
import { icsForEvent } from '../utils/ics'
import { useLang } from '../i18n/LanguageContext'
import DraftBadge from './DraftBadge'
import Reveal from './Reveal'

// Timeline verticale: una voce per ogni evento pubblico con una fonte.
export default function Events() {
  const { t, tr } = useLang()

  const sorted = [...events].sort((a, b) => (a.sort < b.sort ? 1 : -1))

  return (
    <section id="events" className="relative py-28 md:py-36">
      <div className="mx-auto max-w-5xl px-6">
        <Reveal>
          <p className="eyebrow mb-4">{t('events.eyebrow')}</p>
          <h2 className="max-w-2xl font-display text-4xl font-semibold leading-tight text-ink md:text-5xl">
            {t('events.heading')}
          </h2>
          <p className="mt-5 max-w-xl text-[15px] leading-relaxed text-ink-muted">
            {t('events.intro')}
          </p>
        </Reveal>

        <div className="relative mt-14 border-l border-ink/12 pl-8 md:pl-12">
          {sorted.map((e, i) => {
            const place = `${tr(e.place)}${e.city && e.city !== '—' ? `, ${e.city}` : ''}`
            const ics = icsForEvent(e, {
              title: tr(e.title),
              place,
              description: tr(e.detail),
              url: `${window.location.origin}/#events`,
            })
            return (
            <Reveal key={e.id} delay={(i % 3) * 0.08} className="relative pb-12 last:pb-0">
              <span
                aria-hidden
                className="absolute -left-[41px] top-2 h-3 w-3 rounded-full border-2 border-paper bg-gold-dark md:-left-[57px]"
              />
              <article className="rounded-xl border border-ink/8 bg-white/70 p-6 shadow-card md:p-7">
                <div className="flex flex-wrap items-center gap-3">
                  <span className="rounded-full bg-ink/5 px-3 py-1 font-sans text-[10px] uppercase tracking-widest text-ink-soft">
                    {tr(e.kind)}
                  </span>
                  <span className="font-display text-lg font-semibold text-gold-dark tabular-nums">
                    {e.year}
                  </span>
                  {e.draft && <DraftBadge className="ml-auto" />}
                </div>

                <h3 className="mt-3 font-display text-2xl font-semibold leading-snug text-ink">
                  {tr(e.title)}
                </h3>

                <div className="mt-3 flex flex-wrap gap-x-6 gap-y-2 font-sans text-xs uppercase tracking-widest text-ink-muted">
                  <span className="inline-flex items-center gap-2">
                    <Calendar size={13} className="text-gold-dark" />
                    {tr(e.dateLabel)}
                  </span>
                  <span className="inline-flex items-center gap-2">
                    <MapPin size={13} className="text-gold-dark" />
                    {place}
                  </span>
                  <span className="inline-flex items-center gap-2">
                    <Users size={13} className="text-gold-dark" />
                    {tr(e.role)}
                  </span>
                </div>

                <p className="mt-5 text-[15px] leading-relaxed text-ink-soft">{tr(e.detail)}</p>

                <div className="mt-5 flex flex-wrap gap-2.5 border-t border-ink/8 pt-4">
                  <span className="font-sans text-[10px] uppercase tracking-widest text-ink-muted">
                    {t('events.source')}
                  </span>
                  {e.sources.map((s, j) => (
                    <a
                      key={j}
                      href={s.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group inline-flex items-center gap-1.5 font-sans text-[11px] uppercase tracking-widest text-gold-dark transition-colors hover:text-terracotta-dark"
                    >
                      {s.label}
                      <ExternalLink
                        size={12}
                        className="transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                      />
                    </a>
                  ))}
                  <a
                    href={ics}
                    download={`${e.id}.ics`}
                    className="ml-auto inline-flex items-center gap-1.5 font-sans text-[11px] uppercase tracking-widest text-ink-muted transition-colors hover:text-gold-dark"
                  >
                    <CalendarPlus size={13} />
                    {t('events.calendar')}
                  </a>
                </div>
              </article>
            </Reveal>
            )
          })}
        </div>

        <Reveal>
          <p className="mt-10 text-center font-sans text-[11px] uppercase tracking-widest text-ink-muted">
            {t('events.pending')}
          </p>
        </Reveal>
      </div>
    </section>
  )
}
