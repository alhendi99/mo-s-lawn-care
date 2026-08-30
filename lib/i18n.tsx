'use client'

import { createContext, useCallback, useContext, useEffect, useMemo, useState } from 'react'
import spanish from './es-translations.json'

export type Locale = 'en' | 'es'

type I18nValue = {
  locale: Locale
  setLocale: (locale: Locale) => void
  t: (english: string) => string
}

const I18nContext = createContext<I18nValue | null>(null)
const spanishTranslations = spanish as Record<string, string>

export function I18nProvider({ children }: { children: React.ReactNode }) {
  const [locale, setLocaleState] = useState<Locale>('en')

  useEffect(() => {
    const params = new URLSearchParams(window.location.search)
    const requested = params.get('lang')
    const saved = window.localStorage.getItem('mos-locale')
    const initial = requested === 'es' || requested === 'en'
      ? requested
      : saved === 'es'
        ? 'es'
        : 'en'
    setLocaleState(initial)
  }, [])

  const setLocale = useCallback((next: Locale) => {
    setLocaleState(next)
    window.localStorage.setItem('mos-locale', next)
    const url = new URL(window.location.href)
    url.searchParams.set('lang', next)
    window.history.replaceState({}, '', url)
  }, [])

  useEffect(() => {
    document.documentElement.lang = locale
  }, [locale])

  const t = useCallback(
    (english: string) => locale === 'es' ? spanishTranslations[english] ?? english : english,
    [locale],
  )

  const value = useMemo(() => ({ locale, setLocale, t }), [locale, setLocale, t])
  return <I18nContext.Provider value={value}>{children}</I18nContext.Provider>
}

export function useI18n() {
  const context = useContext(I18nContext)
  if (!context) throw new Error('useI18n must be used inside I18nProvider')
  return context
}
