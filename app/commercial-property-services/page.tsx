import type { Metadata } from 'next'
import Link from 'next/link'
import { InteriorPageShell } from '@/components/interior-page-shell'
import { Tr } from '@/components/tr'
import {
  commercialServiceGroups,
  commercialServiceItems,
  commercialSupportingRouteLinks,
} from '@/content/commercial-property-services'
import { routesById } from '@/content/routes'
import { buildRouteMetadata } from '@/lib/metadata'
import { site } from '@/lib/site'
import type { StructuredDataNode } from '@/lib/structured-data'

const route = routesById['commercial-property-services']

export const metadata: Metadata = buildRouteMetadata(route)

const itemListStructuredData: StructuredDataNode = {
  '@type': 'ItemList',
  '@id': `${route.canonicalUrl}#commercial-service-list`,
  name: 'Verified commercial property services',
  numberOfItems: commercialServiceItems.length,
  itemListOrder: 'https://schema.org/ItemListOrderAscending',
  itemListElement: commercialServiceItems.map((service) => ({
    '@type': 'ListItem',
    position: service.position,
    name: service.name,
    item: service.canonicalUrl,
  })),
}

export default function CommercialPropertyServicesPage() {
  return (
    <InteriorPageShell
      routeId="commercial-property-services"
      structuredDataNodes={[itemListStructuredData]}
    >
      <section className="overflow-hidden pt-10 pb-16 sm:pt-14 sm:pb-24">
        <div className="mx-auto grid w-full max-w-[112rem] gap-10 px-5 sm:px-8 lg:grid-cols-[minmax(0,1.35fr)_minmax(20rem,0.65fr)] lg:items-end lg:gap-20">
          <div className="services-index-reveal min-w-0">
            <p className="eyebrow text-ink-soft"><Tr text="Commercial properties · Des Moines metro" /></p>
            <h1 className="display-lg mt-5 max-w-[15ch]"><Tr text={route.h1} /></h1>
          </div>

          <div className="services-index-reveal services-index-reveal-delay min-w-0 border-t border-[color:var(--rule)] pt-6 lg:mb-2 lg:pr-14">
            <p className="max-w-[36rem] text-[1.0625rem] leading-relaxed text-ink-soft sm:text-lg">
              <Tr text="Commercial lawn care in Des Moines, IA starts by matching the property’s needs to services whose approved pages explicitly support commercial use." />
            </p>
            <div className="mt-7 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
              <Link href={routesById.contact.path} prefetch={false} className="btn-solid w-full max-w-full text-center whitespace-normal sm:w-auto">
                <Tr text="Request a Free Estimate" />
              </Link>
              <a href={site.phoneHref} className="btn-ghost w-fit text-ink"><Tr text="Call" /> {site.phone}</a>
            </div>
          </div>
        </div>
      </section>

      <section aria-labelledby="commercial-framing-heading" className="bg-evergreen py-16 text-paper sm:py-24" style={{ '--accent': '#D5EE72', '--btn-fg': '#102019' } as React.CSSProperties}>
        <div className="mx-auto grid w-full max-w-[112rem] gap-10 px-5 sm:px-8 lg:grid-cols-[0.7fr_1.3fr] lg:gap-20">
          <header>
            <p className="eyebrow text-[#D5EE72]"><Tr text="Choose by property need" /></p>
            <h2 id="commercial-framing-heading" className="display-md mt-5 max-w-[12ch] text-paper"><Tr text="A concise route to verified services." /></h2>
          </header>
          <div className="grid gap-6 border-t border-paper/18 pt-6 text-paper/70 sm:grid-cols-2">
            <p className="text-[1.0625rem] leading-relaxed"><Tr text="This hub covers broad commercial grounds maintenance in Des Moines while each service page retains its specific search intent, scope and estimate details." /></p>
            <p className="text-[1.0625rem] leading-relaxed"><Tr text="Choosing services through the estimate conversation does not create a contract, recurring program, fixed schedule or bundled product." /></p>
          </div>
        </div>
      </section>

      <section id="commercial-services" aria-labelledby="commercial-services-heading" className="bg-paper py-16 sm:py-24">
        <div className="mx-auto w-full max-w-[112rem] px-5 sm:px-8">
          <header className="grid gap-6 border-t border-[color:var(--rule)] pt-6 lg:grid-cols-[minmax(0,1fr)_minmax(20rem,0.55fr)] lg:items-end lg:gap-16">
            <div>
              <p className="eyebrow text-ink-soft"><Tr text="Verified commercial service set" /></p>
              <h2 id="commercial-services-heading" className="display-md mt-5 max-w-[14ch]"><Tr text="Select the service that matches the property." /></h2>
            </div>
            <p className="max-w-[34rem] text-[1.0625rem] leading-relaxed text-ink-soft lg:pb-2"><Tr text="Commercial property maintenance in Des Moines may involve more than one need. Each concise link below leads to the canonical service page for the details." /></p>
          </header>

          <div className="mt-14 space-y-16">
            {commercialServiceGroups.map((group) => {
              const items = commercialServiceItems.filter((service) => service.group === group.name)
              return (
                <section key={group.name} aria-labelledby={`commercial-group-${group.name.toLowerCase().replaceAll(' ', '-')}`}>
                  <div className="grid gap-4 border-t border-[color:var(--rule)] pt-5 lg:grid-cols-[0.36fr_0.64fr] lg:gap-12">
                    <h3 id={`commercial-group-${group.name.toLowerCase().replaceAll(' ', '-')}`} className="text-2xl uppercase sm:text-3xl"><Tr text={group.name} /></h3>
                    <p className="max-w-[42rem] text-sm leading-relaxed text-ink-soft sm:text-base"><Tr text={group.description} /></p>
                  </div>
                  <ol className="mt-6 grid border-b border-[color:var(--rule)] lg:grid-cols-2">
                    {items.map((service) => (
                      <li key={service.routeId} className="border-t border-[color:var(--rule)] lg:odd:border-r">
                        <Link href={service.href} prefetch={false} className="services-index-service-link group grid min-h-40 grid-cols-[2rem_minmax(0,1fr)_1.5rem] gap-x-4 px-1 py-7 sm:grid-cols-[2.5rem_minmax(0,1fr)_2rem] sm:gap-x-6 sm:px-5 sm:py-8">
                          <span className="pt-1 text-[0.68rem] font-bold tracking-[0.16em] text-ink-soft/60 tabular-nums">{String(service.position).padStart(2, '0')}</span>
                          <span className="min-w-0">
                            <span className="block font-display text-[clamp(1.25rem,1rem+0.8vw,2rem)] leading-[1.02] font-bold tracking-[-0.03em] text-ink uppercase"><Tr text={service.name} /></span>
                            <span className="mt-4 block max-w-[38rem] text-sm leading-relaxed text-ink-soft"><Tr text={service.summary} /></span>
                          </span>
                          <span aria-hidden="true" className="services-index-arrow pt-1 text-xl text-accent">↗</span>
                        </Link>
                      </li>
                    ))}
                  </ol>
                </section>
              )
            })}
          </div>
        </div>
      </section>

      <section aria-labelledby="commercial-selection-heading" className="bg-paper pb-20 sm:pb-28">
        <div className="mx-auto grid w-full max-w-[112rem] gap-10 px-5 sm:px-8 lg:grid-cols-[0.72fr_1.28fr] lg:gap-20">
          <div>
            <p className="eyebrow text-ink-soft"><Tr text="Estimate conversation" /></p>
            <h2 id="commercial-selection-heading" className="display-md mt-5 max-w-[12ch]"><Tr text="Choose relevant services without assuming a package." /></h2>
          </div>
          <div className="grid border-b border-[color:var(--rule)] sm:grid-cols-3">
            {[
              { number: '01', title: 'Describe the need', copy: 'Share what you observe in the lawn or outdoor areas and where the commercial property is located.' },
              { number: '02', title: 'Follow verified paths', copy: 'Use the linked service pages to keep commercial landscaping in Des Moines and every other need within its approved scope.' },
              { number: '03', title: 'Request an estimate', copy: 'Ask which services fit the property through the existing estimate path. No agreement or service frequency is presumed.' },
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

      <section aria-labelledby="commercial-support-heading" className="bg-paper pb-20 sm:pb-28">
        <div className="mx-auto w-full max-w-[112rem] px-5 sm:px-8">
          <header className="max-w-4xl border-t border-[color:var(--rule)] pt-6">
            <p className="eyebrow text-ink-soft"><Tr text="Coverage, work and feedback" /></p>
            <h2 id="commercial-support-heading" className="display-md mt-5"><Tr text="Continue with the context you need." /></h2>
            <p className="mt-6 max-w-3xl text-[1.0625rem] leading-relaxed text-ink-soft"><Tr text="Mo’s approved service area includes Des Moines, Ankeny, Waukee, Norwalk and Altoona. Work imagery and reviews remain general unless their source establishes a more specific context." /></p>
          </header>
          <ul className="mt-10 grid border-b border-[color:var(--rule)] lg:grid-cols-4">
            {commercialSupportingRouteLinks.map((link) => (
              <li key={link.routeId} className="border-t border-[color:var(--rule)] lg:not-last:border-r">
                <Link href={link.href} prefetch={false} className="group flex min-h-64 flex-col px-1 py-7 sm:px-5 sm:py-8">
                  <span className="eyebrow text-ink-soft"><Tr text={link.eyebrow} /></span>
                  <span className="mt-7 font-display text-2xl font-bold tracking-[-0.03em] text-ink uppercase"><Tr text={link.name} /></span>
                  <span className="mt-4 text-sm leading-relaxed text-ink-soft"><Tr text={link.description} /></span>
                  <span className="mt-auto pt-7 text-lg text-accent transition-transform duration-200 group-hover:translate-x-1" aria-hidden="true">→</span>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="bg-evergreen py-16 text-paper sm:py-24" aria-labelledby="commercial-cta-heading">
        <div className="mx-auto grid w-full max-w-[112rem] gap-8 px-5 sm:px-8 lg:grid-cols-[1fr_auto] lg:items-end lg:gap-16">
          <div>
            <p className="eyebrow text-[#D5EE72]"><Tr text="Commercial lawn service in Des Moines" /></p>
            <h2 id="commercial-cta-heading" className="display-md mt-5 max-w-[14ch] text-paper"><Tr text="Tell Mo’s what the property needs." /></h2>
            <p className="mt-6 max-w-2xl text-[1.0625rem] leading-relaxed text-paper/65"><Tr text="Choose the verified services that seem relevant, then use the estimate conversation to confirm the right scope for the commercial property." /></p>
          </div>
          <div className="flex flex-col gap-3 sm:flex-row sm:flex-wrap lg:justify-end">
            <Link href={routesById.contact.path} prefetch={false} className="btn-solid w-full max-w-full text-center whitespace-normal sm:w-auto"><Tr text="Request a Free Estimate" /></Link>
            <a href={site.phoneHref} className="btn-ghost w-fit text-paper"><Tr text="Call" /> {site.phone}</a>
          </div>
        </div>
      </section>
    </InteriorPageShell>
  )
}
