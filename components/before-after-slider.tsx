import { getWorkComparisons } from '@/content/projects'
import { BeforeAfterSliderClient } from './BeforeAfterSliderClient'

export function BeforeAfterSlider({ mode = 'home' }: { mode?: 'home' | 'full' }) {
  return <BeforeAfterSliderClient comparisons={getWorkComparisons(mode)} />
}
