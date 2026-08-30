import fs from 'node:fs'
import path from 'node:path'

import { GalleryClient } from './GalleryClient'

function getGalleryItems(limit: number) {
  const filePath = path.join(
    process.cwd(),
    'data',
    'all_image_urls.txt'
  )

  const file = fs.readFileSync(filePath, 'utf8')

  return file
    .split(/\r?\n/)
    .map((url) => url.trim())
    .filter(Boolean)
    .slice(0, limit)
    .map((src, index) => ({
      src,
      label: `Gallery image ${String(index + 1).padStart(2, '0')}`,
      alt: `Property care gallery image ${index + 1}`,
    }))
}

export function Gallery({ limit = 8 }: { limit?: number }) {
  const galleryItems = getGalleryItems(limit)

  return <GalleryClient galleryItems={galleryItems} />
}
