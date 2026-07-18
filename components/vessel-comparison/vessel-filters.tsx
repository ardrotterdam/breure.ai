"use client"

import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import type { DpClass, VesselFilters } from "@/lib/vessels/types"

const DP_OPTIONS: Array<{ value: "all" | DpClass; label: string }> = [
  { value: "all", label: "Any DP class" },
  { value: "DP1", label: "DP1" },
  { value: "DP2", label: "DP2" },
  { value: "DP3", label: "DP3" },
]

type VesselFiltersProps = {
  filters: VesselFilters
  onChange: (filters: VesselFilters) => void
}

export function VesselFiltersPanel({ filters, onChange }: VesselFiltersProps) {
  return (
    <div className="grid gap-4 sm:grid-cols-3">
      <div className="space-y-2">
        <Label htmlFor="min-crane" className="text-text-dim">
          Min. crane capacity (t)
        </Label>
        <Input
          id="min-crane"
          type="number"
          min={0}
          step={10}
          placeholder="e.g. 100"
          value={filters.min_crane_capacity_t ?? ""}
          onChange={(event) => {
            const raw = event.target.value
            const parsed = Number(raw)
            onChange({
              ...filters,
              min_crane_capacity_t:
                raw === "" || Number.isNaN(parsed) ? null : parsed,
            })
          }}
        />
      </div>

      <div className="space-y-2">
        <Label htmlFor="dp-class" className="text-text-dim">
          DP class
        </Label>
        <Select
          value={filters.dp_class ?? "all"}
          onValueChange={(value) => {
            onChange({
              ...filters,
              dp_class: value === "all" ? null : (value as DpClass),
            })
          }}
        >
          <SelectTrigger id="dp-class" className="w-full">
            <SelectValue placeholder="Any DP class" />
          </SelectTrigger>
          <SelectContent>
            {DP_OPTIONS.map((option) => (
              <SelectItem key={option.value} value={option.value}>
                {option.label}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      </div>

      <div className="space-y-2">
        <Label htmlFor="min-deck" className="text-text-dim">
          Min. deck area (m²)
        </Label>
        <Input
          id="min-deck"
          type="number"
          min={0}
          step={50}
          placeholder="e.g. 800"
          value={filters.min_deck_area_m2 ?? ""}
          onChange={(event) => {
            const raw = event.target.value
            const parsed = Number(raw)
            onChange({
              ...filters,
              min_deck_area_m2:
                raw === "" || Number.isNaN(parsed) ? null : parsed,
            })
          }}
        />
      </div>
    </div>
  )
}
