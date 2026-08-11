'use client'

import { useI18n } from '@/lib/i18n'

export function Tr({ text }: { text: string }) {
  const { t } = useI18n()
  return <>{t(text)}</>
}

export function LocalizedNav({ label, children }: { label: string; children: React.ReactNode }) {
  const { t } = useI18n()
  return <nav aria-label={t(label)}>{children}</nav>
}
