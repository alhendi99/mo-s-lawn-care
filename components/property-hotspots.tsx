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
              className="absolute grid h-11 w-11 -translate-x-1/2 -translate-y-1/2 cursor-pointer place-items-center"
              style={{ left: `${h.x}%`, top: `${h.y}%` }}
            >
              <span className="sr-only">
                {h.label}: {h.services.join(', ')}
              </span>
              <span
                aria-hidden="true"
                className="hotspot-pulse grid h-9 w-9 place-items-center rounded-full border-2 text-[0.8125rem] font-bold tabular-nums transition-[transform,background-color,color] duration-200"
                style={{
                  borderColor: isActive ? 'var(--accent)' : 'rgba(243,240,231,0.85)',
                  backgroundColor: isActive ? 'var(--accent)' : 'rgba(16,32,25,0.55)',
                  color: '#f3f0e7',
                  transform: isActive ? 'scale(1.18)' : 'scale(1)',
                  boxShadow:
                    '0 0 0 3px rgba(243,240,231,0.3), 0 0 18px rgba(213,238,114,0.75)',
                }}
              >
                {h.n}
              </span>
            </button>
          )
        })}

        {/* compact readout — desktop / tablet only */}
        <div
          className="absolute hidden w-[min(20rem,38%)] border-t-2 border-accent p-4 transition-[top,left,right,transform] duration-300 sm:block"
          style={{
            backgroundColor: 'rgba(16,32,25,0.96)',
            top: `${spot.y}%`,
            left: spot.x < 30 ? '1rem' : spot.x > 70 ? 'auto' : `${spot.x}%`,
            right: spot.x > 70 ? '1rem' : 'auto',
            transform: `translate(${spot.x >= 30 && spot.x <= 70 ? '-50%' : '0'}, ${
              spot.y < 35 ? '0.875rem' : 'calc(-100% - 0.875rem)'
            })`,
          }}
        >
          <p className="text-[0.75rem] font-semibold tracking-[0.16em] text-paper/70 uppercase tabular-nums">
            {String(spot.n).padStart(2, '0')} / {propertyHotspots.length}
          </p>
          <p className="mt-1.5 font-display text-xl leading-none font-extrabold tracking-[-0.03em] text-paper uppercase">
            {spot.label}
          </p>
          <ul className="mt-3 space-y-1">
            {spot.services.map((s) => (
              <li key={s} className="text-[0.9375rem] leading-snug text-paper/75">
                {s}
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* full list — mobile-only alternative to the image hotspots */}
      <ul className="mt-6 grid gap-px sm:hidden">
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
                  className="mt-0.5 grid h-7 w-7 shrink-0 place-items-center rounded-full text-[0.75rem] font-bold tabular-nums transition-colors duration-200"
                  style={{
                    backgroundColor: isActive ? 'var(--accent)' : 'transparent',
                    border: isActive ? 'none' : '1px solid var(--rule)',
                    color: isActive ? '#fff' : '#4a5250',
                  }}
                >
                  {h.n}
                </span>
                <span className="min-w-0">
                  <span className="block font-display text-lg font-semibold tracking-[-0.01em] uppercase">
                    {h.label}
                  </span>
                  <span className="mt-0.5 block text-[0.9375rem] leading-snug text-ink-soft">
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
