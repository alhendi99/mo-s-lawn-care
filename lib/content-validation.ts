import type { CanonicalRoute } from '../content/types.ts'

type ApprovedBusinessFactsShape = Readonly<{
  verification: Readonly<{ status: string }>
  origin: string
  phone: Readonly<{ display: string; e164: string; href: string }>
  email: Readonly<{ address: string; href: string }>
  serviceAreas: readonly Readonly<{ id: string; city: string }>[]
  [key: string]: unknown
}>

type PendingBusinessFactsShape = Readonly<
  Record<string, Readonly<{ status: string; [key: string]: unknown }>>
>

type TaskOneValidationInput = Readonly<{
  routes: readonly CanonicalRoute[]
  expectedPaths: readonly string[]
  expectedPrimaryKeywords: Readonly<Record<string, string>>
  expectedOrigin: string
  approvedBusinessFacts: ApprovedBusinessFactsShape
  pendingBusinessFacts: PendingBusinessFactsShape
}>

const forbiddenPaths = new Set([
  '/service-areas/des-moines-ia',
  '/services/aeration',
  '/services/overseeding',
  '/services/seeding',
  '/services/fertilization',
  '/services/weed-control',
  '/services/fall-cleanup',
  '/services/leaf-removal',
  '/services/overgrown-yard-cleanup',
  '/services/ground-clearance',
])

const forbiddenApprovedFactKeys = [
  'publicAddress',
  'openingHours',
  'workingHours',
  'googleReviewProfile',
  'googleReviewSummary',
  'googleReviewUrl',
  'reviewCount',
  'rating',
  'socialLinks',
  'socialProfiles',
] as const

function duplicates(values: readonly string[]) {
  return [...new Set(values.filter((value, index) => values.indexOf(value) !== index))]
}

function sameMembers(actual: readonly string[], expected: readonly string[]) {
  return actual.length === expected.length && actual.every((value) => expected.includes(value))
}

export function collectTaskOneValidationErrors(input: TaskOneValidationInput) {
  const errors: string[] = []
  const { routes, approvedBusinessFacts, pendingBusinessFacts } = input
  const ids = routes.map(({ id }) => id)
  const paths = routes.map(({ path }) => path)
  const canonicalUrls = routes.map(({ canonicalUrl }) => canonicalUrl)
  const titles = routes.map(({ title }) => title)
  const h1s = routes.map(({ h1 }) => h1)
  const primaryKeywords = routes.map(({ primaryKeyword }) => primaryKeyword)
  const routeById = new Map(routes.map((route) => [route.id, route]))

  if (routes.length !== 29) errors.push(`Expected 29 routes, found ${routes.length}.`)

  if (!sameMembers(paths, input.expectedPaths)) {
    errors.push('Route paths do not match the exact 29-path Task 1 allowlist.')
  }

  for (const [label, values] of [
    ['route IDs', ids],
    ['paths', paths],
    ['canonical URLs', canonicalUrls],
    ['titles', titles],
    ['H1s', h1s],
    ['primary keywords', primaryKeywords],
  ] as const) {
    const found = duplicates(values)
    if (found.length > 0) errors.push(`Duplicate ${label}: ${found.join(', ')}`)
  }

  for (const route of routes) {
    if (route.path !== '/' && (!route.path.startsWith('/') || route.path.endsWith('/'))) {
      errors.push(`Canonical path must be root or non-trailing-slash absolute path: ${route.path}`)
    }
    if (route.path.includes('?') || route.path.includes('#') || route.path.includes('//')) {
      errors.push(`Canonical path contains a query, fragment, or duplicate slash: ${route.path}`)
    }
    if (forbiddenPaths.has(route.path)) errors.push(`Forbidden thin or competing route present: ${route.path}`)
    if (/^\/service-areas\/[^/]+\/(?:services\/)?[^/]+$/.test(route.path)) {
      errors.push(`Forbidden service/city permutation present: ${route.path}`)
    }

    const expectedCanonical =
      route.path === '/' ? `${input.expectedOrigin}/` : `${input.expectedOrigin}${route.path}`
    if (route.canonicalUrl !== expectedCanonical) {
      errors.push(`Canonical URL mismatch for ${route.id}: ${route.canonicalUrl}`)
    }

    if (!route.title.trim() || !route.h1.trim() || !route.description.trim()) {
      errors.push(`Required ownership copy is blank for ${route.id}.`)
    }
    if (input.expectedPrimaryKeywords[route.path] !== route.primaryKeyword) {
      errors.push(`Primary keyword mismatch for ${route.path}.`)
    }
    if (route.secondaryKeywordStatus === 'defined' && route.secondaryKeywords.length === 0) {
      errors.push(`Defined secondary keywords are empty for ${route.id}.`)
    }
    if (route.secondaryKeywordStatus === 'pending-research' && route.secondaryKeywords.length !== 0) {
      errors.push(`Pending secondary keywords must remain empty for ${route.id}.`)
    }
    if (route.publicationStatus === 'published' && route.implementationStatus !== 'implemented') {
      errors.push(`Published route is not implemented: ${route.id}.`)
    }
    if (route.id === 'home' && (route.implementationStatus !== 'implemented' || route.publicationStatus !== 'published')) {
      errors.push('Homepage lifecycle state must reflect the existing published route.')
    }
    if (route.id !== 'home' && (route.implementationStatus !== 'planned' || route.publicationStatus !== 'planned')) {
      errors.push(`Task 1 must not mark an interior route implemented or published: ${route.id}.`)
    }
    if (route.indexability !== 'indexable') errors.push(`Target route is not marked indexable: ${route.id}.`)

    if (route.id === 'home' && route.parentId !== null) errors.push('Homepage must not have a parent.')
    if (route.id !== 'home' && !route.parentId) errors.push(`Interior route has no parent: ${route.id}.`)
    if (route.parentId && !routeById.has(route.parentId)) {
      errors.push(`Unknown parent ${route.parentId} on ${route.id}.`)
    }

    for (const [label, references] of [
      ['inbound', route.inboundLinkIds],
      ['outbound', route.outboundLinkIds],
    ] as const) {
      const duplicateReferences = duplicates(references)
      if (duplicateReferences.length > 0) {
        errors.push(`Duplicate ${label} references on ${route.id}: ${duplicateReferences.join(', ')}`)
      }
      for (const reference of references) {
        if (!routeById.has(reference)) errors.push(`Unknown ${label} reference ${reference} on ${route.id}.`)
        if (reference === route.id) errors.push(`Self-referential ${label} link on ${route.id}.`)
      }
    }

    const seenParents = new Set<string>()
    let parentId = route.parentId
    while (parentId) {
      if (seenParents.has(parentId)) {
        errors.push(`Parent cycle detected from ${route.id}.`)
        break
      }
      seenParents.add(parentId)
      parentId = routeById.get(parentId)?.parentId ?? null
    }
  }

  if (approvedBusinessFacts.verification.status !== 'verified') {
    errors.push('Approved business facts must carry verified status.')
  }
  if (approvedBusinessFacts.origin !== input.expectedOrigin) {
    errors.push('Approved business origin does not match the canonical origin.')
  }
  if (!/^\+1\d{10}$/.test(approvedBusinessFacts.phone.e164)) {
    errors.push('Approved phone number is not normalized to US E.164.')
  }
  if (approvedBusinessFacts.phone.href !== `tel:${approvedBusinessFacts.phone.e164}`) {
    errors.push('Approved phone href does not match its E.164 value.')
  }
  if (!approvedBusinessFacts.phone.display.trim()) errors.push('Approved phone display value is blank.')
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(approvedBusinessFacts.email.address)) {
    errors.push('Approved email address is invalid.')
  }
  if (approvedBusinessFacts.email.href !== `mailto:${approvedBusinessFacts.email.address}`) {
    errors.push('Approved email href does not match its address.')
  }

  const expectedAreaIds = ['des-moines-ia', 'ankeny-ia', 'waukee-ia', 'norwalk-ia', 'altoona-ia']
  const expectedAreaCities = ['Des Moines', 'Ankeny', 'Waukee', 'Norwalk', 'Altoona']
  const areaIds = approvedBusinessFacts.serviceAreas.map(({ id }) => id)
  const areaCities = approvedBusinessFacts.serviceAreas.map(({ city }) => city)
  if (!sameMembers(areaIds, expectedAreaIds) || !sameMembers(areaCities, expectedAreaCities)) {
    errors.push('Approved service areas must contain exactly Des Moines, Ankeny, Waukee, Norwalk, and Altoona.')
  }

  for (const key of forbiddenApprovedFactKeys) {
    if (Object.hasOwn(approvedBusinessFacts, key)) {
      errors.push(`Unverified optional field appears in approved business facts: ${key}.`)
    }
  }

  for (const [key, pendingFact] of Object.entries(pendingBusinessFacts)) {
    if (pendingFact.status !== 'pending-confirmation') {
      errors.push(`Pending fact ${key} does not have pending-confirmation status.`)
    }
    const extraKeys = Object.keys(pendingFact).filter((field) => field !== 'status')
    if (extraKeys.length > 0) {
      errors.push(`Pending fact ${key} stores an unverified value: ${extraKeys.join(', ')}.`)
    }
  }

  return errors
}

export function assertTaskOneFoundation(input: TaskOneValidationInput) {
  const errors = collectTaskOneValidationErrors(input)
  if (errors.length > 0) {
    throw new Error(`Task 1 foundation validation failed:\n- ${errors.join('\n- ')}`)
  }
}
