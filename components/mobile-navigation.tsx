'use client'

import { useEffect, useState } from 'react'
import { nav, site } from '@/lib/site'

export function MobileNavigation() {
  const [open, setOpen] = useState(false)

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : ''
    return () => {
      document.body.style.overflow = ''
    }
  }, [open])

  useEffect(() => {
    if (!open) return
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setOpen(false)
    }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [open])

  return (
    <div className="lg:hidden">
      <button
        type="button"
        aria-expanded={open}
        aria-controls="mobile-menu"
        onClick={() => setOpen((v) => !v)}
        className="flex h-11 min-w-11 items-center gap-2 px-1 text-[0.8125rem] font-semibold tracking-[0.18em] text-paper uppercase"
      >
        {open ? 'Close' : 'Menu'}
        <span aria-hidden="true" className="relative block h-3 w-4">
          <span
            className="absolute left-0 block h-px w-4 bg-paper transition-transform duration-200"
            style={{ top: open ? '6px' : '2px', transform: open ? 'rotate(45deg)' : 'none' }}
          />
          <span
            className="absolute left-0 block h-px w-4 bg-paper transition-transform duration-200"
            style={{ top: open ? '6px' : '10px', transform: open ? 'rotate(-45deg)' : 'none' }}
          />
        </span>
      </button>

      {open && (
        <div
          id="mobile-menu"
          className="fixed inset-0 top-0 z-40 flex flex-col bg-evergreen px-5 pt-24 pb-10"
        >
          <nav aria-label="Primary" className="flex flex-col">
            {nav.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={() => setOpen(false)}
                className="rule border-[color:var(--rule-dark)] py-5 font-display text-4xl font-bold tracking-[-0.02em] text-paper uppercase"
              >
                {item.label}
              </a>
            ))}
          </nav>
          <a
            href="#estimate"
            onClick={() => setOpen(false)}
            className="btn-solid mt-8 w-full"
            style={{ backgroundColor: 'var(--accent)' }}
          >
            Get a free estimate
          </a>
          <p className="mt-auto pt-10 text-sm leading-relaxed text-paper/70">
            {site.companyName}
            <br />
            {site.location}
          </p>
        </div>
      )}
    </div>
  )
}
