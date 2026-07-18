import type { Vessel } from "@/lib/vessels/types"

export type ComparisonSpecRow = {
  label: string
  unit?: string
  getValue: (vessel: Vessel) => string | number
}

/** Shared row definitions for on-screen table and PDF export. */
export const COMPARISON_SPEC_ROWS: ComparisonSpecRow[] = [
  {
    label: "Crane capacity",
    unit: "t",
    getValue: (v) => v.crane_capacity_t,
  },
  {
    label: "Deck area",
    unit: "m²",
    getValue: (v) => v.deck_area_m2,
  },
  {
    label: "DP class",
    getValue: (v) => v.dp_class,
  },
  {
    label: "Accommodation",
    unit: "POB",
    getValue: (v) => v.accommodation,
  },
  {
    label: "Draft",
    unit: "m",
    getValue: (v) => v.draft_m,
  },
  {
    label: "Speed",
    unit: "kn",
    getValue: (v) => v.speed_kn,
  },
]

export function formatSpecLabel(row: ComparisonSpecRow): string {
  return row.unit ? `${row.label} (${row.unit})` : row.label
}
