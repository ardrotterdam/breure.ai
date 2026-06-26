import Link from "next/link"

import {
  formatInsightDate,
  insightArticlePath,
  type InsightArticle,
} from "@/lib/insights"

interface InsightCardProps {
  article: InsightArticle
}

export function InsightCard({ article }: InsightCardProps) {
  const href = insightArticlePath(article.slug)

  return (
    <article className="group relative rounded-xl border border-border/60 bg-card/40 transition-colors hover:border-accent/30 hover:bg-card/60">
      <Link href={href} className="block p-6 sm:p-8">
        <div className="mb-4 flex flex-wrap items-center gap-x-4 gap-y-2 text-xs text-text-eyebrow">
          <span className="font-medium tracking-[0.2em] uppercase">
            {article.category}
          </span>
          <span aria-hidden>·</span>
          <time dateTime={article.date}>{formatInsightDate(article.date)}</time>
          <span aria-hidden>·</span>
          <span>{article.readingTime}</span>
        </div>

        <h2 className="text-xl sm:text-2xl font-light tracking-tight text-foreground group-hover:text-accent transition-colors">
          {article.title}
        </h2>

        <p className="mt-4 text-sm sm:text-base text-text-secondary leading-relaxed">
          {article.excerpt}
        </p>

        <span className="mt-6 inline-flex items-center gap-2 text-sm text-foreground/80 group-hover:text-accent transition-colors">
          Read article
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
