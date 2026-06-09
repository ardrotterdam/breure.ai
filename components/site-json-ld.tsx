import { JsonLd } from "@/components/json-ld"
import { buildSiteSchemaGraph } from "@/lib/schema"

export function SiteJsonLd() {
  return <JsonLd data={buildSiteSchemaGraph()} />
}
