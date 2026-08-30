import type { MetadataRoute } from 'next'
import { routesById } from '@/content/routes'
import { approvedBusinessFacts } from '@/lib/site'

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: approvedBusinessFacts.legalName,
    short_name: approvedBusinessFacts.displayName,
    description: routesById.home.description,
    start_url: '/',
    display: 'standalone',
    background_color: '#102019',
    theme_color: '#102019',
    icons: [
      {
        src: '/logo-192x192.png',
        sizes: '192x192',
        type: 'image/png',
        purpose: 'any',
      },
      {
        src: '/logo-512x512.png',
        sizes: '512x512',
        type: 'image/png',
        purpose: 'any',
      },
    ],
  }
}
