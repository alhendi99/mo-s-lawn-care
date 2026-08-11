export const serviceAreas = ['Des Moines', 'Ankeny', 'Waukee', 'Norwalk', 'Altoona'] as const
export const openingDays = [
  'Saturday',
  'Sunday',
  'Monday',
  'Tuesday',
  'Wednesday',
  'Thursday',
] as const

export const site = {
  companyName: "Mo's Lawn Care and Snow Removal Services LLC",
  shortName: "Mo's",
  wordmarkLine: 'Lawn Care & Snow Removal',
  phone: '(515) 868-8636', // e.g. "(515) 000-0000"
  phoneHref: 'tel:+15158688636',
  email: 'Moslawncaredsm@gmail.com',
  location: 'Des Moines, Iowa',
  serviceArea: serviceAreas.join(', '),
  workingHours: 'Saturday–Thursday, 9:00–11:00 PM',
  socialLinks: [] as { label: string; href: string }[],
  formEndpoint: '/api/estimate',
  heroVideo: '/hero-background.mp4',
  heroPoster: '/hero-poster.webp', // replace with /hero-poster.webp
} as const

export const nav = [
  { label: 'Seasons', href: '#seasons' },
  { label: 'Services', href: '#problems' },
  { label: 'Property', href: '#property' },
  { label: 'Our Work', href: '#work' },
  { label: 'Gallery', href: '#gallery' },
] as const

export const services = [
  'Mowing Service',
  'Fertilizing and Weed Control',
  'Flower Beds Maintenance',
  'Overgrown Yards Cleanup',
  'Spring Cleanup',
  'Fall Cleanup',
  'Leaves Removal',
  'Snow Removal',
  'Ground Clearance',
  'Grading',
  'Aeration and Seeding',
  'Landscaping',
] as const

export type SeasonKey = 'spring' | 'summer' | 'fall' | 'winter'

export type Season = {
  key: SeasonKey
  label: string
  months: string
  image: string
  headline: string
  copy: string
  services: string[]
  accent: string
  accentInk: string
  surface: string
}

export const seasons: Season[] = [
  {
    key: 'spring',
    label: 'Spring',
    months: 'Mar — May',
    image: '/seasons/spring.png',
    headline: 'Wake the yard up.',
    copy: 'Winter leaves a mess behind. Spring is for clearing it out, feeding the lawn and getting beds ready before growth takes off.',
    services: [
      'Spring Cleanup',
      'Aeration and Seeding',
      'Fertilizing and Weed Control',
      'Flower Beds Maintenance',
      'Landscaping',
      'Grading',
    ],

    // Fresh sage green
    accent: '#7FA66A',
    accentInk: '#182414',
    surface: '#F2F3E9',
  },

  {
    key: 'summer',
    label: 'Summer',
    months: 'Jun — Aug',
    image: '/seasons/summer.png',
    headline: 'Keep it sharp all season.',
    copy: 'Iowa summers grow fast. Consistent mowing, edging and weed control are what keep a property looking maintained instead of managed.',
    services: [
      'Mowing Service',
      'Fertilizing and Weed Control',
      'Flower Beds Maintenance',
      'Landscaping',
      'Overgrown Yards Cleanup',
    ],

    // Deep rich lawn green
    accent: '#39704A',
    accentInk: '#0C1E13',
    surface: '#EDF1E8',
  },

  {
    key: 'fall',
    label: 'Fall',
    months: 'Sep — Nov',
    image: '/seasons/fall.png',
    headline: 'Get ahead of the leaves.',
    copy: 'Leaves smother a lawn fast. Fall is for hauling them off, opening the soil and setting the yard up to survive the freeze.',
    services: [
      'Fall Cleanup',
      'Leaves Removal',
      'Aeration and Seeding',
      'Ground Clearance',
      'Overgrown Yards Cleanup',
    ],

    // Burnt autumn copper
    accent: '#B86632',
    accentInk: '#28140A',
    surface: '#F4EADF',
  },

  {
    key: 'winter',
    label: 'Winter',
    months: 'Dec — Feb',
    image: '/seasons/winter.png',
    headline: 'Keep the driveway open.',
    copy: 'When the snow comes, the job is access. Driveways, walks and entries cleared so you can get out and people can get in.',
    services: ['Snow Removal'],

    // Cold steel blue
    accent: '#6D8795',
    accentInk: '#101C23',
    surface: '#EBF0F2',
  },
]

export const problems = [
  {
    id: 'grass',
    title: 'The grass is out of control.',
    answer:
      'We get it back to a maintained height, haul the clippings, then keep it on a schedule so it never gets there again.',
    services: ['Mowing Service', 'Overgrown Yards Cleanup'],
  },
  {
    id: 'weeds',
    title: 'Weeds are taking over.',
    answer:
      'Targeted treatment plus feeding, so the lawn itself gets thick enough to crowd weeds out on its own.',
    services: ['Fertilizing and Weed Control'],
  },
  {
    id: 'thin',
    title: 'My lawn has bare / thin spots.',
    answer:
      'Compacted soil is usually the cause. We pull cores to open the ground, then drop seed straight into the holes.',
    services: ['Aeration and Seeding'],
  },
  {
    id: 'beds',
    title: 'The flower beds need help.',
    answer:
      'Beds get weeded, edged and re-defined — and if the layout is the real problem, we redesign it.',
    services: ['Flower Beds Maintenance', 'Landscaping'],
  },
  {
    id: 'leaves',
    title: 'Leaves. Everywhere.',
    answer:
      'Full removal off the lawn, beds and hard surfaces before they mat down and kill the grass underneath.',
    services: ['Leaves Removal', 'Fall Cleanup'],
  },
  {
    id: 'reset',
    title: 'The whole yard needs a reset.',
    answer:
      'A single clearing pass: debris out, growth cut back, edges re-cut. One visit that gives you a starting point again.',
    services: ['Spring Cleanup', 'Fall Cleanup', 'Ground Clearance'],
  },
  {
    id: 'uneven',
    title: 'The ground is uneven.',
    answer:
      'Low spots, ruts and water running the wrong direction get reshaped so the surface drains and mows cleanly.',
    services: ['Grading'],
  },
  {
    id: 'snow',
    title: 'Snow blocked the way.',
    answer:
      'Driveways, walkways and entries cleared so the property stays usable through the storm.',
    services: ['Snow Removal'],
  },
] as const

export type Hotspot = {
  id: string
  n: number
  label: string
  x: number
  y: number
  services: string[]
}

export const propertyHotspots: Hotspot[] = [
  { id: 'lawn', n: 1, label: 'The Lawn', x: 34, y: 76, services: ['Mowing Service', 'Fertilizing and Weed Control', 'Aeration and Seeding'] },
  { id: 'beds', n: 2, label: 'Flower Beds', x: 58, y: 53, services: ['Flower Beds Maintenance', 'Landscaping'] },
  { id: 'trees', n: 3, label: 'Trees & Leaves', x: 22, y: 22, services: ['Leaves Removal', 'Fall Cleanup'] },
  { id: 'mulch', n: 4, label: 'Ground & Mulch', x: 12, y: 62, services: ['Ground Clearance', 'Grading'] },
  { id: 'overgrown', n: 5, label: 'Landscape Edge', x: 88, y: 52, services: ['Overgrown Yards Cleanup', 'Landscaping', 'Spring Cleanup'] },
  { id: 'driveway', n: 6, label: 'The Driveway', x: 76, y: 84, services: ['Snow Removal'] },
]

export type Project = {
  id: string
  title: string
  meta: string
  before: string
  after: string
}

// Set `before`/`after` to real photos when available — e.g. "/projects/yard-before.webp"
export const projects: Project[] = [
  {
    id: '2',
    title: 'Fall / Leaves Cleanup',
    meta: 'Des Moines, IA',
    before: '/seasons/before-after/before2.webp',
    after: '/seasons/before-after/after2.webp',
  },
  {
    id: '3',
    title: 'Landscaping / Lawn Restoration',
    meta: 'Des Moines, IA',
    before: '/seasons/before-after/before3.webp',
    after: '/seasons/before-after/after3.webp',
  },
  {
    id: '4',
    title: 'Landscaping / Lawn Restoration',
    meta: 'Des Moines, IA',
    before: '/seasons/before-after/before4.webp',
    after: '/seasons/before-after/after4.webp',
  },
  {
    id: '5',
    title: 'Landscaping / Lawn Restoration',
    meta: 'Des Moines, IA',
    before: '/seasons/before-after/before5.webp',
    after: '/seasons/before-after/after5.webp',
  },
  {
    id: '6',
    title: 'Landscaping / Lawn Restoration',
    meta: 'Des Moines, IA',
    before: '/seasons/before-after/before6.webp',
    after: '/seasons/before-after/after6.webp',
  },
  {
    id: '7',
    title: 'Landscaping / Lawn Restoration',
    meta: 'Des Moines, IA',
    before: '/seasons/before-after/before7.webp',
    after: '/seasons/before-after/after7.webp',
  },
  {
    id: '8',
    title: 'Landscaping / Lawn Restoration',
    meta: 'Des Moines, IA',
    before: '/gallery7.webp',
    after: '/gallery8.webp',
  },
]

export const aboveGround = [
  'Mowing Service',
  'Flower Beds Maintenance',
  'Landscaping',
  'Overgrown Yards Cleanup',
  'Spring Cleanup',
  'Fall Cleanup',
  'Leaves Removal',
  'Snow Removal',
]

export const belowGround = [
  'Aeration and Seeding',
  'Fertilizing and Weed Control',
  'Grading',
  'Ground Clearance',
]
