import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import { ServiceDetailPage } from '@/components/service-detail-page'
import {
  getPublishedServiceDetail,
  publishedServiceSlugs,
} from '@/content/services'
import { routesById } from '@/content/routes'
import { buildRouteMetadata } from '@/lib/metadata'

type ServicePageProps = Readonly<{
  params: Promise<{ slug: string }>
}>

export const dynamicParams = true

export function generateStaticParams() {
  return publishedServiceSlugs.map((slug) => ({ slug }))
}

export async function generateMetadata({ params }: ServicePageProps): Promise<Metadata> {
  const { slug } = await params
  const service = getPublishedServiceDetail(slug)
  if (!service) notFound()

  return buildRouteMetadata(routesById[service.routeId])
}

export default async function ServicePage({ params }: ServicePageProps) {
  const { slug } = await params
  const service = getPublishedServiceDetail(slug)
  if (!service) notFound()

  return <ServiceDetailPage content={service} />
}
