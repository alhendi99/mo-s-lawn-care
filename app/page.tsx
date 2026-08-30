import { BeforeAfterSlider } from '@/components/before-after-slider'
import { CrossSection } from '@/components/cross-section'
import { EstimateSection } from '@/components/estimate-section'
import { Gallery } from '@/components/gallery'
import { Hero } from '@/components/hero'
import { ProblemSelector } from '@/components/problem-selector'
import { PropertyHotspots } from '@/components/property-hotspots'
import { SeasonDial } from '@/components/season-dial'
import { StructuredData } from '@/components/structured-data'
import { Testimonials } from '@/components/testimonials'
import { Tr } from '@/components/tr'
import { routesById } from '@/content/routes'
import { buildPageStructuredData } from '@/lib/structured-data'

const homepageStructuredData = buildPageStructuredData(routesById.home, routesById.home)

export default function Page() {
  return (
    <>
      <StructuredData data={homepageStructuredData} />

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

    </>
  )
}
