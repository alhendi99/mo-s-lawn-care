import { aboveGround, belowGround } from '@/lib/site'

const belowGroundOutcomes: Record<(typeof belowGround)[number], string> = {
  'Aeration and Seeding': 'Looser soil · Thicker grass',
  'Fertilizing and Weed Control': 'Stronger growth · Fewer weeds',
  Grading: 'Better drainage · Smoother ground',
  'Ground Clearance': 'A clean base · Room to rebuild',
}

function Grass() {
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 1200 40"
      preserveAspectRatio="none"
      className="block h-8 w-full sm:h-10"
    >
      <g stroke="var(--accent)" strokeWidth="1.5" fill="none" strokeLinecap="round">
        {Array.from({ length: 60 }).map((_, i) => {
          const x = i * 20 + 6
          const h = 14 + ((i * 7) % 22)
          const bend = i % 3 === 0 ? 7 : i % 3 === 1 ? -6 : 2
          return <path key={i} d={`M${x} 40 C ${x} ${40 - h / 2}, ${x + bend} ${40 - h / 1.4}, ${x + bend * 1.6} ${40 - h}`} />
        })}
      </g>
    </svg>
  )
}

function Roots() {
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 1200 260"
      preserveAspectRatio="none"
      className="absolute inset-0 h-full w-full"
    >
      <g stroke="rgba(243,240,231,0.22)" strokeWidth="1" fill="none">
        {Array.from({ length: 14 }).map((_, i) => {
          const x = i * 88 + 40
          const d = 90 + ((i * 37) % 150)
          const s = i % 2 === 0 ? 34 : -28
          return (
            <g key={i}>
              <path d={`M${x} 0 C ${x + s / 2} ${d / 3}, ${x - s} ${d / 1.7}, ${x + s / 3} ${d}`} />
              <path d={`M${x + s / 6} ${d / 2.4} C ${x + s} ${d / 1.9}, ${x + s * 1.4} ${d / 1.4}, ${x + s * 1.1} ${d / 1.15}`} />
              <path d={`M${x - s / 8} ${d / 3.2} C ${x - s * 0.9} ${d / 2.4}, ${x - s * 1.2} ${d / 1.8}, ${x - s * 0.8} ${d / 1.5}`} />
            </g>
          )
        })}
      </g>
      <g fill="rgba(243,240,231,0.16)">
        {Array.from({ length: 40 }).map((_, i) => (
          <circle key={i} cx={(i * 137) % 1180 + 10} cy={((i * 91) % 230) + 18} r={((i % 3) + 1) * 0.9} />
        ))}
      </g>
    </svg>
  )
}

export function CrossSection() {
  return (
    <section aria-labelledby="ground-heading" className="bg-paper py-20 sm:py-28">
      <div className="mx-auto w-full max-w-[112rem] px-5 sm:px-8">
        <p className="eyebrow text-ink-soft">Complete property care</p>
        <h2 id="ground-heading" className="display-md mt-5 max-w-[20ch]">
          Good yards start
          <br />
          <span style={{ color: 'var(--accent)' }}>below the surface.</span>
        </h2>

        {/* ABOVE */}
        <div className="mt-14 sm:mt-20">
          <div className="flex items-baseline justify-between gap-4">
            <h3 className="eyebrow text-ink">What you see</h3>
            <span className="eyebrow text-ink-soft">Everyday property care</span>
          </div>

          <ul className="mt-6 grid grid-cols-2 gap-x-4 sm:grid-cols-4 lg:grid-cols-8">
            {aboveGround.map((name, i) => (
              <li key={name} className="flex min-w-0 flex-col">
                <span className="font-display text-[0.9375rem] leading-tight font-semibold tracking-[-0.01em] uppercase sm:text-base">
                  {name}
                </span>
                <span
                  aria-hidden="true"
                  className="mt-2 block w-px bg-[color:var(--rule)]"
                  style={{ height: `${18 + ((i * 13) % 44)}px` }}
                />
                <span aria-hidden="true" className="mt-auto block h-2" />
              </li>
            ))}
          </ul>

          <Grass />
        </div>

        {/* GROUND LINE */}
        <div className="relative">
          <div className="h-[3px] w-full" style={{ backgroundColor: 'var(--accent)' }} />
          <span className="absolute -top-[1.25rem] right-0 bg-paper pl-3 text-[0.75rem] font-semibold tracking-[0.16em] text-ink-soft uppercase">
            Grade level
          </span>
        </div>

        {/* BELOW */}
        <div className="relative overflow-hidden bg-evergreen px-5 pt-8 pb-10 sm:px-8">
          <Roots />
          <div className="relative">
            <div className="flex items-baseline justify-between gap-4">
              <h3 className="eyebrow text-paper">Soil &amp; ground care</h3>
              <span className="eyebrow text-paper/70">What keeps it healthy</span>
            </div>

            <ul className="mt-8 grid grid-cols-2 gap-x-4 gap-y-8 sm:grid-cols-4">
              {belowGround.map((name, i) => (
                <li key={name} className="flex min-w-0 flex-col">
                  <span
                    aria-hidden="true"
                    className="mb-2 block w-px bg-paper/25"
                    style={{ height: `${16 + ((i * 19) % 40)}px` }}
                  />
                  <span className="font-display text-[0.9375rem] leading-tight font-semibold tracking-[-0.01em] text-paper uppercase sm:text-base">
                    {name}
                  </span>
                  <span className="mt-2 text-xs leading-relaxed text-paper/70">
                    {belowGroundOutcomes[name]}
                  </span>
                </li>
              ))}
            </ul>

            <p className="mt-10 max-w-prose text-[1.0625rem] leading-relaxed text-paper/70">
              We pair visible upkeep with the soil preparation, feeding, and drainage work that helps
              your lawn grow thicker and stay easier to maintain.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
