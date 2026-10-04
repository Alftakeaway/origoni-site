import { Feather, ArrowUp } from 'lucide-react'
import { useLang } from '../i18n/LanguageContext'

export default function Footer() {
  const { t } = useLang()
  return (
    <footer className="border-t border-paper/10 bg-ink pb-10 pt-14 text-paper/50">
      <div className="mx-auto flex max-w-6xl flex-col items-center gap-6 px-6 md:flex-row md:justify-between">
        <div className="flex items-center gap-2.5">
          <Feather size={17} className="text-gold" />
          <span className="font-display text-base font-semibold text-paper/80">
            Claudia Origoni
          </span>
        </div>

        <div className="flex max-w-xl flex-col items-center gap-2 text-center">
          <p className="font-serif text-sm italic">{t('footer.quote')}</p>
          <p className="font-sans text-[11px] uppercase tracking-widest text-paper/45">
            {t('footer.line')}
          </p>
        </div>

        <div className="flex items-center gap-6">
          <span className="font-sans text-[11px] uppercase tracking-widest">
            &copy; {new Date().getFullYear()}
          </span>
          <a
            href="#top"
            aria-label="Back to top"
            className="rounded-full border border-paper/15 p-2.5 text-paper/60 transition-all duration-300 hover:-translate-y-1 hover:border-gold hover:text-gold-light"
          >
            <ArrowUp size={14} />
          </a>
        </div>
      </div>
    </footer>
  )
}
