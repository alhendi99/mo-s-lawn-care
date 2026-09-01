import { routesById } from '../routes.ts'
import type { PlannedBlogArticle } from '../types.ts'

const route = routesById['article-fall-leaf-cleanup-des-moines']

export const fallLeafCleanupDesMoines = {
  routeId: 'article-fall-leaf-cleanup-des-moines',
  slug: 'fall-leaf-cleanup-des-moines',
  path: route.path,
  status: 'planned',
  title: route.title,
  h1: route.h1,
  description: route.description,
  primaryKeyword: route.primaryKeyword,
  secondaryKeywords: [],
  publisher: 'organization',
  relatedServicePaths: [routesById['service-fall-cleanup-leaf-removal'].path],
  relatedArticlePaths: [routesById['article-central-iowa-lawn-care-calendar'].path],
} as const satisfies PlannedBlogArticle
