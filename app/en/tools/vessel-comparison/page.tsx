import type { Metadata } from "next"

import { Footer } from "@/components/footer"
import { Navigation } from "@/components/navigation"
import { PageHeader } from "@/components/page-header"
import { VesselComparisonTool } from "@/components/vessel-comparison/vessel-comparison-tool"
import { dict } from "@/lib/i18n"
import { buildPageMetadata } from "@/lib/page-metadata"
import { getVessels } from "@/lib/vessels/data"

const locale = "en" as const
const headerCopy = dict.pageHeaders.en.tools

export const metadata: Metadata = buildPageMetadata("tools", locale, {
  keywords: [
    "vessel comparison tool",
    "offshore vessel comparison",
    "crane load chart",
    "DP class comparison",
    "charter vessel specs",
    "offshore support vessel",
  ],
})

export default async function EnglishVesselComparisonPage() {
  const vessels = await getVessels()

  return (
    <>
      <Navigation locale={locale} />
      <main>
        <PageHeader
          eyebrow={headerCopy.eyebrow}
          title={
            <>
              {headerCopy.titlePrefix}{" "}
              <span className="heading-accent-gradient">
                {headerCopy.titleAccent}
              </span>
            </>
          }
          description={headerCopy.description}
        />

        <section className="border-t border-border bg-background pb-20 pt-4 sm:pb-28">
          <div className="container mx-auto px-5 sm:px-6 lg:px-12">
            <VesselComparisonTool vessels={vessels} />
          </div>
        </section>
      </main>
      <Footer locale={locale} />
    </>
  )
}
