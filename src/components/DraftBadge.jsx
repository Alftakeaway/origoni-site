import { PencilLine } from 'lucide-react'
import { useLang } from '../i18n/LanguageContext'

// Segnala le voci ancora provvisorie: quello che è inventato non deve sembrare un fatto.
export default function DraftBadge({ className = '' }) {
  const { t } = useLang()
  return (
    <span
      className={`inline-flex items-center gap-1.5 rounded-full bg-terracotta px-3 py-1 font-sans text-[10px] font-semibold uppercase tracking-widest text-paper shadow-card ${className}`}
    >
      <PencilLine size={11} />
      {t('draft.label')}
    </span>
  )
}
