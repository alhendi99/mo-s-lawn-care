import { MobileNavigation } from './mobile-navigation'
import { nav } from '@/lib/site'

export function SiteHeader() {
  return (
    <header className="absolute inset-x-0 top-0 z-50">
      <div className="mx-auto flex max-w-[112rem] items-center justify-between gap-4 px-5 py-4 sm:px-8 md:py-6">
        <a href="#top" className="group flex items-baseline gap-2 text-paper">
          <span className="font-display text-xl leading-none font-extrabold tracking-[-0.04em] uppercase sm:text-2xl">
            Mo&apos;s
          </span>
          <span className="hidden text-[0.5625rem] leading-none font-semibold tracking-[0.2em] text-paper/60 uppercase sm:block">
            Lawn Care
            <br />
            &amp; Snow Removal
          </span>
        </a>

        <nav aria-label="Primary" className="hidden items-center gap-7 md:flex">
          {nav.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="text-[0.6875rem] font-semibold tracking-[0.18em] text-paper/75 uppercase transition-colors duration-200 hover:text-paper"
            >
              {item.label}
            </a>
          ))}
          <a
            href="#estimate"
            className="flex h-11 items-center border border-paper/35 px-5 text-[0.6875rem] font-bold tracking-[0.18em] text-paper uppercase transition-colors duration-200 hover:border-paper hover:bg-paper hover:text-evergreen"
          >
            Get Estimate
          </a>
        </nav>

        <MobileNavigation />
      </div>
    </header>
  )
}
