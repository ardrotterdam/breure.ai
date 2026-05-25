import type { Metadata } from "next"

import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { PageHeader } from "@/components/page-header"
import { PortfolioSection } from "@/components/portfolio-section"
import { CtaBand } from "@/components/cta-band"
import { dict, seo } from "@/lib/i18n"

const locale = "en" as const
const headerCopy = dict.pageHeaders.en.portfolio
const ctaCopy = dict.ctas.en.portfolio

export const metadata: Metadata = {
  title: seo.portfolio.en.title,
  description: seo.portfolio.en.description,
  keywords: [
    "Breure portfolio",
    "offshore website portfolio",
    "vessel website case study",
    "asset microsite case",
    "maritime web design portfolio",
  ],
  alternates: {
    canonical: "/en/portfolio",
    languages: {
      "nl-NL": "/portfolio",
      "en-US": "/en/portfolio",
      "x-default": "/portfolio",
    },
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://breure.ai/en/portfolio",
    title: seo.portfolio.en.title,
    description: seo.portfolio.en.description,
    siteName: "Breure.ai",
  },
  twitter: {
    card: "summary_large_image",
    title: seo.portfolio.en.title,
    description: seo.portfolio.en.description,
  },
}

export default function EnglishPortfolioPage() {
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
              </span>{" "}
              {headerCopy.titleSuffix}
            </>
          }
          description={headerCopy.description}
        />
        <PortfolioSection locale={locale} />
        <CtaBand
          eyebrow={ctaCopy.eyebrow}
          title={ctaCopy.title}
          description={ctaCopy.description}
          primaryHref="/en/contact"
          primaryLabel={ctaCopy.primary}
          secondaryHref="/en/services"
          secondaryLabel={ctaCopy.secondary}
        />
      </main>
      <Footer locale={locale} />
    </>
  )
}
