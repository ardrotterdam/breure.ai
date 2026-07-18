"use client"

import { useEffect, useMemo, useState, type Ref } from "react"
import {
  CartesianGrid,
  Line,
  LineChart,
  ReferenceDot,
  XAxis,
  YAxis,
} from "recharts"

import {
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
  type ChartConfig,
} from "@/components/ui/chart"
import { Label } from "@/components/ui/label"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { Slider } from "@/components/ui/slider"
import { capacityAtRadius, pointAtBoomAngle } from "@/lib/vessels/crane-load"
import type { Vessel } from "@/lib/vessels/types"

const chartConfig = {
  capacity_t: {
    label: "Capacity (t)",
    color: "var(--accent)",
  },
} satisfies ChartConfig

export type CraneChartMeta = {
  vesselName: string
  radius_m: number
  boom_angle_deg: number
  capacity_t: number
}

type CraneLoadChartProps = {
  vessels: Vessel[]
  /** Element captured by html2canvas for PDF export. */
  captureRef?: Ref<HTMLDivElement>
  onChartMetaChange?: (meta: CraneChartMeta) => void
}

export function CraneLoadChart({
  vessels,
  captureRef,
  onChartMetaChange,
}: CraneLoadChartProps) {
  const [activeId, setActiveId] = useState(vessels[0]?.id ?? "")

  const vessel =
    vessels.find((item) => item.id === activeId) ?? vessels[0] ?? null

  const radiusRange = useMemo(() => {
    if (!vessel || vessel.crane_load_chart.length === 0) {
      return { min: 0, max: 1 }
    }
    const radii = vessel.crane_load_chart.map((p) => p.radius_m)
    return { min: Math.min(...radii), max: Math.max(...radii) }
  }, [vessel])

  const angleRange = useMemo(() => {
    if (!vessel || vessel.crane_load_chart.length === 0) {
      return { min: 0, max: 90 }
    }
    const angles = vessel.crane_load_chart.map((p) => p.boom_angle_deg)
    return { min: Math.min(...angles), max: Math.max(...angles) }
  }, [vessel])

  const [radiusM, setRadiusM] = useState(radiusRange.min)
  const [boomAngleDeg, setBoomAngleDeg] = useState(angleRange.max)

  useEffect(() => {
    if (vessels.length === 0) return
    if (!vessels.some((item) => item.id === activeId)) {
      setActiveId(vessels[0].id)
    }
  }, [vessels, activeId])

  useEffect(() => {
    const next =
      vessels.find((item) => item.id === activeId) ?? vessels[0] ?? null
    if (!next) return
    const start = next.crane_load_chart[0]
    if (!start) return
    setRadiusM(start.radius_m)
    setBoomAngleDeg(start.boom_angle_deg)
  }, [activeId, vessels])

  const livePoint = vessel ? capacityAtRadius(vessel, radiusM) : null

  useEffect(() => {
    if (!vessel || !livePoint || !onChartMetaChange) return
    onChartMetaChange({
      vesselName: vessel.name,
      radius_m: livePoint.radius_m,
      boom_angle_deg: boomAngleDeg,
      capacity_t: livePoint.capacity_t,
    })
  }, [
    vessel,
    livePoint?.radius_m,
    livePoint?.capacity_t,
    boomAngleDeg,
    onChartMetaChange,
  ])

  if (!vessel || !livePoint) {
    return null
  }

  const chartData = vessel.crane_load_chart.map((point) => ({
    radius_m: point.radius_m,
    capacity_t: point.capacity_t,
    boom_angle_deg: point.boom_angle_deg,
  }))

  return (
    <div className="space-y-6 rounded-md border border-border bg-surface p-4 sm:p-6">
      <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
        <div className="space-y-1">
          <p className="font-mono text-xs uppercase tracking-[0.2em] text-text-eyebrow">
            Crane load chart
          </p>
          <h3 className="font-[family-name:var(--font-space-grotesk)] text-xl font-medium text-foreground">
            Interactive capacity
          </h3>
          <p className="max-w-xl text-sm text-muted-foreground">
            Adjust outreach or boom angle. Capacity is interpolated from the
            vessel&apos;s table-based load chart — not a physics simulation.
          </p>
        </div>

        <div className="space-y-2 sm:w-56">
          <Label htmlFor="chart-vessel" className="text-text-dim">
            Vessel
          </Label>
          <Select
            value={vessel.id}
            onValueChange={(value) => setActiveId(value)}
          >
            <SelectTrigger id="chart-vessel" className="w-full">
              <SelectValue />
            </SelectTrigger>
            <SelectContent>
              {vessels.map((item) => (
                <SelectItem key={item.id} value={item.id}>
                  {item.name}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>
      </div>

      <div className="grid gap-6 lg:grid-cols-[1fr_220px]">
        <div
          ref={captureRef}
          className="rounded-md bg-surface p-2"
          data-pdf-chart-capture
        >
          <p className="mb-2 px-1 font-[family-name:var(--font-space-grotesk)] text-sm font-medium text-foreground">
            {vessel.name} — crane load chart
          </p>
          <ChartContainer config={chartConfig} className="aspect-[16/9] w-full">
            <LineChart
              data={chartData}
              margin={{ top: 12, right: 12, left: 0, bottom: 8 }}
            >
              <CartesianGrid strokeDasharray="3 3" vertical={false} />
              <XAxis
                type="number"
                dataKey="radius_m"
                domain={[radiusRange.min, radiusRange.max]}
                tickLine={false}
                axisLine={false}
                tickMargin={8}
                unit=" m"
              />
              <YAxis
                type="number"
                tickLine={false}
                axisLine={false}
                tickMargin={8}
                unit=" t"
                width={48}
              />
              <ChartTooltip
                content={
                  <ChartTooltipContent
                    formatter={(value) => (
                      <span className="font-mono">
                        {typeof value === "number" ? value.toFixed(0) : value} t
                      </span>
                    )}
                    labelFormatter={(_, payload) => {
                      const radius = payload?.[0]?.payload?.radius_m
                      return radius != null ? `Radius ${radius} m` : "Capacity"
                    }}
                  />
                }
              />
              <Line
                type="monotone"
                dataKey="capacity_t"
                stroke="var(--color-capacity_t)"
                strokeWidth={2}
                dot={{ r: 3, fill: "var(--color-capacity_t)" }}
                activeDot={{ r: 5 }}
              />
              <ReferenceDot
                x={Number(livePoint.radius_m.toFixed(1))}
                y={Number(livePoint.capacity_t.toFixed(1))}
                r={6}
                fill="var(--accent)"
                stroke="var(--text)"
                strokeWidth={2}
              />
            </LineChart>
          </ChartContainer>
        </div>

        <div className="space-y-5 rounded-md border border-border bg-surface-2 p-4">
          <div>
            <p className="text-xs uppercase tracking-wider text-text-dim">
              Current load
            </p>
            <p className="mt-1 font-[family-name:var(--font-space-grotesk)] text-3xl font-semibold text-foreground">
              {livePoint.capacity_t.toFixed(1)}
              <span className="ml-1 text-base font-normal text-muted-foreground">
                t
              </span>
            </p>
          </div>

          <div className="space-y-3">
            <div className="flex items-baseline justify-between gap-2">
              <Label htmlFor="radius-slider">Radius</Label>
              <span className="font-mono text-sm text-foreground">
                {radiusM.toFixed(1)} m
              </span>
            </div>
            <Slider
              id="radius-slider"
              min={radiusRange.min}
              max={radiusRange.max}
              step={0.5}
              value={[radiusM]}
              onValueChange={([value]) => {
                setRadiusM(value)
                const point = capacityAtRadius(vessel, value)
                setBoomAngleDeg(point.boom_angle_deg)
              }}
            />
          </div>

          <div className="space-y-3">
            <div className="flex items-baseline justify-between gap-2">
              <Label htmlFor="angle-slider">Boom angle</Label>
              <span className="font-mono text-sm text-foreground">
                {boomAngleDeg.toFixed(1)}°
              </span>
            </div>
            <Slider
              id="angle-slider"
              min={angleRange.min}
              max={angleRange.max}
              step={0.5}
              value={[boomAngleDeg]}
              onValueChange={([value]) => {
                setBoomAngleDeg(value)
                const point = pointAtBoomAngle(vessel, value)
                setRadiusM(point.radius_m)
              }}
            />
          </div>

          <dl className="space-y-2 border-t border-border pt-4 text-sm">
            <div className="flex justify-between gap-2">
              <dt className="text-text-dim">Rated max</dt>
              <dd className="font-mono text-foreground">
                {vessel.crane_capacity_t} t
              </dd>
            </div>
            <div className="flex justify-between gap-2">
              <dt className="text-text-dim">Chart points</dt>
              <dd className="font-mono text-foreground">
                {vessel.crane_load_chart.length}
              </dd>
            </div>
          </dl>
        </div>
      </div>
    </div>
  )
}
