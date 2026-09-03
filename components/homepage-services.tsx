import Link from 'next/link'
import { homepageServiceRoutes } from '@/content/homepage'
import { routesById } from '@/content/routes'
import { Tr } from './tr'

export function HomepageServices() {
  return (
    <section
      id="services"
      data-home-section="services"
      aria-labelledby="services-heading"
      className="bg-paper py-20 sm:py-28"
    >
      <div className="mx-auto w-full max-w-[112rem] px-5 sm:px-8">
        <header className="grid gap-7 border-t border-[color:var(--rule)] pt-6 lg:grid-cols-[minmax(0,1fr)_minmax(19rem,0.48fr)] lg:items-end lg:gap-16">
          <div>
            <p className="eyebrow text-ink-soft"><Tr text="Lawn care in Des Moines" /></p>
            <h2 id="services-heading" className="display-landmark mt-5 max-w-[15ch]">
              <Tr text="Services for every part of the property." />
            </h2>
          </div>
          <div className="lg:pb-2">
            <p className="max-w-md text-[1.0625rem] leading-relaxed text-ink-soft">
              <Tr text="Explore mowing, lawn care, landscaping, seasonal cleanups, grading and snow removal for Des Moines-area properties." />
            </p>
            <Link
              href={routesById.services.path}
              prefetch={false}
              className="btn-ghost group mt-5 w-fit text-ink"
            >
              <Tr text="View all services" />
              <span aria-hidden="true" className="transition-transform group-hover:translate-x-1">→</span>
            </Link>
          </div>
        </header>

        <ol className="mt-12 grid border-b border-[color:var(--rule)] md:grid-cols-2">
          {homepageServiceRoutes.map((service, index) => (
            <li key={service.id} className="border-t border-[color:var(--rule)] md:odd:border-r">
              <Link
                href={service.href}
                prefetch={false}
                className="group flex min-h-24 items-center gap-5 px-1 py-5 sm:min-h-28 sm:gap-7 sm:px-5"
              >
                <span className="text-[0.68rem] font-bold tracking-[0.16em] text-ink-soft tabular-nums">
                  {String(index + 1).padStart(2, '0')}
                </span>
                <span className="min-w-0 flex-1 font-display text-[clamp(1.2rem,1rem+0.8vw,2rem)] leading-[1.05] font-bold tracking-[-0.025em] text-ink uppercase transition-transform duration-200 group-hover:translate-x-1.5">
                  <Tr text={service.label} />
                </span>
                <span aria-hidden="true" className="text-xl text-accent transition-transform duration-200 group-hover:translate-x-1">↗</span>
              </Link>
            </li>
          ))}
        </ol>
      </div>
    </section>
  )
}
