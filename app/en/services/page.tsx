import type { Metadata } from "next"

import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { PageHeader } from "@/components/page-header"
import { ServicesSection } from "@/components/services-section"
import { WhySection } from "@/components/why-section"
import { CtaBand } from "@/components/cta-band"
import { dict, seo } from "@/lib/i18n"

const locale = "en" as const
const headerCopy = dict.pageHeaders.en.services
const ctaCopy = dict.ctas.en.services

export const metadata: Metadata = {
  title: seo.services.en.title,
  description: seo.services.en.description,
  keywords: [
    "asset microsites",
    "vessel website",
    "jack-up website",
    "offshore SEO",
    "maritime web design",
    "capability page",
    "charter marketing",
  ],
  alternates: {
    canonical: "/en/services",
    languages: {
      "nl-NL": "/diensten",
      "en-US": "/en/services",
      "x-default": "/diensten",
    },
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://breure.ai/en/services",
    title: seo.services.en.title,
    description: seo.services.en.description,
    siteName: "Breure.ai",
  },
  twitter: {
    card: "summary_large_image",
    title: seo.services.en.title,
    description: seo.services.en.description,
  },
}

export default function EnglishServicesPage() {
  return (
    <>
      <Navigation locale={locale} />
      <main>
        <PageHeader
          eyebrow={headerCopy.eyebrow}
          title={
            <>
              {headerCopy.titlePrefix}{" "}
              <span className="bg-gradient-to-r from-white to-[#2B88D8] bg-clip-text text-transparent">
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
