import type { Metadata } from "next"

import { BreadcrumbJsonLd } from "@/components/breadcrumb-json-ld"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { PageHeader } from "@/components/page-header"
import { ServicesSection } from "@/components/services-section"
import { WhySection } from "@/components/why-section"
import { CtaBand } from "@/components/cta-band"
import { dict, ROUTES } from "@/lib/i18n"
import { buildPageMetadata } from "@/lib/page-metadata"

const locale = "en" as const
const headerCopy = dict.pageHeaders.en.services
const ctaCopy = dict.ctas.en.services

export const metadata: Metadata = buildPageMetadata("maritimeSoftware", locale, {
  keywords: [
    "maritime software",
    "custom maritime software",
    "vessel comparison software",
    "maritime workflow automation",
    "chartering software tools",
    "maritime calculators",
  ],
})

export default function EnglishMaritimeSoftwarePage() {
  return (
    <>
      <BreadcrumbJsonLd locale={locale} page="maritimeSoftware" />
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
        <WhySection locale={locale} variant="whyBreure" />
        <CtaBand
          eyebrow={ctaCopy.eyebrow}
          title={ctaCopy.title}
          description={ctaCopy.description}
          primaryHref={ROUTES.contact.en}
          primaryLabel={ctaCopy.primary}
          secondaryHref={ROUTES.tools.en}
          secondaryLabel={ctaCopy.secondary}
        />
      </main>
      <Footer locale={locale} />
    </>
  )
}
