import { flashes } from '../data/flashes'
import { useLang } from '../i18n/LanguageContext'
import Reveal from './Reveal'
import DraftBadge from './DraftBadge'

// In fondo alla pagina, dopo i contatti: gli appunti che non sono di libri.
// Si danno da soli in ordine di tempo, e se ne vedono al massimo tre.
const MAX = 3

export default function Flashes() {
  const { t, tr } = useLang()
  const recenti = [...flashes].sort((a, b) => (a.iso < b.iso ? 1 : -1)).slice(0, MAX)

  return (
    <section id="flashes" className="relative border-t border-ink/10 bg-paper-warm py-20 md:py-24">
      <div className="mx-auto max-w-3xl px-6">
        <Reveal>
          <p className="eyebrow mb-3">{t('flashes.eyebrow')}</p>
          <h2 className="text-balance font-display text-3xl font-semibold leading-tight text-ink md:text-4xl">
            {t('flashes.heading')}
          </h2>
          <p className="mt-4 max-w-xl text-[15px] leading-relaxed text-ink-muted">
            {t('flashes.intro')}
          </p>
        </Reveal>

        {recenti.length === 0 ? (
          <Reveal>
            <p className="mt-10 border-t border-ink/10 pt-6 font-serif text-[17px] italic leading-relaxed text-ink-muted">
              {t('flashes.empty')}
            </p>
          </Reveal>
        ) : (
          <ul className="mt-10 space-y-6">
            {recenti.map((f, i) => (
              <li key={f.id}>
                <Reveal delay={i * 0.08}>
                  <div className="grid gap-1 border-t border-ink/10 pt-6 md:grid-cols-[7.5rem_1fr] md:gap-6">
                    <p className="pt-1.5 font-sans text-[10px] uppercase tracking-widest text-ink-muted">
                      {tr(f.date)}
                    </p>
                    <div>
                      {f.draft && <DraftBadge className="mb-2" />}
                      <p className="font-serif text-[19px] leading-relaxed text-ink-soft">
                        {tr(f.text)}
                      </p>
                    </div>
                  </div>
                </Reveal>
              </li>
            ))}
          </ul>
        )}
      </div>
    </section>
  )
}
