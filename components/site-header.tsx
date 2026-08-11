'use client'

import Image from 'next/image'
import { Mail, Phone } from 'lucide-react'
import { useEffect, useState } from 'react'
import { MobileNavigation } from './mobile-navigation'
import { LanguageSwitcher } from './language-switcher'
import { nav, site } from '@/lib/site'
import { useI18n } from '@/lib/i18n'

export function SiteHeader() {
  const { t } = useI18n()
  const [persistent, setPersistent] = useState(false)

  useEffect(() => {
    const update = () => setPersistent(window.scrollY > window.innerHeight * 0.72)
    update()
    window.addEventListener('scroll', update, { passive: true })
    window.addEventListener('resize', update)
    return () => {
      window.removeEventListener('scroll', update)
      window.removeEventListener('resize', update)
    }
  }, [])

  return (
    <>
      <header
        className={`fixed inset-x-0 top-0 z-50 transition-[background-color,box-shadow] duration-300 motion-reduce:transition-none ${
          persistent ? 'bg-evergreen/95 shadow-[0_8px_35px_rgba(8,20,14,0.22)] backdrop-blur-md' : 'bg-transparent'
        }`}
      >
        <div
          className={`mx-auto flex max-w-[112rem] items-center justify-between gap-4 px-5 transition-[padding] duration-300 sm:px-8 ${
            persistent ? 'py-2.5' : 'py-4 md:py-6'
          }`}
        >
          <a href="#top" className="group flex items-center gap-3 text-paper">
            <Image
              src="/top.png"
              alt={t("Mo's Lawn Care and Snow Removal")}
              width={56}
              height={56}
              priority
              className="h-12 w-12 object-cover sm:h-14 sm:w-14"
            />
            <span className="hidden text-[0.75rem] leading-tight font-semibold tracking-[0.16em] text-paper/75 uppercase sm:block">
              {t('Lawn Care')}
              <br />
              {t('& Snow Removal')}
            </span>
          </a>

          <nav aria-label={t('Primary navigation')} className="hidden items-center gap-7 lg:flex">
            {nav.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="text-[0.8125rem] font-semibold tracking-[0.18em] text-paper/75 uppercase transition-colors duration-200 hover:text-paper"
              >
                {t(item.label)}
              </a>
            ))}
            <a
              href={site.phoneHref}
              className="text-[0.8125rem] font-semibold tracking-[0.12em] text-paper/75 transition-colors duration-200 hover:text-paper"
            >
              {site.phone}
            </a>
            <a
              href="#estimate-form"
              className="flex h-12 items-center border border-paper/35 px-5 text-[0.8125rem] font-bold tracking-[0.18em] text-paper uppercase transition-colors duration-200 hover:border-paper hover:bg-paper hover:text-evergreen"
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
        href="tel:+15158688636"
        aria-label={`${t("Call Mo's Lawn Care at")} ${site.phone}`}
        title={`${t('Call')} ${site.phone}`}
        className={`phone-float fixed right-6 bottom-6 z-40 hidden h-14 w-14 items-center justify-center rounded-full bg-[#D5EE72] text-evergreen shadow-[0_12px_35px_rgba(8,20,14,0.3)] transition-[transform,opacity,background-color] duration-300 hover:scale-105 hover:bg-paper focus-visible:scale-105 motion-reduce:transition-none md:flex ${
          persistent ? 'translate-y-0 opacity-100' : 'pointer-events-none translate-y-4 opacity-0'
        }`}
        tabIndex={persistent ? undefined : -1}
      >
        <Phone aria-hidden="true" className="relative z-10" size={23} strokeWidth={2.25} />
      </a>

      <div
        className={`fixed inset-x-0 bottom-0 z-40 grid grid-cols-2 border-t border-paper/15 bg-evergreen/97 p-2 pb-[calc(0.5rem+env(safe-area-inset-bottom))] shadow-[0_-8px_30px_rgba(8,20,14,0.24)] backdrop-blur-md transition-[transform,opacity] duration-300 md:hidden ${
          persistent ? 'translate-y-0 opacity-100' : 'pointer-events-none translate-y-full opacity-0'
        }`}
        aria-hidden={!persistent}
      >
        <a
          href={site.phoneHref}
          tabIndex={persistent ? undefined : -1}
          className="flex min-h-12 items-center justify-center gap-2 text-sm font-bold tracking-[0.12em] text-paper uppercase whitespace-nowrap"
        >
          <Phone aria-hidden="true" size={18} strokeWidth={2.25} />
          {site.phone}
        </a>
        <a
          href="#estimate-form"
          tabIndex={persistent ? undefined : -1}
          className="flex min-h-12 items-center justify-center bg-[#D5EE72] px-3 text-sm font-bold tracking-[0.1em] text-evergreen uppercase"
        >
          {t('Free estimate')}
        </a>
      </div>
    </>
  )
}
