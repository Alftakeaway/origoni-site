import { useLang } from '../i18n/LanguageContext'

// Le copertine reali non sono riproducibili qui, quindi la bibliografia usa
// copertine tipografiche generate: nessun fotografico spacciato per copertina.
const tones = {
  ink: {
    shell: 'bg-ink text-paper',
    rule: 'bg-gold/70',
    label: 'text-gold-light',
    title: 'text-paper',
  },
  sage: {
    shell: 'bg-sage text-ink',
    rule: 'bg-ink/40',
    label: 'text-ink/70',
    title: 'text-ink',
  },
  terracotta: {
    shell: 'bg-terracotta text-paper',
    rule: 'bg-paper/60',
    label: 'text-paper/75',
    title: 'text-paper',
  },
  gold: {
    shell: 'bg-gold/25 text-ink',
    rule: 'bg-gold-dark/70',
    label: 'text-ink-muted',
    title: 'text-ink',
  },
}

export default function BookCover({ work, large = false }) {
  const { tr } = useLang()
  const tone = tones[work.tone] || tones.ink

  return (
    <div
      aria-hidden
      className={`flex h-full w-full flex-col justify-between ${tone.shell} transition-transform duration-700 ease-out group-hover:scale-[1.03]`}
    >
      <div className="flex items-start justify-between gap-4">
        {/* Sulle card la riga inferiore già mostra editore e anno: qui basta l'anno,
            altrimenti il badge del tipo lo copre. */}
        {large && (
          <span className={`px-8 pt-8 font-sans uppercase tracking-literary text-[11px] ${tone.label}`}>
            {work.publisher}
          </span>
        )}
        <span
          className={`ml-auto font-sans tabular-nums ${large ? 'px-8 pt-8 text-[11px]' : 'px-5 pt-5 text-[9px]'} ${tone.label}`}
        >
          {work.year}
        </span>
      </div>

      <div className={large ? 'px-8 pb-10' : 'px-5 pb-6'}>
        <p
          className={`font-display font-semibold leading-tight ${
            large ? 'text-3xl md:text-4xl' : 'text-xl md:text-2xl'
          } ${tone.title}`}
        >
          {tr(work.title)}
        </p>
        {work.subtitle && !large && (
          <p
            className={`mt-2 font-serif italic leading-snug ${
              large ? 'text-base' : 'text-[13px]'
            } ${tone.label}`}
          >
            {tr(work.subtitle)}
          </p>
        )}
        <div className={`mt-4 h-px w-16 ${tone.rule}`} />
      </div>
    </div>
  )
}
