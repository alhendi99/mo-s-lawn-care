import type { Metadata } from 'next'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import { InteriorPageShell } from '@/components/interior-page-shell'
import { Tr } from '@/components/tr'
import {
  getPublishedCityServiceArea,
  publishedCityServiceAreaSlugs,
} from '@/content/service-areas/index'
import { routesById } from '@/content/routes'
import { buildRouteMetadata } from '@/lib/metadata'
import { site } from '@/lib/site'
import type { StructuredDataNode } from '@/lib/structured-data'

type CityServiceAreaPageProps = Readonly<{
  params: Promise<{ city: string }>
}>

export const dynamicParams = true

export function generateStaticParams() {
  return publishedCityServiceAreaSlugs.map((city) => ({ city }))
}

export async function generateMetadata({ params }: CityServiceAreaPageProps): Promise<Metadata> {
  const { city } = await params
  const content = getPublishedCityServiceArea(city)
  if (!content) notFound()

  return buildRouteMetadata(routesById[content.routeId])
}

export default async function CityServiceAreaPage({ params }: CityServiceAreaPageProps) {
  const { city } = await params
  const content = getPublishedCityServiceArea(city)
  if (!content) notFound()

  const route = routesById[content.routeId]
  const sectionId = (section: string) => `${content.slug}-${section}-heading`
  const itemListStructuredData: StructuredDataNode = {
    '@type': 'ItemList',
    '@id': `${route.canonicalUrl}#service-list`,
    name: content.schemaItemListName,
    numberOfItems: content.services.length,
    itemListOrder: 'https://schema.org/ItemListOrderAscending',
    itemListElement: content.services.map((service) => ({
      '@type': 'ListItem',
      position: service.position,
      name: service.name,
      item: service.canonicalUrl,
    })),
  }

  return (
    <InteriorPageShell routeId={content.routeId} structuredDataNodes={[itemListStructuredData]}>
      <article data-city-service-area={content.slug}>
        <section className="mt-6 overflow-hidden bg-evergreen text-paper sm:mt-8">
          <div className="mx-auto grid min-h-[33.5rem] w-full max-w-[112rem] gap-12 px-5 py-14 sm:px-8 sm:py-18 lg:grid-cols-[minmax(0,1.18fr)_minmax(22rem,0.62fr)] lg:items-end lg:gap-20 lg:py-20">
            <div className="service-detail-reveal min-w-0">
              <p className="eyebrow text-[#D5EE72]"><Tr text={content.hero.eyebrow} /></p>
              <h1 className="mt-6 max-w-[12ch] font-display text-[clamp(2.45rem,11.5vw,7rem)] leading-[0.92] font-bold tracking-[-0.05em] uppercase [hyphens:none] [overflow-wrap:normal] [word-break:normal] sm:text-[clamp(3rem,6.2vw,7rem)]">
                <Tr text={route.h1} />
              </h1>
            </div>

            <div className="service-detail-reveal service-detail-reveal-delay border-t border-paper/22 pt-7 lg:mb-2">
              <p className="max-w-[35rem] text-[1.0625rem] leading-relaxed text-paper/72 sm:text-lg"><Tr text={content.hero.summary} /></p>
              <div className="mt-8 flex flex-col items-start gap-4 sm:flex-row sm:flex-wrap sm:items-center">
                <Link href={routesById.contact.path} prefetch={false} className="btn-solid w-full max-w-full bg-[#D5EE72] text-center whitespace-normal text-evergreen hover:bg-paper sm:w-auto">
                  <Tr text={content.hero.cta} /> <span aria-hidden="true">→</span>
                </Link>
                <a href={site.phoneHref} className="hero-text-link px-0"><Tr text="Call" /> {site.phone}</a>
              </div>
            </div>
          </div>
        </section>

        {content.editorial.kind === 'year-spanning' ? (
          <section aria-labelledby={sectionId('range')} className="bg-[#e5ecd9] py-18 sm:py-26">
            <div className="mx-auto w-full max-w-[112rem] px-5 sm:px-8">
              <header className="grid gap-7 border-t border-[#315b37]/22 pt-6 lg:grid-cols-[minmax(0,1fr)_minmax(22rem,0.58fr)] lg:items-end lg:gap-16">
                <div>
                  <p className="eyebrow text-[#315b37]"><Tr text={content.editorial.rangeSection.eyebrow} /></p>
                  <h2 id={sectionId('range')} className="display-md mt-5 max-w-[13ch] text-[#1d2b1f]"><Tr text={content.editorial.rangeSection.heading} /></h2>
                </div>
                <p className="max-w-[36rem] text-[1.0625rem] leading-relaxed text-[#354139] lg:pb-2"><Tr text={content.editorial.rangeSection.introduction} /></p>
              </header>
              <ol className="mt-12 grid border-b border-[#315b37]/22 md:grid-cols-2 xl:grid-cols-4">
                {content.editorial.rangeSection.items.map((item) => (
                  <li key={item.marker} className="border-t border-[#315b37]/22 py-8 md:px-7 md:odd:border-r md:first:pl-0 xl:not-last:border-r xl:odd:border-r xl:last:pr-0">
                    <p className="text-[0.68rem] font-bold tracking-[0.16em] text-[#315b37] tabular-nums">{item.marker}</p>
                    <h3 className="mt-8 text-2xl text-[#1d2b1f] uppercase"><Tr text={item.title} /></h3>
                    <p className="mt-5 text-sm leading-relaxed text-[#354139]"><Tr text={item.description} /></p>
                  </li>
                ))}
              </ol>
            </div>
          </section>
        ) : null}

        {content.editorial.kind === 'priority-map' ? (
          <section aria-labelledby={sectionId('priority')} className="bg-[#e5ecd9] py-18 sm:py-26">
            <div className="mx-auto grid w-full max-w-[112rem] gap-12 px-5 sm:px-8 lg:grid-cols-[0.52fr_1fr] lg:gap-20">
              <header>
                <p className="eyebrow text-[#315b37]"><Tr text={content.editorial.prioritySection.eyebrow} /></p>
                <h2 id={sectionId('priority')} className="display-md mt-5 max-w-[12ch] text-[#1d2b1f]"><Tr text={content.editorial.prioritySection.heading} /></h2>
                <p className="mt-6 max-w-lg text-[1.0625rem] leading-relaxed text-[#354139]"><Tr text={content.editorial.prioritySection.introduction} /></p>
              </header>
              <ol className="border-b border-[#315b37]/22">
                {content.editorial.prioritySection.items.map((item) => (
                  <li key={item.number} className="grid gap-4 border-t border-[#315b37]/22 py-8 sm:grid-cols-[3rem_minmax(0,0.7fr)_minmax(0,1fr)] sm:gap-8">
                    <p className="pt-1 text-[0.68rem] font-bold tracking-[0.16em] text-[#315b37] tabular-nums">{item.number}</p>
                    <h3 className="text-2xl text-[#1d2b1f] uppercase"><Tr text={item.title} /></h3>
                    <p className="text-sm leading-relaxed text-[#354139] sm:text-[0.98rem]"><Tr text={item.description} /></p>
                  </li>
                ))}
              </ol>
            </div>
          </section>
        ) : null}

        {content.editorial.kind === 'scope-builder' ? (
          <section aria-labelledby={sectionId('scope')} className="bg-[#e5ecd9] py-18 sm:py-26">
            <div className="mx-auto w-full max-w-[112rem] px-5 sm:px-8">
              <header className="grid gap-7 border-t border-[#315b37]/22 pt-6 lg:grid-cols-[minmax(0,0.72fr)_minmax(22rem,0.58fr)] lg:items-end lg:gap-16">
                <div>
                  <p className="eyebrow text-[#315b37]"><Tr text={content.editorial.scopeSection.eyebrow} /></p>
                  <h2 id={sectionId('scope')} className="display-md mt-5 max-w-[12ch] text-[#1d2b1f]"><Tr text={content.editorial.scopeSection.heading} /></h2>
                </div>
                <p className="max-w-[36rem] text-[1.0625rem] leading-relaxed text-[#354139] lg:pb-2"><Tr text={content.editorial.scopeSection.introduction} /></p>
              </header>
              <ol className="mt-12 grid border-b border-[#315b37]/22 lg:grid-cols-3">
                {content.editorial.scopeSection.items.map((item) => (
                  <li key={item.number} className="border-t border-[#315b37]/22 py-8 lg:px-8 lg:not-last:border-r lg:first:pl-0 lg:last:pr-0">
                    <p className="text-[0.68rem] font-bold tracking-[0.16em] text-[#315b37] tabular-nums">{item.number}</p>
                    <h3 className="mt-8 text-3xl text-[#1d2b1f] uppercase"><Tr text={item.title} /></h3>
                    <p className="mt-5 text-sm leading-relaxed text-[#354139] sm:text-[0.98rem]"><Tr text={item.description} /></p>
                  </li>
                ))}
              </ol>
            </div>
          </section>
        ) : null}

        <section aria-labelledby={sectionId('services')} className="bg-paper py-18 sm:py-26">
          <div className="mx-auto w-full max-w-[112rem] px-5 sm:px-8">
            <header className="grid gap-7 border-t border-[color:var(--rule)] pt-6 lg:grid-cols-[minmax(0,1fr)_minmax(22rem,0.58fr)] lg:items-end lg:gap-16">
              <div>
                <p className="eyebrow text-ink-soft"><Tr text={content.servicesSection.eyebrow} /></p>
                <h2 id={sectionId('services')} className="display-md mt-5 max-w-[13ch]"><Tr text={content.servicesSection.heading} /></h2>
              </div>
              <p className="max-w-[35rem] text-[1.0625rem] leading-relaxed text-ink-soft lg:pb-2"><Tr text={content.servicesSection.introduction} /></p>
            </header>

            <ol className="mt-12 border-b border-[color:var(--rule)]">
              {content.services.map((service) => (
                <li key={service.routeId} className="border-t border-[color:var(--rule)]">
                  <Link href={service.href} prefetch={false} className="service-detail-link group grid min-h-40 gap-5 py-7 sm:grid-cols-[3rem_minmax(0,0.72fr)_minmax(0,1fr)_2rem] sm:items-center sm:gap-7 sm:px-5">
                    <span className="text-[0.68rem] font-bold tracking-[0.16em] text-ink-soft tabular-nums">{String(service.position).padStart(2, '0')}</span>
                    <span>
                      <span className="eyebrow block text-ink-soft"><Tr text={service.group} /></span>
                      <span className="mt-4 block font-display text-2xl font-bold tracking-[-0.03em] text-ink uppercase sm:text-3xl"><Tr text={service.name} /></span>
                    </span>
                    <span className="text-sm leading-relaxed text-ink-soft sm:text-[0.98rem]"><Tr text={service.summary} /></span>
                    <span aria-hidden="true" className="service-detail-link-arrow text-2xl text-accent">↗</span>
                  </Link>
                </li>
              ))}
            </ol>

            <Link href={routesById.services.path} prefetch={false} className="btn-ghost mt-8 w-fit text-ink">
              <Tr text={content.servicesSection.allServicesLabel} /> <span aria-hidden="true">→</span>
            </Link>
          </div>
        </section>

        {content.editorial.kind === 'property-decision' ? (
          <>
            <section aria-labelledby={sectionId('care')} className="bg-[#e5ecd9] py-18 sm:py-26">
              <div className="mx-auto grid w-full max-w-[112rem] gap-12 px-5 sm:px-8 lg:grid-cols-[0.58fr_1fr] lg:gap-20">
                <header className="lg:sticky lg:top-28 lg:self-start">
                  <p className="eyebrow text-[#315b37]"><Tr text={content.editorial.careSection.eyebrow} /></p>
                  <h2 id={sectionId('care')} className="display-md mt-5 max-w-[11ch] text-[#1d2b1f]"><Tr text={content.editorial.careSection.heading} /></h2>
                  <p className="mt-6 max-w-md text-[1.0625rem] leading-relaxed text-[#354139]"><Tr text={content.editorial.careSection.introduction} /></p>
                </header>
                <ol className="border-b border-[#315b37]/22">
                  {content.editorial.careSection.items.map((step) => (
                    <li key={step.number} className="grid gap-4 border-t border-[#315b37]/22 py-8 sm:grid-cols-[3rem_minmax(0,0.7fr)_minmax(0,1fr)] sm:gap-8">
                      <p className="pt-1 text-[0.68rem] font-bold tracking-[0.16em] text-[#315b37] tabular-nums">{step.number}</p>
                      <h3 className="text-2xl text-[#1d2b1f] uppercase"><Tr text={step.title} /></h3>
                      <p className="text-sm leading-relaxed text-[#354139] sm:text-[0.98rem]"><Tr text={step.description} /></p>
                    </li>
                  ))}
                </ol>
              </div>
            </section>

            <section aria-labelledby={sectionId('estimate')} className="bg-evergreen py-18 text-paper sm:py-26">
              <div className="mx-auto w-full max-w-[112rem] px-5 sm:px-8">
                <header className="max-w-4xl border-t border-paper/18 pt-6">
                  <p className="eyebrow text-[#D5EE72]"><Tr text={content.editorial.estimateSection.eyebrow} /></p>
                  <h2 id={sectionId('estimate')} className="display-md mt-5 max-w-[14ch] text-paper"><Tr text={content.editorial.estimateSection.heading} /></h2>
                  <p className="mt-6 max-w-3xl text-[1.0625rem] leading-relaxed text-paper/65"><Tr text={content.editorial.estimateSection.introduction} /></p>
                </header>
                <div className="mt-12 grid border-b border-paper/18 lg:grid-cols-3">
                  {content.editorial.estimateSection.items.map((detail, index) => (
                    <article key={detail.title} className="border-t border-paper/18 py-8 lg:px-7 lg:not-last:border-r lg:first:pl-0 lg:last:pr-0">
                      <p className="text-[0.68rem] font-bold tracking-[0.16em] text-[#D5EE72] tabular-nums">0{index + 1}</p>
                      <h3 className="mt-8 text-3xl text-paper uppercase"><Tr text={detail.title} /></h3>
                      <p className="mt-5 max-w-[31rem] text-sm leading-relaxed text-paper/62 sm:text-[0.98rem]"><Tr text={detail.description} /></p>
                    </article>
                  ))}
                </div>
                <Link href={routesById[content.editorial.estimateSection.supportingRouteId].path} prefetch={false} className="btn-ghost mt-8 w-fit text-paper">
                  <Tr text="Commercial Property Services" /> <span aria-hidden="true">→</span>
                </Link>
              </div>
            </section>
          </>
        ) : content.editorial.kind === 'year-spanning' ? (
          <>
            <section aria-labelledby={sectionId('property')} className="bg-evergreen py-18 text-paper sm:py-26">
              <div className="mx-auto grid w-full max-w-[112rem] gap-12 px-5 sm:px-8 lg:grid-cols-[0.62fr_1fr] lg:gap-20">
                <header>
                  <p className="eyebrow text-[#D5EE72]"><Tr text={content.editorial.propertySection.eyebrow} /></p>
                  <h2 id={sectionId('property')} className="display-md mt-5 max-w-[13ch] text-paper"><Tr text={content.editorial.propertySection.heading} /></h2>
                  <p className="mt-6 max-w-lg text-[1.0625rem] leading-relaxed text-paper/65"><Tr text={content.editorial.propertySection.introduction} /></p>
                </header>
                <div className="grid border-b border-paper/18 md:grid-cols-2">
                  <article className="border-t border-paper/18 py-8 md:pr-8">
                    <p className="eyebrow text-[#D5EE72]"><Tr text="Residential" /></p>
                    <p className="mt-6 text-base leading-relaxed text-paper/68"><Tr text={content.editorial.propertySection.residential} /></p>
                  </article>
                  <article className="border-t border-paper/18 py-8 md:border-l md:pl-8">
                    <p className="eyebrow text-[#D5EE72]"><Tr text="Commercial" /></p>
                    <p className="mt-6 text-base leading-relaxed text-paper/68"><Tr text={content.editorial.propertySection.commercial} /></p>
                  </article>
                  <div className="border-t border-paper/18 py-8 md:col-span-2">
                    <h3 className="text-2xl text-paper uppercase"><Tr text={content.editorial.propertySection.requestHeading} /></h3>
                    <ul className="mt-6 grid gap-4 md:grid-cols-2 md:gap-8">
                      {content.editorial.propertySection.requestPoints.map((point) => (
                        <li key={point} className="border-l border-[#D5EE72]/55 pl-5 text-sm leading-relaxed text-paper/68"><Tr text={point} /></li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </section>

            <section aria-labelledby={sectionId('supporting')} className="bg-paper py-18 sm:py-26">
              <div className="mx-auto grid w-full max-w-[112rem] gap-10 px-5 sm:px-8 lg:grid-cols-[0.52fr_1fr] lg:gap-20">
                <header>
                  <p className="eyebrow text-ink-soft"><Tr text={content.editorial.supportingSection.eyebrow} /></p>
                  <h2 id={sectionId('supporting')} className="display-md mt-5 max-w-[12ch]"><Tr text={content.editorial.supportingSection.heading} /></h2>
                  <p className="mt-6 max-w-md text-[1.0625rem] leading-relaxed text-ink-soft"><Tr text={content.editorial.supportingSection.introduction} /></p>
                </header>
                <ul className="border-b border-[color:var(--rule)]">
                  {content.editorial.supportingSection.links.map((link) => (
                    <li key={link.routeId} className="border-t border-[color:var(--rule)]">
                      <Link href={link.href} prefetch={false} className="service-detail-link group grid min-h-40 gap-4 py-7 sm:grid-cols-[minmax(0,0.62fr)_minmax(0,1fr)_2rem] sm:items-center sm:px-5">
                        <span className="font-display text-2xl font-bold tracking-[-0.03em] text-ink uppercase"><Tr text={link.name} /></span>
                        <span className="text-sm leading-relaxed text-ink-soft"><Tr text={link.description} /></span>
                        <span aria-hidden="true" className="service-detail-link-arrow text-2xl text-accent">↗</span>
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </section>
          </>
        ) : null}

        {content.editorial.kind === 'priority-map' ? (
          <>
            <section aria-labelledby={sectionId('timing')} className="bg-evergreen py-18 text-paper sm:py-26">
              <div className="mx-auto grid w-full max-w-[112rem] gap-12 px-5 sm:px-8 lg:grid-cols-[0.52fr_1fr] lg:gap-20">
                <header>
                  <p className="eyebrow text-[#D5EE72]"><Tr text={content.editorial.timingSection.eyebrow} /></p>
                  <h2 id={sectionId('timing')} className="display-md mt-5 max-w-[12ch] text-paper"><Tr text={content.editorial.timingSection.heading} /></h2>
                  <p className="mt-6 max-w-lg text-[1.0625rem] leading-relaxed text-paper/65"><Tr text={content.editorial.timingSection.introduction} /></p>
                </header>
                <div>
                  <div className="grid border-b border-paper/18 md:grid-cols-2">
                    {[content.editorial.timingSection.ongoing, content.editorial.timingSection.timeSpecific].map((item) => (
                      <article key={item.heading} className="border-t border-paper/18 py-8 md:px-8 md:first:pl-0 md:not-last:border-r md:last:pr-0">
                        <h3 className="text-2xl text-paper uppercase"><Tr text={item.heading} /></h3>
                        <p className="mt-6 text-sm leading-relaxed text-paper/68 sm:text-[0.98rem]"><Tr text={item.description} /></p>
                      </article>
                    ))}
                  </div>
                  <p className="mt-7 max-w-3xl border-l border-[#D5EE72]/55 pl-5 text-sm leading-relaxed text-paper/68"><Tr text={content.editorial.timingSection.note} /></p>
                </div>
              </div>
            </section>

            <section aria-labelledby={sectionId('estimate')} className="bg-paper py-18 sm:py-26">
              <div className="mx-auto w-full max-w-[112rem] px-5 sm:px-8">
                <header className="grid gap-7 border-t border-[color:var(--rule)] pt-6 lg:grid-cols-[minmax(0,1fr)_minmax(22rem,0.58fr)] lg:items-end lg:gap-16">
                  <div>
                    <p className="eyebrow text-ink-soft"><Tr text={content.editorial.estimateSection.eyebrow} /></p>
                    <h2 id={sectionId('estimate')} className="display-md mt-5 max-w-[13ch]"><Tr text={content.editorial.estimateSection.heading} /></h2>
                  </div>
                  <p className="max-w-[35rem] text-[1.0625rem] leading-relaxed text-ink-soft lg:pb-2"><Tr text={content.editorial.estimateSection.introduction} /></p>
                </header>
                <div className="mt-12 grid border-b border-[color:var(--rule)] lg:grid-cols-3">
                  {content.editorial.estimateSection.items.map((item, index) => (
                    <article key={item.title} className="border-t border-[color:var(--rule)] py-8 lg:px-7 lg:not-last:border-r lg:first:pl-0 lg:last:pr-0">
                      <p className="text-[0.68rem] font-bold tracking-[0.16em] text-ink-soft tabular-nums">0{index + 1}</p>
                      <h3 className="mt-8 text-3xl text-ink uppercase"><Tr text={item.title} /></h3>
                      <p className="mt-5 text-sm leading-relaxed text-ink-soft sm:text-[0.98rem]"><Tr text={item.description} /></p>
                    </article>
                  ))}
                </div>
                <ul className="mt-10 grid border-b border-[color:var(--rule)] lg:grid-cols-3">
                  {content.editorial.estimateSection.links.map((link) => (
                    <li key={link.routeId} className="border-t border-[color:var(--rule)] py-7 lg:px-7 lg:not-last:border-r lg:first:pl-0 lg:last:pr-0">
                      <Link href={link.href} prefetch={false} className="group block">
                        <span className="font-display text-2xl font-bold tracking-[-0.03em] text-ink uppercase"><Tr text={link.name} /> <span aria-hidden="true" className="text-accent">↗</span></span>
                        <span className="mt-4 block text-sm leading-relaxed text-ink-soft"><Tr text={link.description} /></span>
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </section>
          </>
        ) : null}

        {content.editorial.kind === 'scope-builder' ? (
          <section aria-labelledby={sectionId('readiness')} className="bg-evergreen py-18 text-paper sm:py-26">
            <div className="mx-auto w-full max-w-[112rem] px-5 sm:px-8">
              <header className="grid gap-7 border-t border-paper/18 pt-6 lg:grid-cols-[minmax(0,0.72fr)_minmax(22rem,0.58fr)] lg:items-end lg:gap-16">
                <div>
                  <p className="eyebrow text-[#D5EE72]"><Tr text={content.editorial.readinessSection.eyebrow} /></p>
                  <h2 id={sectionId('readiness')} className="display-md mt-5 max-w-[13ch] text-paper"><Tr text={content.editorial.readinessSection.heading} /></h2>
                </div>
                <p className="max-w-[36rem] text-[1.0625rem] leading-relaxed text-paper/65 lg:pb-2"><Tr text={content.editorial.readinessSection.introduction} /></p>
              </header>

              <div className="mt-12 grid border-b border-paper/18 lg:grid-cols-3">
                {content.editorial.readinessSection.contexts.map((context) => (
                  <article key={context.title} className="border-t border-paper/18 py-8 lg:px-8 lg:not-last:border-r lg:first:pl-0 lg:last:pr-0">
                    <h3 className="text-2xl text-paper uppercase"><Tr text={context.title} /></h3>
                    <p className="mt-6 text-sm leading-relaxed text-paper/68 sm:text-[0.98rem]"><Tr text={context.description} /></p>
                  </article>
                ))}
              </div>

              <div className="mt-14 grid gap-10 lg:grid-cols-[0.52fr_1fr] lg:gap-20">
                <header>
                  <h3 className="display-sm max-w-[11ch] text-paper"><Tr text={content.editorial.readinessSection.requestHeading} /></h3>
                  <p className="mt-6 max-w-md text-[1.0625rem] leading-relaxed text-paper/65"><Tr text={content.editorial.readinessSection.requestIntroduction} /></p>
                </header>
                <ol className="border-b border-paper/18">
                  {content.editorial.readinessSection.items.map((item) => (
                    <li key={item.number} className="grid gap-4 border-t border-paper/18 py-7 sm:grid-cols-[3rem_minmax(0,0.62fr)_minmax(0,1fr)] sm:gap-8">
                      <p className="pt-1 text-[0.68rem] font-bold tracking-[0.16em] text-[#D5EE72] tabular-nums">{item.number}</p>
                      <h4 className="text-xl text-paper uppercase"><Tr text={item.title} /></h4>
                      <p className="text-sm leading-relaxed text-paper/68"><Tr text={item.description} /></p>
                    </li>
                  ))}
                </ol>
              </div>

              <ul className="mt-12 grid border-b border-paper/18 lg:grid-cols-3">
                {content.editorial.readinessSection.links.map((link) => (
                  <li key={link.routeId} className="border-t border-paper/18 py-7 lg:px-8 lg:not-last:border-r lg:first:pl-0 lg:last:pr-0">
                    <Link href={link.href} prefetch={false} className="group block">
                      <span className="font-display text-2xl font-bold tracking-[-0.03em] text-paper uppercase"><Tr text={link.name} /> <span aria-hidden="true" className="text-[#D5EE72]">↗</span></span>
                      <span className="mt-4 block text-sm leading-relaxed text-paper/65"><Tr text={link.description} /></span>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </section>
        ) : null}

        <section aria-labelledby={sectionId('related')} className="bg-paper py-18 sm:py-26">
          <div className="mx-auto grid w-full max-w-[112rem] gap-10 px-5 sm:px-8 lg:grid-cols-[0.52fr_1fr] lg:gap-20">
            <header>
              <p className="eyebrow text-ink-soft"><Tr text={content.relatedSection.eyebrow} /></p>
              <h2 id={sectionId('related')} className="display-md mt-5 max-w-[10ch]"><Tr text={content.relatedSection.heading} /></h2>
              <p className="mt-6 max-w-md text-[1.0625rem] leading-relaxed text-ink-soft"><Tr text={content.relatedSection.introduction} /></p>
              <Link href={routesById['service-areas'].path} prefetch={false} className="btn-ghost mt-7 w-fit text-ink"><Tr text={content.relatedSection.hubLabel} /> <span aria-hidden="true">→</span></Link>
            </header>
            <ul className="border-b border-[color:var(--rule)]">
              {content.relatedAreas.map((area) => (
                <li key={area.routeId} className="border-t border-[color:var(--rule)]">
                  <Link href={area.href} prefetch={false} className="service-detail-link group grid min-h-32 gap-4 py-6 sm:grid-cols-[minmax(0,0.65fr)_minmax(0,1fr)_2rem] sm:items-center sm:px-5">
                    <span className="font-display text-2xl font-bold tracking-[-0.03em] text-ink uppercase"><Tr text={area.name} /></span>
                    <span className="text-sm leading-relaxed text-ink-soft"><Tr text={area.description} /></span>
                    <span aria-hidden="true" className="service-detail-link-arrow text-2xl text-accent">↗</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </section>

        <section aria-labelledby={sectionId('final')} className="bg-paper pb-22 sm:pb-30">
          <div className="mx-auto w-full max-w-[112rem] px-5 sm:px-8">
            <div className="border-t border-[color:var(--rule)] pt-10 sm:pt-14">
              <p className="eyebrow text-ink-soft"><Tr text={content.finalCta.eyebrow} /></p>
              <h2 id={sectionId('final')} className="display-md mt-5 max-w-[13ch]"><Tr text={content.finalCta.heading} /></h2>
              <p className="mt-6 max-w-3xl text-[1.0625rem] leading-relaxed text-ink-soft"><Tr text={content.finalCta.description} /></p>
              <div className="mt-8 flex flex-col items-start gap-4 sm:flex-row sm:flex-wrap sm:items-center">
                <Link href={routesById.contact.path} prefetch={false} className="btn-solid w-full max-w-full text-center whitespace-normal sm:w-auto"><Tr text={content.finalCta.buttonLabel} /> <span aria-hidden="true">→</span></Link>
                <a href={site.phoneHref} className="btn-ghost w-fit text-ink"><Tr text="Call" /> {site.phone}</a>
              </div>
            </div>
          </div>
        </section>
      </article>
    </InteriorPageShell>
  )
}
