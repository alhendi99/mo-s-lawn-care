import { HeroVideo } from './hero-video'

export function Hero() {
  return (
    <section
      id="top"
      className="relative flex min-h-[100svh] flex-col justify-end overflow-hidden bg-evergreen"
      style={{ '--accent': '#A8CE86', '--btn-fg': '#102019' } as React.CSSProperties}
    >
      <div className="absolute inset-0">
        <HeroVideo />
        <div
          className="absolute inset-0"
          style={{
            background:
              'linear-gradient(to top, rgba(16,32,25,0.95) 0%, rgba(16,32,25,0.72) 45%, rgba(16,32,25,0.42) 100%)',
          }}
        />
      </div>

      <div className="relative mx-auto w-full max-w-[112rem] px-5 pt-32 pb-10 sm:px-8 sm:pb-14">
        <p className="eyebrow text-paper/70">
          Des Moines, Iowa <span className="px-1 text-accent">•</span> Year-Round Property Care
        </p>

        <h1 className="display-xl mt-5 text-paper">
          Your property
          <br />
          doesn&apos;t get
          <br />
          <span className="text-accent">an off-season.</span>
        </h1>

        <div className="mt-8 grid gap-8 sm:mt-10 lg:grid-cols-[minmax(0,32rem)_1fr] lg:items-end lg:gap-16">
          <p className="max-w-prose text-[0.9375rem] leading-relaxed text-paper/80 sm:text-base">
            From weekly mowing to winter snow removal, Mo&apos;s keeps Des Moines properties looking
            cared for in every season.
          </p>

          <div className="flex flex-col gap-4 sm:flex-row sm:items-center lg:justify-end">
            <a href="#estimate" className="btn-solid w-full sm:w-auto">
              Get a free estimate
            </a>
            <a
              href="#seasons"
              className="btn-ghost justify-center text-paper/80 transition-colors duration-200 hover:text-paper sm:justify-start"
            >
              Explore the seasons
              <span aria-hidden="true">↓</span>
            </a>
          </div>
        </div>
      </div>

      <div className="relative mx-auto w-full max-w-[112rem] px-5 sm:px-8">
        <div className="rule border-paper/15 py-4">
          <ul className="flex flex-wrap gap-x-6 gap-y-2 text-[0.625rem] font-semibold tracking-[0.2em] text-paper/45 uppercase">
            <li>Spring</li>
            <li aria-hidden="true">/</li>
            <li>Summer</li>
            <li aria-hidden="true">/</li>
            <li>Fall</li>
            <li aria-hidden="true">/</li>
            <li>Winter</li>
          </ul>
        </div>
      </div>
    </section>
  )
}
