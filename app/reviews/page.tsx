import type { Metadata } from 'next'
import Link from 'next/link'
import { InteriorPageShell } from '@/components/interior-page-shell'
import { ReviewsCollection } from '@/components/reviews-collection'
import { Tr } from '@/components/tr'
import { REVIEW_CATEGORIES } from '@/content/reviews'
import { routeLabels, routesById } from '@/content/routes'
import { buildRouteMetadata } from '@/lib/metadata'
import { site } from '@/lib/site'

const route = routesById.reviews

export const metadata: Metadata = buildRouteMetadata(route)

const serviceCategoryLinks = REVIEW_CATEGORIES.filter((category) => category.serviceRouteId !== null)

export default function ReviewsPage() {
  return (
    <InteriorPageShell routeId="reviews">
      <section className="overflow-hidden pt-10 pb-16 sm:pt-14 sm:pb-24">
        <div className="mx-auto grid w-full max-w-[112rem] gap-10 px-5 sm:px-8 lg:grid-cols-[minmax(0,1.15fr)_minmax(20rem,0.7fr)] lg:items-end lg:gap-20">
          <div className="services-index-reveal min-w-0">
            <p className="eyebrow text-ink-soft"><Tr text="Customer feedback · governed collection" /></p>
            <h1 className="display-lg-compact mt-5 max-w-[13ch]"><Tr text={route.h1} /></h1>
          </div>
          <div className="services-index-reveal services-index-reveal-delay min-w-0 border-t border-[color:var(--rule)] pt-6 lg:mb-2 lg:pr-10">
            <p className="max-w-[38rem] text-[1.0625rem] leading-relaxed text-ink-soft sm:text-lg">
              <Tr text="Read customer feedback preserved from the approved repository source. Quotations remain in their original language and describe each reviewer's individual experience." />
            </p>
            <p className="mt-6 font-display text-3xl font-bold tracking-[-0.04em] text-evergreen uppercase"><Tr text={site.reviewSummary.displayCopy} /></p>
            <p className="mt-2 max-w-[38rem] text-sm leading-relaxed text-ink-soft"><Tr text="This public Google review signal is governed separately from the number of feedback records stored on this site." /></p>
            <a href={site.googleBusinessProfileHref} target="_blank" rel="noopener noreferrer" className="btn-solid mt-7 w-full max-w-full text-center whitespace-normal sm:w-auto"><Tr text="View more reviews on Google" /><span aria-hidden="true"> ↗</span></a>
          </div>
        </div>
      </section>

      <section aria-labelledby="feedback-heading" className="bg-paper py-16 sm:py-24">
        <div className="mx-auto w-full max-w-[112rem] px-5 sm:px-8">
          <header className="grid gap-6 border-t border-[color:var(--rule)] pt-6 lg:grid-cols-[minmax(0,1fr)_minmax(20rem,0.55fr)] lg:items-end lg:gap-16">
            <div>
              <p className="eyebrow text-[#3e7a45]"><Tr text="Browse by established theme" /></p>
              <h2 id="feedback-heading" className="display-md mt-5 max-w-[13ch]"><Tr text="Customer voices, in their own words." /></h2>
            </div>
            <p className="max-w-[36rem] text-[1.0625rem] leading-relaxed text-ink-soft lg:pb-2"><Tr text="Theme labels come from the existing governed categorization. They organize feedback; they do not add services, locations or guarantees to a customer's statement." /></p>
          </header>
          <div className="mt-10 sm:mt-14"><ReviewsCollection /></div>
        </div>
      </section>

      <section aria-labelledby="review-service-heading" className="bg-[#f5faf5] py-16 sm:py-24">
        <div className="mx-auto w-full max-w-[112rem] px-5 sm:px-8">
          <header className="grid gap-6 border-t border-[#3e7a45]/20 pt-6 lg:grid-cols-[minmax(0,1fr)_minmax(20rem,0.55fr)] lg:items-end lg:gap-16">
            <div>
              <p className="eyebrow text-[#3e7a45]"><Tr text="Separate service owners" /></p>
              <h2 id="review-service-heading" className="display-md mt-5 max-w-[13ch] text-[#1d2b1f]"><Tr text="Use service pages for approved scope." /></h2>
            </div>
            <p className="max-w-[36rem] text-[1.0625rem] leading-relaxed text-ink-soft lg:pb-2"><Tr text="These paths correspond to established review themes. The service pages—not customer feedback—define what can be discussed for a property." /></p>
          </header>
          <ul className="mt-10 grid border-b border-[#3e7a45]/20 md:grid-cols-3">
            {serviceCategoryLinks.map((category, index) => {
              const routeId = category.serviceRouteId
              return (
                <li key={category.id} className="border-t border-[#3e7a45]/20 md:not-last:border-r">
                  <Link href={routesById[routeId].path} prefetch={false} className="group flex min-h-44 flex-col px-1 py-7 sm:px-5 sm:py-8">
                    <span className="text-[0.68rem] font-bold tracking-[0.15em] text-[#3e7a45] uppercase tabular-nums">{String(index + 1).padStart(2, '0')} · <Tr text={category.label} /></span>
                    <span className="mt-7 font-display text-2xl font-bold tracking-[-0.03em] text-[#1d2b1f] uppercase"><Tr text={routeLabels[routeId]} /></span>
                    <span aria-hidden="true" className="mt-auto pt-6 text-lg text-[#3e7a45] transition-transform duration-200 group-hover:translate-x-1">→</span>
                  </Link>
                </li>
              )
            })}
          </ul>
        </div>
      </section>

      <section aria-labelledby="reviews-next-heading" className="bg-evergreen py-16 text-paper sm:py-24">
        <div className="mx-auto grid w-full max-w-[112rem] gap-10 px-5 sm:px-8 lg:grid-cols-[1fr_auto] lg:items-end lg:gap-20">
          <div>
            <p className="eyebrow text-[#D5EE72]"><Tr text="More context or a property conversation" /></p>
            <h2 id="reviews-next-heading" className="display-md mt-5 max-w-[13ch] text-paper"><Tr text="See the work, then discuss what you need." /></h2>
            <p className="mt-6 max-w-2xl text-[1.0625rem] leading-relaxed text-paper/68"><Tr text="Our Work keeps media evidence separate from review evidence. Contact remains the path for a property-specific estimate conversation." /></p>
          </div>
          <div className="flex flex-col gap-3 sm:flex-row sm:flex-wrap lg:justify-end">
            <Link href={routesById['our-work'].path} prefetch={false} className="btn-ghost w-fit text-paper"><Tr text="View Our Work" /></Link>
            <Link href={routesById.contact.path} prefetch={false} className="btn-solid w-full max-w-full text-center whitespace-normal sm:w-auto"><Tr text="Request a Free Estimate" /></Link>
            <a href={site.phoneHref} className="btn-ghost w-fit text-paper"><Tr text="Call" /> {site.phone}</a>
            <a href={site.emailHref} className="btn-ghost w-fit max-w-full break-all text-paper"><Tr text="Email" /> {site.email}</a>
          </div>
        </div>
      </section>
    </InteriorPageShell>
  )
}
