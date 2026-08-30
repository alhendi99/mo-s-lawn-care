import type { MetadataRoute } from 'next'
import { buildRobotsFile } from '@/lib/metadata'

export default function robots(): MetadataRoute.Robots {
  return buildRobotsFile()
}
