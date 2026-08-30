import type { StructuredDataDocument } from '@/lib/structured-data'
import { serializeStructuredData } from '@/lib/structured-data'

type StructuredDataProps = {
  data: StructuredDataDocument
}

export function StructuredData({ data }: StructuredDataProps) {
  const json = serializeStructuredData(data)

  return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: json }} />
}
