import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { PageHeader } from "@/components/page-header"
import { InsightCard } from "@/components/insights/insight-card"
import { buildInsightsIndexMetadata } from "@/lib/insights-metadata"
import {
  getInsightsOverview,
  insightArticles,
} from "@/lib/insights"

const locale = "nl" as const

export const metadata = buildInsightsIndexMetadata(locale)

export default function DutchInsightsPage() {
  const overview = getInsightsOverview(locale)

  return (
    <>
      <Navigation locale={locale} />
      <main>
        <PageHeader
          eyebrow="Inzichten"
          title={
            <>
              Maritiem & offshore{" "}
              <span className="heading-accent-gradient">perspectieven</span>
            </>
          }
          description={overview.intro}
        />

        <section className="py-14 sm:py-16 lg:py-20 bg-background">
          <div className="container mx-auto px-5 sm:px-6 lg:px-12">
            <div className="max-w-3xl">
              {insightArticles.map((article) => (
                <InsightCard key={article.slug} article={article} locale={locale} />
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer locale={locale} />
    </>
  )
}
