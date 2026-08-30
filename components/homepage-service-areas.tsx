import Link from 'next/link'
import { homepageServiceAreaRoutes } from '@/content/homepage'
import { routesById } from '@/content/routes'
import { Tr } from './tr'

export function HomepageServiceAreas() {
  return (
    <section
      data-home-section="service-areas"
      aria-labelledby="service-areas-heading"
      className="bg-paper py-20 sm:py-28"
    >
      <div className="mx-auto w-full max-w-[112rem] px-5 sm:px-8">
        <div className="grid gap-10 border-t border-[color:var(--rule)] pt-7 lg:grid-cols-[minmax(0,0.72fr)_minmax(0,1.28fr)] lg:gap-20">
          <div>
            <p className="eyebrow text-ink-soft"><Tr text="Des Moines metro" /></p>
            <h2 id="service-areas-heading" className="display-md mt-5 max-w-[12ch]">
              <Tr text="Local property care, linked by area." />
            </h2>
            <p className="mt-6 max-w-md text-[1.0625rem] leading-relaxed text-ink-soft">
              <Tr text="Serving Des Moines, Ankeny, Waukee, Norwalk and Altoona" />
            </p>
            <Link href={routesById['service-areas'].path} prefetch={false} className="btn-ghost group mt-6 w-fit text-ink">
              <Tr text="View All Service Areas" />
              <span aria-hidden="true" className="transition-transform group-hover:translate-x-1">→</span>
            </Link>
          </div>

          <ol className="border-b border-[color:var(--rule)]">
            {homepageServiceAreaRoutes.map((area, index) => (
              <li key={area.id} className="border-t border-[color:var(--rule)]">
                <Link
                  href={area.href}
                  prefetch={false}
                  className="group flex min-h-20 items-center gap-5 py-4 sm:min-h-24"
                >
                  <span className="w-8 text-[0.68rem] font-bold tracking-[0.16em] text-ink-soft tabular-nums">
                    {String(index + 1).padStart(2, '0')}
                  </span>
                  <span className="flex-1 font-display text-[clamp(1.45rem,1rem+1.4vw,2.8rem)] font-bold tracking-[-0.035em] uppercase transition-transform duration-200 group-hover:translate-x-2">
                    <Tr text={area.label} />
                  </span>
                  <span aria-hidden="true" className="text-xl text-accent">↗</span>
                </Link>
              </li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  )
}
