const LOCAL_ORIGIN = 'http://localhost:3000'

function toOrigin(value: string | undefined) {
  if (!value) return undefined

  const candidate = /^https?:\/\//i.test(value) ? value : `https://${value}`

  try {
    return new URL(candidate).origin
  } catch {
    return undefined
  }
}

export function getSiteOrigin() {
  return (
    toOrigin(process.env.NEXT_PUBLIC_SITE_URL) ??
    toOrigin(process.env.SITE_URL) ??
    toOrigin(process.env.VERCEL_PROJECT_PRODUCTION_URL) ??
    toOrigin(process.env.VERCEL_URL) ??
    LOCAL_ORIGIN
  )
}

export function isIndexableProduction() {
  const hasCanonicalOrigin = Boolean(
    toOrigin(process.env.NEXT_PUBLIC_SITE_URL) ?? toOrigin(process.env.SITE_URL),
  )

  return (
    process.env.NODE_ENV === 'production' &&
    (hasCanonicalOrigin || process.env.VERCEL_ENV === 'production')
  )
}
