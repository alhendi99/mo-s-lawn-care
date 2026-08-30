import Link from 'next/link'
import { routesById } from '@/content/routes'
import { Tr } from './tr'

export function HomepageCommercial() {
  return (
    <section
      data-home-section="residential-commercial"
      aria-labelledby="property-types-heading"
      className="relative overflow-hidden bg-evergreen py-20 text-paper sm:py-28"
    >
      <div aria-hidden="true" className="absolute inset-y-0 right-0 w-2/5 bg-[radial-gradient(circle_at_center,rgba(213,238,114,0.14),transparent_68%)]" />
      <div className="relative mx-auto grid w-full max-w-[112rem] gap-10 px-5 sm:px-8 lg:grid-cols-[minmax(0,1.25fr)_minmax(20rem,0.55fr)] lg:items-end lg:gap-20">
        <div>
          <p className="eyebrow text-[#D5EE72]"><Tr text="Residential + Commercial" /></p>
          <h2 id="property-types-heading" className="display-md mt-5 max-w-[14ch] text-paper">
            <Tr text="Property care for homes and businesses." />
          </h2>
        </div>
        <div className="border-t border-paper/20 pt-6 lg:border-t-0 lg:border-l lg:pt-0 lg:pl-8">
          <p className="text-[1.0625rem] leading-relaxed text-paper/72">
            <Tr text="Mo's provides lawn care, landscaping, seasonal cleanups and snow removal for residential and commercial properties across the Des Moines metro." />
          </p>
          <Link
            href={routesById['commercial-property-services'].path}
            prefetch={false}
            className="btn-solid group mt-7 w-fit bg-[#D5EE72] text-evergreen"
          >
            <Tr text="Commercial Property Services" />
            <span aria-hidden="true" className="transition-transform group-hover:translate-x-1">→</span>
          </Link>
        </div>
      </div>
    </section>
  )
}
