import type { Metadata } from "next"

import { BreadcrumbJsonLd } from "@/components/breadcrumb-json-ld"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { PageHeader } from "@/components/page-header"
import { ServicesSection } from "@/components/services-section"
import { WhySection } from "@/components/why-section"
import { CtaBand } from "@/components/cta-band"
import { dict } from "@/lib/i18n"
import { buildPageMetadata } from "@/lib/page-metadata"

const locale = "en" as const
const headerCopy = dict.pageHeaders.en.services
const ctaCopy = dict.ctas.en.services

export const metadata: Metadata = buildPageMetadata("services", locale, {
  keywords: [
    "asset microsites",
    "vessel website",
    "jack-up website",
    "offshore SEO",
    "maritime web design",
    "capability page",
    "charter marketing",
  ],
})

export default function EnglishServicesPage() {
  return (
    <>
      <BreadcrumbJsonLd locale={locale} page="services" />
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
        <ServicesSection locale={locale} />
        <WhySection locale={locale} />
        <CtaBand
          eyebrow={ctaCopy.eyebrow}
          title={ctaCopy.title}
          description={ctaCopy.description}
          primaryHref="/en/contact"
          primaryLabel={ctaCopy.primary}
          secondaryHref="/en/process"
          secondaryLabel={ctaCopy.secondary}
        />
      </main>
      <Footer locale={locale} />
    </>
  )
}
