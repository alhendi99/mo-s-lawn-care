import type { Metadata } from 'next'
import Link from 'next/link'
import { InteriorPageShell } from '@/components/interior-page-shell'
import { Tr } from '@/components/tr'
import { getPublishedArticles } from '@/content/blog'
import { routeLabels, routesById } from '@/content/routes'
import { buildRouteMetadata } from '@/lib/metadata'
import { buildArticleItemListStructuredData } from '@/lib/structured-data'

const route = routesById.blog
const publishedArticles = getPublishedArticles()

const topicGroups = [
  {
    number: '01',
    title: 'Routine lawn care questions',
    description: 'Planning-oriented guides will keep general lawn-care information distinct from published service scope.',
  },
  {
    number: '02',
    title: 'Aeration and seeding decisions',
    description: 'Future guides will be researched and reviewed before they explain Iowa-specific considerations.',
  },
  {
    number: '03',
    title: 'Seasonal property cleanup',
    description: 'Spring and fall topics will separate informational checklists from property-specific service estimates.',
  },
  {
    number: '04',
    title: 'Year-round planning',
    description: 'The library will connect published guides without creating thin categories, tags or date archives.',
  },
] as const

const serviceLinks = [
  'service-lawn-mowing',
  'service-aeration-overseeding',
  'service-spring-cleanup',
  'service-fall-cleanup-leaf-removal',
] as const

export const metadata: Metadata = buildRouteMetadata(route)

export default function BlogPage() {
  const itemList = publishedArticles.length > 0
    ? [buildArticleItemListStructuredData(route, publishedArticles)]
    : []

  return (
    <InteriorPageShell routeId="blog" structuredDataNodes={itemList} className="bg-[#f6f2e8]">
      <section className="relative isolate overflow-hidden pt-10 pb-16 sm:pt-14 sm:pb-24">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-y-0 right-0 -z-10 hidden w-[44%] lg:block"
          style={{
            background:
              'radial-gradient(circle at 68% 36%, rgba(62,122,69,0.16), transparent 19rem), repeating-linear-gradient(112deg, transparent 0 3.9rem, rgba(62,122,69,0.055) 3.9rem 4rem)',
          }}
        />
        <p aria-hidden="true" className="pointer-events-none absolute -right-[0.03em] bottom-[-0.18em] -z-10 hidden font-display text-[clamp(10rem,25vw,28rem)] leading-none font-extrabold tracking-[-0.08em] text-[#3e7a45]/[0.045] uppercase xl:block">
          Notes
        </p>

        <div className="mx-auto grid w-full max-w-[112rem] gap-10 px-5 sm:px-8 lg:min-h-[33rem] lg:grid-cols-[minmax(0,1.2fr)_minmax(19rem,0.58fr)] lg:items-end lg:gap-20">
          <div className="services-index-reveal min-w-0 lg:pb-5">
            <p className="eyebrow text-[#3e7a45]"><Tr text="The field guide · source governed" /></p>
            <h1 className="display-lg mt-5 max-w-[13ch] text-balance">
              <Tr text={route.h1} />
            </h1>
          </div>

          <div className="services-index-reveal services-index-reveal-delay min-w-0 border-t border-[color:var(--rule)] pt-6 lg:mb-2 lg:pr-12">
            <p className="max-w-[38rem] text-[1.0625rem] leading-relaxed text-ink-soft sm:text-lg">
              <Tr text="A practical library for lawn care and seasonal property questions, built to publish only after source and editorial review." />
            </p>
            <p className="mt-5 max-w-[38rem] text-sm leading-relaxed text-ink-soft sm:text-base">
              <Tr text="General guidance stays separate from Mo's service capabilities, and every published guide keeps its sources visible." />
            </p>
            <div className="mt-7 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
              <a href="#published-guides" className="btn-solid w-full max-w-full text-center whitespace-normal sm:w-auto">
                <Tr text="Browse Published Guides" />
              </a>
              <Link href={routesById.contact.path} prefetch={false} className="btn-ghost w-fit text-ink">
                <Tr text="Contact Mo's" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section id="published-guides" aria-labelledby="published-guides-heading" className="scroll-mt-28 bg-evergreen py-16 text-paper sm:py-24">
        <div className="mx-auto w-full max-w-[112rem] px-5 sm:px-8">
          <header className="grid gap-6 border-t border-paper/18 pt-6 lg:grid-cols-[minmax(0,1fr)_minmax(20rem,0.58fr)] lg:items-end lg:gap-16">
            <div>
              <p className="eyebrow text-[#D5EE72]"><Tr text="Source-reviewed library" /></p>
              <h2 id="published-guides-heading" className="display-md mt-5 max-w-[13ch] text-paper">
                <Tr text="Published Guides" />
              </h2>
            </div>
            <p className="max-w-[36rem] text-[1.0625rem] leading-relaxed text-paper/65 lg:pb-2">
              <Tr text="Only guides that have completed research and editorial review appear in this collection." />
            </p>
          </header>

          {publishedArticles.length > 0 ? (
            <ol className="mt-12 grid border-b border-paper/18 lg:grid-cols-3">
              {publishedArticles.map((article, index) => (
                <li key={article.routeId} className="border-t border-paper/18 lg:border-r lg:last:border-r-0">
                  <Link href={article.path} prefetch={false} className="group flex h-full min-h-80 flex-col px-1 py-8 sm:px-6">
                    <span className="text-[0.68rem] font-bold tracking-[0.16em] text-[#D5EE72] tabular-nums"><Tr text="Guide" /> {String(index + 1).padStart(2, '0')}</span>
                    <h3 className="mt-8 font-display text-[clamp(1.55rem,1.1rem+1.1vw,2.35rem)] leading-[1.02] font-bold tracking-[-0.035em] text-paper uppercase"><Tr text={article.h1} /></h3>
                    <p className="mt-5 text-sm leading-relaxed text-paper/65 sm:text-base"><Tr text={article.excerpt} /></p>
                    <span className="mt-auto pt-8 text-sm font-bold tracking-[0.12em] text-[#D5EE72] uppercase"><Tr text="Read the guide" /> <span aria-hidden="true" className="inline-block transition-transform group-hover:translate-x-1">→</span></span>
                  </Link>
                </li>
              ))}
            </ol>
          ) : (
            <div className="mt-12 border-y border-paper/18 py-12 sm:py-16">
              <p className="max-w-2xl font-display text-[clamp(1.7rem,1.25rem+1.5vw,2.7rem)] leading-tight font-bold tracking-[-0.03em] text-paper uppercase">
                <Tr text="Published guides will appear here after source and editorial review." />
              </p>
              <p className="mt-5 max-w-xl text-sm leading-relaxed text-paper/60 sm:text-base">
                <Tr text="No planned article is displayed or linked before publication." />
              </p>
            </div>
          )}
        </div>
      </section>

      <section aria-labelledby="blog-topics-heading" className="bg-[#f6f2e8] py-16 sm:py-24">
        <div className="mx-auto w-full max-w-[112rem] px-5 sm:px-8">
          <header className="max-w-4xl border-t border-[color:var(--rule)] pt-6">
            <p className="eyebrow text-[#3e7a45]"><Tr text="Library scope" /></p>
            <h2 id="blog-topics-heading" className="display-md mt-5 max-w-[14ch]">
              <Tr text="Useful topics, without publishing advice before review." />
            </h2>
          </header>

          <ol className="mt-12 grid border-b border-[color:var(--rule)] md:grid-cols-2">
            {topicGroups.map((topic) => (
              <li key={topic.number} className="grid grid-cols-[3rem_minmax(0,1fr)] gap-4 border-t border-[color:var(--rule)] px-1 py-8 sm:px-6 md:odd:border-r">
                <span className="text-[0.68rem] font-bold tracking-[0.16em] text-[#3e7a45] tabular-nums">{topic.number}</span>
                <div>
                  <h3 className="font-display text-2xl font-bold tracking-[-0.03em] uppercase"><Tr text={topic.title} /></h3>
                  <p className="mt-4 max-w-xl text-sm leading-relaxed text-ink-soft sm:text-base"><Tr text={topic.description} /></p>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section aria-labelledby="editorial-method-heading" className="bg-paper py-16 sm:py-24">
        <div className="mx-auto grid w-full max-w-[112rem] gap-10 px-5 sm:px-8 lg:grid-cols-[0.72fr_1.28fr] lg:gap-20">
          <div className="min-w-0">
            <p className="eyebrow text-[#3e7a45]"><Tr text="Editorial method" /></p>
            <h2 id="editorial-method-heading" className="display-md mt-5 max-w-[12ch]">
              <Tr text="Evidence before publication." />
            </h2>
            <p className="mt-6 max-w-xl text-[1.0625rem] leading-relaxed text-ink-soft">
              <Tr text="The publishing workflow records sources, maps claims to evidence and keeps unverified author, date and image details out of public pages." />
            </p>
          </div>

          <ol className="border-b border-[color:var(--rule)]">
            {[
              ['Research', 'Current authoritative sources are reviewed for the article and its jurisdiction.'],
              ['Trace', 'Factual claims are mapped to source records before editorial approval.'],
              ['Separate', "Informational guidance never expands Mo's published service capabilities."],
              ['Publish', 'One article status controls the hub, route, sitemap and related-guide surfaces.'],
            ].map(([title, description], index) => (
              <li key={title} className="grid grid-cols-[3rem_minmax(0,1fr)] gap-4 border-t border-[color:var(--rule)] px-1 py-7 sm:px-5">
                <span className="text-[0.68rem] font-bold tracking-[0.16em] text-[#3e7a45] tabular-nums">{String(index + 1).padStart(2, '0')}</span>
                <div>
                  <h3 className="font-display text-xl font-bold tracking-[-0.025em] uppercase"><Tr text={title} /></h3>
                  <p className="mt-3 text-sm leading-relaxed text-ink-soft sm:text-base"><Tr text={description} /></p>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section aria-labelledby="blog-services-heading" className="bg-[#f5faf5] py-16 sm:py-24">
        <div className="mx-auto w-full max-w-[112rem] px-5 sm:px-8">
          <header className="grid gap-6 border-t border-[#3e7a45]/20 pt-6 lg:grid-cols-[minmax(0,1fr)_minmax(20rem,0.58fr)] lg:items-end lg:gap-16">
            <div>
              <p className="eyebrow text-[#3e7a45]"><Tr text="Published service paths" /></p>
              <h2 id="blog-services-heading" className="display-md mt-5 max-w-[13ch] text-[#1d2b1f]"><Tr text="Looking for service information?" /></h2>
            </div>
            <p className="max-w-[36rem] text-[1.0625rem] leading-relaxed text-ink-soft lg:pb-2"><Tr text="Use the canonical service pages for approved scope, then Contact for a property-specific estimate." /></p>
          </header>

          <ul className="mt-10 grid border-b border-[#3e7a45]/20 sm:grid-cols-2 xl:grid-cols-4">
            {serviceLinks.map((routeId) => (
              <li key={routeId} className="border-t border-[#3e7a45]/20 xl:not-last:border-r">
                <Link href={routesById[routeId].path} prefetch={false} className="group flex min-h-44 flex-col justify-between px-1 py-7 sm:px-5">
                  <span className="font-display text-2xl font-bold tracking-[-0.03em] text-[#1d2b1f] uppercase"><Tr text={routeLabels[routeId]} /></span>
                  <span aria-hidden="true" className="pt-7 text-lg text-[#3e7a45] transition-transform group-hover:translate-x-1">→</span>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section aria-labelledby="blog-cta-heading" className="bg-evergreen py-16 text-paper sm:py-24">
        <div className="mx-auto grid w-full max-w-[112rem] gap-8 px-5 sm:px-8 lg:grid-cols-[1fr_auto] lg:items-end lg:gap-16">
          <div>
            <p className="eyebrow text-[#D5EE72]"><Tr text="Property-specific next step" /></p>
            <h2 id="blog-cta-heading" className="display-md mt-5 max-w-[13ch] text-paper"><Tr text="Tell Mo's what the property needs." /></h2>
            <p className="mt-5 max-w-2xl text-base leading-relaxed text-paper/65 sm:text-lg"><Tr text="An estimate conversation can address the actual property without turning general guidance into a promise." /></p>
          </div>
          <Link href={routesById.contact.path} prefetch={false} className="btn-solid w-full max-w-full text-center whitespace-normal sm:w-fit"><Tr text="Request a Free Estimate" /></Link>
        </div>
      </section>
    </InteriorPageShell>
  )
}
