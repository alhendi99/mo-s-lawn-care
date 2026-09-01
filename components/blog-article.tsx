import Image from 'next/image'
import Link from 'next/link'
import { getPublishedRelatedArticles } from '@/content/blog'
import { routeLabels, routesById } from '@/content/routes'
import type { BlogArticleInline, PublishedBlogArticle } from '@/content/types'
import type { StructuredDataNode } from '@/lib/structured-data'
import { InteriorPageShell } from './interior-page-shell'
import { LocalizedNav, Tr } from './tr'

function ArticleInlineContent({
  content,
  sourceNumbers,
}: {
  content: readonly BlogArticleInline[]
  sourceNumbers: ReadonlyMap<string, number>
}) {
  return content.map((inline, index) => {
    if (inline.sourceId) {
      const number = sourceNumbers.get(inline.sourceId)
      return (
        <span key={`${inline.text}-${index}`}>
          <Tr text={inline.text} />{' '}
          <a
            href={`#source-${inline.sourceId}`}
            className="font-semibold text-[#2f6c3a] underline decoration-[#2f6c3a]/35 underline-offset-4 hover:decoration-current"
          >
            [{number ?? '?'}]
          </a>
        </span>
      )
    }

    if (inline.href) {
      const external = /^https?:\/\//.test(inline.href)
      return (
        <a
          key={`${inline.text}-${index}`}
          href={inline.href}
          className="font-semibold text-[#2f6c3a] underline decoration-[#2f6c3a]/35 underline-offset-4 hover:decoration-current"
          {...(external ? { target: '_blank', rel: 'noreferrer' } : {})}
        >
          <Tr text={inline.text} />
        </a>
      )
    }

    return <Tr key={`${inline.text}-${index}`} text={inline.text} />
  })
}

export function BlogArticle({
  article,
  structuredDataNode,
}: {
  article: PublishedBlogArticle
  structuredDataNode: StructuredDataNode
}) {
  const sourceNumbers = new Map(article.sources.map(({ id }, index) => [id, index + 1]))
  const headings = article.content.filter((block) => block.type === 'heading')
  const relatedArticles = getPublishedRelatedArticles(article)
  const relatedServices = article.relatedServicePaths.flatMap((path) => {
    const route = Object.values(routesById).find((candidate) => candidate.path === path)
    return route?.pageType === 'service' ? [route] : []
  })

  return (
    <InteriorPageShell
      routeId={article.routeId}
      className="bg-[#f6f2e8]"
      structuredDataNodes={[structuredDataNode]}
    >
      <article>
        <header className="border-b border-[color:var(--rule)] pt-10 pb-14 sm:pt-14 sm:pb-20">
          <div className="mx-auto grid w-full max-w-[112rem] gap-10 px-5 sm:px-8 lg:grid-cols-[minmax(0,1.25fr)_minmax(18rem,0.55fr)] lg:items-end lg:gap-20">
            <div className="services-index-reveal min-w-0">
              <p className="eyebrow text-[#3e7a45]"><Tr text="Lawn care guide" /></p>
              <h1 className="display-lg mt-5 max-w-[15ch] text-balance">
                <Tr text={article.h1} />
              </h1>
            </div>
            <div className="services-index-reveal services-index-reveal-delay border-t border-[color:var(--rule)] pt-6">
              <p className="text-[1.0625rem] leading-relaxed text-ink-soft sm:text-lg">
                <Tr text={article.excerpt} />
              </p>
              {article.author || article.publishedOn || article.modifiedOn ? (
                <dl className="mt-7 grid gap-3 text-sm text-ink-soft">
                  {article.author ? (
                    <div><dt className="inline font-semibold text-ink"><Tr text="Author" />: </dt><dd className="inline">{article.author.name}</dd></div>
                  ) : null}
                  {article.publishedOn ? (
                    <div><dt className="inline font-semibold text-ink"><Tr text="Published" />: </dt><dd className="inline">{article.publishedOn}</dd></div>
                  ) : null}
                  {article.modifiedOn ? (
                    <div><dt className="inline font-semibold text-ink"><Tr text="Updated" />: </dt><dd className="inline">{article.modifiedOn}</dd></div>
                  ) : null}
                </dl>
              ) : null}
            </div>
          </div>
        </header>

        {article.image ? (
          <figure className="mx-auto w-full max-w-[112rem] px-5 pt-10 sm:px-8 sm:pt-14">
            <Image
              src={article.image.src}
              alt={article.image.alt}
              width={article.image.width}
              height={article.image.height}
              className="h-auto max-h-[42rem] w-full object-cover"
              sizes="(max-width: 640px) calc(100vw - 2.5rem), calc(100vw - 4rem)"
              priority
            />
          </figure>
        ) : null}

        <div className="mx-auto grid w-full max-w-[112rem] gap-12 px-5 py-14 sm:px-8 sm:py-20 lg:grid-cols-[minmax(13rem,0.34fr)_minmax(0,0.9fr)_minmax(10rem,0.22fr)] lg:gap-14">
          <aside className="lg:sticky lg:top-32 lg:self-start">
            {article.showTableOfContents && headings.length > 1 ? (
              <div className="border-t border-[color:var(--rule)] pt-5">
                <LocalizedNav label="Contents">
                  <p className="eyebrow text-ink-soft"><Tr text="Contents" /></p>
                  <ol className="mt-4 space-y-1">
                    {headings.map((heading) => (
                      <li key={heading.id} className={heading.level === 3 ? 'pl-4' : ''}>
                        <a href={`#${heading.id}`} className="inline-flex min-h-11 items-center text-sm leading-snug text-ink-soft underline decoration-transparent underline-offset-4 hover:text-ink hover:decoration-current">
                          <Tr text={heading.text} />
                        </a>
                      </li>
                    ))}
                  </ol>
                </LocalizedNav>
              </div>
            ) : null}
          </aside>

          <div className="min-w-0 text-[1.0625rem] leading-[1.78] text-[#29342b] sm:text-lg">
            {article.content.map((block, index) => {
              if (block.type === 'heading') {
                const Heading = block.level === 2 ? 'h2' : 'h3'
                return (
                  <Heading
                    key={block.id}
                    id={block.id}
                    className={block.level === 2
                      ? 'scroll-mt-32 pt-10 font-display text-[clamp(2rem,1.3rem+2.5vw,3.6rem)] leading-[1.02] font-bold tracking-[-0.04em] text-ink uppercase first:pt-0'
                      : 'scroll-mt-32 pt-8 font-display text-[clamp(1.4rem,1.1rem+1vw,2rem)] leading-tight font-bold tracking-[-0.025em] text-ink uppercase'}
                  >
                    <Tr text={block.text} />
                  </Heading>
                )
              }
              if (block.type === 'paragraph') {
                return (
                  <p key={`paragraph-${index}`} className="mt-6 first:mt-0">
                    <ArticleInlineContent content={block.content} sourceNumbers={sourceNumbers} />
                  </p>
                )
              }
              if (block.type === 'list') {
                const List = block.style === 'ordered' ? 'ol' : 'ul'
                return (
                  <List
                    key={`list-${index}`}
                    className={`mt-6 space-y-3 pl-6 ${block.style === 'ordered' ? 'list-decimal' : 'list-disc'}`}
                  >
                    {block.items.map((item) => (
                      <li key={item} className={block.style === 'checklist' ? 'marker:text-[#3e7a45]' : ''}>
                        <Tr text={item} />
                      </li>
                    ))}
                  </List>
                )
              }
              return (
                <div key={`table-${index}`} className="mt-8 max-w-full overflow-x-auto border-y border-[color:var(--rule)] py-2">
                  <table className="w-full min-w-[34rem] border-collapse text-left text-sm leading-relaxed">
                    {block.caption ? <caption className="py-4 text-left font-semibold text-ink"><Tr text={block.caption} /></caption> : null}
                    <thead>
                      <tr>{block.headers.map((header) => <th key={header} scope="col" className="border-b border-[color:var(--rule)] px-3 py-4 font-semibold text-ink"><Tr text={header} /></th>)}</tr>
                    </thead>
                    <tbody>
                      {block.rows.map((row, rowIndex) => (
                        <tr key={rowIndex} className="border-b border-[color:var(--rule)] last:border-b-0">
                          {row.map((cell, cellIndex) => <td key={`${rowIndex}-${cellIndex}`} className="px-3 py-4 align-top"><Tr text={cell} /></td>)}
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              )
            })}
          </div>

          <div aria-hidden="true" className="hidden border-l border-[color:var(--rule)] lg:block" />
        </div>

        <section aria-labelledby="article-sources-heading" className="bg-paper py-14 sm:py-20">
          <div className="mx-auto w-full max-w-5xl px-5 sm:px-8">
            <p className="eyebrow text-[#3e7a45]"><Tr text="Research record" /></p>
            <h2 id="article-sources-heading" className="display-md mt-5"><Tr text="Sources" /></h2>
            <ol className="mt-9 border-b border-[color:var(--rule)]">
              {article.sources.map((source, index) => (
                <li id={`source-${source.id}`} key={source.id} className="scroll-mt-32 border-t border-[color:var(--rule)] py-6">
                  <p className="text-sm font-semibold text-ink">[{index + 1}] {source.publisher}</p>
                  <a href={source.url} target="_blank" rel="noreferrer" className="mt-2 inline-block text-base font-semibold text-[#2f6c3a] underline decoration-[#2f6c3a]/35 underline-offset-4 hover:decoration-current">
                    {source.title}
                  </a>
                  <p className="mt-2 text-sm text-ink-soft"><Tr text="Reviewed" /> {source.reviewedOn}{source.jurisdiction ? ` · ${source.jurisdiction}` : ''}{source.scope ? ` · ${source.scope}` : ''}</p>
                </li>
              ))}
            </ol>
          </div>
        </section>

        {(relatedServices.length > 0 || relatedArticles.length > 0) ? (
          <section aria-labelledby="related-reading-heading" className="bg-[#f6f2e8] py-14 sm:py-20">
            <div className="mx-auto w-full max-w-5xl px-5 sm:px-8">
              <p className="eyebrow text-ink-soft"><Tr text="Continue with canonical paths" /></p>
              <h2 id="related-reading-heading" className="display-md mt-5"><Tr text="Related Reading" /></h2>
              <ul className="mt-9 grid border-b border-[color:var(--rule)] sm:grid-cols-2">
                {relatedServices.map((service) => (
                  <li key={service.id} className="border-t border-[color:var(--rule)] sm:odd:border-r">
                    <Link href={service.path} prefetch={false} className="group flex min-h-28 items-center justify-between gap-5 px-1 py-5 sm:px-5">
                      <span className="font-display text-xl font-bold tracking-[-0.025em] uppercase"><Tr text={routeLabels[service.id]} /></span>
                      <span aria-hidden="true" className="text-[#3e7a45] transition-transform group-hover:translate-x-1">→</span>
                    </Link>
                  </li>
                ))}
                {relatedArticles.map((related) => (
                  <li key={related.routeId} className="border-t border-[color:var(--rule)] sm:odd:border-r">
                    <Link href={related.path} prefetch={false} className="group flex min-h-28 items-center justify-between gap-5 px-1 py-5 sm:px-5">
                      <span className="font-display text-xl font-bold tracking-[-0.025em] uppercase"><Tr text={related.h1} /></span>
                      <span aria-hidden="true" className="text-[#3e7a45] transition-transform group-hover:translate-x-1">→</span>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </section>
        ) : null}

        <section aria-labelledby="article-cta-heading" className="bg-evergreen py-14 text-paper sm:py-20">
          <div className="mx-auto flex w-full max-w-5xl flex-col gap-8 px-5 sm:px-8 lg:flex-row lg:items-end lg:justify-between">
            <div className="min-w-0">
              <p className="eyebrow text-[#D5EE72]"><Tr text="Property-specific questions" /></p>
              <h2 id="article-cta-heading" className="display-md mt-5 max-w-[13ch] text-paper"><Tr text="Discuss the property with Mo's." /></h2>
            </div>
            <Link href={routesById.contact.path} prefetch={false} className="btn-solid w-full max-w-full text-center whitespace-normal sm:w-fit"><Tr text="Request a Free Estimate" /></Link>
          </div>
        </section>
      </article>
    </InteriorPageShell>
  )
}
