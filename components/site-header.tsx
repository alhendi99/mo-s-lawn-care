'use client'

import Image from 'next/image'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { Mail, Phone } from 'lucide-react'
import { useEffect, useState } from 'react'
import { primaryNavigationRoutes, routesById } from '@/content/routes'
import { site } from '@/lib/site'
import { useI18n } from '@/lib/i18n'
import { LanguageSwitcher } from './language-switcher'
import { MobileNavigation } from './mobile-navigation'
import { ServicesMenu } from './services-menu'

function routeIsActive(pathname: string, href: string) {
  return pathname === href || (href !== '/' && pathname.startsWith(`${href}/`))
}

export function SiteHeader() {
  const pathname = usePathname()
  const { t } = useI18n()
  const [scrolled, setScrolled] = useState(false)
  const isHomepage = pathname === routesById.home.path
  const elevated = !isHomepage || scrolled

  useEffect(() => {
    const update = () => setScrolled(window.scrollY > window.innerHeight * 0.72)
    update()
    window.addEventListener('scroll', update, { passive: true })
    window.addEventListener('resize', update)
    return () => {
      window.removeEventListener('scroll', update)
      window.removeEventListener('resize', update)
    }
  }, [pathname])

  return (
    <>
      <header
        className={`site-header fixed inset-x-0 top-0 z-50 transition-[background-color,box-shadow] duration-300 motion-reduce:transition-none ${
          elevated
            ? 'bg-evergreen/97 shadow-[0_8px_35px_rgba(8,20,14,0.22)] backdrop-blur-md'
            : 'bg-transparent'
        }`}
      >
        <div
          className={`mx-auto flex max-w-[112rem] items-center justify-between gap-3 px-5 transition-[padding] duration-300 sm:px-8 ${
            elevated ? 'py-2.5' : 'py-4 md:py-6'
          }`}
        >
          <Link
            href={routesById.home.path}
            className="group flex shrink-0 items-center gap-3 text-paper"
            aria-label={`${site.displayName} ${t('Home')}`}
          >
            <Image
              src="/logo-112x112.png"
              alt=""
              width={56}
              height={56}
              priority
              className="h-12 w-12 object-cover sm:h-14 sm:w-14"
            />
            <span className="hidden text-[0.7rem] leading-tight font-semibold tracking-[0.15em] text-paper/75 uppercase sm:block xl:hidden 2xl:block">
              {t('Lawn Care')}
              <br />
              {t('& Snow Removal')}
            </span>
          </Link>

          <nav aria-label={t('Primary navigation')} className="hidden min-w-0 items-center gap-2 xl:flex 2xl:gap-4">
            <ServicesMenu />
            {primaryNavigationRoutes.slice(1).map((route) => {
              const active = routeIsActive(pathname, route.href)
              return (
                <Link
                  key={route.id}
                  href={route.href}
                  prefetch={false}
                  aria-current={pathname === route.href ? 'page' : undefined}
                  className={`global-nav-link ${active ? 'global-nav-link-active' : ''}`}
                >
                  {t(route.label)}
                </Link>
              )
            })}
            <a
              href={site.phoneHref}
              aria-label={`${t('Call')} ${site.phone}`}
              className="flex h-11 w-11 shrink-0 items-center justify-center text-paper/72 transition-colors hover:text-paper"
            >
              <Phone aria-hidden="true" size={18} strokeWidth={2.25} />
            </a>
            <a
              href="/#estimate-form"
              className="flex h-11 shrink-0 items-center border border-paper/35 px-3 text-[0.68rem] font-bold tracking-[0.13em] text-paper uppercase transition-colors duration-200 hover:border-paper hover:bg-paper hover:text-evergreen 2xl:px-5"
            >
              {t('Get Estimate')}
            </a>
          </nav>

          <div className="flex items-center gap-2">
            <LanguageSwitcher compact />
            <MobileNavigation />
          </div>
        </div>
      </header>

      <a
        href={site.phoneHref}
        aria-label={`${t("Call Mo's Lawn Care at")} ${site.phone}`}
        title={`${t('Call')} ${site.phone}`}
        className={`phone-float fixed right-6 bottom-6 z-40 hidden h-14 w-14 items-center justify-center rounded-full bg-[#D5EE72] text-evergreen shadow-[0_12px_35px_rgba(8,20,14,0.3)] transition-[transform,opacity,background-color] duration-300 hover:scale-105 hover:bg-paper focus-visible:scale-105 motion-reduce:transition-none md:flex ${
          elevated ? 'translate-y-0 opacity-100' : 'pointer-events-none translate-y-4 opacity-0'
        }`}
        tabIndex={elevated ? undefined : -1}
      >
        <Phone aria-hidden="true" className="relative z-10" size={23} strokeWidth={2.25} />
      </a>

      <div
        className={`fixed inset-x-0 bottom-0 z-40 grid grid-cols-3 border-t border-paper/15 bg-evergreen/97 p-2 pb-[calc(0.5rem+env(safe-area-inset-bottom))] shadow-[0_-8px_30px_rgba(8,20,14,0.24)] backdrop-blur-md transition-[transform,opacity] duration-300 md:hidden ${
          elevated ? 'translate-y-0 opacity-100' : 'pointer-events-none translate-y-full opacity-0'
        }`}
        aria-hidden={!elevated}
      >
        <a
          href="/#estimate-form"
          tabIndex={elevated ? undefined : -1}
          className="flex min-h-12 items-center justify-center bg-[#D5EE72] px-3 text-[9px] font-bold tracking-[0.1em] text-evergreen uppercase"
        >
          {t('Free estimate')}
        </a>
        <a
          href={site.phoneHref}
          tabIndex={elevated ? undefined : -1}
          aria-label={`${t('Call')} ${site.phone}`}
          className="flex min-h-12 items-center justify-center gap-2 border-t border-paper/15 text-sm font-bold tracking-[0.12em] text-paper uppercase whitespace-nowrap"
        >
          <Phone aria-hidden="true" size={18} strokeWidth={2.25} />
        </a>
        <a
          href={site.emailHref}
          tabIndex={elevated ? undefined : -1}
          aria-label={`${t('Email')} ${site.email}`}
          className="flex min-h-12 items-center justify-center gap-2 text-sm font-bold tracking-[0.12em] text-paper uppercase whitespace-nowrap"
        >
          <Mail aria-hidden="true" size={18} strokeWidth={2.25} />
        </a>
      </div>
    </>
  )
}
