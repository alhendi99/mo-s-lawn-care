import { routesById } from '../routes.ts'
import type { PlannedBlogArticle } from '../types.ts'

const route = routesById['article-when-to-aerate-lawn-iowa']

export const whenToAerateLawnIowa = {
  routeId: 'article-when-to-aerate-lawn-iowa',
  slug: 'when-to-aerate-lawn-iowa',
  path: route.path,
  status: 'planned',
  title: route.title,
  h1: route.h1,
  description: route.description,
  primaryKeyword: route.primaryKeyword,
  secondaryKeywords: [],
  publisher: 'organization',
  relatedServicePaths: [routesById['service-aeration-overseeding'].path],
  relatedArticlePaths: [
    routesById['article-central-iowa-lawn-care-calendar'].path,
    routesById['article-best-time-to-overseed-lawn-iowa'].path,
  ],
} as const satisfies PlannedBlogArticle
