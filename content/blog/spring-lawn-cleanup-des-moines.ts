import { routesById } from '../routes.ts'
import type { PlannedBlogArticle } from '../types.ts'

const route = routesById['article-spring-lawn-cleanup-des-moines']

export const springLawnCleanupDesMoines = {
  routeId: 'article-spring-lawn-cleanup-des-moines',
  slug: 'spring-lawn-cleanup-des-moines',
  path: route.path,
  status: 'planned',
  title: route.title,
  h1: route.h1,
  description: route.description,
  primaryKeyword: route.primaryKeyword,
  secondaryKeywords: [],
  publisher: 'organization',
  relatedServicePaths: [routesById['service-spring-cleanup'].path],
  relatedArticlePaths: [routesById['article-central-iowa-lawn-care-calendar'].path],
} as const satisfies PlannedBlogArticle
