import type { Metadata } from "next"

import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { PageHeader } from "@/components/page-header"
import { ServicesSection } from "@/components/services-section"
import { WhySection } from "@/components/why-section"
import { CtaBand } from "@/components/cta-band"
import { dict, seo } from "@/lib/i18n"

const locale = "nl" as const
const headerCopy = dict.pageHeaders.nl.services
const ctaCopy = dict.ctas.nl.services

export const metadata: Metadata = {
  title: seo.services.nl.title,
  description: seo.services.nl.description,
  keywords: [
    "asset microsites",
    "vessel website",
    "jack-up website",
    "offshore SEO",
    "maritieme webdesign",
    "capability page",
    "charter marketing",
  ],
  alternates: {
    canonical: "/diensten",
    languages: {
      "nl-NL": "/diensten",
      "en-US": "/en/services",
      "x-default": "/diensten",
    },
  },
  openGraph: {
    type: "website",
    locale: "nl_NL",
    url: "https://breure.ai/diensten",
    title: seo.services.nl.title,
    description: seo.services.nl.description,
    siteName: "Breure.ai",
  },
  twitter: {
    card: "summary_large_image",
    title: seo.services.nl.title,
    description: seo.services.nl.description,
  },
}

export default function DienstenPage() {
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
        <ServicesSection locale={locale} />
        <WhySection locale={locale} />
        <CtaBand
          eyebrow={ctaCopy.eyebrow}
          title={ctaCopy.title}
          description={ctaCopy.description}
          primaryHref="/contact"
          primaryLabel={ctaCopy.primary}
          secondaryHref="/proces"
          secondaryLabel={ctaCopy.secondary}
        />
      </main>
      <Footer locale={locale} />
    </>
  )
}
