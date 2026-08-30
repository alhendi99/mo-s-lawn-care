import Image from 'next/image'
import Link from 'next/link'
import { InteriorPageShell } from '@/components/interior-page-shell'
import { Tr } from '@/components/tr'
import { routeLabels, routesById } from '@/content/routes'
import type { ServiceDetailContent } from '@/content/services/types'
import { site } from '@/lib/site'
import { buildServiceStructuredData } from '@/lib/structured-data'

export function ServiceDetailPage({ content }: { content: ServiceDetailContent }) {
  const route = routesById[content.routeId]
  const sectionId = (section: string) => `${content.slug}-${section}-heading`
  const serviceStructuredData = buildServiceStructuredData(route, {
    name: content.schema.name,
    serviceType: content.schema.serviceType,
    description: route.description,
  })

  return (
    <InteriorPageShell
      routeId={content.routeId}
      structuredDataNodes={[serviceStructuredData]}
      breadcrumbClassName="relative z-10"
    >
      <article data-service-detail={content.slug}>
        <section className="service-detail-hero mt-6 overflow-hidden bg-evergreen text-paper sm:mt-8">
          <div className="grid min-h-[42rem] lg:grid-cols-[minmax(0,0.96fr)_minmax(30rem,1.04fr)]">
            <div className="relative z-10 flex flex-col justify-between px-5 py-12 sm:px-8 sm:py-16 lg:px-[max(2rem,calc((100vw-112rem)/2+2rem))] lg:pr-14 lg:py-20">
              <div className="service-detail-reveal max-w-4xl">
                <p className="eyebrow text-[#D5EE72]"><Tr text={content.hero.eyebrow} /></p>
                <h1 className="mt-6 max-w-[12ch] font-display text-[clamp(2.9rem,6.3vw,7.25rem)] leading-[0.88] font-bold tracking-[-0.055em] uppercase">
                  <Tr text={route.h1} />
                </h1>
                <p className="mt-7 max-w-[35rem] text-base leading-relaxed text-paper/72 sm:text-lg">
                  <Tr text={content.hero.summary} />
                </p>
              </div>

              <div className="service-detail-reveal service-detail-reveal-delay mt-10 flex flex-col items-start gap-4 sm:flex-row sm:flex-wrap sm:items-center">
                <Link
                  href={routesById.contact.path}
                  prefetch={false}
                  className="btn-solid max-w-full w-full bg-[#D5EE72] text-center text-evergreen whitespace-normal hover:bg-paper sm:w-auto"
                >
                  <Tr text="Request a Free Estimate" />
                  <span aria-hidden="true">→</span>
                </Link>
                <a href={site.phoneHref} className="hero-text-link px-0">
                  <Tr text="Call" /> {site.phone}
                </a>
              </div>
            </div>

            <figure className="service-detail-media service-detail-reveal service-detail-media-delay relative min-h-[24rem] overflow-hidden bg-evergreen lg:min-h-full">
              <Image
                src={content.hero.image.src}
                alt={content.hero.image.alt}
                fill
                loading="eager"
                sizes="(min-width: 1024px) 52vw, 100vw"
                className="object-cover"
              />
              <div aria-hidden="true" className="absolute inset-0 bg-linear-to-t from-evergreen/48 via-transparent to-evergreen/15 lg:bg-linear-to-r lg:from-evergreen/30 lg:via-transparent lg:to-transparent" />
              <figcaption className="absolute right-5 bottom-5 left-5 border-t border-paper/30 pt-3 text-[0.68rem] leading-relaxed font-semibold tracking-[0.13em] text-paper/75 uppercase sm:right-8 sm:bottom-8 sm:left-8">
                <Tr text={content.hero.image.caption} />
              </figcaption>
            </figure>
          </div>
        </section>

        <section aria-labelledby={sectionId('start')} className="bg-paper py-18 sm:py-26">
          <div className="mx-auto grid w-full max-w-[112rem] gap-12 px-5 sm:px-8 lg:grid-cols-[minmax(16rem,0.5fr)_minmax(0,1fr)] lg:gap-20">
            <header className="lg:sticky lg:top-28 lg:self-start">
              <p className="eyebrow text-ink-soft"><Tr text={content.introduction.eyebrow} /></p>
              <h2 id={sectionId('start')} className="display-md mt-5 max-w-[12ch]">
                <Tr text={content.introduction.heading} />
              </h2>
            </header>

            <div>
              <div className="grid gap-5 text-[1.0625rem] leading-relaxed text-ink-soft sm:text-lg">
                {content.introduction.paragraphs.map((paragraph) => (
                  <p key={paragraph}><Tr text={paragraph} /></p>
                ))}
              </div>

              <ol className="mt-12 border-b border-[color:var(--rule)]">
                {content.introduction.decisionPoints.map((point) => (
                  <li key={point.number} className="grid gap-4 border-t border-[color:var(--rule)] py-7 sm:grid-cols-[3rem_minmax(0,0.72fr)_minmax(0,1fr)] sm:gap-8">
                    <p className="pt-1 text-[0.68rem] font-bold tracking-[0.16em] text-ink-soft tabular-nums">{point.number}</p>
                    <h3 className="text-2xl uppercase"><Tr text={point.title} /></h3>
                    <p className="text-sm leading-relaxed text-ink-soft sm:text-[0.98rem]"><Tr text={point.description} /></p>
                  </li>
                ))}
              </ol>
            </div>
          </div>
        </section>

        <section aria-labelledby={sectionId('scope')} className="bg-evergreen py-18 text-paper sm:py-26">
          <div className="mx-auto w-full max-w-[112rem] px-5 sm:px-8">
            <header className="grid gap-7 border-t border-paper/18 pt-6 lg:grid-cols-[minmax(0,1fr)_minmax(22rem,0.58fr)] lg:items-end lg:gap-16">
              <div>
                <p className="eyebrow text-[#D5EE72]"><Tr text={content.scope.eyebrow} /></p>
                <h2 id={sectionId('scope')} className="display-md mt-5 max-w-[13ch] text-paper">
                  <Tr text={content.scope.heading} />
                </h2>
              </div>
              <p className="max-w-[35rem] text-[1.0625rem] leading-relaxed text-paper/65 lg:pb-2">
                <Tr text={content.scope.introduction} />
              </p>
            </header>

            <div className="mt-12 grid border-b border-paper/18 lg:grid-cols-3">
              {content.scope.items.map((item, index) => (
                <article key={item.title} className="border-t border-paper/18 py-8 lg:px-7 lg:not-last:border-r lg:first:pl-0 lg:last:pr-0">
                  <p className="text-[0.68rem] font-bold tracking-[0.16em] text-[#D5EE72] tabular-nums">0{index + 1}</p>
                  <h3 className="mt-8 text-3xl text-paper uppercase"><Tr text={item.title} /></h3>
                  <p className="mt-5 max-w-[31rem] text-sm leading-relaxed text-paper/62 sm:text-[0.98rem]">
                    <Tr text={item.description} />
                  </p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section aria-labelledby={sectionId('related-services')} className="bg-paper py-18 sm:py-26">
          <div className="mx-auto grid w-full max-w-[112rem] gap-10 px-5 sm:px-8 lg:grid-cols-[0.55fr_1fr] lg:gap-20">
            <header>
              <p className="eyebrow text-ink-soft"><Tr text={content.relatedServicesIntro.eyebrow} /></p>
              <h2 id={sectionId('related-services')} className="display-md mt-5 max-w-[11ch]">
                <Tr text={content.relatedServicesIntro.heading} />
              </h2>
              <p className="mt-6 max-w-md text-[1.0625rem] leading-relaxed text-ink-soft">
                <Tr text={content.relatedServicesIntro.description} />
              </p>
            </header>

            <ul className="border-b border-[color:var(--rule)]">
              {content.relatedServices.map((item) => {
                const relatedRoute = routesById[item.routeId]
                return (
                  <li key={item.routeId} className="border-t border-[color:var(--rule)]">
                    <Link
                      href={relatedRoute.path}
                      prefetch={false}
                      className="service-detail-link group grid min-h-48 gap-5 py-7 sm:grid-cols-[minmax(0,0.82fr)_minmax(0,1fr)_2rem] sm:items-center sm:gap-8 sm:px-5"
                    >
                      <span>
                        <span className="eyebrow block text-ink-soft"><Tr text={item.eyebrow} /></span>
                        <span className="mt-5 block font-display text-2xl font-bold tracking-[-0.03em] text-ink uppercase sm:text-3xl">
                          <Tr text={routeLabels[item.routeId]} />
                        </span>
                      </span>
                      <span className="text-sm leading-relaxed text-ink-soft sm:text-[0.98rem]"><Tr text={item.description} /></span>
                      <span aria-hidden="true" className="service-detail-link-arrow text-2xl text-accent">↗</span>
                    </Link>
                  </li>
                )
              })}
            </ul>
          </div>
        </section>

        <section aria-labelledby={sectionId('property-context')} className="bg-[#e5ecd9] py-18 sm:py-26">
          <div className="mx-auto w-full max-w-[112rem] px-5 sm:px-8">
            <header className="max-w-4xl">
              <p className="eyebrow text-[#315b37]"><Tr text={content.propertyContext.eyebrow} /></p>
              <h2 id={sectionId('property-context')} className="display-md mt-5 max-w-[13ch] text-[#1d2b1f]">
                <Tr text={content.propertyContext.heading} />
              </h2>
            </header>

            <div className="mt-12 grid border-y border-[#315b37]/22 lg:grid-cols-3">
              <article className="py-8 lg:pr-8">
                <p className="eyebrow text-[#315b37]"><Tr text="Residential" /></p>
                <p className="mt-6 text-base leading-relaxed text-[#354139]"><Tr text={content.propertyContext.residential} /></p>
              </article>
              <article className="border-t border-[#315b37]/22 py-8 lg:border-t-0 lg:border-l lg:px-8">
                <p className="eyebrow text-[#315b37]"><Tr text="Commercial" /></p>
                <p className="mt-6 text-base leading-relaxed text-[#354139]"><Tr text={content.propertyContext.commercial} /></p>
                <Link href={routesById['commercial-property-services'].path} prefetch={false} className="btn-ghost mt-7 w-fit text-[#244729]">
                  <Tr text={routeLabels['commercial-property-services']} /> <span aria-hidden="true">→</span>
                </Link>
              </article>
              <article className="border-t border-[#315b37]/22 py-8 lg:border-t-0 lg:border-l lg:pl-8">
                <p className="eyebrow text-[#315b37]"><Tr text="Property-care portfolio" /></p>
                <p className="mt-6 text-base leading-relaxed text-[#354139]"><Tr text={content.propertyContext.portfolio} /></p>
                <Link href={routesById['our-work'].path} prefetch={false} className="btn-ghost mt-7 w-fit text-[#244729]">
                  <Tr text="View Our Work" /> <span aria-hidden="true">→</span>
                </Link>
              </article>
            </div>
          </div>
        </section>

        <section aria-labelledby={sectionId('reviews')} className="bg-paper py-18 sm:py-26">
          <div className="mx-auto grid w-full max-w-[112rem] gap-12 px-5 sm:px-8 lg:grid-cols-[0.55fr_1fr] lg:gap-20">
            <header>
              <p className="eyebrow text-ink-soft"><Tr text={content.reviews.eyebrow} /></p>
              <h2 id={sectionId('reviews')} className="display-md mt-5 max-w-[12ch]">
                <Tr text={content.reviews.heading} />
              </h2>
              <p className="mt-6 max-w-md text-[1.0625rem] leading-relaxed text-ink-soft">
                <Tr text={content.reviews.introduction} />
              </p>
              <a
                href={site.googleBusinessProfileHref}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-ghost mt-7 w-fit text-ink"
              >
                <Tr text="View on Google" /> <span aria-hidden="true">↗</span>
              </a>
            </header>

            <div className="grid border-b border-[color:var(--rule)] md:grid-cols-2">
              {content.reviews.items.map((review) => (
                <figure key={review.name} className="flex flex-col border-t border-[color:var(--rule)] py-8 md:px-7 md:first:border-r md:first:pl-0 md:last:pr-0">
                  <blockquote className="text-[1.12rem] leading-relaxed font-medium text-ink sm:text-xl">
                    &ldquo;<Tr text={review.quote} />&rdquo;
                  </blockquote>
                  <figcaption className="mt-auto pt-8">
                    <p className="font-bold text-ink">{review.name}</p>
                    <p className="mt-1 text-sm text-ink-soft"><Tr text={review.sourceLabel} /></p>
                  </figcaption>
                </figure>
              ))}
            </div>
          </div>
        </section>

        <section aria-labelledby={sectionId('area')} className="bg-evergreen py-18 text-paper sm:py-26">
          <div className="mx-auto grid w-full max-w-[112rem] gap-12 px-5 sm:px-8 lg:grid-cols-[0.8fr_1.2fr] lg:gap-20">
            <header>
              <p className="eyebrow text-[#D5EE72]"><Tr text={content.serviceArea.eyebrow} /></p>
              <h2 id={sectionId('area')} className="display-md mt-5 max-w-[12ch] text-paper">
                <Tr text={content.serviceArea.heading} />
              </h2>
            </header>
            <div>
              <p className="max-w-2xl text-[1.0625rem] leading-relaxed text-paper/68 sm:text-lg">
                <Tr text={content.serviceArea.description} />
              </p>
              <ul className="mt-10 grid border-b border-paper/18 sm:grid-cols-2">
                {content.serviceArea.cities.map((city, index) => (
                  <li key={city} className="flex min-h-20 items-center gap-5 border-t border-paper/18 py-4 sm:px-5 sm:odd:border-r sm:odd:pl-0">
                    <span className="text-[0.68rem] font-bold tracking-[0.16em] text-[#D5EE72] tabular-nums">0{index + 1}</span>
                    <span className="font-display text-2xl font-bold tracking-[-0.03em] text-paper uppercase"><Tr text={city} /></span>
                  </li>
                ))}
              </ul>
              <p className="mt-6 max-w-2xl text-sm leading-relaxed text-paper/52"><Tr text={content.serviceArea.clarification} /></p>
            </div>
          </div>
        </section>

        <section aria-labelledby={sectionId('faq')} className="bg-paper py-18 sm:py-26">
          <div className="mx-auto grid w-full max-w-[112rem] gap-10 px-5 sm:px-8 lg:grid-cols-[0.48fr_1fr] lg:gap-20">
            <header>
              <p className="eyebrow text-ink-soft"><Tr text={content.faqIntro.eyebrow} /></p>
              <h2 id={sectionId('faq')} className="display-md mt-5 max-w-[10ch]">
                <Tr text={content.faqIntro.heading} />
              </h2>
            </header>
            <div className="border-b border-[color:var(--rule)]">
              {content.faqs.map((faq, index) => (
                <article key={faq.question} className="grid gap-4 border-t border-[color:var(--rule)] py-7 sm:grid-cols-[2.5rem_minmax(0,0.82fr)_minmax(0,1fr)] sm:gap-7">
                  <p className="pt-1 text-[0.68rem] font-bold tracking-[0.16em] text-ink-soft tabular-nums">0{index + 1}</p>
                  <h3 className="text-xl leading-tight uppercase sm:text-2xl"><Tr text={faq.question} /></h3>
                  <p className="text-sm leading-relaxed text-ink-soft sm:text-[0.98rem]"><Tr text={faq.answer} /></p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="bg-[#D5EE72] py-16 text-evergreen sm:py-22">
          <div className="mx-auto grid w-full max-w-[112rem] gap-8 px-5 sm:px-8 lg:grid-cols-[minmax(0,1fr)_minmax(20rem,0.5fr)] lg:items-end lg:gap-16">
            <div>
              <p className="eyebrow text-evergreen/65"><Tr text={content.finalCta.eyebrow} /></p>
              <h2 className="mt-5 max-w-[15ch] font-display text-[clamp(2.5rem,5.6vw,6rem)] leading-[0.9] font-bold tracking-[-0.05em] uppercase">
                <Tr text={content.finalCta.heading} />
              </h2>
            </div>
            <div className="border-t border-evergreen/25 pt-6">
              <p className="max-w-md text-base leading-relaxed text-evergreen/72"><Tr text={content.finalCta.description} /></p>
              <div className="mt-7 flex flex-col items-start gap-4 sm:flex-row sm:flex-wrap sm:items-center">
                <Link href={routesById.contact.path} prefetch={false} className="btn-solid w-full bg-evergreen text-center whitespace-normal hover:bg-evergreen-700 sm:w-auto">
                  <Tr text="Request a Free Estimate" /> <span aria-hidden="true">→</span>
                </Link>
                <a href={site.phoneHref} className="btn-ghost w-fit text-evergreen">
                  <Tr text="Call" /> {site.phone}
                </a>
              </div>
            </div>
          </div>
        </section>
      </article>
    </InteriorPageShell>
  )
}
