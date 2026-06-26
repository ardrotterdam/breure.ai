import Link from "next/link"

import { HoverLift } from "@/components/motion/hover-lift"
import { StaggerInView, StaggerItem } from "@/components/motion/stagger-in-view"
import { dict, type Locale } from "@/lib/i18n"
import {
  findArticleBySlug,
  formatInsightDate,
  getInsightField,
  insightArticlePath,
  insightsIndexPath,
} from "@/lib/insights"

const FEATURED_SLUG = "maritime-website-design-trust"

interface LatestInsightSectionProps {
  locale?: Locale
}

export function LatestInsightSection({ locale = "nl" }: LatestInsightSectionProps) {
  const t = dict.latestInsight[locale]
  const article = findArticleBySlug(FEATURED_SLUG, "en")

  if (!article) return null

  const articleHref = insightArticlePath(article, locale)
  const indexHref = insightsIndexPath(locale)

  return (
    <section className="relative py-20 sm:py-24 lg:py-28 bg-background border-y border-border/40 overflow-hidden">
      <div
        className="absolute inset-0 opacity-[0.04] dark:opacity-[0.025]"
        style={{
          backgroundImage: `radial-gradient(circle at 1px 1px, var(--foreground) 1px, transparent 0)`,
          backgroundSize: "28px 28px",
        }}
      />

      <StaggerInView className="relative container mx-auto px-5 sm:px-6 lg:px-12">
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6 lg:gap-12 mb-10 sm:mb-12">
          <div className="max-w-2xl">
            <StaggerItem>
              <p className="text-xs sm:text-sm font-medium tracking-[0.3em] uppercase text-text-eyebrow mb-4">
                {t.eyebrow}
              </p>
            </StaggerItem>
            <StaggerItem>
              <h2 className="text-3xl sm:text-4xl lg:text-[2.75rem] font-light tracking-tight text-foreground">
                {t.title}
              </h2>
            </StaggerItem>
            <StaggerItem>
              <p className="mt-4 text-text-secondary text-base sm:text-lg leading-relaxed max-w-xl">
                {t.description}
              </p>
            </StaggerItem>
          </div>

          <StaggerItem>
            <Link
              href={indexHref}
              className="inline-flex items-center gap-2 text-sm font-medium text-accent-soft hover:text-accent transition-colors shrink-0"
            >
              {t.viewAll}
              <span aria-hidden>→</span>
            </Link>
          </StaggerItem>
        </div>

        <StaggerItem>
          <HoverLift className="group relative rounded-xl border border-border/60 bg-card/40 transition-colors hover:border-accent/30 hover:bg-card/60">
            <Link href={articleHref} className="block p-7 sm:p-9 lg:p-10">
              <div className="absolute top-0 left-0 w-16 h-[2px] bg-accent opacity-60" />
              <div className="absolute top-0 left-0 w-[2px] h-16 bg-accent opacity-60" />

              <div className="mb-4 flex flex-wrap items-center gap-x-4 gap-y-2 text-xs text-text-eyebrow">
                {t.languageBadge ? (
                  <>
                    <span className="inline-flex items-center rounded border border-border/60 px-2 py-0.5 font-semibold tracking-wider uppercase text-accent-soft">
                      {t.languageBadge}
                    </span>
                    <span aria-hidden>·</span>
                  </>
                ) : null}
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

              <h3 className="text-xl sm:text-2xl lg:text-[1.75rem] font-light tracking-tight text-foreground group-hover:text-accent transition-colors max-w-3xl">
                {getInsightField(article, "title", locale)}
              </h3>

              <p className="mt-4 text-sm sm:text-base text-text-secondary leading-relaxed max-w-3xl">
                {getInsightField(article, "excerpt", locale)}
              </p>

              <span className="mt-6 inline-flex items-center gap-2 text-sm font-medium text-foreground/80 group-hover:text-accent transition-colors">
                {t.readArticle}
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
          </HoverLift>
        </StaggerItem>
      </StaggerInView>
    </section>
  )
}
