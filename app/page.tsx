import { BeforeAfterSlider } from '@/components/before-after-slider'
import { CrossSection } from '@/components/cross-section'
import { EstimateSection } from '@/components/estimate-section'
import { Hero } from '@/components/hero'
import { ProblemSelector } from '@/components/problem-selector'
import { PropertyHotspots } from '@/components/property-hotspots'
import { SeasonDial } from '@/components/season-dial'
import { SiteHeader } from '@/components/site-header'
import { nav, services, site } from '@/lib/site'

const structuredData = {
  '@context': 'https://schema.org',
  '@type': 'LocalBusiness',
  name: site.companyName,
  description:
    'Year-round lawn care, property maintenance and snow removal in Des Moines, Iowa.',
  address: {
    '@type': 'PostalAddress',
    addressLocality: 'Des Moines',
    addressRegion: 'IA',
    addressCountry: 'US',
  },
  areaServed: { '@type': 'City', name: 'Des Moines' },
  makesOffer: services.map((name) => ({
    '@type': 'Offer',
    itemOffered: { '@type': 'Service', name },
  })),
}

export default function Page() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
      <SiteHeader />

      <main>
        <Hero />

        <SeasonDial />

        {/* 3 — YOUR YARD HAS PROBLEMS */}
        <section
          id="problems"
          aria-labelledby="problems-heading"
          className="bg-evergreen py-20 sm:py-28"
          style={{ '--accent': '#7FAE68', '--btn-fg': '#102019' } as React.CSSProperties}
        >
          <div className="mx-auto w-full max-w-[112rem] px-5 sm:px-8">
            <p className="eyebrow text-paper/45">Start with the problem.</p>
            <h2 id="problems-heading" className="display-md mt-5 max-w-[16ch] text-paper">
              What&apos;s going on
              <br />
              <span style={{ color: 'var(--accent)' }}>out there?</span>
            </h2>
            <p className="mt-6 max-w-prose text-[1.0625rem] leading-relaxed text-paper/65">
              Most people don&apos;t call looking for a service name. They call because something in
              the yard got away from them. Pick the one that sounds like your property.
            </p>
            <ProblemSelector />
          </div>
        </section>

        {/* 4 — INTERACTIVE PROPERTY */}
        <section id="property" aria-labelledby="property-heading" className="bg-paper py-20 sm:py-28">
          <div className="mx-auto w-full max-w-[112rem] px-5 sm:px-8">
            <div className="flex flex-col gap-4 lg:flex-row lg:items-end lg:justify-between">
              <h2
                id="property-heading"
                className="max-w-[18ch] text-[clamp(1.75rem,1.05rem+3vw,3.5rem)] uppercase"
              >
                One property.
                <br />
                <span style={{ color: 'var(--accent)' }}>A lot to take care of.</span>
              </h2>
              <p className="max-w-prose text-[1.0625rem] leading-relaxed text-ink-soft lg:pb-3 lg:text-right">
                Explore the property to see where Mo&apos;s can help.
              </p>
            </div>
            <PropertyHotspots />
          </div>
        </section>

        <CrossSection />

        {/* 6 — THE MO'S EFFECT */}
        <section
          id="work"
          aria-labelledby="work-heading"
          className="bg-evergreen pt-20 pb-2 sm:pt-28 sm:pb-2"
          style={{ '--accent': '#7FAE68', '--btn-fg': '#102019' } as React.CSSProperties}
        >
          <div className="mx-auto w-full max-w-[112rem] px-5 sm:px-8">
            <h2 id="work-heading" className="display-md text-paper">
              The Mo&apos;s effect.
            </h2>
            <p className="eyebrow mt-0" style={{ color: 'var(--accent)' }}>
              Drag to see the difference
            </p>
            <BeforeAfterSlider />
          </div>
        </section>

        {/* 7 — LOCAL TRUST */}
        <section aria-labelledby="local-heading" className="bg-paper-dim py-20 sm:py-28">
          <div className="mx-auto w-full max-w-[112rem] px-5 sm:px-8">
            <h2 id="local-heading" className="display-md max-w-[20ch]">
              Built for Des Moines.
              <br />
              <span style={{ color: 'var(--accent)' }}>Ready for every season.</span>
            </h2>

            <div className="rule mt-12 grid gap-10 border-[color:var(--rule)] pt-10 lg:grid-cols-3">
              <div>
                <p className="eyebrow text-ink-soft">The company</p>
                <p className="mt-3 font-display text-xl leading-tight font-bold tracking-[-0.02em] uppercase">
                  {site.companyName}
                </p>
                <p className="mt-2 text-[1.0625rem] text-ink-soft">{site.location}</p>
              </div>
              <div>
                <p className="eyebrow text-ink-soft">Service area</p>
                <p className="mt-3 text-[1.0625rem] leading-relaxed text-ink">{site.serviceArea}</p>
              </div>
              <div>
                <p className="eyebrow text-ink-soft">Reviews</p>
                <p className="mt-3 text-[1.0625rem] leading-relaxed text-ink-soft">
                  Customer reviews will be published here once they&apos;re collected from Google.
                </p>
              </div>
            </div>
          </div>
        </section>

        <EstimateSection />
      </main>

      {/* FOOTER */}
      <footer className="bg-evergreen py-14">
        <div className="mx-auto w-full max-w-[112rem] px-5 sm:px-8">
          <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
            <div>
              <p className="font-display text-3xl leading-none font-extrabold tracking-[-0.04em] text-paper uppercase">
                Mo&apos;s
              </p>
              <p className="mt-2 text-[0.75rem] font-semibold tracking-[0.2em] text-paper/50 uppercase">
                {site.wordmarkLine}
              </p>
            </div>

            <div>
              <p className="eyebrow text-paper/40">Company</p>
              <p className="mt-3 text-[0.9375rem] leading-relaxed text-paper/70">
                {site.companyName}
                <br />
                {site.location}
              </p>
            </div>

            <nav aria-label="Footer">
              <p className="eyebrow text-paper/40">Sections</p>
              <ul className="mt-3 space-y-1.5">
                {nav.map((item) => (
                  <li key={item.href}>
                    <a
                      href={item.href}
                      className="text-[0.9375rem] text-paper/70 transition-colors duration-200 hover:text-paper"
                    >
                      {item.label}
                    </a>
                  </li>
                ))}
                <li>
                  <a
                    href="#estimate"
                    className="text-[0.9375rem] text-paper/70 transition-colors duration-200 hover:text-paper"
                  >
                    Get Estimate
                  </a>
                </li>
              </ul>
            </nav>

            <div>
              <p className="eyebrow text-paper/40">Contact</p>
              <p className="mt-3 text-[0.9375rem] leading-relaxed text-paper/70">
                {site.phone || 'Phone — coming soon'}
                <br />
                {site.email || 'Email — coming soon'}
              </p>
            </div>
          </div>

          <p className="rule mt-12 border-paper/15 pt-6 text-[0.8125rem] tracking-[0.14em] text-paper/35 uppercase">
            © {new Date().getFullYear()} {site.companyName}
          </p>
        </div>
      </footer>
    </>
  )
}
