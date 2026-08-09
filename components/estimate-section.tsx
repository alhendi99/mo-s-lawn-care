import Image from 'next/image'
import { EstimateForm } from './estimate-form'

export function EstimateSection() {
  return (
    <section
      id="estimate"
      aria-labelledby="estimate-heading"
      className="bg-evergreen"
    >
      <div className="mx-auto w-full max-w-[112rem] px-5 sm:px-8">
        <div className="grid overflow-hidden border border-paper/15 lg:grid-cols-[minmax(0,0.78fr)_minmax(32rem,1fr)]">
          <div className="relative min-h-[28rem] overflow-hidden lg:min-h-[42rem]">
            <Image
              src="/gallery/gallery12.png"
              alt="Maintained front lawn and landscaped beds along a Des Moines home"
              fill
              sizes="(min-width: 1024px) 44vw, 100vw"
              loading="lazy"
              className="object-cover"
            />
            <div className="absolute inset-0 bg-linear-to-t from-evergreen via-evergreen/30 to-transparent" />

            <div className="absolute inset-x-0 bottom-0 p-6 text-paper sm:p-9 lg:p-10">
              <p className="eyebrow text-[#D5EE72]">Free estimate · Des Moines metro</p>
              <h2
                id="estimate-heading"
                className="mt-5 max-w-[11ch] font-display text-[clamp(2.35rem,4.8vw,5.6rem)] leading-[0.9] font-bold tracking-[-0.055em] uppercase"
              >
                Your yard.
                <span className="block text-[#D5EE72]">Handled.</span>
              </h2>
              <p className="mt-5 max-w-[31rem] text-base leading-relaxed text-paper/75 sm:text-lg">
                Tell us what the property needs. We&apos;ll follow up with the right next step.
              </p>
            </div>
          </div>

          <div id="estimate-form" className="bg-paper p-6 sm:p-9 lg:p-12">
            <EstimateForm />
          </div>
        </div>
      </div>
    </section>
  )
}
