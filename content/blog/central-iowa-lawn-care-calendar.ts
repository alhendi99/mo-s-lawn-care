import { routesById } from '../routes.ts'
import type { PlannedBlogArticle } from '../types.ts'

const route = routesById['article-central-iowa-lawn-care-calendar']

export const centralIowaLawnCareCalendar = {
  routeId: 'article-central-iowa-lawn-care-calendar',
  slug: 'central-iowa-lawn-care-calendar',
  path: route.path,
  status: 'planned',
  title: route.title,
  h1: route.h1,
  description: route.description,
  primaryKeyword: route.primaryKeyword,
  secondaryKeywords: [],
  publisher: 'organization',
  relatedServicePaths: [
    routesById['service-lawn-mowing'].path,
    routesById['service-aeration-overseeding'].path,
    routesById['service-spring-cleanup'].path,
    routesById['service-fall-cleanup-leaf-removal'].path,
  ],
  relatedArticlePaths: [
    routesById['article-when-to-aerate-lawn-iowa'].path,
    routesById['article-best-time-to-overseed-lawn-iowa'].path,
    routesById['article-how-often-to-mow-lawn-iowa'].path,
    routesById['article-spring-lawn-cleanup-des-moines'].path,
    routesById['article-fall-leaf-cleanup-des-moines'].path,
  ],
} as const satisfies PlannedBlogArticle
