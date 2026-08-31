import type { Metadata } from 'next'
import Link from 'next/link'
import { InteriorPageShell } from '@/components/interior-page-shell'
import { Tr } from '@/components/tr'
import {
  aboutAreaLinks,
  aboutServiceGroups,
  resolvedAboutSupportingLinks,
} from '@/content/about'
import { routeLabels, routesById } from '@/content/routes'
import { buildRouteMetadata } from '@/lib/metadata'
import { site } from '@/lib/site'

const route = routesById.about

export const metadata: Metadata = buildRouteMetadata(route)

export default function AboutPage() {
  return (
    <InteriorPageShell routeId="about">
      <section className="overflow-hidden pt-10 pb-16 sm:pt-14 sm:pb-24">
        <div className="mx-auto grid w-full max-w-[112rem] gap-10 px-5 sm:px-8 lg:grid-cols-[minmax(0,1.25fr)_minmax(20rem,0.65fr)] lg:items-end lg:gap-20">
          <div className="services-index-reveal min-w-0">
            <p className="eyebrow text-ink-soft">
              <Tr text="Mo's Lawn Care · Iowa service area business" />
            </p>
            <h1 className="display-lg mt-5 max-w-[12ch]">
              <Tr text={route.h1} />
            </h1>
          </div>

          <div className="services-index-reveal services-index-reveal-delay min-w-0 border-t border-[color:var(--rule)] pt-6 lg:mb-2 lg:pr-12">
            <p className="max-w-[38rem] text-[1.0625rem] leading-relaxed text-ink-soft sm:text-lg">
              <span className="font-semibold text-ink">{site.companyName}</span>{' '}
              <Tr text="is a Service Area Business helping residential and commercial properties in Des Moines, Ankeny, Waukee, Norwalk and Altoona." />
            </p>
            <p className="mt-5 max-w-[38rem] text-sm leading-relaxed text-ink-soft sm:text-base">
              <Tr text="For people comparing a lawn care company in Des Moines or searching for a local lawn care company in Des Moines, this page keeps the published company facts concise and points to the canonical details." />
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
        aria-labelledby="about-facts-heading"
        className="bg-evergreen py-16 text-paper sm:py-24"
        style={{ '--accent': '#D5EE72', '--btn-fg': '#102019' } as React.CSSProperties}
      >
        <div className="mx-auto w-full max-w-[112rem] px-5 sm:px-8">
          <header className="grid gap-6 border-t border-paper/18 pt-6 lg:grid-cols-[minmax(0,1fr)_minmax(20rem,0.58fr)] lg:items-end lg:gap-16">
            <div>
              <p className="eyebrow text-[#D5EE72]"><Tr text="Published company facts" /></p>
              <h2 id="about-facts-heading" className="display-md mt-5 max-w-[13ch] text-paper">
                <Tr text="Trust starts with what can be verified." />
              </h2>
            </div>
            <p className="max-w-[36rem] text-[1.0625rem] leading-relaxed text-paper/65 lg:pb-2">
              <Tr text="Mo's Lawn Care in Iowa is presented through approved business facts, published service records and direct contact paths—not an invented company story." />
            </p>
          </header>

          <dl className="mt-12 grid border-b border-paper/18 sm:grid-cols-2 xl:grid-cols-4">
            {[
              {
                label: 'Business identity',
                value: site.companyName,
                translateValue: false,
              },
              {
                label: 'Property context',
                value: 'Residential and commercial',
                translateValue: true,
              },
              {
                label: 'Review signal',
                value: site.reviewSummary.displayCopy,
                translateValue: true,
              },
              {
                label: 'Published hours',
                value: site.openingHours.displayCopy,
                translateValue: true,
              },
            ].map((fact) => (
              <div key={fact.label} className="border-t border-paper/18 py-7 sm:px-6 sm:nth-[2n+1]:pl-0 xl:nth-[2n+1]:pl-6 xl:first:pl-0 xl:not-last:border-r">
                <dt className="eyebrow text-[#D5EE72]"><Tr text={fact.label} /></dt>
                <dd className="mt-6 max-w-[24ch] text-lg leading-snug font-semibold text-paper">
                  {fact.translateValue ? <Tr text={fact.value} /> : fact.value}
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </section>

      <section aria-labelledby="about-services-heading" className="bg-paper py-16 sm:py-24">
        <div className="mx-auto w-full max-w-[112rem] px-5 sm:px-8">
          <header className="grid gap-6 border-t border-[color:var(--rule)] pt-6 lg:grid-cols-[minmax(0,1fr)_minmax(20rem,0.58fr)] lg:items-end lg:gap-16">
            <div>
              <p className="eyebrow text-ink-soft"><Tr text="What Mo's helps with" /></p>
              <h2 id="about-services-heading" className="display-md mt-5 max-w-[13ch]">
                <Tr text="Published services, grouped without expanding their scope." />
              </h2>
            </div>
            <p className="max-w-[36rem] text-[1.0625rem] leading-relaxed text-ink-soft lg:pb-2">
              <Tr text="The company handles lawn care, outdoor-space work, property cleanup and snow removal through ten canonical service pages. Exact inclusions remain property- and estimate-specific." />
            </p>
          </header>

          <div className="mt-12 grid border-b border-[color:var(--rule)] lg:grid-cols-2">
            {aboutServiceGroups.map((group) => (
              <article key={group.name} className="border-t border-[color:var(--rule)] px-1 py-8 sm:px-6 lg:odd:border-r">
                <h3 className="font-display text-2xl font-bold tracking-[-0.03em] uppercase sm:text-3xl">
                  <Tr text={group.name} />
                </h3>
                <p className="mt-4 max-w-[42rem] text-sm leading-relaxed text-ink-soft sm:text-base">
                  <Tr text={group.description} />
                </p>
                <ul className="mt-7 flex flex-wrap gap-x-5 gap-y-2">
                  {group.routeIds.map((routeId) => (
                    <li key={routeId}>
                      <Link
                        href={routesById[routeId].path}
                        prefetch={false}
                        className="inline-flex min-h-11 items-center text-sm font-semibold text-ink underline decoration-accent/35 underline-offset-4 hover:decoration-current"
                      >
                        <Tr text={routeLabels[routeId]} />
                      </Link>
                    </li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section aria-labelledby="about-areas-heading" className="bg-paper pb-20 sm:pb-28">
        <div className="mx-auto grid w-full max-w-[112rem] gap-10 px-5 sm:px-8 lg:grid-cols-[0.7fr_1.3fr] lg:gap-20">
          <div>
            <p className="eyebrow text-ink-soft"><Tr text="Five-area coverage" /></p>
            <h2 id="about-areas-heading" className="display-md mt-5 max-w-[12ch]">
              <Tr text="One company identity across five approved communities." />
            </h2>
            <p className="mt-6 max-w-xl text-[1.0625rem] leading-relaxed text-ink-soft">
              <Tr text="Des Moines returns to the homepage. Ankeny, Waukee, Norwalk and Altoona each use their published service-area page." />
            </p>
            <Link href={routesById['service-areas'].path} prefetch={false} className="btn-ghost mt-7 w-fit text-ink">
              <Tr text="Explore Service Areas" />
            </Link>
          </div>

          <ol className="border-b border-[color:var(--rule)]">
            {aboutAreaLinks.map((area, index) => (
              <li key={area.routeId} className="border-t border-[color:var(--rule)]">
                <Link
                  href={area.href}
                  prefetch={false}
                  className="group grid min-h-20 grid-cols-[2.5rem_minmax(0,1fr)_1.5rem] items-center gap-4 px-1 py-4 sm:px-5"
                >
                  <span className="text-[0.68rem] font-bold tracking-[0.16em] text-ink-soft tabular-nums">
                    {String(index + 1).padStart(2, '0')}
                  </span>
                  <span className="font-display text-xl font-bold tracking-[-0.025em] uppercase sm:text-2xl">
                    <Tr text={area.name} />
                  </span>
                  <span aria-hidden="true" className="text-lg text-accent transition-transform duration-200 group-hover:translate-x-1">↗</span>
                </Link>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section aria-labelledby="about-next-heading" className="bg-[#f5faf5] py-16 sm:py-24">
        <div className="mx-auto w-full max-w-[112rem] px-5 sm:px-8">
          <header className="max-w-4xl border-t border-[#3e7a45]/20 pt-6">
            <p className="eyebrow text-[#3e7a45]"><Tr text="Choose the next canonical path" /></p>
            <h2 id="about-next-heading" className="display-md mt-5 max-w-[14ch] text-[#1d2b1f]">
              <Tr text="Company context should lead to useful details." />
            </h2>
          </header>

          <ul className="mt-10 grid border-b border-[#3e7a45]/20 sm:grid-cols-2 xl:grid-cols-5">
            {resolvedAboutSupportingLinks.map((link) => (
              <li key={link.routeId} className="border-t border-[#3e7a45]/20 xl:not-last:border-r">
                <Link href={link.href} prefetch={false} className="group flex min-h-64 flex-col px-1 py-7 sm:px-5 sm:py-8">
                  <span className="eyebrow text-[#3e7a45]"><Tr text={link.eyebrow} /></span>
                  <span className="mt-7 font-display text-2xl font-bold tracking-[-0.03em] text-[#1d2b1f] uppercase">
                    <Tr text={link.name} />
                  </span>
                  <span className="mt-4 text-sm leading-relaxed text-ink-soft">
                    <Tr text={link.description} />
                  </span>
                  <span aria-hidden="true" className="mt-auto pt-7 text-lg text-[#3e7a45] transition-transform duration-200 group-hover:translate-x-1">→</span>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="bg-evergreen py-16 text-paper sm:py-24" aria-labelledby="about-cta-heading">
        <div className="mx-auto grid w-full max-w-[112rem] gap-8 px-5 sm:px-8 lg:grid-cols-[1fr_auto] lg:items-end lg:gap-16">
          <div>
            <p className="eyebrow text-[#D5EE72]"><Tr text="Property-specific next step" /></p>
            <h2 id="about-cta-heading" className="display-md mt-5 max-w-[13ch] text-paper">
              <Tr text="Tell Mo's what the property needs." />
            </h2>
            <p className="mt-6 max-w-2xl text-[1.0625rem] leading-relaxed text-paper/65">
              <Tr text="Share the property type, approved service area and broad need through the estimate path. Exact scope is confirmed for the request." />
            </p>
          </div>
          <div className="flex flex-col gap-3 sm:flex-row sm:flex-wrap lg:justify-end">
            <Link href={routesById.contact.path} prefetch={false} className="btn-solid w-full max-w-full text-center whitespace-normal sm:w-auto">
              <Tr text="Request a Free Estimate" />
            </Link>
            <a href={site.phoneHref} className="btn-ghost w-fit text-paper">
              <Tr text="Call" /> {site.phone}
            </a>
          </div>
        </div>
      </section>
    </InteriorPageShell>
  )
}
