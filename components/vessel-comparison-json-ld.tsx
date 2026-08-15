import { JsonLd } from "@/components/json-ld"
import { buildVesselComparisonSchema } from "@/lib/schema"
import type { Locale } from "@/lib/i18n"

type VesselComparisonJsonLdProps = {
  locale: Locale
}

export function VesselComparisonJsonLd({ locale }: VesselComparisonJsonLdProps) {
  return <JsonLd data={buildVesselComparisonSchema(locale)} />
}
