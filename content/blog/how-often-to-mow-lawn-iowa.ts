import { routesById } from '../routes.ts'
import type { PlannedBlogArticle } from '../types.ts'

const route = routesById['article-how-often-to-mow-lawn-iowa']

export const howOftenToMowLawnIowa = {
  routeId: 'article-how-often-to-mow-lawn-iowa',
  slug: 'how-often-to-mow-lawn-iowa',
  path: route.path,
  status: 'planned',
  title: route.title,
  h1: route.h1,
  description: route.description,
  primaryKeyword: route.primaryKeyword,
  secondaryKeywords: [],
  publisher: 'organization',
  relatedServicePaths: [routesById['service-lawn-mowing'].path],
  relatedArticlePaths: [routesById['article-central-iowa-lawn-care-calendar'].path],
} as const satisfies PlannedBlogArticle
