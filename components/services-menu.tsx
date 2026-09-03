'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { ChevronDown } from 'lucide-react'
import { useEffect, useRef, useState } from 'react'
import { routesById, serviceNavigationRoutes } from '@/content/routes'
import { useI18n } from '@/lib/i18n'

function pathIsInServices(pathname: string) {
  return pathname === routesById.services.path || pathname.startsWith(`${routesById.services.path}/`)
}

export function ServicesMenu() {
  const pathname = usePathname()
  const { t } = useI18n()
  const [open, setOpen] = useState(false)
  const containerRef = useRef<HTMLDivElement>(null)
  const toggleRef = useRef<HTMLButtonElement>(null)
  const active = pathIsInServices(pathname)

  const closeMenu = (returnFocus = false) => {
    setOpen(false)
    if (returnFocus) {
      requestAnimationFrame(() => toggleRef.current?.focus())
    }
  }

  useEffect(() => {
    setOpen(false)
  }, [pathname])

  useEffect(() => {
    if (!open) return

    const onPointerDown = (event: PointerEvent) => {
      if (!containerRef.current?.contains(event.target as Node)) closeMenu()
    }

    document.addEventListener('pointerdown', onPointerDown)
    return () => document.removeEventListener('pointerdown', onPointerDown)
  }, [open])

  return (
    <div
      ref={containerRef}
      className="relative flex items-center"
      onMouseLeave={() => closeMenu()}
      onBlurCapture={(event) => {
        if (!event.currentTarget.contains(event.relatedTarget as Node | null)) closeMenu()
      }}
      onKeyDown={(event) => {
        if (event.key === 'Escape' && open) {
          event.preventDefault()
          closeMenu(true)
        }
      }}
    >
      <Link
        href={routesById.services.path}
        prefetch={false}
        aria-current={pathname === routesById.services.path ? 'page' : undefined}
        className={`global-nav-link rounded-l-sm pr-1 ${active ? 'global-nav-link-active' : ''}`}
      >
        {t('Services')}
      </Link>
      <button
        ref={toggleRef}
        type="button"
        aria-label={t(open ? 'Close services menu' : 'Open services menu')}
        aria-expanded={open}
        aria-controls="desktop-services-menu"
        onClick={() => setOpen((value) => !value)}
        className={`flex h-11 w-7 items-center justify-center rounded-r-sm text-paper/70 transition-colors hover:text-paper ${
          active ? 'text-paper' : ''
        }`}
      >
        <ChevronDown
          aria-hidden="true"
          size={15}
          className={`transition-transform duration-200 motion-reduce:transition-none ${open ? 'rotate-180' : ''}`}
        />
      </button>

      <div
        id="desktop-services-menu"
        aria-hidden={!open}
        data-services-menu-bridge
        className={`absolute top-full left-0 w-[min(42rem,calc(100vw-4rem))] pt-3 transition-[opacity,transform,visibility] duration-200 motion-reduce:transition-none ${
          open
            ? 'visible translate-y-0 opacity-100'
            : 'pointer-events-none invisible -translate-y-2 opacity-0'
        }`}
      >
        <div className="border border-paper/15 bg-evergreen/98 p-3 shadow-[0_24px_70px_rgba(5,15,10,0.38)] backdrop-blur-xl">
          <div className="mb-2 flex items-center justify-between border-b border-paper/12 px-3 pb-3">
            <p className="text-[0.68rem] font-bold tracking-[0.18em] text-paper/55 uppercase">
              {t('Services menu')}
            </p>
            <Link
              href={routesById.services.path}
              prefetch={false}
              tabIndex={open ? undefined : -1}
              className="inline-flex min-h-11 items-center text-[0.68rem] font-bold tracking-[0.12em] text-[#D5EE72] uppercase underline decoration-transparent underline-offset-4 hover:decoration-current"
            >
              {t('View all services')} ↗
            </Link>
          </div>
          <ul className="grid grid-cols-2 gap-1">
            {serviceNavigationRoutes.map((route, index) => {
              const isCurrent = pathname === route.href
              return (
                <li key={route.id}>
                  <Link
                    href={route.href}
                    prefetch={false}
                    tabIndex={open ? undefined : -1}
                    aria-current={isCurrent ? 'page' : undefined}
                    className={`flex min-h-12 items-center gap-3 px-3 py-2 text-sm font-semibold leading-snug text-paper/72 transition-colors hover:bg-paper/8 hover:text-paper ${
                      isCurrent ? 'bg-paper/8 text-paper' : ''
                    }`}
                  >
                    <span aria-hidden="true" className="text-[0.62rem] tracking-[0.12em] text-paper/35">
                      {String(index + 1).padStart(2, '0')}
                    </span>
                    <span>{t(route.label)}</span>
                  </Link>
                </li>
              )
            })}
          </ul>
        </div>
      </div>
    </div>
  )
}
