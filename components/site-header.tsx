import Image from 'next/image'
import { MobileNavigation } from './mobile-navigation'
import { nav } from '@/lib/site'

export function SiteHeader() {
  return (
    <header className="absolute inset-x-0 top-0 z-50">
      <div className="mx-auto flex max-w-[112rem] items-center justify-between gap-4 px-5 py-4 sm:px-8 md:py-6">
        <a href="#top" className="group flex items-center gap-3 text-paper">
          <Image
            src="/top.png"
            alt="Mo's Lawn Care and Snow Removal"
            width={56}
            height={56}
            priority
            className="h-12 w-12 object-cover sm:h-14 sm:w-14"
          />
          <span className="hidden text-[0.6875rem] leading-none font-semibold tracking-[0.2em] text-paper/60 uppercase sm:block">
            Lawn Care
            <br />
            &amp; Snow Removal
          </span>
        </a>

        <nav aria-label="Primary" className="hidden items-center gap-7 lg:flex">
          {nav.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="text-[0.8125rem] font-semibold tracking-[0.18em] text-paper/75 uppercase transition-colors duration-200 hover:text-paper"
            >
              {item.label}
            </a>
          ))}
          <a
            href="#estimate"
            className="flex h-12 items-center border border-paper/35 px-5 text-[0.8125rem] font-bold tracking-[0.18em] text-paper uppercase transition-colors duration-200 hover:border-paper hover:bg-paper hover:text-evergreen"
          >
            Get Estimate
          </a>
        </nav>

        <MobileNavigation />
      </div>
    </header>
  )
}
