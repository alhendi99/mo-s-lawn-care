import { aboveGround, belowGround } from "@/lib/site";

const soilParticles = Array.from({ length: 52 }, (_, i) => ({
  cx: ((i * 173) % 1360) + 20,
  cy: ((i * 97) % 450) + 34,
  r: 0.8 + (i % 4) * 0.55,
  opacity: 0.08 + (i % 5) * 0.025,
}));

const rootPaths = [
  "M700 0 C696 86 728 112 702 196 C678 272 722 338 700 520",
  "M699 88 C626 104 588 154 548 230 C516 292 454 334 382 368",
  "M706 132 C786 150 828 202 864 270 C898 334 962 368 1040 392",
  "M696 208 C628 224 600 278 568 340 C542 390 496 428 438 458",
  "M706 248 C774 272 792 322 818 382 C838 428 878 464 936 490",
  "M548 230 C500 220 468 188 436 144",
  "M864 270 C918 254 956 218 982 174",
  "M568 340 C518 336 476 316 438 286",
  "M818 382 C870 372 910 346 944 312",
  "M700 318 C658 348 646 394 636 452",
  "M702 352 C744 380 756 426 764 488",
];

const seasonPanorama = [
  {
    key: "spring",
    label: "Spring",
    months: "Mar — May",
    line: "Reset & renew.",
    serviceNames: ["Spring Cleanup", "Flower Beds Maintenance"],
    background:
      "linear-gradient(155deg, #EEF3E6 0%, #C9DDB4 48%, #91B27A 100%)",
    ink: "#173226",
    accent: "#6E9A5B",
    particle: "#E5A6B9",
  },
  {
    key: "summer",
    label: "Summer",
    months: "Jun — Aug",
    line: "Keep it sharp.",
    serviceNames: ["Mowing Service", "Landscaping", "Overgrown Yards Cleanup"],
    background:
      "linear-gradient(155deg, #F3E6A9 0%, #B9CF7D 48%, #659356 100%)",
    ink: "#153323",
    accent: "#E7C553",
    particle: "#FFF2A8",
  },
  {
    key: "fall",
    label: "Fall",
    months: "Sep — Nov",
    line: "Clear the change.",
    serviceNames: ["Fall Cleanup", "Leaves Removal"],
    background:
      "linear-gradient(155deg, #EAD9B8 0%, #D19A65 48%, #A65334 100%)",
    ink: "#3A2118",
    accent: "#8F3F28",
    particle: "#7E351F",
  },
  {
    key: "winter",
    label: "Winter",
    months: "Dec — Feb",
    line: "Ready by morning.",
    serviceNames: ["Snow Removal"],
    background:
      "linear-gradient(155deg, #C8DCE2 0%, #E8F0F1 52%, #F7F7F2 100%)",
    ink: "#173540",
    accent: "#6E929E",
    particle: "#FFFFFF",
  },
] as const;

type SeasonKey = (typeof seasonPanorama)[number]["key"];

function SeasonHorizon({ season }: { season: SeasonKey }) {
  const ground = {
    spring: "#6E9A5B",
    summer: "#3F724D",
    fall: "#9B5736",
    winter: "#F7F8F4",
  }[season];
  const blade = {
    spring: "#5E8F50",
    summer: "#315F43",
    fall: "#8F4A31",
    winter: "#D7E4E6",
  }[season];

  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 400 96"
      preserveAspectRatio="none"
      className="pointer-events-none absolute inset-x-0 bottom-0 z-30 h-20 w-full sm:h-24"
    >
      <path
        d={
          season === "winter"
            ? "M0 74 C80 48 170 84 248 63 C310 47 354 59 400 52 L400 96 L0 96 Z"
            : "M0 78 C130 68 260 82 400 73 L400 96 L0 96 Z"
        }
        fill={ground}
      />

      {season !== "winter" && (
        <g fill="none" stroke={blade} strokeLinecap="round">
          {Array.from({ length: 26 }).map((_, index) => {
            const x = index * 16 + 4;
            const height = 19 + ((index * 13) % 38);
            const bend = index % 3 === 0 ? 8 : index % 3 === 1 ? -7 : 3;

            return (
              <path
                key={index}
                className="yard-xray__blade"
                d={`M${x} 82 C ${x} ${82 - height * 0.42}, ${x + bend} ${82 - height * 0.72}, ${x + bend * 1.2} ${82 - height}`}
                strokeWidth={index % 8 === 0 ? 2.6 : 1.55}
                style={{
                  animationDelay: `${-index * 91}ms`,
                  animationDuration: `${3.2 + (index % 5) * 0.4}s`,
                }}
              />
            );
          })}
        </g>
      )}

      {season === "spring" && (
        <g fill="#F1C2CD">
          {[58, 142, 238, 328].map((x, index) => (
            <circle key={x} cx={x} cy={40 + (index % 2) * 13} r={3.4} />
          ))}
        </g>
      )}

      {season === "summer" && (
        <g fill="#E5CF67" opacity="0.82">
          {[62, 152, 248, 338].map((x, index) => (
            <circle key={x} cx={x} cy={34 + (index % 2) * 14} r={2.7} />
          ))}
        </g>
      )}

      {season === "fall" && (
        <g fill="#6F301F" opacity="0.78">
          {[42, 126, 212, 304, 370].map((x, index) => (
            <ellipse
              key={x}
              cx={x}
              cy={45 + ((index * 11) % 26)}
              rx="6"
              ry="3"
              transform={`rotate(${index % 2 === 0 ? 28 : -24} ${x} ${45 + ((index * 11) % 26)})`}
            />
          ))}
        </g>
      )}

      {season === "winter" && (
        <g fill="#FFFFFF" opacity="0.95">
          {[52, 124, 198, 282, 350].map((x, index) => (
            <circle
              key={x}
              cx={x}
              cy={25 + ((index * 17) % 32)}
              r={2.5 + (index % 2)}
            />
          ))}
        </g>
      )}
    </svg>
  );
}

function SoilNetwork() {
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 1400 520"
      preserveAspectRatio="none"
      className="pointer-events-none absolute inset-0 h-full w-full"
    >
      <g fill="none" stroke="rgba(243,240,231,0.16)" strokeLinecap="round">
        {rootPaths.map((path, i) => (
          <path
            key={path}
            d={path}
            strokeWidth={i === 0 ? 2.4 : i < 5 ? 1.45 : 0.9}
          />
        ))}
      </g>

      <g
        className="yard-xray__root-flow"
        fill="none"
        stroke="var(--accent)"
        strokeLinecap="round"
      >
        {rootPaths.slice(0, 5).map((path, i) => (
          <path
            key={path}
            d={path}
            strokeWidth={i === 0 ? 1.8 : 1.05}
            style={{ animationDelay: `${-i * 720}ms` }}
          />
        ))}
      </g>

      <g fill="rgba(243,240,231,0.8)">
        {soilParticles.map((particle, i) => (
          <circle key={i} {...particle} />
        ))}
      </g>
    </svg>
  );
}

function SeasonGlyph({ season }: { season: SeasonKey }) {
  const className = "yard-xray__season-glyph h-36 w-36 sm:h-44 sm:w-44";

  if (season === "spring") {
    return (
      <svg aria-hidden="true" viewBox="0 0 120 120" className={className}>
        <g
          fill="none"
          stroke="currentColor"
          strokeLinecap="round"
          strokeWidth="2"
        >
          <path d="M60 103 C58 84 61 67 60 52" />
          <path d="M59 77 C47 69 40 72 34 80 C46 84 54 82 59 77 Z" />
          <path d="M61 67 C73 58 81 61 87 69 C76 74 68 73 61 67 Z" />
          <ellipse cx="60" cy="39" rx="9" ry="17" />
          <ellipse
            cx="60"
            cy="39"
            rx="9"
            ry="17"
            transform="rotate(72 60 39)"
          />
          <ellipse
            cx="60"
            cy="39"
            rx="9"
            ry="17"
            transform="rotate(144 60 39)"
          />
          <ellipse
            cx="60"
            cy="39"
            rx="9"
            ry="17"
            transform="rotate(216 60 39)"
          />
          <ellipse
            cx="60"
            cy="39"
            rx="9"
            ry="17"
            transform="rotate(288 60 39)"
          />
          <circle cx="60" cy="39" r="5" />
        </g>
      </svg>
    );
  }

  if (season === "summer") {
    return (
      <svg aria-hidden="true" viewBox="0 0 120 120" className={className}>
        <g
          fill="none"
          stroke="currentColor"
          strokeLinecap="round"
          strokeWidth="2"
        >
          <circle cx="60" cy="60" r="24" />
          <circle cx="60" cy="60" r="34" opacity="0.35" />
          {Array.from({ length: 12 }).map((_, index) => {
            const angle = (index / 12) * Math.PI * 2;
            const x1 = 60 + Math.cos(angle) * 42;
            const y1 = 60 + Math.sin(angle) * 42;
            const x2 = 60 + Math.cos(angle) * 52;
            const y2 = 60 + Math.sin(angle) * 52;
            return <path key={index} d={`M${x1} ${y1} L${x2} ${y2}`} />;
          })}
        </g>
      </svg>
    );
  }

  if (season === "fall") {
    return (
      <svg aria-hidden="true" viewBox="0 0 120 120" className={className}>
        <g
          fill="none"
          stroke="currentColor"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
        >
          <path d="M24 72 C35 34 69 18 101 25 C98 62 77 92 39 96 C30 90 25 82 24 72 Z" />
          <path d="M31 88 C51 72 68 57 92 34" />
          <path d="M50 72 L45 49" />
          <path d="M65 59 L68 37" />
          <path d="M59 65 L84 66" />
          <path d="M72 52 L94 52" />
        </g>
      </svg>
    );
  }

  return (
    <svg aria-hidden="true" viewBox="0 0 120 120" className={className}>
      <g
        fill="none"
        stroke="currentColor"
        strokeLinecap="round"
        strokeWidth="2"
      >
        <path d="M60 12 V108 M18.5 36 L101.5 84 M18.5 84 L101.5 36" />
        <path d="M60 26 L51 35 M60 26 L69 35 M60 94 L51 85 M60 94 L69 85" />
        <path d="M30 43 L32 56 M30 43 L43 41 M90 77 L77 79 M90 77 L88 64" />
        <path d="M30 77 L43 79 M30 77 L32 64 M90 43 L77 41 M90 43 L88 56" />
        <circle cx="60" cy="60" r="7" />
      </g>
    </svg>
  );
}

function SeasonAtmosphere({
  season,
  color,
}: {
  season: SeasonKey;
  color: string;
}) {
  const count = season === "summer" ? 10 : 16;

  return (
    <div
      aria-hidden="true"
      className="pointer-events-none absolute inset-0 overflow-hidden"
    >
      {Array.from({ length: count }).map((_, index) => {
        const size =
          season === "fall" ? 7 + (index % 4) * 2 : 3 + (index % 3) * 1.5;
        const isSummer = season === "summer";

        return (
          <span
            key={index}
            className={`yard-xray__season-particle yard-xray__season-particle--${season} absolute`}
            style={{
              left: `${5 + ((index * 37) % 91)}%`,
              top: isSummer
                ? `${12 + ((index * 29) % 70)}%`
                : `${-12 - (index % 4) * 8}%`,
              width: `${size}px`,
              height: `${season === "fall" ? size * 0.58 : size}px`,
              borderRadius:
                season === "fall"
                  ? "75% 8% 75% 8%"
                  : season === "spring"
                    ? "75% 25% 75% 25%"
                    : "999px",
              backgroundColor: color,
              animationDelay: `${-index * 0.73}s`,
              animationDuration: `${5.8 + (index % 6) * 0.9}s`,
              opacity: 0.42 + (index % 4) * 0.12,
            }}
          />
        );
      })}
    </div>
  );
}

function SurfaceStage() {
  return (
    <div className="yard-xray__surface relative isolate overflow-hidden bg-paper">
      <div className="flex items-start justify-between gap-5 px-5 pt-6 sm:px-8 sm:pt-8 lg:px-10">
        <div className="flex items-center gap-3">
          <span className="relative grid h-8 w-8 place-items-center rounded-full border border-[color:var(--accent)]/35">
            <span className="font-mono text-[0.5rem] tracking-[0.04em] text-[color:var(--accent)]">
              01
            </span>
            <span className="yard-xray__grade-dot absolute inset-1 rounded-full border border-[color:var(--accent)]/25" />
          </span>
          <div>
            <p className="font-mono text-[0.625rem] tracking-[0.2em] text-ink uppercase">
              Above grade
            </p>
            <p className="mt-1 text-[0.6875rem] tracking-[0.08em] text-ink-soft">
              Seasonal surface care
            </p>
          </div>
        </div>

        <div className="hidden items-center gap-3 font-mono text-[0.5625rem] tracking-[0.18em] text-ink-soft uppercase sm:flex">
          <span>One property</span>
          <span className="h-px w-10 bg-ink/15" />
          <span>365 days of care</span>
        </div>
      </div>

      <div className="grid gap-8 px-5 pt-10 pb-10 sm:px-8 sm:pt-14 sm:pb-14 lg:grid-cols-[minmax(0,1fr)_minmax(18rem,24rem)] lg:items-end lg:gap-16 lg:px-10">
        <div>
          <p className="mb-5 flex items-center gap-3 font-mono text-[0.5625rem] tracking-[0.2em] text-ink-soft uppercase sm:mb-7">
            <span className="h-px w-8 bg-[color:var(--accent)]" />
            A full year of care
          </p>
          <h3
            id="ground-heading"
            className="max-w-[11ch] font-display text-[clamp(3.1rem,7.4vw,7.6rem)] leading-[0.82] font-semibold tracking-[-0.07em] text-ink uppercase"
          >
            One yard.
            <span className="block text-[color:var(--accent)]">
              Four seasons.
            </span>
          </h3>
        </div>

        <div className="border-t border-ink/15 pt-5 lg:border-t-0 lg:border-l lg:pt-0 lg:pl-7">
          <p className="max-w-[32rem] text-[clamp(1rem,1.4vw,1.2rem)] leading-[1.55] text-ink/70">
            Your yard changes with the weather. Our care changes with it—without lowering the standard.
          </p>

          <div className="mt-6 flex items-center gap-4 md:hidden" aria-label="Swipe horizontally to change the season">
            <span aria-hidden="true" className="yard-xray__swipe-cue relative h-11 w-[5.5rem] shrink-0 overflow-hidden rounded-full border border-ink/20 bg-ink/[0.035]">
              <span className="absolute top-1/2 left-3 -translate-y-1/2 text-[0.6875rem] text-ink/30">‹</span>
              <span className="absolute top-1/2 right-3 -translate-y-1/2 text-[0.6875rem] text-ink/30">›</span>
              <span className="yard-xray__swipe-thumb absolute top-1/2 left-1/2 grid h-7 w-7 translate-x-[-50%] translate-y-[calc(-50%+8px)] place-items-center rounded-full bg-[color:var(--accent)] text-[0.75rem] text-paper shadow-[0_5px_14px_rgba(18,44,35,0.2)]">↔</span>
            </span>
            <span>
              <span className="block font-mono text-[0.6875rem] font-semibold tracking-[0.18em] text-ink uppercase">Swipe to explore</span>
              <span className="mt-1 block text-[0.75rem] text-ink-soft">Drag sideways to change the season</span>
            </span>
          </div>

          <div className="mt-6 hidden items-center gap-3 md:flex">
            <span aria-hidden="true" className="h-2 w-2 rounded-full bg-[color:var(--accent)]" />
            <p className="font-mono text-[0.625rem] tracking-[0.16em] text-ink-soft uppercase">
              Hover a season to reveal its work
            </p>
          </div>
        </div>
      </div>

      <div className="yard-xray__panorama snap-x snap-mandatory touch-pan-x overflow-x-auto overscroll-x-contain border-t border-ink/10 [scrollbar-width:none] md:snap-none">
        <div className="yard-xray__season-track relative flex min-h-[34rem] w-max md:w-full">
          {seasonPanorama.map((season, index) => {
            const services = season.serviceNames.map(
              (serviceName) =>
                aboveGround.find((name) => name === serviceName) ?? serviceName,
            );

            return (
              <article
                key={season.key}
                aria-labelledby={`season-${season.key}`}
                className="yard-xray__season-panel group relative flex min-h-[34rem] w-[82vw] shrink-0 snap-center flex-col overflow-hidden border-r border-white/20 px-5 pt-5 pb-24 last:border-r-0 sm:w-[68vw] sm:px-6 md:w-auto md:min-w-0 md:flex-1 lg:px-7"
                style={{ background: season.background, color: season.ink }}
              >
                <SeasonAtmosphere season={season.key} color={season.particle} />

                <span
                  aria-hidden="true"
                  className="absolute -top-8 -right-2 font-display text-[10rem] leading-none font-bold tracking-[-0.08em] opacity-[0.055]"
                >
                  {String(index + 1).padStart(2, "0")}
                </span>

                <div className="relative z-10 flex items-center justify-between gap-4 font-mono text-[0.5625rem] tracking-[0.16em] uppercase">
                  <span
                    className="rounded-full border px-3 py-1.5"
                    style={{ borderColor: `${season.ink}2B` }}
                  >
                    S{String(index + 1).padStart(2, "0")}
                  </span>
                  <span className="opacity-60">{season.months}</span>
                </div>

                <div className="relative z-10 grid flex-1 place-items-center py-4 opacity-70">
                  <SeasonGlyph season={season.key} />
                </div>

                <div className="relative z-20 mt-auto">
                  <p className="font-mono text-[0.75rem] font-semibold tracking-[0.16em] uppercase opacity-85">
                    {season.line}
                  </p>
                  <h4
                    id={`season-${season.key}`}
                    className="mt-2 font-display text-[clamp(2.5rem,4.5vw,5.25rem)] leading-[0.82] font-semibold tracking-[-0.06em] uppercase"
                  >
                    {season.label}
                  </h4>

                  <ul className="mt-5 flex flex-wrap gap-2">
                    {services.map((name) => (
                      <li
                        key={name}
                        className="yard-xray__season-service rounded-full border px-3.5 py-2.5 text-[0.75rem] leading-none font-bold tracking-[0.06em] uppercase backdrop-blur-sm transition-transform duration-300"
                        style={{
                          borderColor: `${season.ink}55`,
                          backgroundColor: `${season.ink}14`,
                        }}
                      >
                        {name}
                      </li>
                    ))}
                  </ul>
                </div>

                <span
                  aria-hidden="true"
                  className="absolute inset-x-0 top-0 h-1 origin-left scale-x-0 transition-transform duration-700 group-hover:scale-x-100"
                  style={{ backgroundColor: season.accent }}
                />

                <SeasonHorizon season={season.key} />
              </article>
            );
          })}
        </div>
      </div>
    </div>
  );
}

function RootService({ name, index }: { name: string; index: number }) {
  const isLeft = index % 2 === 0;

  return (
    <li
      className={`group relative overflow-visible border border-paper/14 bg-paper/[0.045] p-5 backdrop-blur-[2px] transition-all duration-500 hover:-translate-y-1 hover:border-paper/35 hover:bg-paper/[0.09] sm:p-6 ${
        isLeft
          ? "lg:after:absolute lg:after:top-1/2 lg:after:left-full lg:after:h-px lg:after:w-40 lg:after:bg-paper/15"
          : "lg:after:absolute lg:after:top-1/2 lg:after:right-full lg:after:h-px lg:after:w-40 lg:after:bg-paper/15"
      }`}
    >
      <div className="flex items-start gap-4">
        <span className="grid h-8 w-8 shrink-0 place-items-center rounded-full border border-paper/20 font-mono text-[0.625rem] tracking-[0.12em] text-paper/55 transition-all duration-500 group-hover:border-[color:var(--accent)] group-hover:bg-[color:var(--accent)] group-hover:text-evergreen">
          {String(index + 1).padStart(2, "0")}
        </span>
        <div className="min-w-0">
          <p className="font-display text-base leading-[1.05] font-semibold tracking-[-0.02em] text-paper uppercase sm:text-lg">
            {name}
          </p>
          <p className="mt-2 text-[0.6875rem] leading-relaxed tracking-[0.12em] text-paper/42 uppercase">
            Foundation work · Root zone
          </p>
        </div>
      </div>

      <span
        aria-hidden="true"
        className={`absolute top-1/2 hidden h-2 w-2 -translate-y-1/2 rounded-full bg-[color:var(--accent)] shadow-[0_0_0_5px_rgba(255,255,255,0.06)] lg:block ${
          isLeft ? "-right-[10.25rem]" : "-left-[10.25rem]"
        }`}
      />
    </li>
  );
}

function RootCore() {
  return (
    <div
      aria-hidden="true"
      className="pointer-events-none absolute top-1/2 left-1/2 hidden h-72 w-72 -translate-x-1/2 -translate-y-1/2 place-items-center lg:grid"
    >
      <span className="yard-xray__pulse absolute h-full w-full rounded-full border border-paper/10" />
      <span className="yard-xray__pulse absolute h-[76%] w-[76%] rounded-full border border-paper/10 [animation-delay:-1.3s]" />
      <span className="absolute h-[55%] w-[55%] rounded-full border border-[color:var(--accent)]/45 bg-evergreen/80 shadow-[0_0_80px_rgba(255,255,255,0.06)]" />
      <span className="relative flex h-24 w-24 flex-col items-center justify-center rounded-full bg-[color:var(--accent)] text-center text-evergreen shadow-[0_0_50px_rgba(255,255,255,0.12)]">
        <span className="font-mono text-[0.5625rem] tracking-[0.2em]">
          ROOT
        </span>
        <span className="mt-1 font-display text-lg leading-none font-bold tracking-[-0.04em]">
          SYSTEM
        </span>
      </span>
    </div>
  );
}

export function CrossSection() {
  return (
    <section
      aria-labelledby="ground-heading"
      className="yard-xray relative isolate overflow-hidden bg-paper pt-0 pb-0 text-ink sm:pt-0 sm:pb-1 lg:pt-0 lg:pb-0"
    >
      <div>

        <div className="relative mt-14 border border-ink/12 bg-paper shadow-[0_40px_100px_rgba(18,44,35,0.12)] sm:mt-20">
          <SurfaceStage />

          <div className="relative z-30 h-0">
            <div className="absolute top-0 right-0 left-0 h-[3px] -translate-y-1/2 bg-[color:var(--accent)] shadow-[0_0_22px_color-mix(in_srgb,var(--accent)_55%,transparent)]" />
            <div className="absolute top-0 left-1/2 flex -translate-x-1/2 -translate-y-1/2 items-center gap-3 whitespace-nowrap border border-[color:var(--accent)] bg-paper px-4 py-2 font-mono text-[0.6875rem] tracking-[0.18em] text-ink uppercase shadow-[0_8px_30px_rgba(18,44,35,0.16)] sm:px-5">
              <span className="yard-xray__grade-dot h-1.5 w-1.5 rounded-full bg-[color:var(--accent)]" />
              Grade line · ± 00.00
            </div>
          </div>

          <div className="relative isolate overflow-hidden bg-evergreen px-4 pt-12 pb-7 text-paper sm:px-6 sm:pt-16 sm:pb-9 lg:px-8 lg:pt-20">
            <div
              aria-hidden="true"
              className="pointer-events-none absolute inset-0 -z-20"
              style={{
                background:
                  "radial-gradient(circle at 50% 6%, color-mix(in srgb, var(--accent) 18%, transparent), transparent 35%), repeating-linear-gradient(0deg, transparent 0 89px, rgba(243,240,231,0.045) 90px 91px)",
              }}
            />
            <div
              aria-hidden="true"
              className="pointer-events-none absolute inset-x-0 top-[28%] -z-10 h-px bg-paper/[0.045]"
            />
            <div
              aria-hidden="true"
              className="pointer-events-none absolute inset-x-0 top-[62%] -z-10 h-px bg-paper/[0.045]"
            />
            <SoilNetwork />

            <div className="relative z-10 flex items-center justify-between gap-4 border-b border-paper/12 pb-4">
              <div className="flex items-center gap-3">
                <span className="h-2 w-2 rounded-full border border-paper/40 bg-[color:var(--accent)]" />
                <h3 className="font-mono text-[0.75rem] tracking-[0.2em] text-paper uppercase">
                  02 / Below ground
                </h3>
              </div>
              <span className="font-mono text-[0.6875rem] tracking-[0.18em] text-paper/55 uppercase">
                Structural care
              </span>
            </div>

            <div className="relative py-10 sm:py-14 lg:py-20">
              <RootCore />
              <ul className="relative z-10 grid gap-4 sm:grid-cols-2 lg:gap-x-80 lg:gap-y-8 xl:gap-x-96">
                {belowGround.map((name, index) => (
                  <RootService key={name} name={name} index={index} />
                ))}
              </ul>
            </div>

            <div className="relative z-10 grid gap-8 border-t border-paper/12 pt-7 lg:grid-cols-[1fr_auto] lg:items-end">
              <p className="max-w-[34ch] font-display text-[clamp(1.55rem,3.2vw,3.6rem)] leading-[0.95] font-semibold tracking-[-0.045em] text-paper uppercase">
                The surface gets noticed.
                <span className="block text-[color:var(--accent)]">
                  The system earns it.
                </span>
              </p>

              <div className="flex min-w-60 items-center gap-4 border-t border-paper/15 pt-4 lg:border-t-0 lg:border-l lg:pt-0 lg:pl-6">
                <span className="relative grid h-11 w-11 shrink-0 place-items-center rounded-full border border-paper/20">
                  <span className="yard-xray__orbit absolute inset-1 rounded-full border-t border-[color:var(--accent)]" />
                  <span className="h-1.5 w-1.5 rounded-full bg-[color:var(--accent)]" />
                </span>
                <p className="font-mono text-[0.6875rem] leading-relaxed tracking-[0.16em] text-paper/60 uppercase">
                  One property
                  <br />
                  One complete system
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        .yard-xray__blade {
          transform-box: fill-box;
          transform-origin: 50% 100%;
          animation: yard-xray-sway 3.8s ease-in-out infinite alternate;
        }

        .yard-xray__root-flow path {
          stroke-dasharray: 1 18;
          animation: yard-xray-flow 5s linear infinite;
        }

        .yard-xray__panorama::-webkit-scrollbar {
          display: none;
        }

        .yard-xray__season-panel {
          transition:
            flex 850ms cubic-bezier(0.16, 1, 0.3, 1),
            filter 600ms ease,
            opacity 600ms ease;
        }

        .yard-xray__swipe-cue::after {
          position: absolute;
          right: 0.75rem;
          bottom: 0.4rem;
          left: 0.75rem;
          height: 1px;
          background: color-mix(in srgb, var(--accent) 32%, transparent);
          content: "";
        }

        .yard-xray__swipe-thumb {
          animation: yard-xray-swipe-hint 1.8s cubic-bezier(0.65, 0, 0.35, 1) infinite;
        }

        .yard-xray__season-glyph {
          animation: yard-xray-season-breathe 6s ease-in-out infinite alternate;
          transition: transform 800ms cubic-bezier(0.16, 1, 0.3, 1);
        }

        .yard-xray__season-particle--spring {
          animation-name: yard-xray-petal-fall;
          animation-timing-function: linear;
          animation-iteration-count: infinite;
        }

        .yard-xray__season-particle--summer {
          animation-name: yard-xray-glimmer;
          animation-timing-function: ease-in-out;
          animation-iteration-count: infinite;
          animation-direction: alternate;
        }

        .yard-xray__season-particle--fall {
          animation-name: yard-xray-leaf-fall;
          animation-timing-function: linear;
          animation-iteration-count: infinite;
        }

        .yard-xray__season-particle--winter {
          animation-name: yard-xray-snow-fall;
          animation-timing-function: linear;
          animation-iteration-count: infinite;
        }

        @media (min-width: 768px) {
          .yard-xray__season-track:hover .yard-xray__season-panel {
            flex: 0.78 1 0%;
            filter: saturate(0.7) contrast(0.94);
            opacity: 0.82;
          }

          .yard-xray__season-track:hover .yard-xray__season-panel:hover {
            flex: 1.65 1 0%;
            filter: saturate(1.06) contrast(1);
            opacity: 1;
          }

          .yard-xray__season-panel:hover .yard-xray__season-glyph {
            transform: translateY(-0.5rem) scale(1.12) rotate(4deg);
          }

          .yard-xray__season-panel:hover .yard-xray__season-service {
            transform: translateY(-2px);
          }
        }

        .yard-xray__pulse {
          animation: yard-xray-pulse 3.6s ease-out infinite;
        }

        .yard-xray__grade-dot {
          animation: yard-xray-blink 1.8s ease-in-out infinite;
        }

        .yard-xray__orbit {
          animation: yard-xray-orbit 5s linear infinite;
        }

        @keyframes yard-xray-sway {
          from { transform: rotate(-1.4deg); }
          to { transform: rotate(2.2deg); }
        }

        @keyframes yard-xray-flow {
          to { stroke-dashoffset: -76; }
        }

        @keyframes yard-xray-season-breathe {
          from { transform: translateY(0) rotate(-1.5deg); }
          to { transform: translateY(-0.5rem) rotate(1.5deg); }
        }

        @keyframes yard-xray-swipe-hint {
          0%, 100% { transform: translate3d(-50%, -50%, 0); }
          35% { transform: translate3d(calc(-50% + 1rem), -50%, 0); }
          70% { transform: translate3d(calc(-50% - 1rem), -50%, 0); }
        }

        @keyframes yard-xray-petal-fall {
          0% { transform: translate3d(-1rem, -2rem, 0) rotate(0deg); }
          50% { transform: translate3d(1.5rem, 18rem, 0) rotate(150deg); }
          100% { transform: translate3d(-0.75rem, 38rem, 0) rotate(320deg); }
        }

        @keyframes yard-xray-leaf-fall {
          0% { transform: translate3d(1rem, -2rem, 0) rotate(0deg); }
          45% { transform: translate3d(-2rem, 17rem, 0) rotate(210deg); }
          100% { transform: translate3d(1.25rem, 38rem, 0) rotate(480deg); }
        }

        @keyframes yard-xray-snow-fall {
          0% { transform: translate3d(-0.5rem, -2rem, 0); }
          50% { transform: translate3d(1.25rem, 18rem, 0); }
          100% { transform: translate3d(-0.25rem, 38rem, 0); }
        }

        @keyframes yard-xray-glimmer {
          from { transform: scale(0.55); opacity: 0.18; }
          to { transform: scale(1.65); opacity: 0.95; }
        }

        @keyframes yard-xray-pulse {
          0% { opacity: 0; transform: scale(0.66); }
          30% { opacity: 0.65; }
          100% { opacity: 0; transform: scale(1.04); }
        }

        @keyframes yard-xray-blink {
          50% { opacity: 0.28; transform: scale(0.72); }
        }

        @keyframes yard-xray-orbit {
          to { transform: rotate(360deg); }
        }

        @media (prefers-reduced-motion: reduce) {
          .yard-xray__blade,
          .yard-xray__root-flow path,
          .yard-xray__season-glyph,
          .yard-xray__season-particle,
          .yard-xray__pulse,
          .yard-xray__grade-dot,
          .yard-xray__orbit {
            animation: none !important;
          }

          .yard-xray__swipe-thumb {
            animation: none !important;
          }

          .yard-xray__season-panel,
          .yard-xray__season-glyph,
          .yard-xray__season-service {
            transition: none !important;
          }
        }
      `}</style>
    </section>
  );
}
