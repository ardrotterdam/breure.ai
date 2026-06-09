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

export type PageBreadcrumbKey = "services" | "process" | "portfolio" | "contact"

const HOME_LABEL: Record<Locale, string> = {
  nl: "Home",
  en: "Home",
}

const PAGE_LABEL: Record<PageBreadcrumbKey, Record<Locale, string>> = {
  services: { nl: dict.nav.nl.services, en: dict.nav.en.services },
  process: { nl: dict.nav.nl.process, en: dict.nav.en.process },
  portfolio: { nl: dict.nav.nl.portfolio, en: dict.nav.en.portfolio },
  contact: { nl: dict.nav.nl.contact, en: dict.nav.en.contact },
}

const PAGE_ROUTE: Record<PageBreadcrumbKey, Record<Locale, string>> = {
  services: ROUTES.services,
  process: ROUTES.process,
  portfolio: ROUTES.portfolio,
  contact: ROUTES.contact,
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
          "Premium digital platforms for offshore, maritime and heavy industry companies.",
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
