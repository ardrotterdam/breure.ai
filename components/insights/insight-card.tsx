import Image from "next/image"
import Link from "next/link"

import {
  formatInsightDate,
  getImageAlt,
  getInsightField,
  insightArticlePath,
  type InsightArticle,
  type InsightLocale,
} from "@/lib/insights"

interface InsightCardProps {
  article: InsightArticle
  locale?: InsightLocale
}

export function InsightCard({ article, locale = "en" }: InsightCardProps) {
  const href = insightArticlePath(article, locale)
  const readLabel = locale === "nl" ? "Lees artikel" : "Read article"

  return (
    <article className="group relative overflow-hidden rounded-xl border border-border/60 bg-card/40 transition-colors hover:border-accent/30 hover:bg-card/60">
      {article.heroImage ? (
        <div className="relative aspect-video overflow-hidden border-b border-border/40">
          <Image
            src={article.heroImage.src}
            alt={getImageAlt(article.heroImage, locale)}
            width={article.heroImage.width ?? 1536}
            height={article.heroImage.height ?? 1024}
            className="h-full w-full object-cover object-center transition-transform duration-500 group-hover:scale-[1.02]"
            sizes="(max-width: 768px) 100vw, 768px"
          />
        </div>
      ) : null}

      <Link href={href} className="block p-6 sm:p-8">
        <div className="mb-4 flex flex-wrap items-center gap-x-4 gap-y-2 text-xs text-text-eyebrow">
          <span className="font-medium tracking-[0.2em] uppercase">
            {getInsightField(article, "category", locale)}
          </span>
          <span aria-hidden>·</span>
          <time dateTime={article.date}>
            {formatInsightDate(article.date, locale)}
          </time>
          <span aria-hidden>·</span>
          <span>{getInsightField(article, "readingTime", locale)}</span>
        </div>

        <h2 className="text-xl sm:text-2xl font-light tracking-tight text-foreground group-hover:text-accent transition-colors">
          {getInsightField(article, "title", locale)}
        </h2>

        <p className="mt-4 text-sm sm:text-base text-text-secondary leading-relaxed">
          {getInsightField(article, "excerpt", locale)}
        </p>

        <span className="mt-6 inline-flex items-center gap-2 text-sm text-foreground/80 group-hover:text-accent transition-colors">
          {readLabel}
          <svg
            className="h-4 w-4 transition-transform group-hover:translate-x-0.5"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            aria-hidden
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M17 8l4 4m0 0l-4 4m4-4H3"
            />
          </svg>
        </span>
      </Link>
    </article>
  )
}
