import type { ReactNode } from 'react'
import { routesById } from '@/content/routes'
import type { RouteId } from '@/content/types'
import { buildPageStructuredData, type StructuredDataNode } from '@/lib/structured-data'
import { Breadcrumbs } from './breadcrumbs'
import { StructuredData } from './structured-data'

type InteriorPageShellProps = Readonly<{
  routeId: Exclude<RouteId, 'home'>
  children: ReactNode
  className?: string
  breadcrumbClassName?: string
  structuredDataNodes?: readonly StructuredDataNode[]
}>

export function InteriorPageShell({
  routeId,
  children,
  className = '',
  breadcrumbClassName = '',
  structuredDataNodes = [],
}: InteriorPageShellProps) {
  const route = routesById[routeId]

  return (
    <>
      <StructuredData
        data={buildPageStructuredData(route, routesById.home, structuredDataNodes)}
      />
      <main className={`min-h-svh bg-paper pt-24 text-ink sm:pt-28 ${className}`}>
        <div className={`mx-auto w-full max-w-[112rem] px-5 sm:px-8 ${breadcrumbClassName}`}>
          <Breadcrumbs routeId={routeId} />
        </div>
        {children}
      </main>
    </>
  )
}
