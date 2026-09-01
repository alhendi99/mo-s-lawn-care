import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import { BlogArticle } from '@/components/blog-article'
import { getPublishedArticleBySlug, getPublishedArticleRoute, getPublishedArticles } from '@/content/blog'
import { buildRouteMetadata } from '@/lib/metadata'
import { buildBlogPostingStructuredData } from '@/lib/structured-data'

type ArticlePageProps = Readonly<{
  params: Promise<{ slug: string }>
}>

export function generateStaticParams() {
  return getPublishedArticles().map(({ slug }) => ({ slug }))
}

export async function generateMetadata({ params }: ArticlePageProps): Promise<Metadata> {
  const { slug } = await params
  const article = getPublishedArticleBySlug(slug)
  if (!article) notFound()
  return buildRouteMetadata(getPublishedArticleRoute(article))
}

export default async function ArticlePage({ params }: ArticlePageProps) {
  const { slug } = await params
  const article = getPublishedArticleBySlug(slug)
  if (!article) notFound()

  const publicRoute = getPublishedArticleRoute(article)
  return (
    <BlogArticle
      article={article}
      structuredDataNode={buildBlogPostingStructuredData(publicRoute, article)}
    />
  )
}
