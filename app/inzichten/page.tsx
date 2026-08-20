import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { PageHeader } from "@/components/page-header"
import { InsightCard } from "@/components/insights/insight-card"
import { buildInsightsIndexMetadata } from "@/lib/insights-metadata"
import {
  getInsightsOverview,
  listedInsightArticles,
} from "@/lib/insights"

const locale = "nl" as const

export const metadata = buildInsightsIndexMetadata(locale)

export default function DutchInsightsPage() {
  const overview = getInsightsOverview(locale)
  const articles = listedInsightArticles(locale)

  return (
    <>
      <Navigation locale={locale} />
      <main>
        <PageHeader
          eyebrow="Blog"
          title={
            <>
              Maritieme software{" "}
              <span className="heading-accent-gradient">in de praktijk</span>
            </>
          }
          description={overview.intro}
        />

        <section className="py-14 sm:py-16 lg:py-20 bg-background">
          <div className="container mx-auto px-5 sm:px-6 lg:px-12">
            <div className="max-w-3xl space-y-8">
              {articles.length === 0 ? (
                <p className="text-text-secondary text-base sm:text-lg leading-relaxed">
                  {overview.empty}
                </p>
              ) : (
                articles.map((article) => (
                  <InsightCard key={article.slug} article={article} locale={locale} />
                ))
              )}
            </div>
          </div>
        </section>
      </main>
      <Footer locale={locale} />
    </>
  )
}
