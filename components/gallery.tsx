import {
  HOME_WORK_LIMIT,
  OUR_WORK_INITIAL_COUNT,
  WORK_BATCH_SIZE,
  getHomepageWorkRecords,
  getOurWorkRecords,
  toPublicWorkItem,
} from '@/content/projects'
import { GalleryClient } from './GalleryClient'

type GalleryProps = Readonly<{
  mode?: 'home' | 'full'
  limit?: number
}>

export function Gallery({ mode = 'home', limit = HOME_WORK_LIMIT }: GalleryProps) {
  if (mode === 'home') {
    const items = getHomepageWorkRecords(limit).map(toPublicWorkItem)
    return <GalleryClient mode="home" initialItems={items} totalCount={items.length} batchSize={items.length} />
  }

  const fullCollection = getOurWorkRecords()
  const initialItems = fullCollection.slice(0, OUR_WORK_INITIAL_COUNT).map(toPublicWorkItem)
  return <GalleryClient mode="full" initialItems={initialItems} totalCount={fullCollection.length} batchSize={WORK_BATCH_SIZE} />
}
