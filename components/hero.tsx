 'use client'

import { HeroVideo } from './hero-video'
import { site } from '@/lib/site'
import { useI18n } from '@/lib/i18n'

const heroServices = [
  'Mowing service',
  'Aeration and seeding',
  'Leaves removal',
  'Snow removal',
  'Fertilizing and weed control',
  'Flower beds maintenance',
  'Overgrown yards cleanup',
  'Spring cleanup',
  'Fall cleanup',
  'Ground clearance',
  'Grading',
  'Landscaping',
] as const

export function Hero() {
  const { t } = useI18n()
  return (
    <section
      id="top"
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
        <div className="hero-content max-w-[34rem] pb-5 sm:max-w-none sm:pb-9 xl:grid xl:grid-cols-[minmax(0,1.45fr)_minmax(19rem,0.65fr)] xl:items-end xl:gap-16 xl:pb-12">
<div>
  <h1
    id="hero-heading"
    className="hero-reveal hero-display text-[clamp(0.3rem,5.5vw,3.8rem)] sm:text-[clamp(0.3rem,4vw,3.8rem)] leading-[0.95] text-paper [animation-delay:120ms]"
  >
    <span className="block">
      {t('Commercial & Residential')}
    </span>

    <span className="block text-accent">
      {t('property services')}
    </span>
  </h1>
</div>
          <div className="mt-5 max-w-[31rem] sm:mt-8 xl:mt-0 xl:pb-1">
            <p className="hero-reveal max-w-[30rem] text-[0.775rem] font-black leading-5.5 text-paper/78 [animation-delay:240ms] sm:text-lg sm:leading-relaxed">
              {t('Mowing, Landscaping, Cleanups, And Snow removal for Des Moines properties')}
            </p>

            <div className="hero-reveal mt-1 border-t border-paper/18  [animation-delay:300ms] sm:mt-6 sm:pt-5">
              <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:gap-5">
                {/* <a href="#estimate-form" className="btn-solid group w-full sm:w-auto">
                  Get a free estimate
                  <span className="transition-transform duration-200 group-hover:translate-x-0.5" aria-hidden="true">
                    ↗
                  </span>
                </a> */}

                <div className="flex flex-col text-paper">
                  <span className=" font-bold tracking-[0.16em] uppercase text-accent">
                    {/* Call or email */}
                    {t('Get a free Estimate')}
                  </span>
                  <a
                    href={site.phoneHref}
                    className="mt-0.5 text-sm font-semibold underline decoration-[#D5EE72] transition-colors duration-200 hover:text-accent sm:text-base decoration-2 underline-offset-4"
                  >
                    {site.phone}
                  </a>

                  <a
                    href={`mailto:${site.email}`}
                    className="text-sm font-semibold underline decoration-[#D5EE72] transition-colors duration-200 hover:text-accent sm:text-base decoration-2 underline-offset-4"
                  >
                    {site.email}
                  </a>
                </div>
              </div>

              <a
                href="#seasons"
                className="hero-text-link group mt-2 hidden justify-center sm:inline-flex sm:justify-start"
              >
                {t('See what we handle')}
                <span
                  className="transition-transform duration-200 group-hover:translate-y-0.5"
                  aria-hidden="true"
                >
                  ↓
                </span>
              </a>
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
                  {heroServices.map((service) => (
                    <li
                      key={`${isDuplicate ? "duplicate" : "primary"}-${service}`}
                      className="hero-marquee-item"
                    >
                      <span>{t(service)}</span>
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
