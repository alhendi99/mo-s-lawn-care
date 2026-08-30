'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { ChevronDown } from 'lucide-react'
import { useEffect, useId, useRef, useState } from 'react'
import {
  primaryNavigationRoutes,
  routesById,
  serviceNavigationRoutes,
} from '@/content/routes'
import { site } from '@/lib/site'
import { useI18n } from '@/lib/i18n'

const focusableSelector = 'a[href], button:not([disabled]), [tabindex]:not([tabindex="-1"])'

export function MobileNavigation() {
  const pathname = usePathname()
  const { t } = useI18n()
  const [open, setOpen] = useState(false)
  const [servicesOpen, setServicesOpen] = useState(false)
  const triggerRef = useRef<HTMLButtonElement>(null)
  const panelRef = useRef<HTMLDivElement>(null)
  const menuId = useId()
  const servicesId = useId()

  const closeMenu = (returnFocus = false) => {
    setOpen(false)
    setServicesOpen(false)
    if (returnFocus) requestAnimationFrame(() => triggerRef.current?.focus())
  }

  useEffect(() => {
    closeMenu()
  }, [pathname])

  useEffect(() => {
    const previousOverflow = document.body.style.overflow
    document.body.style.overflow = open ? 'hidden' : previousOverflow

    if (open) {
      requestAnimationFrame(() => {
        panelRef.current?.querySelector<HTMLElement>(focusableSelector)?.focus()
      })
    }

    return () => {
      document.body.style.overflow = previousOverflow
    }
  }, [open])

  useEffect(() => {
    if (!open) return

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        event.preventDefault()
        closeMenu(true)
        return
      }

      if (event.key !== 'Tab' || !panelRef.current) return

      const focusable = [
        ...(triggerRef.current ? [triggerRef.current] : []),
        ...panelRef.current.querySelectorAll<HTMLElement>(focusableSelector),
      ].filter(
        (element) => !element.hasAttribute('disabled') && element.getClientRects().length > 0,
      )
      if (focusable.length === 0) return

      const first = focusable[0]
      const last = focusable[focusable.length - 1]
      if (event.shiftKey && document.activeElement === first) {
        event.preventDefault()
        last.focus()
      } else if (!event.shiftKey && document.activeElement === last) {
        event.preventDefault()
        first.focus()
      }
    }

    window.addEventListener('keydown', onKeyDown)
    return () => window.removeEventListener('keydown', onKeyDown)
  }, [open])

  return (
    <div className="xl:hidden">
      <button
        ref={triggerRef}
        type="button"
        aria-label={t(open ? 'Close navigation menu' : 'Open navigation menu')}
        aria-expanded={open}
        aria-controls={menuId}
        onClick={() => (open ? closeMenu() : setOpen(true))}
        className="relative z-50 flex h-11 min-w-11 items-center gap-2 px-1 text-[0.75rem] font-semibold tracking-[0.14em] text-paper uppercase"
      >
        {t(open ? 'Close' : 'Menu')}
        <span aria-hidden="true" className="relative block h-3 w-4">
          <span
            className="absolute left-0 block h-px w-4 bg-paper transition-transform duration-200 motion-reduce:transition-none"
            style={{ top: open ? '6px' : '2px', transform: open ? 'rotate(45deg)' : 'none' }}
          />
          <span
            className="absolute left-0 block h-px w-4 bg-paper transition-transform duration-200 motion-reduce:transition-none"
            style={{ top: open ? '6px' : '10px', transform: open ? 'rotate(-45deg)' : 'none' }}
          />
        </span>
      </button>

      <div
        ref={panelRef}
        id={menuId}
        role="dialog"
        aria-modal="true"
        aria-label={t('Primary navigation')}
        aria-hidden={!open}
        className={`fixed inset-0 z-40 flex flex-col overflow-y-auto bg-evergreen px-5 pt-24 pb-[calc(2.5rem+env(safe-area-inset-bottom))] transition-[opacity,visibility] duration-200 motion-reduce:transition-none sm:px-8 ${
          open ? 'visible opacity-100' : 'pointer-events-none invisible opacity-0'
        }`}
      >
        <nav aria-label={t('Primary navigation')}>
          <ul>
            <li className="rule border-[color:var(--rule-dark)]">
              <div className="flex items-stretch">
                <Link
                  href={routesById.services.path}
                  prefetch={false}
                  tabIndex={open ? undefined : -1}
                  aria-current={pathname === routesById.services.path ? 'page' : undefined}
                  className="flex min-h-16 min-w-0 flex-1 items-center py-3 pr-3 font-display text-[clamp(1.7rem,8vw,2.5rem)] font-bold tracking-[-0.02em] text-paper uppercase"
                >
                  {t('Services')}
                </Link>
                <button
                  type="button"
                  tabIndex={open ? undefined : -1}
                  aria-label={t(servicesOpen ? 'Close services menu' : 'Open services menu')}
                  aria-expanded={servicesOpen}
                  aria-controls={servicesId}
                  onClick={() => setServicesOpen((value) => !value)}
                  className="flex min-h-16 w-14 shrink-0 items-center justify-center text-paper/70"
                >
                  <ChevronDown
                    aria-hidden="true"
                    className={`transition-transform duration-200 motion-reduce:transition-none ${
                      servicesOpen ? 'rotate-180' : ''
                    }`}
                  />
                </button>
              </div>
              <ul id={servicesId} hidden={!servicesOpen} className="grid gap-px pb-3 sm:grid-cols-2">
                {serviceNavigationRoutes.map((route) => (
                  <li key={route.id}>
                    <Link
                      href={route.href}
                      prefetch={false}
                      tabIndex={open && servicesOpen ? undefined : -1}
                      aria-current={pathname === route.href ? 'page' : undefined}
                      className="flex min-h-12 items-center border-l border-paper/15 px-4 text-sm font-semibold leading-snug text-paper/72 hover:border-[#D5EE72] hover:text-paper"
                    >
                      {t(route.label)}
                    </Link>
                  </li>
                ))}
              </ul>
            </li>
            {primaryNavigationRoutes.slice(1).map((route) => (
              <li key={route.id} className="rule border-[color:var(--rule-dark)]">
                <Link
                  href={route.href}
                  prefetch={false}
                  tabIndex={open ? undefined : -1}
                  aria-current={pathname === route.href ? 'page' : undefined}
                  className="flex min-h-16 items-center py-3 font-display text-[clamp(1.7rem,8vw,2.5rem)] font-bold tracking-[-0.02em] text-paper uppercase"
                >
                  {t(route.label)}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
        <a
          href="/#estimate-form"
          tabIndex={open ? undefined : -1}
          className="btn-solid mt-8 w-full"
          style={{ backgroundColor: 'var(--accent)' }}
        >
          {t('Get a free estimate')}
        </a>
        <p className="mt-auto pt-10 text-sm leading-relaxed text-paper/70">
          {site.companyName}
          <br />
          {site.location}
        </p>
      </div>
    </div>
  )
}
