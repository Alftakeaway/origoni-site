import { createContext, useContext, useEffect, useState } from 'react'
import { strings } from './strings'

const LanguageContext = createContext(null)

/**
 * Italian is the primary language; English is offered for international readers.
 * The choice persists in localStorage and syncs <html lang> and the document title.
 */
export function LanguageProvider({ children }) {
  const [lang, setLang] = useState(() => {
    try {
      return localStorage.getItem('co-lang') === 'en' ? 'en' : 'it'
    } catch {
      return 'it'
    }
  })

  useEffect(() => {
    try {
      localStorage.setItem('co-lang', lang)
    } catch {
      /* private mode — ignore */
    }
    document.documentElement.lang = lang
    document.title = strings[lang].docTitle
  }, [lang])

  // t('nav.works') -> dictionary string; tr(value) resolves bilingual data fields { it, en }
  const t = (path) =>
    path.split('.').reduce((acc, k) => (acc == null ? acc : acc[k]), strings[lang]) ??
    path.split('.').reduce((acc, k) => (acc == null ? acc : acc[k]), strings.en)

  const tr = (value) => (typeof value === 'string' ? value : value?.[lang] ?? value?.en)

  return <LanguageContext.Provider value={{ lang, setLang, t, tr }}>{children}</LanguageContext.Provider>
}

export const useLang = () => useContext(LanguageContext)
