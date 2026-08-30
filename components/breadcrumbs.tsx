'use client'

import Link from 'next/link'
import { ChevronRight } from 'lucide-react'
import { getBreadcrumbItems } from '@/content/routes'
import type { RouteId } from '@/content/types'
import { useI18n } from '@/lib/i18n'

export function Breadcrumbs({ routeId, className = '' }: { routeId: RouteId; className?: string }) {
  const { t } = useI18n()
  const items = getBreadcrumbItems(routeId)

  if (items.length < 2) return null

  return (
    <nav aria-label={t('Breadcrumb')} className={className}>
      <ol className="flex flex-wrap items-center gap-x-2 gap-y-1 text-[0.75rem] font-semibold tracking-[0.1em] text-ink-soft uppercase">
        {items.map((item) => (
          <li key={item.routeId} className="flex min-w-0 max-w-full items-center gap-2">
            {item.isCurrent ? (
              <span aria-current="page" className="max-w-full break-words whitespace-normal text-ink">
                {t(item.label)}
              </span>
            ) : (
              <Link
                href={item.href}
                prefetch={false}
                className="inline-flex min-h-11 items-center underline decoration-transparent underline-offset-4 transition-colors hover:text-ink hover:decoration-current"
              >
                {t(item.label)}
              </Link>
            )}
            {!item.isCurrent ? (
              <ChevronRight aria-hidden="true" size={14} className="shrink-0 text-ink-soft/55" />
            ) : null}
          </li>
        ))}
      </ol>
    </nav>
  )
}
