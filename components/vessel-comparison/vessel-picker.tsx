"use client"

import { Checkbox } from "@/components/ui/checkbox"
import { Label } from "@/components/ui/label"
import { Badge } from "@/components/ui/badge"
import { cn } from "@/lib/utils"
import type { Vessel } from "@/lib/vessels/types"

export const MIN_COMPARE = 2
export const MAX_COMPARE = 4

type VesselPickerProps = {
  vessels: Vessel[]
  selectedIds: string[]
  onToggle: (vesselId: string) => void
}

export function VesselPicker({
  vessels,
  selectedIds,
  onToggle,
}: VesselPickerProps) {
  const atMax = selectedIds.length >= MAX_COMPARE

  return (
    <div className="space-y-3">
      <div className="flex flex-wrap items-center justify-between gap-2">
        <p className="text-sm text-muted-foreground">
          Select {MIN_COMPARE}–{MAX_COMPARE} vessels to compare
        </p>
        <Badge variant="outline" className="font-mono">
          {selectedIds.length}/{MAX_COMPARE} selected
        </Badge>
      </div>

      {vessels.length === 0 ? (
        <p className="rounded-md border border-border bg-surface-2 px-4 py-6 text-sm text-muted-foreground">
          No vessels match the current filters.
        </p>
      ) : (
        <ul className="grid gap-2 sm:grid-cols-2 lg:grid-cols-3">
          {vessels.map((vessel) => {
            const checked = selectedIds.includes(vessel.id)
            const disabled = !checked && atMax

            return (
              <li key={vessel.id}>
                <Label
                  htmlFor={`vessel-${vessel.id}`}
                  className={cn(
                    "flex cursor-pointer items-start gap-3 rounded-md border border-border bg-surface px-3 py-3 transition-colors",
                    checked && "border-primary/60 bg-surface-2",
                    disabled && "cursor-not-allowed opacity-50"
                  )}
                >
                  <Checkbox
                    id={`vessel-${vessel.id}`}
                    checked={checked}
                    disabled={disabled}
                    onCheckedChange={() => onToggle(vessel.id)}
                    className="mt-0.5"
                  />
                  <span className="min-w-0 flex-1 space-y-1">
                    <span className="block font-[family-name:var(--font-space-grotesk)] text-sm font-medium text-foreground">
                      {vessel.name}
                    </span>
                    <span className="block font-mono text-xs text-text-dim">
                      {vessel.crane_capacity_t} t · {vessel.deck_area_m2} m² ·{" "}
                      {vessel.dp_class}
                    </span>
                  </span>
                </Label>
              </li>
            )
          })}
        </ul>
      )}
    </div>
  )
}
