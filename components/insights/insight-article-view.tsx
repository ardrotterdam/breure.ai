import Link from "next/link"

import { InsightArticleJsonLd } from "@/components/insights/insight-json-ld"
import { InsightBlocks } from "@/components/insights/insight-blocks"
import { InsightFigure } from "@/components/insights/insight-figure"
import { InsightHeroPlaceholder } from "@/components/insights/insight-hero-placeholder"
import { InsightRichText } from "@/components/insights/insight-rich-text"
import {
  formatInsightDate,
  getConclusionCta,
  getConclusionCtaLink,
  getConclusionHeading,
  getConclusionParagraphs,
  getImageAlt,
  getInlineImageCaption,
  getInsightField,
  getOpeningBlocks,
  getSectionBlocks,
  getSectionHeading,
  getSectionParagraphs,
  insightsIndexPath,
  type InsightArticle,
  type InsightLocale,
} from "@/lib/insights"

const COPY = {
  nl: {
    back: "Terug naar het blog",
    toBlog: "Naar het blog",
    related: "Gerelateerde pagina's",
    contact: { href: "/contact", label: "Bespreek je workflow" },
    software: { href: "/maritieme-software", label: "Maritieme software" },
    demo: { href: "/tools/vessel-comparison", label: "Bekijk de demo" },
  },
  en: {
    back: "Back to the blog",
    toBlog: "Back to the blog",
    related: "Related pages",
    contact: { href: "/en/contact", label: "Discuss your workflow" },
    software: { href: "/en/maritime-software", label: "Maritime software" },
    demo: { href: "/en/tools/vessel-comparison", label: "View the demo" },
  },
} as const

type InsightArticleViewProps = {
  article: InsightArticle
  locale: InsightLocale
}

export function InsightArticleView({ article, locale }: InsightArticleViewProps) {
  const copy = COPY[locale]
  const indexPath = insightsIndexPath(locale)
  const opening = getOpeningBlocks(article, locale)
  const introInHero = Boolean(opening?.length)
  const customCta = getConclusionCtaLink(article, locale)
  const ctaText = getConclusionCta(article, locale)
  const showDefaultAside = !customCta

  return (
    <>
      <InsightArticleJsonLd article={article} locale={locale} />
      <header className="relative pt-32 sm:pt-36 lg:pt-44 pb-12 sm:pb-14 lg:pb-16 bg-background overflow-hidden">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div
            className="absolute -top-32 -left-32 w-[480px] h-[480px] rounded-full blur-[140px]"
            style={{ backgroundColor: "var(--accent-blur)" }}
          />
          <div
            className="absolute top-0 right-0 w-[420px] h-[420px] rounded-full blur-[140px]"
            style={{ backgroundColor: "var(--divider-blur)" }}
          />
        </div>

        <div className="relative container mx-auto px-5 sm:px-6 lg:px-12 max-w-3xl">
          <Link
            href={indexPath}
            className="inline-flex items-center gap-2 text-xs sm:text-sm text-text-eyebrow hover:text-foreground transition-colors mb-8"
          >
            <svg
              className="h-4 w-4"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              aria-hidden
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M7 16l-4-4m0 0l4-4m-4 4h18"
              />
            </svg>
            {copy.back}
          </Link>

          <p className="text-xs sm:text-sm font-medium tracking-[0.3em] uppercase text-text-eyebrow mb-5">
            {getInsightField(article, "category", locale)}
          </p>

          <h1 className="text-[2rem] sm:text-4xl lg:text-5xl font-light tracking-tight text-foreground leading-[1.08]">
            {getInsightField(article, "title", locale)}
          </h1>

          {introInHero ? (
            <p className="mt-6 text-base sm:text-lg text-text-secondary leading-relaxed">
              {getInsightField(article, "intro", locale)}
            </p>
          ) : null}

          <div className="mt-6 flex flex-wrap items-center gap-x-4 gap-y-2 text-sm text-text-secondary">
            <time dateTime={article.date}>
              {formatInsightDate(article.date, locale)}
            </time>
            <span aria-hidden>·</span>
            <span>{getInsightField(article, "readingTime", locale)}</span>
          </div>
        </div>

        <div className="absolute bottom-0 left-0 right-0 h-px section-divider" />
      </header>

      <article className="py-14 sm:py-16 lg:py-20 bg-background">
        <div className="container mx-auto px-5 sm:px-6 lg:px-12 max-w-3xl">
          {article.heroImage ? (
            <InsightFigure
              src={article.heroImage.src}
              alt={getImageAlt(article.heroImage, locale)}
              width={article.heroImage.width}
              height={article.heroImage.height}
              priority
              variant="hero"
            />
          ) : (
            <figure className="mb-10 sm:mb-12">
              <div className="relative aspect-video overflow-hidden rounded-xl border border-border/40">
                <InsightHeroPlaceholder
                  label={article.heroPlaceholderLabel}
                />
              </div>
            </figure>
          )}

          {!introInHero ? (
            <p className="text-base sm:text-lg text-text-secondary leading-relaxed">
              {getInsightField(article, "intro", locale)}
            </p>
          ) : null}

          {opening ? <InsightBlocks blocks={opening} /> : null}

          {article.sections.map((section) => {
            const inlineImage = article.inlineImages?.find(
              (image) => image.afterSectionId === section.id,
            )
            const blocks = getSectionBlocks(section, locale)
            const paragraphs = getSectionParagraphs(section, locale)

            return (
              <section key={section.id} className="mt-12 sm:mt-14">
                <h2 className="text-xl sm:text-2xl font-light tracking-tight text-foreground">
                  {getSectionHeading(section, locale)}
                </h2>
                {blocks ? (
                  <InsightBlocks blocks={blocks} />
                ) : (
                  <div className="mt-5 space-y-4">
                    {paragraphs.map((paragraph) => (
                      <p
                        key={paragraph}
                        className="text-base sm:text-[1.05rem] text-text-secondary leading-relaxed"
                      >
                        {paragraph}
                      </p>
                    ))}
                  </div>
                )}

                {inlineImage ? (
                  <InsightFigure
                    src={inlineImage.src}
                    alt={getImageAlt(inlineImage, locale)}
                    width={inlineImage.width}
                    height={inlineImage.height}
                    caption={getInlineImageCaption(inlineImage, locale)}
                  />
                ) : null}
              </section>
            )
          })}

          <section className="mt-12 sm:mt-14">
            <h2 className="text-xl sm:text-2xl font-light tracking-tight text-foreground">
              {getConclusionHeading(article, locale)}
            </h2>
            <div className="mt-5 space-y-4">
              {getConclusionParagraphs(article, locale).map((paragraph) => (
                <p
                  key={paragraph}
                  className="text-base sm:text-[1.05rem] text-text-secondary leading-relaxed"
                >
                  <InsightRichText text={paragraph} />
                </p>
              ))}
            </div>
            {customCta ? (
              <div className="mt-8">
                <Link href={customCta.href} className="btn-primary px-6 py-3 text-sm">
                  {customCta.label}
                </Link>
              </div>
            ) : null}
          </section>

          {showDefaultAside ? (
            <aside className="mt-14 sm:mt-16 rounded-xl border border-border/60 bg-ocean-deep/40 p-6 sm:p-8">
              {ctaText ? (
                <p className="text-base sm:text-lg text-foreground leading-relaxed">
                  {ctaText}
                </p>
              ) : null}
              <div className="mt-6 flex flex-col sm:flex-row flex-wrap gap-3 sm:gap-4">
                <Link href={copy.contact.href} className="btn-primary px-5 py-3 text-sm">
                  {copy.contact.label}
                </Link>
                <Link href={copy.software.href} className="btn-secondary px-5 py-3 text-sm">
                  {copy.software.label}
                </Link>
                <Link href={copy.demo.href} className="btn-secondary px-5 py-3 text-sm">
                  {copy.demo.label}
                </Link>
              </div>
            </aside>
          ) : null}

          <nav
            className="mt-12 pt-8 border-t border-border/50"
            aria-label={copy.related}
          >
            {locale === "nl" ? (
              <p className="text-sm text-text-secondary mb-4">
                Ontdek hoe Breure.ai{" "}
                <Link
                  href="/maritieme-software"
                  className="text-foreground hover:text-accent transition-colors"
                >
                  gerichte maritieme software
                </Link>{" "}
                bouwt, bekijk de{" "}
                <Link
                  href="/tools/vessel-comparison"
                  className="text-foreground hover:text-accent transition-colors"
                >
                  Vessel Comparison Tool
                </Link>
                , of{" "}
                <Link
                  href="/contact"
                  className="text-foreground hover:text-accent transition-colors"
                >
                  bespreek een workflow
                </Link>
                .
              </p>
            ) : (
              <p className="text-sm text-text-secondary mb-4">
                Explore how Breure.ai builds{" "}
                <Link
                  href="/en/maritime-software"
                  className="text-foreground hover:text-accent transition-colors"
                >
                  focused maritime software
                </Link>
                , try the{" "}
                <Link
                  href="/en/tools/vessel-comparison"
                  className="text-foreground hover:text-accent transition-colors"
                >
                  Vessel Comparison Tool
                </Link>
                , or{" "}
                <Link
                  href="/en/contact"
                  className="text-foreground hover:text-accent transition-colors"
                >
                  discuss a workflow
                </Link>
                .
              </p>
            )}
            <Link
              href={indexPath}
              className="inline-flex items-center gap-2 text-sm text-foreground/80 hover:text-accent transition-colors"
            >
              <svg
                className="h-4 w-4"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                aria-hidden
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M7 16l-4-4m0 0l4-4m-4 4h18"
                />
              </svg>
              {copy.toBlog}
            </Link>
          </nav>
        </div>
      </article>
    </>
  )
}
