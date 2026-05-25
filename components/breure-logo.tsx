"use client"

import { motion } from "framer-motion"
import { useId } from "react"

import { cn } from "@/lib/utils"

interface BreureLogoProps {
  className?: string
  size?: number
  /** Dark navy badge — use on light backgrounds */
  badge?: boolean
  animated?: boolean
}

const COMPACT_VIEWBOX = "24 168 464 176"
const COMPACT_TOP =
  "M 40 228 C 120 188 184 268 256 228 C 328 188 392 268 472 228"
const COMPACT_BOTTOM =
  "M 40 308 C 120 268 184 348 256 308 C 328 268 392 348 472 308"
const COMPACT_STROKE = 48

const FULL_VIEWBOX = "0 0 512 512"
const FULL_TOP =
  "M 56 0 C 128 -24 192 24 256 0 C 320 -24 384 24 448 0"
const FULL_BOTTOM =
  "M 56 52 C 128 28 192 76 256 52 C 320 28 384 76 448 52"
const FULL_STROKE = 7

export function BreureLogo({
  className,
  size = 40,
  badge = false,
  animated = false,
}: BreureLogoProps) {
  const glowId = useId().replace(/:/g, "")
  const compact = size <= 64

  const viewBox = compact ? COMPACT_VIEWBOX : FULL_VIEWBOX
  const topPath = compact ? COMPACT_TOP : FULL_TOP
  const bottomPath = compact ? COMPACT_BOTTOM : FULL_BOTTOM
  const strokeWidth = compact ? COMPACT_STROKE : FULL_STROKE
  const showGlow = !compact

  const topWave = animated ? (
    <motion.path
      d={topPath}
      stroke="#FFFFFF"
      strokeWidth={strokeWidth}
      strokeLinecap="round"
      strokeLinejoin="round"
      fill="none"
      initial={{ pathLength: 0 }}
      animate={{ pathLength: 1 }}
      transition={{ duration: 1, delay: 0.8 }}
    />
  ) : (
    <path
      d={topPath}
      stroke="#FFFFFF"
      strokeWidth={strokeWidth}
      strokeLinecap="round"
      strokeLinejoin="round"
      fill="none"
    />
  )

  const bottomWave = animated ? (
    <motion.path
      d={bottomPath}
      stroke="#0A84FF"
      strokeWidth={strokeWidth}
      strokeLinecap="round"
      strokeLinejoin="round"
      fill="none"
      filter={showGlow ? `url(#${glowId})` : undefined}
      initial={{ pathLength: 0 }}
      animate={{ pathLength: 1 }}
      transition={{ duration: 1, delay: 1 }}
    />
  ) : (
    <path
      d={bottomPath}
      stroke="#0A84FF"
      strokeWidth={strokeWidth}
      strokeLinecap="round"
      strokeLinejoin="round"
      fill="none"
      filter={showGlow ? `url(#${glowId})` : undefined}
    />
  )

  const mark = (
    <svg
      viewBox={viewBox}
      fill="none"
      aria-hidden="true"
      className={cn("block", className)}
      style={{ width: size, height: size }}
    >
      {showGlow && (
        <defs>
          <filter
            id={glowId}
            x="-20%"
            y="-80%"
            width="140%"
            height="260%"
            filterUnits="objectBoundingBox"
            colorInterpolationFilters="sRGB"
          >
            <feGaussianBlur in="SourceGraphic" stdDeviation="3.5" result="blur" />
            <feColorMatrix
              in="blur"
              type="matrix"
              values="0 0 0 0 0.039  0 0 0 0 0.518  0 0 0 0 1  0 0 0 0.45 0"
              result="glow"
            />
            <feMerge>
              <feMergeNode in="glow" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
        </defs>
      )}
      {compact ? (
        <>
          {topWave}
          {bottomWave}
        </>
      ) : (
        <g transform="translate(0 256)">
          {topWave}
          {bottomWave}
        </g>
      )}
    </svg>
  )

  if (!badge) return mark

  return (
    <div
      className="flex shrink-0 items-center justify-center rounded-lg bg-[#081220]"
      style={{ width: size, height: size }}
    >
      {mark}
    </div>
  )
}
