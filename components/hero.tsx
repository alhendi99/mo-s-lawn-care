 'use client'

import Link from 'next/link'
import { HeroVideo } from './hero-video'
import { homepageServiceRoutes } from '@/content/homepage'
import { routesById } from '@/content/routes'
import { site } from '@/lib/site'
import { useI18n } from '@/lib/i18n'

export function Hero() {
  const { t } = useI18n()
  return (
    <section
      id="top"
      data-home-section="hero"
      aria-labelledby="hero-heading"
      className="relative isolate flex min-h-[100svh] flex-col overflow-hidden bg-evergreen"
      style={
        { "--accent": "#D5EE72", "--btn-fg": "#102019" } as React.CSSProperties
      }
    >
      <div className="absolute inset-0 -z-10">
        <HeroVideo />
        <div className="hero-vignette absolute inset-0" />
        <div className="absolute inset-x-0 bottom-0 h-2/3 bg-linear-to-t from-evergreen/95 via-evergreen/45 to-transparent" />
      </div>

      <div className="mx-auto flex w-full max-w-[112rem] flex-1 flex-col justify-end px-5 pt-20 sm:px-8 sm:pt-28 lg:pt-32">
        <div className="hero-content max-w-[38rem] pb-5 sm:max-w-none sm:pb-9 xl:grid xl:grid-cols-[minmax(0,1.5fr)_minmax(20rem,0.62fr)] xl:items-end xl:gap-16 xl:pb-12">
          <div>
            <p className="hero-reveal hero-kicker mb-4 text-paper/68 [animation-delay:60ms]">
              {t('Residential + Commercial · Des Moines metro')}
            </p>
            <h1
              id="hero-heading"
              className="hero-reveal hero-display text-paper [animation-delay:120ms]"
            >
              <span className="block">{t('Lawn Care & Snow Removal')}</span>
              <span className="block text-accent">{t('in Des Moines, IA')}</span>
            </h1>
          </div>
          <div className="mt-5 max-w-[31rem] sm:mt-8 xl:mt-0 xl:pb-1">
            <p className="hero-reveal max-w-[30rem] text-base font-bold leading-relaxed text-paper/78 [animation-delay:240ms] sm:text-lg">
              {t("Lawn care, landscaping, cleanups and snow removal for homes and businesses in the Des Moines metro.")}
            </p>

            <div className="hero-reveal mt-3 border-t border-paper/18 pt-4 [animation-delay:300ms] sm:mt-6 sm:pt-5">
              <div className="flex flex-wrap items-center gap-3">
                <a href="#estimate-form" className="btn-solid group bg-[#D5EE72] text-evergreen">
                  {t('Get a Free Estimate')}
                  <span className="transition-transform duration-200 group-hover:translate-x-0.5" aria-hidden="true">→</span>
                </a>
                <a
                  href={site.phoneHref}
                  className="inline-flex min-h-13 items-center px-1 text-sm font-semibold text-paper underline decoration-[#D5EE72] decoration-2 underline-offset-4 transition-colors hover:text-accent sm:text-base"
                >
                  {t('Call')} {site.phone}
                </a>
              </div>

              <div className="mt-2 hidden flex-wrap items-center gap-x-6 sm:flex">
                <a href="#services" className="hero-text-link group px-0">
                  {t('Explore services')} <span aria-hidden="true" className="transition-transform group-hover:translate-y-0.5">↓</span>
                </a>
                <Link href={routesById['commercial-property-services'].path} prefetch={false} className="hero-text-link group px-0">
                  {t('Commercial Property Services')} <span aria-hidden="true" className="transition-transform group-hover:translate-x-1">↗</span>
                </Link>
              </div>
            </div>
          </div>
        </div>

        <div className="hero-service-line hero-reveal  min-h-14 items-center justify-between overflow-hidden border-t border-paper/18 py-3 [animation-delay:440ms] sm:flex">
          <div
            className="hero-marquee w-full overflow-hidden"
            role="group"
            aria-label={t('Services we provide')}
          >
            <div className="hero-marquee-track">
              {[false, true].map((isDuplicate) => (
                <ul
                  key={isDuplicate ? "duplicate" : "primary"}
                  className="hero-marquee-group"
                  aria-hidden={isDuplicate ? true : undefined}
                >
                  {homepageServiceRoutes.map((service) => (
                    <li
                      key={`${isDuplicate ? "duplicate" : "primary"}-${service.id}`}
                      className="hero-marquee-item"
                    >
                      <Link href={service.href} prefetch={false} tabIndex={isDuplicate ? -1 : undefined}>
                        {t(service.label)}
                      </Link>
                      <span className="hero-marquee-dot" aria-hidden="true" />
                    </li>
                  ))}
                </ul>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
