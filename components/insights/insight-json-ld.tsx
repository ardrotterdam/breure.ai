import { JsonLd } from "@/components/json-ld"
import { buildInsightArticleJsonLd } from "@/lib/insights-metadata"
import type { InsightArticle, InsightLocale } from "@/lib/insights"

type InsightArticleJsonLdProps = {
  article: InsightArticle
  locale: InsightLocale
}

export function InsightArticleJsonLd({
  article,
  locale,
}: InsightArticleJsonLdProps) {
  return <JsonLd data={buildInsightArticleJsonLd(article, locale)} />
}
