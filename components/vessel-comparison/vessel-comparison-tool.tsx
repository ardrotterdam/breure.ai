"use client"

import { useCallback, useMemo, useRef, useState } from "react"
import { FileDown } from "lucide-react"

import { ComparisonTable } from "@/components/vessel-comparison/comparison-table"
import {
  CraneLoadChart,
  type CraneChartMeta,
} from "@/components/vessel-comparison/crane-load-chart"
import { VesselFiltersPanel } from "@/components/vessel-comparison/vessel-filters"
import {
  MAX_COMPARE,
  MIN_COMPARE,
  VesselPicker,
} from "@/components/vessel-comparison/vessel-picker"
import { Button } from "@/components/ui/button"
import { filterVessels } from "@/lib/vessels/data"
import { exportComparisonPdf } from "@/lib/vessels/export-comparison-pdf"
import type { Vessel, VesselFilters } from "@/lib/vessels/types"

const EMPTY_FILTERS: VesselFilters = {
  min_crane_capacity_t: null,
  dp_class: null,
  min_deck_area_m2: null,
}

type VesselComparisonToolProps = {
  vessels: Vessel[]
}

export function VesselComparisonTool({ vessels }: VesselComparisonToolProps) {
  const [filters, setFilters] = useState<VesselFilters>(EMPTY_FILTERS)
  const [selectedIds, setSelectedIds] = useState<string[]>(() =>
    vessels.slice(0, MIN_COMPARE).map((vessel) => vessel.id)
  )
  const [chartMeta, setChartMeta] = useState<CraneChartMeta | null>(null)
  const [isExporting, setIsExporting] = useState(false)
  const [exportError, setExportError] = useState<string | null>(null)
  const chartCaptureRef = useRef<HTMLDivElement>(null)

  const filteredVessels = useMemo(
    () => filterVessels(vessels, filters),
    [vessels, filters]
  )

  const filteredIdSet = useMemo(
    () => new Set(filteredVessels.map((vessel) => vessel.id)),
    [filteredVessels]
  )

  const visibleSelectedIds = selectedIds.filter((id) => filteredIdSet.has(id))

  const selectedVessels = useMemo(
    () =>
      visibleSelectedIds
        .map((id) => vessels.find((vessel) => vessel.id === id))
        .filter((vessel): vessel is Vessel => vessel != null),
    [visibleSelectedIds, vessels]
  )

  const handleChartMetaChange = useCallback((meta: CraneChartMeta) => {
    setChartMeta(meta)
  }, [])

  function handleFiltersChange(next: VesselFilters) {
    setFilters(next)
    const nextFiltered = filterVessels(vessels, next)
    const allowed = new Set(nextFiltered.map((vessel) => vessel.id))
    setSelectedIds((prev) => prev.filter((id) => allowed.has(id)))
  }

  function handleToggle(vesselId: string) {
    setSelectedIds((prev) => {
      if (prev.includes(vesselId)) {
        return prev.filter((id) => id !== vesselId)
      }
      if (prev.length >= MAX_COMPARE) {
        return prev
      }
      return [...prev, vesselId]
    })
  }

  const canCompare = selectedVessels.length >= MIN_COMPARE

  async function handleExportPdf() {
    if (!canCompare || !chartCaptureRef.current || !chartMeta) return

    setIsExporting(true)
    setExportError(null)
    try {
      await exportComparisonPdf({
        vessels: selectedVessels,
        chartElement: chartCaptureRef.current,
        chartVesselName: chartMeta.vesselName,
        chartReadout: {
          radius_m: chartMeta.radius_m,
          boom_angle_deg: chartMeta.boom_angle_deg,
          capacity_t: chartMeta.capacity_t,
        },
      })
    } catch (error) {
      console.error(error)
      setExportError(
        error instanceof Error
          ? error.message
          : "PDF export failed. Please try again."
      )
    } finally {
      setIsExporting(false)
    }
  }

  return (
    <div className="space-y-10">
      <section className="space-y-4">
        <div>
          <h2 className="font-[family-name:var(--font-space-grotesk)] text-lg font-medium text-foreground">
            Filters
          </h2>
          <p className="text-sm text-muted-foreground">
            Narrow the demo fleet before selecting vessels to compare.
          </p>
        </div>
        <VesselFiltersPanel
          filters={filters}
          onChange={handleFiltersChange}
        />
      </section>

      <section className="space-y-4">
        <div>
          <h2 className="font-[family-name:var(--font-space-grotesk)] text-lg font-medium text-foreground">
            Fleet
          </h2>
          <p className="text-sm text-muted-foreground">
            {filteredVessels.length} of {vessels.length} vessels match filters.
          </p>
        </div>
        <VesselPicker
          vessels={filteredVessels}
          selectedIds={visibleSelectedIds}
          onToggle={handleToggle}
        />
      </section>

      <section className="space-y-4">
        <div className="flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <h2 className="font-[family-name:var(--font-space-grotesk)] text-lg font-medium text-foreground">
              Side-by-side comparison
            </h2>
            <p className="text-sm text-muted-foreground">
              Core specs for the selected vessels.
            </p>
          </div>
          <div className="flex flex-col items-stretch gap-2 sm:items-end">
            <Button
              type="button"
              onClick={handleExportPdf}
              disabled={!canCompare || !chartMeta || isExporting}
            >
              <FileDown />
              {isExporting ? "Exporting…" : "Export as PDF"}
            </Button>
            {exportError ? (
              <p className="text-xs text-destructive">{exportError}</p>
            ) : null}
          </div>
        </div>

        {canCompare ? (
          <ComparisonTable vessels={selectedVessels} />
        ) : (
          <p className="rounded-md border border-dashed border-border bg-surface-2 px-4 py-8 text-center text-sm text-muted-foreground">
            Select at least {MIN_COMPARE} vessels to see the comparison table.
            {visibleSelectedIds.length > 0
              ? ` Currently ${visibleSelectedIds.length} selected.`
              : null}
          </p>
        )}
      </section>

      {canCompare ? (
        <section>
          <CraneLoadChart
            vessels={selectedVessels}
            captureRef={chartCaptureRef}
            onChartMetaChange={handleChartMetaChange}
          />
        </section>
      ) : null}
    </div>
  )
}
