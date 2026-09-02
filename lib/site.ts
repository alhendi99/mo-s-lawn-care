import { SITE_ORIGIN } from './site-url.ts'

const approvedServiceAreas = [
  { id: 'des-moines-ia', city: 'Des Moines', region: 'Iowa', regionCode: 'IA', countryCode: 'US' },
  { id: 'ankeny-ia', city: 'Ankeny', region: 'Iowa', regionCode: 'IA', countryCode: 'US' },
  { id: 'waukee-ia', city: 'Waukee', region: 'Iowa', regionCode: 'IA', countryCode: 'US' },
  { id: 'norwalk-ia', city: 'Norwalk', region: 'Iowa', regionCode: 'IA', countryCode: 'US' },
  { id: 'altoona-ia', city: 'Altoona', region: 'Iowa', regionCode: 'IA', countryCode: 'US' },
] as const

/**
 * Repository-approved facts only. These values are confirmed by the task brief or
 * the site's existing contact configuration; they are not a home for inferred
 * capabilities, mutable review totals, or disputed profile data.
 */
export const approvedBusinessFacts = {
  verification: {
    status: 'verified' as const,
    basis: ['task-brief', 'existing-site-configuration', 'owner-confirmation'] as const,
  },
  legalName: "Mo's Lawn Care & Snow Removal Services LLC",
  displayName: "Mo's Lawn Care",
  shortName: "Mo's",
  wordmarkLine: 'Lawn Care & Snow Removal',
  origin: SITE_ORIGIN,
  phone: {
    display: '(515) 868-8636',
    e164: '+15158688636',
    href: 'tel:+15158688636',
  },
  email: {
    address: 'Moslawncaredsm@gmail.com',
    href: 'mailto:Moslawncaredsm@gmail.com',
  },
  primaryMarket: {
    city: 'Des Moines',
    region: 'Iowa',
    regionCode: 'IA',
    countryCode: 'US',
    displayName: 'Des Moines, Iowa',
  },
  serviceAreas: approvedServiceAreas,
  businessPresence: {
    type: 'service-area-business' as const,
    publicStreetAddress: { status: 'not-approved-for-publication' as const },
    localityOnlyPostalAddress: { status: 'prohibited' as const },
    geoCoordinates: { status: 'prohibited' as const },
  },
  openingHours: {
    status: 'verified' as const,
    days: [
      'Saturday',
      'Sunday',
      'Monday',
      'Tuesday',
      'Wednesday',
      'Thursday',
      'Friday',
    ] as const,
    opens: '08:00',
    closes: '18:00',
    displayCopy: 'Every day, 8:00 AM–6:00 PM',
  },
  externalProfiles: [
    {
      id: 'google-business-profile',
      label: 'Google Business Profile',
      href: "https://www.google.com/maps/place/Mo's+lawn+care+%26+Snow+removal+services+LLC/@41.6726616,-93.2424403,10z/data=!3m1!4b1!4m6!3m5!1s0x87ee99e896289b53:0x97b64e4e08676e75!8m2!3d41.6726196!4d-93.5720955!16s%2Fg%2F11h00c8p6r?entry=ttu&g_ep=EgoyMDI2MDgyNi4wIKXMDSoASAFQAw%3D%3D",
    },
  ] as const,
  reviewSummary: {
    sourceProfileId: 'google-business-profile',
    displayCopy: '170+ Google Reviews',
    countPolicy: 'minimum-display-copy' as const,
    aggregateRatingStructuredData: 'prohibited' as const,
  },
} as const

/**
 * No Task 1 business-presence field currently awaits owner confirmation.
 * Future unknowns must remain value-free until the owner confirms them.
 */
export const pendingBusinessFacts = {} as const

export const serviceAreas = approvedServiceAreas.map(({ city }) => city)

/**
 * @deprecated This legacy six-day export exists only so the untouched pre-Task-2
 * schema continues to compile without output changes. New consumers must use the
 * verified seven-day `approvedBusinessFacts.openingHours` record.
 */
export const openingDays = [
  'Saturday',
  'Sunday',
  'Monday',
  'Tuesday',
  'Wednesday',
  'Thursday',
] as const

export const site = {
  companyName: approvedBusinessFacts.legalName,
  displayName: approvedBusinessFacts.displayName,
  shortName: approvedBusinessFacts.shortName,
  wordmarkLine: approvedBusinessFacts.wordmarkLine,
  origin: approvedBusinessFacts.origin,
  phone: approvedBusinessFacts.phone.display,
  phoneE164: approvedBusinessFacts.phone.e164,
  phoneHref: approvedBusinessFacts.phone.href,
  email: approvedBusinessFacts.email.address,
  emailHref: approvedBusinessFacts.email.href,
  location: approvedBusinessFacts.primaryMarket.displayName,
  serviceArea: serviceAreas.join(', '),
  businessPresence: approvedBusinessFacts.businessPresence,
  openingHours: approvedBusinessFacts.openingHours,
  externalProfiles: approvedBusinessFacts.externalProfiles,
  googleBusinessProfileHref: approvedBusinessFacts.externalProfiles[0].href,
  reviewSummary: approvedBusinessFacts.reviewSummary,
  /** @deprecated Kept empty so the untouched pre-Task-2 schema output does not change. */
  socialLinks: [] as { label: string; href: string }[],
  formEndpoint: '/api/estimate',
  heroVideo: '/background.mp4',
  heroPoster: '/media/optimized/hero-poster.webp',
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
    copy: 'Snow Removal keeps the focus on driveways and access areas for residential and commercial properties. Exact property scope is confirmed through an estimate.',
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
      'Lawn mowing or yard cleanup may be the right place to start when grass has grown beyond routine care.',
    services: ['Mowing Service', 'Overgrown Yards Cleanup'],
  },
  {
    id: 'weeds',
    title: 'Weeds are taking over.',
    answer:
      'Fertilization and weed control is the relevant service path when weeds are the main lawn concern.',
    services: ['Fertilizing and Weed Control'],
  },
  {
    id: 'thin',
    title: 'My lawn has bare / thin spots.',
    answer:
      'Aeration and seeding is the service path to explore for bare or thin areas of a lawn.',
    services: ['Aeration and Seeding'],
  },
  {
    id: 'beds',
    title: 'The flower beds need help.',
    answer:
      'Flower bed maintenance or landscaping may fit, depending on what the beds and surrounding space need.',
    services: ['Flower Beds Maintenance', 'Landscaping'],
  },
  {
    id: 'leaves',
    title: 'Leaves. Everywhere.',
    answer:
      'Fall cleanup and leaf removal is the consolidated service path for seasonal leaf buildup.',
    services: ['Leaves Removal', 'Fall Cleanup'],
  },
  {
    id: 'reset',
    title: 'The whole yard needs a reset.',
    answer:
      'Yard cleanup and the relevant seasonal cleanup are the places to start when several areas need attention.',
    services: ['Spring Cleanup', 'Fall Cleanup', 'Ground Clearance'],
  },
  {
    id: 'uneven',
    title: 'The ground is uneven.',
    answer:
      'Grading is the relevant service path to discuss when outdoor ground is uneven.',
    services: ['Grading'],
  },
  {
    id: 'snow',
    title: 'Snow blocked the way.',
    answer:
      'Snow removal is the service path for residential and commercial properties affected by snowfall.',
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
