'use client'

import { useI18n, type Locale } from '@/lib/i18n'

export function LanguageSwitcher({ compact = false }: { compact?: boolean }) {
  const { locale, setLocale, t } = useI18n()

  return (
    <div
      className="inline-flex items-center rounded-full border border-paper/35 bg-evergreen/35 p-1 text-paper backdrop-blur-sm"
      role="group"
      aria-label={t('Select language')}
    >
      {(['en', 'es'] as Locale[]).map((option) => (
        <button
          key={option}
          type="button"
          onClick={() => setLocale(option)}
          aria-pressed={locale === option}
          className={`min-h-11 rounded-full px-2.5 py-1 text-[0.6875rem] font-bold tracking-[0.12em] uppercase transition-colors ${
            locale === option ? 'bg-paper text-evergreen' : 'text-paper/75 hover:text-paper'
          } ${compact ? 'min-w-9' : 'min-w-10'}`}
        >
          {option}
        </button>
      ))}
    </div>
  )
}
