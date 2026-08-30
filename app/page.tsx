import { BeforeAfterSlider } from '@/components/before-after-slider'
import { CrossSection } from '@/components/cross-section'
import { EstimateSection } from '@/components/estimate-section'
import { Gallery } from '@/components/gallery'
import { Hero } from '@/components/hero'
import { ProblemSelector } from '@/components/problem-selector'
import { PropertyHotspots } from '@/components/property-hotspots'
import { SeasonDial } from '@/components/season-dial'
import { SiteHeader } from '@/components/site-header'
import { StructuredData } from '@/components/structured-data'
import { Testimonials } from '@/components/testimonials'
import { LocalizedNav, Tr } from '@/components/tr'
import { routesById } from '@/content/routes'
import { nav, site } from '@/lib/site'
import { buildPageStructuredData } from '@/lib/structured-data'

const homepageStructuredData = buildPageStructuredData(routesById.home, routesById.home)

export default function Page() {
  return (
    <>
      <StructuredData data={homepageStructuredData} />
      <SiteHeader />

      <main className="">
        <Hero />

        {/* <SeasonDial /> */}
        <CrossSection />
      <section id="property" aria-labelledby="property-heading" className="bg-paper py-20 sm:py-28">
          <div className="mx-auto w-full pb-0 max-w-[112rem] px-5 sm:px-8 ">
            <div className="flex flex-col gap-4 lg:flex-row lg:items-end lg:justify-between">
              <h2
                id="property-heading"
                className="max-w-[18ch] text-[clamp(1.75rem,1.05rem+3vw,3.5rem)] uppercase"
              >
                <Tr text="One property." />
                <br />
                <span style={{ color: 'var(--accent)' }}><Tr text="A lot to take care of." /></span>
              </h2>
              <p className="max-w-prose text-[1.0625rem] leading-relaxed text-ink-soft lg:pb-3 lg:text-right">
                <Tr text="Explore the property to see where Mo's can help." />
              </p>
            </div>
            <PropertyHotspots />
          </div>
        </section>


        {/* 4 — INTERACTIVE PROPERTY */}
  


        {/* 6 — THE MO'S EFFECT */}
        <section
          id="work"
          aria-labelledby="work-heading"
          className="bg-evergreen pt-5 pb-2 sm:pt-5 sm:pb-2"
          style={{ '--accent': '#7FAE68', '--btn-fg': '#102019' } as React.CSSProperties}
        >
          <div className="mx-auto w-full max-w-[112rem] px-5 sm:px-8">
            <h2 id="work-heading" className="display-md text-paper">
              <Tr text="The Mo's effect." />
            </h2>
            <p className="eyebrow mt-0" style={{ color: 'var(--accent)' }}>
              <Tr text="Drag to see the difference" />
            </p>
            <br />
            <BeforeAfterSlider />
          </div>
        </section>


        <Gallery />
        <section
          id="problems"
          aria-labelledby="problems-heading"
          className="bg-evergreen py-20 sm:py-28"
          style={{ '--accent': '#7FAE68', '--btn-fg': '#102019' } as React.CSSProperties}
        >
          <Testimonials />
          <div className="mx-auto w-full max-w-[112rem] px-5 sm:px-8">
<br />
            <h2 id="problems-heading" className="display-md mt-5 max-w-[16ch] text-paper">
              <Tr text="What's going on" />
              <br />
              <span style={{ color: 'var(--accent)' }}><Tr text="out there?" /></span>
            </h2>
            <p className="mt-6 max-w-prose text-[1.0625rem] leading-relaxed text-paper/65">
              <Tr text="Most people don't call looking for a service name. They call because something in the yard got away from them. Pick the one that sounds like your property." />
            </p>
            <ProblemSelector />
          </div>
        </section>
        <EstimateSection />
      </main>

      {/* FOOTER */}
      <footer className="bg-evergreen pt-14 pb-28 md:pb-14">
        <div className="mx-auto w-full max-w-[112rem] px-5 sm:px-8">
          <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
            <div>
              <p className="eyebrow text-paper/65">
                <Tr text="Service Area:" />
              </p>
              <p className="mt-2 text-[0.75rem] font-semibold tracking-[0.16em] text-paper/70 uppercase">
                Des Moines, Ankeny, Waukee, Norwalk, Altoona
              </p>
              <p className="mt-4 eyebrow text-paper/65">
                <Tr text="Working Hours:" />
              </p>
              <p className="mt-2 font-semibold tracking-[0.16em] text-paper/70 uppercase">
                <Tr text="Saturday–Thursday, 9:00–11:00 PM" />
              </p>
            </div>

            <div>
              <p className="eyebrow text-paper/65"><Tr text="Company" /></p>
              <p className="mt-3 text-[0.9375rem] leading-relaxed text-paper/70">
                {site.companyName}
                <br />
                {site.location}
              </p>
            </div>

            <LocalizedNav label="Footer">
              <p className="eyebrow text-paper/65"><Tr text="Sections" /></p>
              <ul className="mt-3 space-y-1.5">
                {nav.map((item) => (
                  <li key={item.href}>
                    <a
                      href={item.href}
                      className="text-[0.9375rem] text-paper/70 transition-colors duration-200 hover:text-paper"
                    >
                      <Tr text={item.label} />
                    </a>
                  </li>
                ))}
                <li>
                  <a
                    href="#estimate-form"
                    className="text-[0.9375rem] text-paper/70 transition-colors duration-200 hover:text-paper"
                  >
                    <Tr text="Get Estimate" />
                  </a>
                </li>
              </ul>
            </LocalizedNav>

            <div>
              <p className="eyebrow text-paper/65"><Tr text="Contact" /></p>
              <a
                href={site.phoneHref}
                className="mt-3 inline-flex min-h-11 items-center text-[0.9375rem] text-paper/70 transition-colors duration-200 hover:text-paper"
              >
                {site.phone}
              </a>
              {site.email ? (
                <a
                  href={`mailto:${site.email}`}
                  className="block text-[0.9375rem] text-paper/70 transition-colors duration-200 hover:text-paper"
                >
                  {site.email}
                </a>
              ) : null}
            </div>
          </div>

          <p className="rule mt-12 border-paper/15 pt-6 text-[0.8125rem] tracking-[0.12em] text-paper/60 uppercase">
            © {new Date().getFullYear()} {site.companyName}
          </p>
        </div>
      </footer>
    </>
  )
}
