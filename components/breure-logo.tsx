"use client"

import { motion } from "framer-motion"
import { useId } from "react"

import {
  BOTTOM_WAVE,
  FULL_VIEWBOX,
  GLOW_FILTER,
  MARK_VIEWBOX,
  STROKE,
  TOP_WAVE,
} from "@/lib/brand-logo"
import { cn } from "@/lib/utils"

interface BreureLogoProps {
  className?: string
  size?: number
  /** Dark navy badge — use on light backgrounds */
  badge?: boolean
  animated?: boolean
}

export function BreureLogo({
  className,
  size = 40,
  badge = false,
  animated = false,
}: BreureLogoProps) {
  const glowId = useId().replace(/:/g, "")
  const compact = size <= 64

  const viewBox = compact ? MARK_VIEWBOX : FULL_VIEWBOX
  const strokeWidth = compact ? STROKE.compact : STROKE.full
  const showGlow = !compact

  const topWave = animated ? (
    <motion.path
      d={TOP_WAVE}
      stroke="var(--text)"
      strokeWidth={strokeWidth}
      strokeLinecap="round"
      strokeLinejoin="round"
      fill="none"
      initial={{ pathLength: 0 }}
      animate={{ pathLength: 1 }}
      transition={{ duration: 1.2, delay: 0.8, ease: [0.22, 1, 0.36, 1] }}
    />
  ) : (
    <path
      d={TOP_WAVE}
      stroke="var(--text)"
      strokeWidth={strokeWidth}
      strokeLinecap="round"
      strokeLinejoin="round"
      fill="none"
    />
  )

  const bottomWave = animated ? (
    <motion.path
      d={BOTTOM_WAVE}
      stroke="var(--accent)"
      strokeWidth={strokeWidth}
      strokeLinecap="round"
      strokeLinejoin="round"
      fill="none"
      filter={showGlow ? `url(#${glowId})` : undefined}
      initial={{ pathLength: 0 }}
      animate={{ pathLength: 1 }}
      transition={{ duration: 1.2, delay: 1, ease: [0.22, 1, 0.36, 1] }}
    />
  ) : (
    <path
      d={BOTTOM_WAVE}
      stroke="var(--accent)"
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
            x="-30%"
            y="-100%"
            width="160%"
            height="300%"
            filterUnits="objectBoundingBox"
            colorInterpolationFilters="sRGB"
          >
            <feGaussianBlur
              in="SourceGraphic"
              stdDeviation={GLOW_FILTER.blur}
              result="blur"
            />
            <feColorMatrix
              in="blur"
              type="matrix"
              values={`0 0 0 0 0.039  0 0 0 0 0.518  0 0 0 0 1  0 0 0 ${GLOW_FILTER.opacity} 0`}
              result="glow"
            />
            <feMerge>
              <feMergeNode in="glow" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
        </defs>
      )}
      {topWave}
      {bottomWave}
    </svg>
  )

  if (!badge) return mark

  return (
    <div
      className="flex shrink-0 items-center justify-center rounded-lg bg-ink"
      style={{ width: size, height: size }}
    >
      {mark}
    </div>
  )
}
