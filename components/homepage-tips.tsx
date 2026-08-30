import Link from 'next/link'
import { homepageTipRoutes } from '@/content/homepage'
import { routesById } from '@/content/routes'
import { Tr } from './tr'

export function HomepageTips() {
  return (
    <section
      data-home-section="latest-tips"
      aria-labelledby="tips-heading"
      className="bg-paper py-20 sm:py-28"
    >
      <div className="mx-auto w-full max-w-[112rem] px-5 sm:px-8">
        <header className="flex flex-col gap-6 border-t border-[color:var(--rule)] pt-7 lg:flex-row lg:items-end lg:justify-between">
          <div>
            <p className="eyebrow text-ink-soft"><Tr text="Latest Lawn Care Tips" /></p>
            <h2 id="tips-heading" className="display-md mt-5 max-w-[14ch]">
              <Tr text="Plan the next season with practical guides." />
            </h2>
          </div>
          <Link href={routesById.blog.path} prefetch={false} className="btn-ghost group w-fit text-ink">
            <Tr text="View All Lawn Care Tips" />
            <span aria-hidden="true" className="transition-transform group-hover:translate-x-1">→</span>
          </Link>
        </header>

        <ol className="mt-12 grid border-b border-[color:var(--rule)] lg:grid-cols-3">
          {homepageTipRoutes.map((tip, index) => (
            <li key={tip.id} className="border-t border-[color:var(--rule)] lg:border-r lg:last:border-r-0">
              <Link href={tip.href} prefetch={false} className="group flex h-full min-h-72 flex-col p-6 sm:p-8">
                <span className="text-[0.68rem] font-bold tracking-[0.16em] text-ink-soft tabular-nums">
                  GUIDE {String(index + 1).padStart(2, '0')}
                </span>
                <h3 className="mt-8 text-[clamp(1.45rem,1.1rem+1vw,2.2rem)] leading-[1.02] font-bold tracking-[-0.035em] uppercase">
                  <Tr text={tip.title} />
                </h3>
                <p className="mt-5 text-[0.95rem] leading-relaxed text-ink-soft">
                  <Tr text={tip.description} />
                </p>
                <span className="mt-auto pt-8 text-[0.75rem] font-bold tracking-[0.14em] text-accent uppercase">
                  <Tr text="Read the guide" /> <span aria-hidden="true" className="inline-block transition-transform group-hover:translate-x-1">→</span>
                </span>
              </Link>
            </li>
          ))}
        </ol>
      </div>
    </section>
  )
}
