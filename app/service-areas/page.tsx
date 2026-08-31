import type { Metadata } from 'next'
import Link from 'next/link'
import { InteriorPageShell } from '@/components/interior-page-shell'
import { Tr } from '@/components/tr'
import { routesById } from '@/content/routes'
import {
  serviceAreaHubItems,
  serviceAreaSupportingRouteLinks,
} from '@/content/service-areas'
import { buildRouteMetadata } from '@/lib/metadata'
import { site } from '@/lib/site'
import type { StructuredDataNode } from '@/lib/structured-data'

const route = routesById['service-areas']

export const metadata: Metadata = buildRouteMetadata(route)

const itemListStructuredData: StructuredDataNode = {
  '@type': 'ItemList',
  '@id': `${route.canonicalUrl}#area-list`,
  name: 'Mo’s Lawn Care service areas',
  numberOfItems: serviceAreaHubItems.length,
  itemListOrder: 'https://schema.org/ItemListOrderAscending',
  itemListElement: serviceAreaHubItems.map((area) => ({
    '@type': 'ListItem',
    position: area.position,
    name: area.name,
    item: area.canonicalUrl,
  })),
}

export default function ServiceAreasPage() {
  return (
    <InteriorPageShell routeId="service-areas" structuredDataNodes={[itemListStructuredData]}>
      <section className="overflow-hidden pt-10 pb-16 sm:pt-14 sm:pb-24">
        <div className="mx-auto grid w-full max-w-[112rem] gap-10 px-5 sm:px-8 lg:grid-cols-[minmax(0,1.35fr)_minmax(20rem,0.65fr)] lg:items-end lg:gap-20">
          <div className="services-index-reveal min-w-0">
            <p className="eyebrow text-ink-soft">
              <Tr text="Lawn care service areas · Des Moines" />
            </p>
            <h1 className="mt-5 max-w-full break-words font-display text-[clamp(2.05rem,9.5vw,2.35rem)] leading-[0.9] font-bold tracking-[-0.05em] uppercase sm:max-w-[14ch] sm:text-[clamp(2.5rem,1.5rem+3.7vw,5rem)]">
              <Tr text={route.h1} />
            </h1>
          </div>

          <div className="services-index-reveal services-index-reveal-delay min-w-0 border-t border-[color:var(--rule)] pt-6 lg:mb-2 lg:pr-14">
            <p className="max-w-[36rem] text-[1.0625rem] leading-relaxed text-ink-soft sm:text-lg">
              <Tr text="Looking for lawn care near Des Moines? This page organizes Mo’s five approved communities into one clear metro directory, with Des Moines returning to the main homepage and the other areas using their own community links." />
            </p>
            <div className="mt-7 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
              <Link
                href={routesById.services.path}
                prefetch={false}
                className="btn-solid w-full max-w-full text-center whitespace-normal sm:w-auto"
              >
                <Tr text="Explore Services" />
              </Link>
              <a href={site.phoneHref} className="btn-ghost w-fit text-ink">
                <Tr text="Call" /> {site.phone}
              </a>
            </div>
          </div>
        </div>
      </section>

      <section
        id="area-directory"
        aria-labelledby="area-directory-heading"
        className="bg-evergreen py-16 text-paper sm:py-24"
        style={{ '--accent': '#D5EE72', '--btn-fg': '#102019' } as React.CSSProperties}
      >
        <div className="mx-auto w-full max-w-[112rem] px-5 sm:px-8">
          <header className="grid gap-6 border-t border-paper/18 pt-6 lg:grid-cols-[minmax(0,1fr)_minmax(20rem,0.52fr)] lg:items-end lg:gap-16">
            <div>
              <p className="eyebrow text-[#D5EE72]"><Tr text="Five named communities" /></p>
              <h2 id="area-directory-heading" className="display-md mt-5 max-w-[15ch] text-paper">
                <Tr text="A clear Des Moines metro lawn service directory." />
              </h2>
            </div>
            <p className="max-w-[34rem] text-[1.0625rem] leading-relaxed text-paper/65 lg:pb-2">
              <Tr text="The lawn care service areas Mo’s publishes for Des Moines are limited to the five entries below. Each link provides a direct next step without repeating service details." />
            </p>
          </header>

          <ol className="mt-12 border-b border-paper/18">
            {serviceAreaHubItems.map((area) => (
              <li key={area.routeId} className="border-t border-paper/18">
                <Link
                  href={area.href}
                  prefetch={false}
                  className="services-index-service-link group grid min-h-36 grid-cols-[2.25rem_minmax(0,1fr)_1.5rem] gap-x-4 px-1 py-7 sm:min-h-40 sm:grid-cols-[3rem_minmax(0,0.78fr)_minmax(16rem,0.72fr)_2rem] sm:items-center sm:gap-x-7 sm:px-5 sm:py-8"
                >
                  <span className="text-[0.68rem] font-bold tracking-[0.16em] text-paper/38 tabular-nums">
                    {String(area.position).padStart(2, '0')}
                  </span>
                  <span className="min-w-0 font-display text-[clamp(1.55rem,1.05rem+2vw,3.6rem)] leading-[0.95] font-bold tracking-[-0.04em] text-paper uppercase transition-transform duration-200 group-hover:translate-x-1 group-focus-visible:translate-x-1">
                    <Tr text={area.name} />
                  </span>
                  <span className="col-start-2 mt-4 max-w-[38rem] text-sm leading-relaxed text-paper/60 sm:col-start-3 sm:mt-0 sm:text-[0.98rem]">
                    <Tr text={area.description} />
                  </span>
                  <span aria-hidden="true" className="services-index-arrow col-start-3 row-start-1 text-xl text-[#D5EE72] sm:col-start-4">
                    ↗
                  </span>
                </Link>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section aria-labelledby="coverage-scope-heading" className="bg-paper py-16 sm:py-24">
        <div className="mx-auto grid w-full max-w-[112rem] gap-10 px-5 sm:px-8 lg:grid-cols-[0.72fr_1.28fr] lg:gap-20">
          <div>
            <p className="eyebrow text-ink-soft"><Tr text="Coverage without guesswork" /></p>
            <h2 id="coverage-scope-heading" className="display-md mt-5 max-w-[12ch]">
              <Tr text="One metro hub. Clear local paths." />
            </h2>
          </div>
          <div className="grid border-b border-[color:var(--rule)] sm:grid-cols-3">
            {[
              {
                number: '01',
                title: 'Five areas only',
                copy: 'Coverage on this page means the five communities shown here. No radius, county or additional-city claim is implied.',
              },
              {
                number: '02',
                title: 'Services stay separate',
                copy: 'Lawn care, landscaping, seasonal cleanups and snow removal remain broad categories here. The Services hub explains each service in detail.',
              },
              {
                number: '03',
                title: 'Scope starts with the property',
                copy: 'Use the estimate path to share the property area and broad need without assuming a standard package for every community.',
              },
            ].map((item) => (
              <article key={item.number} className="border-t border-[color:var(--rule)] py-6 sm:px-5 sm:first:pl-0 sm:last:pr-0">
                <p className="text-[0.68rem] font-bold tracking-[0.16em] text-ink-soft tabular-nums">{item.number}</p>
                <h3 className="mt-7 text-2xl uppercase"><Tr text={item.title} /></h3>
                <p className="mt-4 text-sm leading-relaxed text-ink-soft"><Tr text={item.copy} /></p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section aria-labelledby="area-next-heading" className="bg-paper pb-20 sm:pb-28">
        <div className="mx-auto w-full max-w-[112rem] px-5 sm:px-8">
          <header className="max-w-4xl border-t border-[color:var(--rule)] pt-6">
            <p className="eyebrow text-ink-soft"><Tr text="Choose the next path" /></p>
            <h2 id="area-next-heading" className="display-md mt-5 max-w-[15ch]">
              <Tr text="Match the area to the property need." />
            </h2>
            <p className="mt-6 max-w-3xl text-[1.0625rem] leading-relaxed text-ink-soft">
              <Tr text="Use Services to understand the available service paths, or Contact to start a property-specific estimate conversation." />
            </p>
          </header>

          <ul className="mt-10 grid border-b border-[color:var(--rule)] lg:grid-cols-2">
            {serviceAreaSupportingRouteLinks.map((link) => (
              <li key={link.routeId} className="border-t border-[color:var(--rule)] lg:not-last:border-r">
                <Link href={link.href} prefetch={false} className="group flex min-h-56 flex-col px-1 py-7 sm:px-5 sm:py-8">
                  <span className="eyebrow text-ink-soft"><Tr text={link.eyebrow} /></span>
                  <span className="mt-7 font-display text-2xl font-bold tracking-[-0.03em] text-ink uppercase sm:text-3xl">
                    <Tr text={link.name} />
                  </span>
                  <span className="mt-4 max-w-xl text-sm leading-relaxed text-ink-soft">
                    <Tr text={link.description} />
                  </span>
                  <span className="mt-auto pt-7 text-lg text-accent transition-transform duration-200 group-hover:translate-x-1" aria-hidden="true">→</span>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </section>
    </InteriorPageShell>
  )
}
