import { JsonLd } from "@/components/json-ld"
import { buildContactPageSchema } from "@/lib/schema"
import type { Locale } from "@/lib/i18n"

type ContactPageJsonLdProps = {
  locale: Locale
}

export function ContactPageJsonLd({ locale }: ContactPageJsonLdProps) {
  return <JsonLd data={buildContactPageSchema(locale)} />
}
