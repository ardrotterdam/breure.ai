import type { Metadata } from "next"
import { notFound } from "next/navigation"

import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { InsightArticleView } from "@/components/insights/insight-article-view"
import { buildInsightArticleMetadataBySlug } from "@/lib/insights-metadata"
import {
  articleHasLocale,
  findArticleBySlug,
  insightArticles,
} from "@/lib/insights"

const locale = "en" as const

type InsightArticlePageProps = {
  params: Promise<{ slug: string }>
}

export function generateStaticParams() {
  return insightArticles
    .filter((article) => articleHasLocale(article, locale))
    .map((article) => ({ slug: article.slug }))
}

export async function generateMetadata({
  params,
}: InsightArticlePageProps): Promise<Metadata> {
  const { slug } = await params
  return buildInsightArticleMetadataBySlug(slug, locale)
}

export default async function InsightArticlePage({
  params,
}: InsightArticlePageProps) {
  const { slug } = await params
  const article = findArticleBySlug(slug, locale)

  if (!article) {
    notFound()
  }

  return (
    <>
      <Navigation locale={locale} />
      <main>
        <InsightArticleView article={article} locale={locale} />
      </main>
      <Footer locale={locale} />
    </>
  )
}
