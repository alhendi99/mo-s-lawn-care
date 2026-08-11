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
    const updateDocumentLanguage = () => {
      document.documentElement.lang = locale
      document.title = locale === 'es'
        ? "Servicio de cuidado del césped en Des Moines, Iowa | Mo's Lawn Care"
        : "Lawn Care Service in Des Moines, Iowa | Mo's Lawn Care"
      const description = document.querySelector<HTMLMetaElement>('meta[name="description"]')
      if (description) {
        description.content = locale === 'es'
          ? "¿Necesita cuidado del césped en Des Moines, Iowa? Mo's ofrece jardinería, limpieza de hojas y patios, paisajismo y remoción de nieve. Solicite un presupuesto gratis."
          : "Need a lawn care service in Des Moines, Iowa? Mo's provides lawn care, landscaping, leaf and yard cleanup, and snow removal. Request a free estimate."
      }
    }
    updateDocumentLanguage()
    const timer = window.setTimeout(updateDocumentLanguage, 250)
    return () => window.clearTimeout(timer)
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
