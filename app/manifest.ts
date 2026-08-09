import type { MetadataRoute } from 'next'

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Mo's Lawn Care and Snow Removal Services LLC",
    short_name: "Mo's Lawn Care",
    description: 'Year-round lawn care and snow removal service in Des Moines, Iowa.',
    start_url: '/',
    display: 'standalone',
    background_color: '#102019',
    theme_color: '#102019',
    icons: [
      {
        src: '/icon-192.png',
        sizes: '192x192',
        type: 'image/png',
        purpose: 'any',
      },
      {
        src: '/icon-512.png',
        sizes: '512x512',
        type: 'image/png',
        purpose: 'any',
      },
    ],
  }
}
