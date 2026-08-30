import type { MetadataRoute } from 'next'
import { buildSitemapEntries } from '@/lib/metadata'

export default function sitemap(): MetadataRoute.Sitemap {
  return buildSitemapEntries()
}
