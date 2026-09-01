import type { Metadata } from 'next'
import Link from 'next/link'
import { BeforeAfterSlider } from '@/components/before-after-slider'
import { Gallery } from '@/components/gallery'
import { InteriorPageShell } from '@/components/interior-page-shell'
import { Tr } from '@/components/tr'
import { routeLabels, routesById } from '@/content/routes'
import { buildRouteMetadata } from '@/lib/metadata'
import { site } from '@/lib/site'

const route = routesById['our-work']

export const metadata: Metadata = buildRouteMetadata(route)

const relatedServiceIds = [
  'service-lawn-mowing',
  'service-landscaping',
  'service-yard-cleanup',
  'service-snow-removal',
] as const

export default function OurWorkPage() {
  return (
    <InteriorPageShell routeId="our-work">
      <section className="overflow-hidden pt-10 pb-16 sm:pt-14 sm:pb-24">
        <div className="mx-auto grid w-full max-w-[112rem] gap-10 px-5 sm:px-8 lg:grid-cols-[minmax(0,1.25fr)_minmax(20rem,0.65fr)] lg:items-end lg:gap-20">
          <div className="services-index-reveal min-w-0">
            <p className="eyebrow text-ink-soft"><Tr text="Governed visual archive · Des Moines metro" /></p>
            <h1 className="display-lg mt-5 max-w-[13ch]"><Tr text={route.h1} /></h1>
          </div>

          <div className="services-index-reveal services-index-reveal-delay min-w-0 border-t border-[color:var(--rule)] pt-6 lg:mb-2 lg:pr-10">
            <p className="max-w-[38rem] text-[1.0625rem] leading-relaxed text-ink-soft sm:text-lg">
              <Tr text="Browse the site's visual archive and the before-and-after pairs whose relationship can be verified. Individual images stay geographically neutral when their source does not confirm a location." />
            </p>
            <p className="mt-5 max-w-[38rem] text-sm leading-relaxed text-ink-soft sm:text-base">
              <Tr text="For people comparing landscaping projects in Des Moines, a lawn care gallery in Des Moines or yard cleanup before-and-after examples, the service paths below provide the approved scope without assigning an unsupported service to a photo." />
            </p>
            <div className="mt-7 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
              <a href="#gallery" className="btn-solid w-full max-w-full text-center whitespace-normal sm:w-auto"><Tr text="Browse the gallery" /></a>
              <a href="#comparisons" className="btn-ghost w-fit text-ink"><Tr text="See before and after" /></a>
            </div>
          </div>
        </div>
      </section>

      <section id="comparisons" aria-labelledby="comparisons-heading" className="bg-evergreen py-16 text-paper sm:py-24" style={{ '--accent': '#7FAE68', '--btn-fg': '#102019' } as React.CSSProperties}>
        <div className="mx-auto w-full max-w-[112rem] px-5 sm:px-8">
          <header className="mb-10 grid gap-6 border-t border-paper/18 pt-6 lg:grid-cols-[minmax(0,1fr)_minmax(20rem,0.55fr)] lg:items-end lg:gap-16 sm:mb-14">
            <div>
              <p className="eyebrow text-[#D5EE72]"><Tr text="Sequence checked" /></p>
              <h2 id="comparisons-heading" className="display-md mt-5 max-w-[13ch] text-paper"><Tr text="Verified before-and-after pairings." /></h2>
            </div>
            <p className="max-w-[36rem] text-[1.0625rem] leading-relaxed text-paper/68 lg:pb-2">
              <Tr text="Only pairs with a known sequence and matching source records appear here. The controls work by keyboard, touch or pointer." />
            </p>
          </header>
          <BeforeAfterSlider mode="full" />
        </div>
      </section>

      <Gallery mode="full" />

      <section aria-labelledby="work-services-heading" className="bg-[#f5faf5] py-16 sm:py-24">
        <div className="mx-auto w-full max-w-[112rem] px-5 sm:px-8">
          <header className="grid gap-6 border-t border-[#3e7a45]/20 pt-6 lg:grid-cols-[minmax(0,1fr)_minmax(20rem,0.55fr)] lg:items-end lg:gap-16">
            <div>
              <p className="eyebrow text-[#3e7a45]"><Tr text="Published service details" /></p>
              <h2 id="work-services-heading" className="display-md mt-5 max-w-[13ch] text-[#1d2b1f]"><Tr text="Use the service pages for verified scope." /></h2>
            </div>
            <p className="max-w-[36rem] text-[1.0625rem] leading-relaxed text-ink-soft lg:pb-2">
              <Tr text="These are separate canonical service paths, not labels applied to every image. Exact property needs remain estimate-specific." />
            </p>
          </header>

          <ul className="mt-10 grid border-b border-[#3e7a45]/20 sm:grid-cols-2 xl:grid-cols-4">
            {relatedServiceIds.map((routeId, index) => (
              <li key={routeId} className="border-t border-[#3e7a45]/20 xl:not-last:border-r">
                <Link href={routesById[routeId].path} prefetch={false} className="group flex min-h-44 flex-col px-1 py-7 sm:px-5 sm:py-8">
                  <span className="text-[0.68rem] font-bold tracking-[0.15em] text-[#3e7a45] uppercase tabular-nums">{String(index + 1).padStart(2, '0')}</span>
                  <span className="mt-7 font-display text-2xl font-bold tracking-[-0.03em] text-[#1d2b1f] uppercase"><Tr text={routeLabels[routeId]} /></span>
                  <span aria-hidden="true" className="mt-auto pt-6 text-lg text-[#3e7a45] transition-transform duration-200 group-hover:translate-x-1">→</span>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section aria-labelledby="work-next-heading" className="bg-evergreen py-16 text-paper sm:py-24">
        <div className="mx-auto grid w-full max-w-[112rem] gap-10 px-5 sm:px-8 lg:grid-cols-[1fr_auto] lg:items-end lg:gap-20">
          <div>
            <p className="eyebrow text-[#D5EE72]"><Tr text="From visual context to a next step" /></p>
            <h2 id="work-next-heading" className="display-md mt-5 max-w-[13ch] text-paper"><Tr text="Compare feedback or discuss the property." /></h2>
            <p className="mt-6 max-w-2xl text-[1.0625rem] leading-relaxed text-paper/68">
              <Tr text="The Reviews destination provides company feedback context. The Contact destination begins a property-specific estimate conversation." />
            </p>
          </div>
          <div className="flex flex-col gap-3 sm:flex-row sm:flex-wrap lg:justify-end">
            <Link href={routesById.reviews.path} prefetch={false} className="btn-ghost w-fit text-paper"><Tr text="Read Reviews" /></Link>
            <Link href={routesById.contact.path} prefetch={false} className="btn-solid w-full max-w-full text-center whitespace-normal sm:w-auto"><Tr text="Request a Free Estimate" /></Link>
            <a href={site.phoneHref} className="btn-ghost w-fit text-paper"><Tr text="Call" /> {site.phone}</a>
            <a href={site.emailHref} className="btn-ghost w-fit max-w-full break-all text-paper"><Tr text="Email" /> {site.email}</a>
          </div>
        </div>
      </section>
    </InteriorPageShell>
  )
}
