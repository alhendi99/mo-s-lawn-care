'use client'

import { useState } from 'react'
import { problems } from '@/lib/site'

export function ProblemSelector() {
  const [open, setOpen] = useState<string | null>(null)

  return (
    <ul className="mt-10 sm:mt-14">
      {problems.map((p, i) => {
        const isOpen = open === p.id
        return (
          <li key={p.id} className="rule border-paper/15">
            <h3>
              <button
                type="button"
                aria-expanded={isOpen}
                aria-controls={`answer-${p.id}`}
                onClick={() => setOpen(isOpen ? null : p.id)}
                className="group flex w-full items-center gap-4 py-5 text-left sm:gap-8 sm:py-7"
              >
                <span className="w-7 shrink-0 pt-1 text-[0.75rem] font-semibold tracking-[0.14em] text-paper/65 tabular-nums">
                  {String(i + 1).padStart(2, '0')}
                </span>
                <span
                  className="flex-1 font-display text-[clamp(1.175rem,0.7rem+1.2vw,2.5rem)] leading-[1] font-bold tracking-[-0.03em] uppercase transition-[transform,color] duration-200 group-hover:translate-x-2"
                  style={{ color: isOpen ? 'var(--accent)' : '#f3f0e7' }}
                >
                  {p.title}
                </span>
                <span
                  aria-hidden="true"
                  className="shrink-0 text-xl transition-transform duration-200 sm:text-2xl"
                  style={{
                    color: isOpen ? 'var(--accent)' : 'rgba(243,240,231,0.4)',
                    transform: isOpen ? 'rotate(90deg)' : 'none',
                  }}
                >
                  →
                </span>
              </button>
            </h3>

            {isOpen && (
              <div
                id={`answer-${p.id}`}
                className="grid gap-6 pb-8 sm:grid-cols-[minmax(0,1fr)_minmax(0,1fr)] sm:gap-12 sm:pl-14"
              >
                <p className="max-w-prose text-[1.0625rem] leading-relaxed text-paper/70">
                  {p.answer}
                </p>
                <div>
                  <p className="eyebrow text-paper/70">What we&apos;d send out</p>
                  <ul className="mt-3 flex flex-wrap gap-x-6 gap-y-2">
                    {p.services.map((s) => (
                      <li
                        key={s}
                        className="font-display text-lg font-semibold tracking-[-0.01em] uppercase sm:text-xl"
                        style={{ color: 'var(--accent)' }}
                      >
                        {s}
                      </li>
                    ))}
                  </ul>
                  <a
                    href="#estimate"
                    className="mt-5 inline-flex items-center gap-2 text-[0.8125rem] font-bold tracking-[0.18em] text-paper uppercase underline decoration-paper/30 underline-offset-[6px] transition-colors duration-200 hover:decoration-paper"
                  >
                    Get an estimate for this
                    <span aria-hidden="true">→</span>
                  </a>
                </div>
              </div>
            )}
          </li>
        )
      })}
    </ul>
  )
}
