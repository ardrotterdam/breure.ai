import type { Metadata } from "next"

import {
  findArticleBySlug,
  getInsightField,
  getInsightKeywords,
  getInsightsOverview,
  insightArticlePath,
  insightArticles,
  insightsIndexPath,
  type InsightArticle,
  type InsightLocale,
} from "@/lib/insights"
import { absoluteUrl, buildInsightsPageMetadata } from "@/lib/page-metadata"

export function buildInsightsIndexMetadata(locale: InsightLocale): Metadata {
  const overview = getInsightsOverview(locale)
  const oppositeLocale: InsightLocale = locale === "nl" ? "en" : "nl"

  return buildInsightsPageMetadata({
    title: overview.seoTitle,
    description: overview.metaDescription,
    path: insightsIndexPath(locale),
    alternatePath: insightsIndexPath(oppositeLocale),
    locale,
    keywords: [
      "maritime website design",
      "offshore web design",
      "maritime insights",
      "shipping company website",
    ],
  })
}

export function buildInsightArticleMetadata(
  article: InsightArticle,
  locale: InsightLocale,
): Metadata {
  const oppositeLocale: InsightLocale = locale === "nl" ? "en" : "nl"

  return buildInsightsPageMetadata({
    title: getInsightField(article, "seoTitle", locale),
    description: getInsightField(article, "metaDescription", locale),
    path: insightArticlePath(article, locale),
    alternatePath: insightArticlePath(article, oppositeLocale),
    locale,
    keywords: getInsightKeywords(article, locale),
  })
}

export function buildInsightArticleMetadataBySlug(
  slug: string,
  locale: InsightLocale,
): Metadata {
  const article = findArticleBySlug(slug, locale)
  if (!article) return {}
  return buildInsightArticleMetadata(article, locale)
}

export function insightSitemapEntries() {
  const lastModified = new Date()
  const locales: InsightLocale[] = ["nl", "en"]

  return locales.flatMap((locale) => {
    const paths = [
      insightsIndexPath(locale),
      ...insightArticles.map((article) => insightArticlePath(article, locale)),
    ]

    return paths.map((path) => ({
      url: absoluteUrl(path),
      lastModified,
      changeFrequency: "monthly" as const,
      priority: path === insightsIndexPath(locale) ? 0.75 : 0.7,
    }))
  })
}
