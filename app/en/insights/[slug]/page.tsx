import type { Metadata } from "next"
import Link from "next/link"
import { notFound } from "next/navigation"

import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { InsightFigure } from "@/components/insights/insight-figure"
import {
  buildInsightArticleMetadata,
  formatInsightDate,
  getInsightBySlug,
  INSIGHTS_INDEX_PATH,
  insightArticles,
} from "@/lib/insights"

const locale = "en" as const

type InsightArticlePageProps = {
  params: Promise<{ slug: string }>
}

export function generateStaticParams() {
  return insightArticles.map((article) => ({ slug: article.slug }))
}

export async function generateMetadata({
  params,
}: InsightArticlePageProps): Promise<Metadata> {
  const { slug } = await params
  const article = getInsightBySlug(slug)
  if (!article) return {}

  return buildInsightArticleMetadata(article)
}

export default async function InsightArticlePage({
  params,
}: InsightArticlePageProps) {
  const { slug } = await params
  const article = getInsightBySlug(slug)

  if (!article) {
    notFound()
  }

  return (
    <>
      <Navigation locale={locale} />
      <main>
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
              href={INSIGHTS_INDEX_PATH}
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
              Back to Insights
            </Link>

            <p className="text-xs sm:text-sm font-medium tracking-[0.3em] uppercase text-text-eyebrow mb-5">
              {article.category}
            </p>

            <h1 className="text-[2rem] sm:text-4xl lg:text-5xl font-light tracking-tight text-foreground leading-[1.08]">
              {article.title}
            </h1>

            <div className="mt-6 flex flex-wrap items-center gap-x-4 gap-y-2 text-sm text-text-secondary">
              <time dateTime={article.date}>{formatInsightDate(article.date)}</time>
              <span aria-hidden>·</span>
              <span>{article.readingTime}</span>
            </div>
          </div>

          <div className="absolute bottom-0 left-0 right-0 h-px section-divider" />
        </header>

        <article className="py-14 sm:py-16 lg:py-20 bg-background">
          <div className="container mx-auto px-5 sm:px-6 lg:px-12 max-w-3xl">
            {article.heroImage ? (
              <InsightFigure
                src={article.heroImage.src}
                alt={article.heroImage.alt}
                width={article.heroImage.width}
                height={article.heroImage.height}
                priority
                variant="hero"
              />
            ) : null}

            <p className="text-base sm:text-lg text-text-secondary leading-relaxed">
              {article.intro}
            </p>

            {article.sections.map((section) => {
              const inlineImage = article.inlineImages?.find(
                (image) => image.afterSectionId === section.id,
              )

              return (
                <section key={section.id} className="mt-12 sm:mt-14">
                  <h2 className="text-xl sm:text-2xl font-light tracking-tight text-foreground">
                    {section.heading}
                  </h2>
                  <div className="mt-5 space-y-4">
                    {section.paragraphs.map((paragraph, index) => (
                      <p
                        key={index}
                        className="text-base sm:text-[1.05rem] text-text-secondary leading-relaxed"
                      >
                        {paragraph}
                      </p>
                    ))}
                  </div>

                  {inlineImage ? (
                    <InsightFigure
                      src={inlineImage.src}
                      alt={inlineImage.alt}
                      width={inlineImage.width}
                      height={inlineImage.height}
                      caption={inlineImage.caption}
                    />
                  ) : null}
                </section>
              )
            })}

            <section className="mt-12 sm:mt-14">
              <h2 className="text-xl sm:text-2xl font-light tracking-tight text-foreground">
                {article.conclusion.heading}
              </h2>
              <div className="mt-5 space-y-4">
                {article.conclusion.paragraphs.map((paragraph, index) => (
                  <p
                    key={index}
                    className="text-base sm:text-[1.05rem] text-text-secondary leading-relaxed"
                  >
                    {paragraph}
                  </p>
                ))}
              </div>
            </section>

            <aside className="mt-14 sm:mt-16 rounded-xl border border-border/60 bg-ocean-deep/40 p-6 sm:p-8">
              <p className="text-base sm:text-lg text-foreground leading-relaxed">
                {article.conclusion.cta}
              </p>
              <div className="mt-6 flex flex-col sm:flex-row flex-wrap gap-3 sm:gap-4">
                <Link href="/en/contact" className="btn-primary px-5 py-3 text-sm">
                  Get in touch
                </Link>
                <Link href="/en/services" className="btn-secondary px-5 py-3 text-sm">
                  Our services
                </Link>
                <Link href="/en/process" className="btn-secondary px-5 py-3 text-sm">
                  Our process
                </Link>
              </div>
            </aside>

            <nav
              className="mt-12 pt-8 border-t border-border/50"
              aria-label="Related pages"
            >
              <p className="text-sm text-text-secondary mb-4">
                Explore how Breure.ai approaches{" "}
                <Link href="/en/services" className="text-foreground hover:text-accent transition-colors">
                  maritime website design and asset microsites
                </Link>
                , our{" "}
                <Link href="/en/process" className="text-foreground hover:text-accent transition-colors">
                  project process
                </Link>{" "}
                from specs to launch, or{" "}
                <Link href="/en/contact" className="text-foreground hover:text-accent transition-colors">
                  contact us
                </Link>{" "}
                to discuss your fleet or offshore assets.
              </p>
              <Link
                href={INSIGHTS_INDEX_PATH}
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
                All Insights
              </Link>
            </nav>
          </div>
        </article>
      </main>
      <Footer locale={locale} />
    </>
  )
}
