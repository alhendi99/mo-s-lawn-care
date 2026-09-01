import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { EstimateForm } from '@/components/estimate-form'
import { InteriorPageShell } from '@/components/interior-page-shell'
import { Tr } from '@/components/tr'
import { routesById } from '@/content/routes'
import { buildRouteMetadata } from '@/lib/metadata'
import { site } from '@/lib/site'

const route = routesById.contact

export const metadata: Metadata = buildRouteMetadata(route)

export default function ContactPage() {
  return (
    <InteriorPageShell routeId="contact">
      <section className="overflow-hidden pt-10 pb-16 sm:pt-14 sm:pb-24">
        <div className="mx-auto w-full max-w-[112rem] px-5 sm:px-8">
          <div className="grid overflow-hidden border border-[color:var(--rule)] lg:grid-cols-[minmax(20rem,0.76fr)_minmax(32rem,1.24fr)]">
            <div className="services-index-reveal flex min-w-0 flex-col bg-evergreen text-paper">
              <div className="relative min-h-56 overflow-hidden sm:min-h-72 lg:min-h-80">
                <Image
                  src="/contact.webp"
                  alt=""
                  fill
                  priority
                  sizes="(min-width: 1024px) 39vw, 100vw"
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-linear-to-t from-evergreen via-evergreen/18 to-transparent" />
              </div>

              <div className="flex flex-1 flex-col p-6 sm:p-9 lg:p-10">
                <p className="eyebrow text-[#D5EE72]">
                  <Tr text="Free estimate · Des Moines-area properties" />
                </p>
                <h1 className="mt-5 font-display text-[clamp(1.25rem,7vw,2rem)] leading-[0.92] font-bold tracking-[-0.03em] text-paper uppercase sm:text-[clamp(2.5rem,5.5vw,4.5rem)]">
                  <Tr text={route.h1} />
                </h1>
                <p className="mt-6 max-w-[38rem] text-[1.0625rem] leading-relaxed text-paper/72">
                  <Tr text="Share the property, the service you want to discuss and any useful details. Submit the form, or use the phone and email options below." />
                </p>

                <div className="mt-9 border-t border-paper/18 pt-6">
                  <p className="eyebrow text-paper/48">
                    <Tr text="Other ways to contact Mo's" />
                  </p>
                  <div className="mt-4 flex flex-col items-start gap-1">
                    <a
                      href={site.phoneHref}
                      className="inline-flex min-h-11 max-w-full items-center text-base font-semibold text-paper underline decoration-[#D5EE72]/55 underline-offset-4 hover:decoration-[#D5EE72]"
                    >
                      <Tr text="Call" /> {site.phone}
                    </a>
                    <a
                      href={site.emailHref}
                      className="inline-flex min-h-11 max-w-full items-center break-all text-base font-semibold text-paper underline decoration-[#D5EE72]/55 underline-offset-4 hover:decoration-[#D5EE72]"
                    >
                      {site.email}
                    </a>
                  </div>
                  <p className="mt-4 max-w-[34rem] text-sm leading-relaxed text-paper/58">
                    <Tr text="Phone and email remain available if you cannot use the online form." />
                  </p>
                </div>
              </div>
            </div>

            <div className="services-index-reveal services-index-reveal-delay min-w-0 bg-paper p-6 sm:p-9 lg:p-12 xl:p-14">
              <EstimateForm placement="contact_page" />
              <p className="mt-7 border-t border-[color:var(--rule)] pt-5 text-sm leading-relaxed text-ink-soft">
                <Tr text="Estimate details are property-specific. This page does not publish prices, schedules or availability promises." />
              </p>
            </div>
          </div>
        </div>
      </section>

      <section aria-labelledby="contact-next-heading" className="bg-paper pb-20 sm:pb-28">
        <div className="mx-auto grid w-full max-w-[112rem] gap-10 px-5 sm:px-8 lg:grid-cols-[minmax(0,0.75fr)_minmax(0,1.25fr)] lg:gap-20">
          <div>
            <p className="eyebrow text-ink-soft"><Tr text="Useful next paths" /></p>
            <h2 id="contact-next-heading" className="display-md mt-5 max-w-[12ch]">
              <Tr text="Explore before you request." />
            </h2>
          </div>

          <div className="border-b border-[color:var(--rule)]">
            {[
              {
                href: routesById.services.path,
                label: 'Browse Services',
                description: 'Review the ten published service paths and choose the closest match for your property.',
              },
              {
                href: routesById['service-areas'].path,
                label: 'View Service Areas',
                description: "Mo's serves Des Moines, Ankeny, Waukee, Norwalk and Altoona.",
              },
            ].map((item) => (
              <Link
                key={item.href}
                href={item.href}
                prefetch={false}
                className="group grid min-h-28 grid-cols-[minmax(0,1fr)_1.5rem] items-center gap-5 border-t border-[color:var(--rule)] py-6"
              >
                <span className="min-w-0">
                  <span className="block font-display text-2xl font-bold tracking-[-0.03em] uppercase sm:text-3xl">
                    <Tr text={item.label} />
                  </span>
                  <span className="mt-2 block max-w-[44rem] text-sm leading-relaxed text-ink-soft sm:text-base">
                    <Tr text={item.description} />
                  </span>
                </span>
                <span aria-hidden="true" className="text-xl text-accent transition-transform duration-200 group-hover:translate-x-1 motion-reduce:transition-none">→</span>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </InteriorPageShell>
  )
}
