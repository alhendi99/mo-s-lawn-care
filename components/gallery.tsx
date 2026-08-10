import fs from 'node:fs'
import path from 'node:path'

import { GalleryClient } from './GalleryClient'

function getGalleryItems() {
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
    .map((src, index) => ({
      src,
      label: `Project ${String(index + 1).padStart(2, '0')}`,
      alt: `Landscaping project ${index + 1}`,
    }))
}

export function Gallery() {
  const galleryItems = getGalleryItems()

  return <GalleryClient galleryItems={galleryItems} />
}