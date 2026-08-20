import type { Metadata } from "next"

import {
  articleHasLocale,
  findArticleBySlug,
  getImageAlt,
  getInsightField,
  getInsightKeywords,
  getInsightsOverview,
  insightArticlePath,
  insightArticleWordCount,
  insightArticles,
  insightsIndexPath,
  type InsightArticle,
  type InsightLocale,
} from "@/lib/insights"
import { absoluteUrl, buildInsightsPageMetadata } from "@/lib/page-metadata"
import {
  buildBreadcrumbSchema,
  organizationId,
  SCHEMA_CONTEXT,
  websiteId,
} from "@/lib/schema"

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
      "maritime software",
      "maritieme software",
      "vessel comparison",
      "maritime workflows",
    ],
  })
}

export function buildInsightArticleMetadata(
  article: InsightArticle,
  locale: InsightLocale,
): Metadata {
  const oppositeLocale: InsightLocale = locale === "nl" ? "en" : "nl"
  const hasTranslation = articleHasLocale(article, oppositeLocale)
  const hero = article.heroImage

  return buildInsightsPageMetadata({
    title: getInsightField(article, "seoTitle", locale),
    description: getInsightField(article, "metaDescription", locale),
    path: insightArticlePath(article, locale),
    alternatePath: hasTranslation
      ? insightArticlePath(article, oppositeLocale)
      : undefined,
    locale,
    keywords: getInsightKeywords(article, locale),
    publishedTime: article.date,
    modifiedTime: article.dateModified ?? article.date,
    ...(hero
      ? {
          image: {
            url: absoluteUrl(hero.src),
            width: hero.width ?? 1536,
            height: hero.height ?? 1024,
            alt: getImageAlt(hero, locale),
          },
        }
      : {}),
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

export function buildInsightArticleJsonLd(
  article: InsightArticle,
  locale: InsightLocale,
): Record<string, unknown>[] {
  const path = insightArticlePath(article, locale)
  const url = absoluteUrl(path)
  const title = getInsightField(article, "title", locale)
  const homeHref = locale === "nl" ? "/" : "/en"
  const hero = article.heroImage

  return [
    {
      "@context": SCHEMA_CONTEXT,
      "@type": "BlogPosting",
      headline: title,
      description: getInsightField(article, "metaDescription", locale),
      datePublished: article.date,
      dateModified: article.dateModified ?? article.date,
      inLanguage: locale === "nl" ? "nl-NL" : "en-US",
      author: { "@id": organizationId },
      publisher: { "@id": organizationId },
      mainEntityOfPage: {
        "@type": "WebPage",
        "@id": url,
      },
      url,
      isPartOf: { "@id": websiteId },
      wordCount: insightArticleWordCount(article, locale),
      ...(hero
        ? {
            image: {
              "@type": "ImageObject",
              url: absoluteUrl(hero.src),
              width: hero.width,
              height: hero.height,
            },
          }
        : {}),
    },
    buildBreadcrumbSchema([
      { name: "Home", href: homeHref },
      { name: "Blog", href: insightsIndexPath(locale) },
      { name: title, href: path },
    ]),
  ]
}

export function insightSitemapEntries() {
  const lastModified = new Date()
  const locales: InsightLocale[] = ["nl", "en"]

  return locales.flatMap((locale) => {
    const paths = [
      insightsIndexPath(locale),
      ...insightArticles
        .filter((article) => articleHasLocale(article, locale))
        .map((article) => insightArticlePath(article, locale)),
    ]

    return paths.map((path) => ({
      url: absoluteUrl(path),
      lastModified,
      changeFrequency: "monthly" as const,
      priority: path === insightsIndexPath(locale) ? 0.75 : 0.7,
    }))
  })
}
