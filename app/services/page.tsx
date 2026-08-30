import type { Metadata } from 'next'
import Link from 'next/link'
import { InteriorPageShell } from '@/components/interior-page-shell'
import { Tr } from '@/components/tr'
import { routesById } from '@/content/routes'
import {
  servicesIndexItems,
  servicesIndexSupportingLinks,
} from '@/content/services'
import { buildRouteMetadata } from '@/lib/metadata'
import { site } from '@/lib/site'
import type { StructuredDataNode } from '@/lib/structured-data'

const route = routesById.services

export const metadata: Metadata = buildRouteMetadata(route)

const itemListStructuredData: StructuredDataNode = {
  '@type': 'ItemList',
  '@id': `${route.canonicalUrl}#service-list`,
  name: 'Lawn care services for Des Moines properties',
  numberOfItems: servicesIndexItems.length,
  itemListOrder: 'https://schema.org/ItemListOrderAscending',
  itemListElement: servicesIndexItems.map((service) => ({
    '@type': 'ListItem',
    position: service.position,
    name: service.name,
    item: service.canonicalUrl,
  })),
}

export default function ServicesPage() {
  return (
    <InteriorPageShell routeId="services" structuredDataNodes={[itemListStructuredData]}>
      <section className="services-index-hero overflow-hidden pt-10 pb-16 sm:pt-14 sm:pb-24">
        <div className="mx-auto grid w-full max-w-[112rem] gap-10 px-5 sm:px-8 lg:grid-cols-[minmax(0,1.35fr)_minmax(20rem,0.65fr)] lg:items-end lg:gap-20">
          <div className="services-index-reveal min-w-0">
            <p className="eyebrow text-ink-soft">
              <Tr text="Residential + Commercial · Des Moines metro" />
            </p>
            <h1 className="display-lg mt-5 max-w-[13ch]"><Tr text={route.h1} /></h1>
          </div>

          <div className="services-index-reveal services-index-reveal-delay min-w-0 border-t border-[color:var(--rule)] pt-6 lg:mb-2 lg:pr-20">
            <p className="max-w-[34rem] text-[1.0625rem] leading-relaxed text-ink-soft sm:text-lg">
              <Tr text="From lawn care and landscaping to seasonal cleanup and snow removal, start with the part of your property that needs attention." />
            </p>
            <div className="mt-7 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
              <Link
                href={routesById.contact.path}
                prefetch={false}
                className="btn-solid max-w-full w-full text-center whitespace-normal sm:w-auto"
              >
                <Tr text="Request a Free Estimate" />
              </Link>
              <a href={site.phoneHref} className="btn-ghost w-fit text-ink">
                <Tr text="Call" /> {site.phone}
              </a>
            </div>
          </div>
        </div>
      </section>

      <section
        id="service-directory"
        aria-labelledby="service-directory-heading"
        className="bg-evergreen py-16 text-paper sm:py-24"
        style={{ '--accent': '#D5EE72', '--btn-fg': '#102019' } as React.CSSProperties}
      >
        <div className="mx-auto w-full max-w-[112rem] px-5 sm:px-8">
          <header className="grid gap-6 border-t border-paper/18 pt-6 lg:grid-cols-[minmax(0,1fr)_minmax(20rem,0.52fr)] lg:items-end lg:gap-16">
            <div>
              <p className="eyebrow text-[#D5EE72]"><Tr text="Ten service paths" /></p>
              <h2 id="service-directory-heading" className="display-md mt-5 max-w-[15ch] text-paper">
                <Tr text="Find the right place to start." />
              </h2>
            </div>
            <p className="max-w-[32rem] text-[1.0625rem] leading-relaxed text-paper/65 lg:pb-2">
              <Tr text="Each service below has one canonical path. Related needs stay consolidated so you can compare clear choices without sorting through duplicate pages." />
            </p>
          </header>

          <ol className="mt-12 grid border-b border-paper/18 lg:grid-cols-2">
            {servicesIndexItems.map((service) => (
              <li key={service.id} className="border-t border-paper/18 lg:odd:border-r">
                <Link
                  href={service.href}
                  prefetch={false}
                  className="services-index-service-link group grid min-h-44 grid-cols-[2rem_minmax(0,1fr)_1.5rem] gap-x-4 px-1 py-7 sm:grid-cols-[2.5rem_minmax(0,1fr)_2rem] sm:gap-x-6 sm:px-5 sm:py-8"
                >
                  <span className="pt-1 text-[0.68rem] font-bold tracking-[0.16em] text-paper/38 tabular-nums">
                    {String(service.position).padStart(2, '0')}
                  </span>
                  <span className="min-w-0">
                    <span className="block font-display text-[clamp(1.35rem,1.05rem+1vw,2.25rem)] leading-[1.02] font-bold tracking-[-0.03em] text-paper uppercase">
                      <Tr text={service.name} />
                    </span>
                    <span className="mt-4 block max-w-[38rem] text-sm leading-relaxed text-paper/60 sm:text-[0.98rem]">
                      <Tr text={service.summary} />
                    </span>
                  </span>
                  <span aria-hidden="true" className="services-index-arrow pt-1 text-xl text-[#D5EE72]">↗</span>
                </Link>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section aria-labelledby="service-context-heading" className="bg-paper py-16 sm:py-24">
        <div className="mx-auto grid w-full max-w-[112rem] gap-10 px-5 sm:px-8 lg:grid-cols-[0.72fr_1.28fr] lg:gap-20">
          <div>
            <p className="eyebrow text-ink-soft"><Tr text="One connected property" /></p>
            <h2 id="service-context-heading" className="display-md mt-5 max-w-[12ch]">
              <Tr text="Care changes with the property and the season." />
            </h2>
          </div>
          <div className="grid border-b border-[color:var(--rule)] sm:grid-cols-3">
            {[
              {
                number: '01',
                title: 'Lawn & landscape',
                copy: 'Mowing, lawn-focused services, landscaping, flower beds and grading address different parts of the same outdoor space.',
              },
              {
                number: '02',
                title: 'Cleanup by condition',
                copy: 'Yard, spring and fall cleanup paths make it easier to start with the season or the condition you see outside.',
              },
              {
                number: '03',
                title: 'Winter access',
                copy: 'Snow removal carries property care into winter for residential and commercial properties affected by snowfall.',
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

      <section aria-labelledby="services-next-heading" className="bg-paper pb-20 sm:pb-28">
        <div className="mx-auto w-full max-w-[112rem] px-5 sm:px-8">
          <header className="max-w-3xl border-t border-[color:var(--rule)] pt-6">
            <p className="eyebrow text-ink-soft"><Tr text="Keep exploring" /></p>
            <h2 id="services-next-heading" className="display-md mt-5">
              <Tr text="Plan around the whole property." />
            </h2>
          </header>

          <ul className="mt-10 grid border-b border-[color:var(--rule)] lg:grid-cols-3">
            {servicesIndexSupportingLinks.map((link) => (
              <li key={link.id} className="border-t border-[color:var(--rule)] lg:not-last:border-r">
                <Link
                  href={link.href}
                  prefetch={false}
                  className="group flex min-h-60 flex-col px-1 py-7 sm:px-5 sm:py-8"
                >
                  <span className="eyebrow text-ink-soft"><Tr text={link.eyebrow} /></span>
                  <span className="mt-7 font-display text-2xl font-bold tracking-[-0.03em] text-ink uppercase sm:text-3xl">
                    <Tr text={link.name} />
                  </span>
                  <span className="mt-4 max-w-sm text-sm leading-relaxed text-ink-soft">
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
