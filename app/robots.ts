import type { MetadataRoute } from 'next'
import { getSiteOrigin, isIndexableProduction } from '@/lib/site-url'

export default function robots(): MetadataRoute.Robots {
  const origin = getSiteOrigin()

  if (!isIndexableProduction()) {
    return {
      rules: {
        userAgent: '*',
        disallow: '/',
      },
    }
  }

  return {
    rules: {
      userAgent: '*',
      allow: '/',
      disallow: '/api/',
    },
    sitemap: `${origin}/sitemap.xml`,
    host: origin,
  }
}
