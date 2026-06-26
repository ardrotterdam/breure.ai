import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { PageHeader } from "@/components/page-header"
import { InsightCard } from "@/components/insights/insight-card"
import {
  buildInsightsIndexMetadata,
  insightArticles,
  insightsOverview,
} from "@/lib/insights"

const locale = "en" as const

export const metadata = buildInsightsIndexMetadata()

export default function EnglishInsightsPage() {
  return (
    <>
      <Navigation locale={locale} />
      <main>
        <PageHeader
          eyebrow="Insights"
          title={
            <>
              Maritime & offshore{" "}
              <span className="heading-accent-gradient">perspectives</span>
            </>
          }
          description={insightsOverview.intro}
        />

        <section className="py-14 sm:py-16 lg:py-20 bg-background">
          <div className="container mx-auto px-5 sm:px-6 lg:px-12">
            <div className="max-w-3xl">
              {insightArticles.map((article) => (
                <InsightCard key={article.slug} article={article} />
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer locale={locale} />
    </>
  )
}
