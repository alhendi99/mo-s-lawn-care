export const SITE_ORIGIN = 'https://www.moslawncaredsm.com'

export type CanonicalPath = '/' | `/${string}`

export function getSiteOrigin() {
  return SITE_ORIGIN
}

export function isCanonicalPath(path: string): path is CanonicalPath {
  if (path === '/') return true

  return (
    path.startsWith('/') &&
    !path.endsWith('/') &&
    !path.includes('?') &&
    !path.includes('#') &&
    !path.includes('//')
  )
}

export function getCanonicalUrl(path: CanonicalPath) {
  if (!isCanonicalPath(path)) {
    throw new Error(`Invalid canonical path: ${path}`)
  }

  return path === '/' ? `${SITE_ORIGIN}/` : `${SITE_ORIGIN}${path}`
}
