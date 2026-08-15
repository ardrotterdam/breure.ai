import { dict, type Locale, ROUTES } from "@/lib/i18n"
import { logoImageUrl, siteUrl } from "@/lib/site-metadata"

export const SCHEMA_CONTEXT = "https://schema.org" as const

export const organizationId = `${siteUrl}/#organization`
export const websiteId = `${siteUrl}/#website`
export const professionalServiceId = `${siteUrl}/#professional-service`

const ADDRESS = {
  streetAddress: "Westplein 12",
  addressLocality: "Rotterdam",
  postalCode: "3016 BM",
  addressCountry: "NL",
} as const

export type SchemaGraph = {
  "@context": typeof SCHEMA_CONTEXT
  "@graph": Record<string, unknown>[]
}

export type BreadcrumbItem = {
  name: string
  href: string
}

export type PageBreadcrumbKey =
  | "maritimeSoftware"
  | "services"
  | "process"
  | "portfolio"
  | "horeca"
  | "contact"
  | "tools"

const HOME_LABEL: Record<Locale, string> = {
  nl: "Home",
  en: "Home",
}

const PAGE_LABEL: Record<PageBreadcrumbKey, Record<Locale, string>> = {
  maritimeSoftware: {
    nl: dict.nav.nl.maritimeSoftware,
    en: dict.nav.en.maritimeSoftware,
  },
  services: { nl: dict.nav.nl.maritimeSoftware, en: dict.nav.en.maritimeSoftware },
  process: { nl: dict.nav.nl.process, en: dict.nav.en.process },
  portfolio: { nl: dict.nav.nl.demo, en: dict.nav.en.demo },
  horeca: { nl: dict.nav.nl.horeca, en: dict.nav.en.horeca },
  contact: { nl: dict.nav.nl.contact, en: dict.nav.en.contact },
  tools: { nl: dict.nav.nl.demo, en: dict.nav.en.demo },
}

const PAGE_ROUTE: Record<PageBreadcrumbKey, Record<Locale, string>> = {
  maritimeSoftware: ROUTES.maritimeSoftware,
  services: ROUTES.maritimeSoftware,
  process: ROUTES.process,
  portfolio: ROUTES.portfolio,
  horeca: ROUTES.horeca,
  contact: ROUTES.contact,
  tools: ROUTES.tools,
}

export function absoluteUrl(path: string): string {
  return path === "/" ? siteUrl : `${siteUrl}${path}`
}

export function buildSiteSchemaGraph(): SchemaGraph {
  return {
    "@context": SCHEMA_CONTEXT,
    "@graph": [
      {
        "@type": "Organization",
        "@id": organizationId,
        name: "Breure.ai",
        url: siteUrl,
        logo: logoImageUrl,
        email: "info@breure.ai",
        description:
          "Breure.ai builds focused custom software for maritime workflows. Breure.ai develops tools for charterers, contractors and brokers.",
        knowsAbout: [
          "Maritime software",
          "Vessel comparison software",
          "Maritime workflow automation",
          "Chartering software tools",
        ],
        contactPoint: [
          {
            "@type": "ContactPoint",
            contactType: "customer service",
            email: "info@breure.ai",
            availableLanguage: ["Dutch", "English"],
            areaServed: "NL",
          },
        ],
      },
      {
        "@type": "WebSite",
        "@id": websiteId,
        name: "Breure.ai",
        url: siteUrl,
        inLanguage: ["nl-NL", "en-US"],
        publisher: { "@id": organizationId },
      },
      {
        "@type": "ProfessionalService",
        "@id": professionalServiceId,
        name: "Breure.ai",
        url: siteUrl,
        image: logoImageUrl,
        email: "info@breure.ai",
        description:
          "Breure.ai builds focused custom software for maritime workflows. Breure.ai develops tools for charterers, contractors and brokers. The Vessel Comparison Tool is a demonstration of software for comparing vessel capabilities and technical data.",
        serviceType: "Custom maritime software",
        priceRange: "$$$",
        address: {
          "@type": "PostalAddress",
          ...ADDRESS,
        },
        geo: {
          "@type": "GeoCoordinates",
          latitude: 51.9103,
          longitude: 4.4681,
        },
        areaServed: {
          "@type": "Country",
          name: "Netherlands",
        },
        parentOrganization: { "@id": organizationId },
      },
    ],
  }
}

export function buildBreadcrumbSchema(items: BreadcrumbItem[]): Record<string, unknown> {
  return {
    "@context": SCHEMA_CONTEXT,
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: absoluteUrl(item.href),
    })),
  }
}

export function breadcrumbsForPage(
  locale: Locale,
  page: PageBreadcrumbKey,
): BreadcrumbItem[] {
  return [
    { name: HOME_LABEL[locale], href: ROUTES.home[locale] },
    { name: PAGE_LABEL[page][locale], href: PAGE_ROUTE[page][locale] },
  ]
}

export function buildContactPageSchema(locale: Locale): Record<string, unknown> {
  const path = ROUTES.contact[locale]
  const copy = dict.contact[locale]

  return {
    "@context": SCHEMA_CONTEXT,
    "@type": "ContactPage",
    "@id": `${absoluteUrl(path)}#contactpage`,
    name: locale === "nl" ? "Contact | Breure.ai" : "Contact | Breure.ai",
    description: copy.intro,
    url: absoluteUrl(path),
    inLanguage: locale === "nl" ? "nl-NL" : "en-US",
    isPartOf: { "@id": websiteId },
    about: { "@id": professionalServiceId },
    mainEntity: { "@id": professionalServiceId },
  }
}

export function buildVesselComparisonSchema(locale: Locale): Record<string, unknown> {
  const path = ROUTES.tools[locale]
  const isNl = locale === "nl"

  return {
    "@context": SCHEMA_CONTEXT,
    "@type": "SoftwareApplication",
    "@id": `${absoluteUrl(path)}#software`,
    name: "Vessel Comparison Tool",
    applicationCategory: "BusinessApplication",
    operatingSystem: "Web",
    description: isNl
      ? "De Vessel Comparison Tool is een demonstratie van software voor het vergelijken van scheepscapaciteiten en technische data. De getoonde scheepsdata is fictief."
      : "The Vessel Comparison Tool is a demonstration of software for comparing vessel capabilities and technical data. The vessel data shown is fictional.",
    url: absoluteUrl(path),
    inLanguage: isNl ? "nl-NL" : "en-US",
    isPartOf: { "@id": websiteId },
    creator: { "@id": organizationId },
    offers: {
      "@type": "Offer",
      price: "0",
      priceCurrency: "EUR",
    },
  }
}
