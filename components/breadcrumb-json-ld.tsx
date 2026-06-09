import { JsonLd } from "@/components/json-ld"
import {
  breadcrumbsForPage,
  buildBreadcrumbSchema,
  type PageBreadcrumbKey,
} from "@/lib/schema"
import type { Locale } from "@/lib/i18n"

type BreadcrumbJsonLdProps = {
  locale: Locale
  page: PageBreadcrumbKey
}

export function BreadcrumbJsonLd({ locale, page }: BreadcrumbJsonLdProps) {
  const items = breadcrumbsForPage(locale, page)
  return <JsonLd data={buildBreadcrumbSchema(items)} />
}
