'use client'

import Link from 'next/link'
import {
  companyNavigationRoutes,
  footerServiceNavigationRoutes,
  serviceAreaNavigationRoutes,
} from '@/content/routes'
import { site } from '@/lib/site'
import { useI18n } from '@/lib/i18n'

const footerLinkClass =
  'inline-flex min-h-11 items-center text-[0.9rem] leading-snug text-paper/68 underline decoration-transparent underline-offset-4 transition-colors hover:text-paper hover:decoration-current'
const footerLabelClass =
  'text-xs font-bold tracking-[0.13em] text-paper/62 uppercase'

export function SiteFooter() {
  const { t } = useI18n()

  return (
    <footer data-site-footer className="bg-evergreen pt-14 pb-28 text-paper md:pb-24">
      <div className="mx-auto w-full max-w-[112rem] px-5 sm:px-8">
        <div className="grid gap-12 border-t border-paper/15 pt-10 lg:grid-cols-[0.8fr_1.45fr_0.75fr_0.75fr] lg:gap-10">
          <div>
            <p className="font-display text-xl font-bold tracking-[-0.025em] text-paper">
              {site.displayName}
            </p>
            <p className="mt-3 max-w-[29ch] text-sm leading-relaxed text-paper/62">
              {site.companyName}
              <br />
              {site.location}
            </p>
            <p className={`mt-6 ${footerLabelClass}`}>
              {t('Working Hours:')}
            </p>
            <p className="mt-2 text-sm text-paper/68">{t(site.openingHours.displayCopy)}</p>
          </div>

          <nav aria-label={t('Services navigation')}>
            <p className={footerLabelClass}>
              {t('Services')}
            </p>
            <ul className="mt-3 grid gap-x-8 sm:grid-cols-2">
              {footerServiceNavigationRoutes.map((route) => (
                <li key={route.id}>
                  <Link href={route.href} prefetch={false} className={footerLinkClass}>
                    {t(route.label)}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <nav aria-label={t('Service areas navigation')}>
            <p className={footerLabelClass}>
              {t('Service Areas')}
            </p>
            <ul className="mt-3">
              {serviceAreaNavigationRoutes.map((route) => (
                <li key={route.id}>
                  <Link href={route.href} prefetch={false} className={footerLinkClass}>
                    {t(route.label)}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <nav aria-label={t('Company navigation')}>
            <p className={footerLabelClass}>
              {t('Company')}
            </p>
            <ul className="mt-3">
              {companyNavigationRoutes.map((route) => (
                <li key={route.id}>
                  <Link href={route.href} prefetch={false} className={footerLinkClass}>
                    {t(route.label)}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        </div>

        <div className="mt-10 flex flex-col gap-4 border-t border-paper/15 pt-6 text-sm sm:flex-row sm:items-center sm:justify-between">
          <p className="text-xs tracking-[0.08em] text-paper/62 uppercase">
            © {new Date().getFullYear()} {site.companyName}
          </p>
          <div className="flex flex-col gap-x-6 sm:flex-row sm:items-center">
            <a href={site.phoneHref} className={footerLinkClass}>
              {site.phone}
            </a>
            <a href={site.emailHref} className={`${footerLinkClass} break-all`}>
              {site.email}
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}
