import type { Metadata } from 'next'
import Link from 'next/link'
import { ArrowUpRight, Phone } from 'lucide-react'
import { approvedBusinessFacts } from '@/lib/site'

export const metadata: Metadata = {
  title: "Page Not Found | Mo's Lawn Care",
  description: "The requested page could not be found on Mo's Lawn Care.",
  alternates: {
    canonical: null,
  },
  robots: null,
  openGraph: null,
  twitter: null,
}

const recoveryLinks = [
  { href: '/#problems', label: 'Explore services' },
  { href: '/#work', label: 'See our work' },
  { href: '/#gallery', label: 'Browse the gallery' },
  { href: '/#estimate-form', label: 'Request an estimate' },
] as const

export default function NotFound() {
  return (
    <main className="relative isolate min-h-svh overflow-hidden bg-evergreen text-paper">
      <div
        aria-hidden="true"
        className="absolute inset-0 -z-10 opacity-70"
        style={{
          background:
            'radial-gradient(circle at 78% 18%, rgba(213,238,114,0.16), transparent 28rem), linear-gradient(135deg, transparent 0 54%, rgba(255,255,255,0.035) 54% 54.15%, transparent 54.15% 100%)',
          backgroundSize: 'auto, 2.75rem 2.75rem',
        }}
      />
      <p
        aria-hidden="true"
        className="pointer-events-none absolute -right-[0.08em] bottom-[-0.24em] -z-10 font-[var(--font-display)] text-[clamp(14rem,43vw,44rem)] leading-none font-extrabold tracking-[-0.09em] text-paper/[0.035]"
      >
        404
      </p>

      <div className="mx-auto flex min-h-svh w-full max-w-[112rem] flex-col px-5 pt-24 pb-5 sm:px-8 sm:pt-28 sm:pb-6">
        <section className="my-auto max-w-4xl py-8 sm:py-10" aria-labelledby="not-found-heading">
          <p
            className="hero-reveal eyebrow text-[#D5EE72]"
            style={{ animationDelay: '80ms' }}
          >
            404 · Wrong turn
          </p>
          <h1
            id="not-found-heading"
            className="hero-reveal mt-6 max-w-[13ch] text-[clamp(3.1rem,8vw,7.75rem)] uppercase"
            style={{ animationDelay: '140ms' }}
          >
            This patch of lawn doesn&apos;t exist.
          </h1>
          <p
            className="hero-reveal mt-7 max-w-xl text-base leading-relaxed text-paper/68 sm:text-lg"
            style={{ animationDelay: '210ms' }}
          >
            The page may have moved, or the address may be off. Head back home or call Mo&apos;s
            and we&apos;ll help you find what you need.
          </p>

          <div
            className="hero-reveal mt-9 flex flex-col gap-3 sm:flex-row sm:items-center"
            style={{ animationDelay: '280ms' }}
          >
            <Link
              href="/"
              className="group inline-flex min-h-13 items-center justify-center gap-3 bg-[#D5EE72] px-6 text-sm font-bold tracking-[0.14em] text-evergreen uppercase transition-colors hover:bg-paper"
            >
              Back to homepage
              <ArrowUpRight
                aria-hidden="true"
                size={18}
                className="transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
              />
            </Link>
            <a
              href={approvedBusinessFacts.phone.href}
              className="inline-flex min-h-13 items-center justify-center gap-3 border border-paper/30 px-6 text-sm font-bold tracking-[0.12em] text-paper uppercase transition-colors hover:border-paper hover:bg-paper hover:text-evergreen"
            >
              <Phone aria-hidden="true" size={18} />
              {approvedBusinessFacts.phone.display}
            </a>
          </div>
        </section>

        <nav
          aria-label="Page recovery"
          className="hero-reveal border-t border-paper/15 pt-5"
          style={{ animationDelay: '350ms' }}
        >
          <ul className="grid gap-x-8 gap-y-1 sm:grid-cols-2 lg:grid-cols-4">
            {recoveryLinks.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className="group flex min-h-12 items-center justify-between gap-4 text-sm font-semibold tracking-[0.08em] text-paper/65 uppercase transition-colors hover:text-paper"
                >
                  {link.label}
                  <ArrowUpRight
                    aria-hidden="true"
                    size={16}
                    className="transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                  />
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </main>
  )
}
