'use client'

import Image from 'next/image'
import { useState } from 'react'
import { propertyHotspots } from '@/lib/site'

export function PropertyHotspots() {
  const [active, setActive] = useState<string>(propertyHotspots[0].id)
  const spot = propertyHotspots.find((h) => h.id === active) ?? propertyHotspots[0]

  return (
    <div className="mt-10 sm:mt-14">
      <div className="relative aspect-[16/9] w-full overflow-hidden bg-evergreen">
        <Image
          src="/seasons/summer.png"
          alt="A Des Moines residential property in summer: mowed front lawn, flower beds along the house, mature trees and a concrete driveway"
          fill
          sizes="(min-width: 1280px) 1200px, 100vw"
          loading="lazy"
          className="object-cover"
        />

        {propertyHotspots.map((h) => {
          const isActive = h.id === active
          return (
            <button
              key={h.id}
              type="button"
              onClick={() => setActive(h.id)}
              onMouseEnter={() => setActive(h.id)}
              onFocus={() => setActive(h.id)}
              aria-pressed={isActive}
              className="absolute grid h-11 w-11 -translate-x-1/2 -translate-y-1/2 place-items-center"
              style={{ left: `${h.x}%`, top: `${h.y}%` }}
            >
              <span className="sr-only">
                {h.label}: {h.services.join(', ')}
              </span>
              <span
                aria-hidden="true"
                className="grid h-7 w-7 place-items-center rounded-full border text-[0.625rem] font-bold tabular-nums transition-[transform,background-color,color] duration-200"
                style={{
                  borderColor: isActive ? 'var(--accent)' : 'rgba(243,240,231,0.85)',
                  backgroundColor: isActive ? 'var(--accent)' : 'rgba(16,32,25,0.55)',
                  color: '#f3f0e7',
                  transform: isActive ? 'scale(1.18)' : 'scale(1)',
                  boxShadow: '0 0 0 1px rgba(16,32,25,0.25)',
                }}
              >
                {h.n}
              </span>
            </button>
          )
        })}

        {/* compact readout — desktop / tablet only */}
        <div
          className="absolute top-4 hidden w-[min(20rem,38%)] p-4 sm:block"
          style={{
            backgroundColor: 'rgba(16,32,25,0.92)',
            left: spot.x > 50 ? '1rem' : 'auto',
            right: spot.x > 50 ? 'auto' : '1rem',
          }}
        >
          <p className="text-[0.625rem] font-semibold tracking-[0.2em] text-paper/45 uppercase tabular-nums">
            {String(spot.n).padStart(2, '0')} / {propertyHotspots.length}
          </p>
          <p className="mt-1.5 font-display text-xl leading-none font-extrabold tracking-[-0.03em] text-paper uppercase">
            {spot.label}
          </p>
          <ul className="mt-3 space-y-1">
            {spot.services.map((s) => (
              <li key={s} className="text-[0.8125rem] leading-snug text-paper/75">
                {s}
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* full list — always rendered, primary control on mobile */}
      <ul className="mt-6 grid gap-px sm:grid-cols-2 lg:grid-cols-3">
        {propertyHotspots.map((h) => {
          const isActive = h.id === active
          return (
            <li key={h.id}>
              <button
                type="button"
                onClick={() => setActive(h.id)}
                aria-pressed={isActive}
                className="flex w-full items-start gap-3 border-t py-4 text-left transition-colors duration-200"
                style={{
                  borderColor: isActive ? 'var(--accent)' : 'var(--rule)',
                }}
              >
                <span
                  aria-hidden="true"
                  className="mt-0.5 grid h-6 w-6 shrink-0 place-items-center rounded-full text-[0.625rem] font-bold tabular-nums transition-colors duration-200"
                  style={{
                    backgroundColor: isActive ? 'var(--accent)' : 'transparent',
                    border: isActive ? 'none' : '1px solid var(--rule)',
                    color: isActive ? '#fff' : '#4a5250',
                  }}
                >
                  {h.n}
                </span>
                <span className="min-w-0">
                  <span className="block font-display text-base font-semibold tracking-[-0.01em] uppercase">
                    {h.label}
                  </span>
                  <span className="mt-0.5 block text-[0.8125rem] leading-snug text-ink-soft">
                    {h.services.join(' · ')}
                  </span>
                </span>
              </button>
            </li>
          )
        })}
      </ul>
    </div>
  )
}
