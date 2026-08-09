'use client'

import Image from 'next/image'
import { useCallback, useRef, useState } from 'react'
import { seasons, type SeasonKey } from '@/lib/site'

const positions = [
  { className: 'left-1/2 top-0 -translate-x-1/2 -translate-y-1/2', align: 'text-center' },
  { className: 'right-0 top-1/2 translate-x-1/2 -translate-y-1/2', align: 'text-center' },
  { className: 'left-1/2 bottom-0 -translate-x-1/2 translate-y-1/2', align: 'text-center' },
  { className: 'left-0 top-1/2 -translate-x-1/2 -translate-y-1/2', align: 'text-center' },
]

export function SeasonDial() {
  const [active, setActive] = useState<SeasonKey>('summer')
  const [loaded, setLoaded] = useState<SeasonKey[]>(['summer'])
  const dialRef = useRef<HTMLDivElement>(null)
  const dragging = useRef(false)

  const index = seasons.findIndex((s) => s.key === active)
  const season = seasons[index]

  const select = useCallback((key: SeasonKey) => {
    setActive(key)
    setLoaded((prev) => (prev.includes(key) ? prev : [...prev, key]))
  }, [])

  const angleToIndex = (clientX: number, clientY: number) => {
    const el = dialRef.current
    if (!el) return null
    const r = el.getBoundingClientRect()
    const dx = clientX - (r.left + r.width / 2)
    const dy = clientY - (r.top + r.height / 2)
    if (Math.hypot(dx, dy) < r.width * 0.12) return null
    let deg = (Math.atan2(dx, -dy) * 180) / Math.PI
    if (deg < 0) deg += 360
    return Math.round(deg / 90) % 4
  }

  const handlePointer = (e: React.PointerEvent) => {
    const i = angleToIndex(e.clientX, e.clientY)
    if (i !== null) select(seasons[i].key)
  }

  const onKeyDown = (e: React.KeyboardEvent) => {
    const keys = ['ArrowRight', 'ArrowDown', 'ArrowLeft', 'ArrowUp']
    if (!keys.includes(e.key)) return
    e.preventDefault()
    const dir = e.key === 'ArrowRight' || e.key === 'ArrowDown' ? 1 : -1
    select(seasons[(index + dir + seasons.length) % seasons.length].key)
  }

  return (
    <section
      id="seasons"
      aria-labelledby="seasons-heading"
      className="relative overflow-hidden py-20 transition-colors duration-500 sm:py-28"
      style={
        {
          '--accent': season.accent,
          '--accent-ink': season.accentInk,
          backgroundColor: season.surface,
        } as React.CSSProperties
      }
    >
      <div className="mx-auto w-full max-w-[112rem] px-5 sm:px-8">
        <div className="flex flex-col gap-4 lg:flex-row lg:items-end lg:justify-between">
          <h2 id="seasons-heading" className="display-md max-w-[22ch]">
            Des Moines has
            <br />
            four seasons.
            <br />
            <span style={{ color: 'var(--accent)' }}>We handle all of them.</span>
          </h2>
          <div className="flex shrink-0 items-center gap-4 border-l-[3px] border-[color:var(--accent)] py-1 pl-4 lg:mb-2">
            <p className="text-[0.9375rem] leading-tight font-bold tracking-[0.08em] text-ink uppercase">
              Turn the dial
              <span className="mt-1 block text-ink-soft">to change the season</span>
            </p>
            <span
              aria-hidden="true"
              className="season-cue grid h-10 w-10 shrink-0 place-items-center rounded-full bg-accent text-lg font-bold text-accent-ink"
            >
              ↓
            </span>
          </div>
        </div>

        <div className="mt-4 grid gap-12 lg:mt-6 lg:grid-cols-[minmax(0,1.15fr)_minmax(0,1fr)] lg:items-start lg:gap-16">
          {/* Seasonal photograph */}
          <figure className="order-2 lg:order-1">
            <div className="relative aspect-[16/10] w-full overflow-hidden bg-evergreen">
              {seasons.map((s) => (
                <div
                  key={s.key}
                  className="absolute inset-0 transition-opacity duration-500 ease-out"
                  style={{ opacity: s.key === active ? 1 : 0 }}
                  aria-hidden={s.key !== active}
                >
                  {loaded.includes(s.key) && (
                    <Image
                      src={s.image || '/placeholder.svg'}
                      alt={`The same Des Moines property in ${s.label.toLowerCase()}`}
                      fill
                      sizes="(min-width: 1024px) 60vw, 100vw"
                      loading={s.key === 'summer' ? 'eager' : 'lazy'}
                      className="object-cover"
                    />
                  )}
                </div>
              ))}
              <div className="pointer-events-none absolute inset-x-0 bottom-0 flex items-end justify-between gap-4 p-4 sm:p-6">
                <span
                  className="font-display text-2xl leading-none font-extrabold tracking-[-0.03em] uppercase sm:text-4xl"
                  style={{ color: '#fff', textShadow: '0 1px 12px rgba(16,32,25,0.65)' }}
                >
                  {season.label}
                </span>
                <span
                  className="eyebrow"
                  style={{ color: '#fff', textShadow: '0 1px 10px rgba(16,32,25,0.75)' }}
                >
                  {season.months}
                </span>
              </div>
            </div>
        <p className="eyebrow mt-8 text-ink-soft">What we do in {season.label}</p>
            <ul className="mt-3">
              {season.services.map((name) => (
                <li
                  key={name}
                  className="rule flex items-baseline gap-3 border-[color:var(--rule)] py-2.5 font-display text-xl leading-tight font-semibold tracking-[-0.02em] uppercase sm:text-2xl"
                >
                  <span
                    aria-hidden="true"
                    className="mt-2 block h-1.5 w-1.5 shrink-0 rounded-full"
                    style={{ backgroundColor: 'var(--accent)' }}
                  />
                  {name}
                </li>
              ))}
            </ul>
          </figure>

          {/* Dial + services */}
          <div className="order-1 lg:order-2">
            <div className="mx-auto w-[clamp(240px,70vw,340px)] lg:w-[clamp(320px,30vw,420px)]">
              <div
                ref={dialRef}
                role="radiogroup"
                aria-label="Select a season"
                tabIndex={0}
                onKeyDown={onKeyDown}
                onPointerDown={(e) => {
                  dragging.current = true
                  handlePointer(e)
                }}
                onPointerMove={(e) => {
                  if (dragging.current) handlePointer(e)
                }}
                onPointerUp={() => {
                  dragging.current = false
                }}
                onPointerLeave={() => {
                  dragging.current = false
                }}
                className="relative aspect-square touch-none select-none"
              >
                {/* outer instrument ring */}
                <span
                  aria-hidden="true"
                  className="absolute inset-0 rounded-full border"
                  style={{ borderColor: 'var(--rule)' }}
                />

                {/* rotating instrument face */}
                <div
                  className="absolute inset-[19%] rounded-full transition-transform duration-500 ease-out"
                  style={{
                    transform: `rotate(${index * 90}deg)`,
                    backgroundColor: 'var(--accent-ink)',
                  }}
                >
                  <span
                    aria-hidden="true"
                    className="absolute left-1/2 -top-[13%] block h-[22%] w-[2px] -translate-x-1/2"
                    style={{ backgroundColor: 'var(--accent)' }}
                  />
                  <span
                    aria-hidden="true"
                    className="absolute inset-[6%] rounded-full border border-paper/12"
                  />
                </div>

                {/* fixed centre readout */}
                <div className="pointer-events-none absolute inset-0 flex flex-col items-center justify-center text-center">
                  <span className="font-display text-3xl leading-none font-extrabold tracking-[-0.04em] text-paper uppercase">
                    {season.label}
                  </span>
                  <span className="mt-1.5 text-[0.75rem] font-semibold tracking-[0.16em] text-paper/70 uppercase">
                    {season.months}
                  </span>
                </div>

                {/* season buttons */}
                {seasons.map((s, i) => (
                  <button
                    key={s.key}
                    type="button"
                    role="radio"
                    aria-checked={s.key === active}
                    onClick={() => select(s.key)}
                    className={`absolute ${positions[i].className} flex h-11 min-w-[4.75rem] items-center justify-center px-2 text-[0.8125rem] font-bold tracking-[0.18em] uppercase transition-colors duration-200`}
                    style={{
                      color: s.key === active ? season.accent : '#4a5250',
                      backgroundColor: season.surface,
                    }}
                  >
                    {s.label}
                  </button>
                ))}
              </div>
            </div>

            <p className="mt-8 font-display text-3xl leading-[1.05] font-bold tracking-[-0.02em] sm:text-4xl">
              {season.headline}
            </p>
            <p className="mt-3 max-w-prose text-[1.0625rem] leading-relaxed text-ink-soft">
              {season.copy}
            </p>

          </div>
        </div>
      </div>
    </section>
  )
}
