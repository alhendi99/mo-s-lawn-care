'use client'

import { useEffect } from 'react'
import { analytics, classifyContactHref, sanitizePagePath } from '@/lib/analytics'

export function ContactLinkTracker() {
  useEffect(() => {
    function handleClick(event: MouseEvent) {
      if (event.defaultPrevented || event.button !== 0) return
      const target = event.target
      if (!(target instanceof Element)) return

      const anchor = target.closest<HTMLAnchorElement>('a[href]')
      if (!anchor) return

      const contactType = classifyContactHref(anchor.getAttribute('href') ?? '')
      if (!contactType) return

      const context = {
        pagePath: sanitizePagePath(window.location.pathname),
        language: document.documentElement.lang === 'es' ? 'es' : 'en',
      } as const

      if (contactType === 'tel') analytics.clickToCall(context)
      if (contactType === 'mailto') analytics.clickEmail(context)
    }

    document.addEventListener('click', handleClick)
    return () => document.removeEventListener('click', handleClick)
  }, [])

  return null
}
