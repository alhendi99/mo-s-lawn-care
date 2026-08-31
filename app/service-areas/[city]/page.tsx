import type { Metadata } from 'next'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import { InteriorPageShell } from '@/components/interior-page-shell'
import { Tr } from '@/components/tr'
import {
  ankenyCareSteps,
  ankenyEstimateDetails,
} from '@/content/service-areas/ankeny-ia'
import {
  getPublishedCityServiceArea,
  publishedCityServiceAreaSlugs,
} from '@/content/service-areas/index'
import { routeLabels, routesById } from '@/content/routes'
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
  const itemListStructuredData: StructuredDataNode = {
    '@type': 'ItemList',
    '@id': `${route.canonicalUrl}#service-list`,
    name: 'Lawn care services available for Ankeny estimate requests',
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
          <div className="mx-auto grid min-h-[38rem] w-full max-w-[112rem] gap-12 px-5 py-14 sm:px-8 sm:py-18 lg:grid-cols-[minmax(0,1.18fr)_minmax(22rem,0.62fr)] lg:items-end lg:gap-20 lg:py-24">
            <div className="service-detail-reveal min-w-0">
              <p className="eyebrow text-[#D5EE72]"><Tr text="Ankeny property care" /></p>
              <h1 className="mt-6 max-w-[12ch] break-words font-display text-[clamp(2.45rem,11.5vw,7rem)] leading-[0.88] font-bold tracking-[-0.055em] uppercase sm:text-[clamp(3rem,6.2vw,7rem)]">
                <Tr text={route.h1} />
              </h1>
            </div>

            <div className="service-detail-reveal service-detail-reveal-delay border-t border-paper/22 pt-7 lg:mb-2">
              <p className="max-w-[35rem] text-[1.0625rem] leading-relaxed text-paper/72 sm:text-lg">
                <Tr text="Use this Ankeny lawn service guide to compare mowing, lawn-condition care, landscaping, yard cleanup and seasonal options before requesting a property-specific estimate." />
              </p>
              <div className="mt-8 flex flex-col items-start gap-4 sm:flex-row sm:flex-wrap sm:items-center">
                <Link href={routesById.contact.path} prefetch={false} className="btn-solid w-full max-w-full bg-[#D5EE72] text-center whitespace-normal text-evergreen hover:bg-paper sm:w-auto">
                  <Tr text="Request a Free Estimate in Ankeny" /> <span aria-hidden="true">→</span>
                </Link>
                <a href={site.phoneHref} className="hero-text-link px-0"><Tr text="Call" /> {site.phone}</a>
              </div>
            </div>
          </div>
        </section>

        <section aria-labelledby="ankeny-services-heading" className="bg-paper py-18 sm:py-26">
          <div className="mx-auto w-full max-w-[112rem] px-5 sm:px-8">
            <header className="grid gap-7 border-t border-[color:var(--rule)] pt-6 lg:grid-cols-[minmax(0,1fr)_minmax(22rem,0.58fr)] lg:items-end lg:gap-16">
              <div>
                <p className="eyebrow text-ink-soft"><Tr text="Choose by property need" /></p>
                <h2 id="ankeny-services-heading" className="display-md mt-5 max-w-[13ch]"><Tr text="Nine clear service paths for Ankeny." /></h2>
              </div>
              <p className="max-w-[35rem] text-[1.0625rem] leading-relaxed text-ink-soft lg:pb-2">
                <Tr text="Lawn mowing in Ankeny, landscaping in Ankeny, yard cleanup in Ankeny and snow removal in Ankeny each retain their own service details. The links below help keep those choices distinct." />
              </p>
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
              <Tr text="Explore all Services" /> <span aria-hidden="true">→</span>
            </Link>
          </div>
        </section>

        <section aria-labelledby="ankeny-care-heading" className="bg-[#e5ecd9] py-18 sm:py-26">
          <div className="mx-auto grid w-full max-w-[112rem] gap-12 px-5 sm:px-8 lg:grid-cols-[0.58fr_1fr] lg:gap-20">
            <header className="lg:sticky lg:top-28 lg:self-start">
              <p className="eyebrow text-[#315b37]"><Tr text="A practical way to choose" /></p>
              <h2 id="ankeny-care-heading" className="display-md mt-5 max-w-[11ch] text-[#1d2b1f]"><Tr text="Build the request around the property." /></h2>
              <p className="mt-6 max-w-md text-[1.0625rem] leading-relaxed text-[#354139]"><Tr text="The useful distinction is the work to discuss—not a city-wide package or a promise that every property follows the same plan." /></p>
            </header>
            <ol className="border-b border-[#315b37]/22">
              {ankenyCareSteps.map((step) => (
                <li key={step.number} className="grid gap-4 border-t border-[#315b37]/22 py-8 sm:grid-cols-[3rem_minmax(0,0.7fr)_minmax(0,1fr)] sm:gap-8">
                  <p className="pt-1 text-[0.68rem] font-bold tracking-[0.16em] text-[#315b37] tabular-nums">{step.number}</p>
                  <h3 className="text-2xl text-[#1d2b1f] uppercase"><Tr text={step.title} /></h3>
                  <p className="text-sm leading-relaxed text-[#354139] sm:text-[0.98rem]"><Tr text={step.description} /></p>
                </li>
              ))}
            </ol>
          </div>
        </section>

        <section aria-labelledby="ankeny-estimate-heading" className="bg-evergreen py-18 text-paper sm:py-26">
          <div className="mx-auto w-full max-w-[112rem] px-5 sm:px-8">
            <header className="max-w-4xl border-t border-paper/18 pt-6">
              <p className="eyebrow text-[#D5EE72]"><Tr text="Residential and commercial context" /></p>
              <h2 id="ankeny-estimate-heading" className="display-md mt-5 max-w-[14ch] text-paper"><Tr text="What helps frame an estimate request." /></h2>
              <p className="mt-6 max-w-3xl text-[1.0625rem] leading-relaxed text-paper/65"><Tr text="Mo’s approved service records support residential and commercial property conversations. These three details help establish the starting point without inventing a standard package." /></p>
            </header>
            <div className="mt-12 grid border-b border-paper/18 lg:grid-cols-3">
              {ankenyEstimateDetails.map((detail, index) => (
                <article key={detail.title} className="border-t border-paper/18 py-8 lg:px-7 lg:not-last:border-r lg:first:pl-0 lg:last:pr-0">
                  <p className="text-[0.68rem] font-bold tracking-[0.16em] text-[#D5EE72] tabular-nums">0{index + 1}</p>
                  <h3 className="mt-8 text-3xl text-paper uppercase"><Tr text={detail.title} /></h3>
                  <p className="mt-5 max-w-[31rem] text-sm leading-relaxed text-paper/62 sm:text-[0.98rem]"><Tr text={detail.description} /></p>
                </article>
              ))}
            </div>
            <Link href={routesById['commercial-property-services'].path} prefetch={false} className="btn-ghost mt-8 w-fit text-paper">
              <Tr text={routeLabels['commercial-property-services']} /> <span aria-hidden="true">→</span>
            </Link>
          </div>
        </section>

        <section aria-labelledby="ankeny-related-heading" className="bg-paper py-18 sm:py-26">
          <div className="mx-auto grid w-full max-w-[112rem] gap-10 px-5 sm:px-8 lg:grid-cols-[0.52fr_1fr] lg:gap-20">
            <header>
              <p className="eyebrow text-ink-soft"><Tr text="Coverage hierarchy" /></p>
              <h2 id="ankeny-related-heading" className="display-md mt-5 max-w-[10ch]"><Tr text="Other service areas." /></h2>
              <p className="mt-6 max-w-md text-[1.0625rem] leading-relaxed text-ink-soft"><Tr text="Use the Service Areas hub to review the full five-community directory. These links do not imply proximity, an office or a response time." /></p>
              <Link href={routesById['service-areas'].path} prefetch={false} className="btn-ghost mt-7 w-fit text-ink"><Tr text="View Service Areas" /> <span aria-hidden="true">→</span></Link>
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

        <section aria-labelledby="ankeny-final-heading" className="bg-paper pb-22 sm:pb-30">
          <div className="mx-auto w-full max-w-[112rem] px-5 sm:px-8">
            <div className="border-t border-[color:var(--rule)] pt-10 sm:pt-14">
              <p className="eyebrow text-ink-soft"><Tr text="Ankeny estimate path" /></p>
              <h2 id="ankeny-final-heading" className="display-md mt-5 max-w-[13ch]"><Tr text="Request a Free Estimate in Ankeny" /></h2>
              <p className="mt-6 max-w-3xl text-[1.0625rem] leading-relaxed text-ink-soft"><Tr text="Share the property area and main service concern through Mo’s established contact path." /></p>
              <div className="mt-8 flex flex-col items-start gap-4 sm:flex-row sm:flex-wrap sm:items-center">
                <Link href={routesById.contact.path} prefetch={false} className="btn-solid w-full max-w-full text-center whitespace-normal sm:w-auto"><Tr text="Start an Estimate Request" /> <span aria-hidden="true">→</span></Link>
                <a href={site.phoneHref} className="btn-ghost w-fit text-ink"><Tr text="Call" /> {site.phone}</a>
              </div>
            </div>
          </div>
        </section>
      </article>
    </InteriorPageShell>
  )
}
