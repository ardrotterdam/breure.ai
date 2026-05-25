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

const TOP_WAVE =
  "M 56 0 C 128 -24 192 24 256 0 C 320 -24 384 24 448 0"
const BOTTOM_WAVE =
  "M 56 52 C 128 28 192 76 256 52 C 320 28 384 76 448 52"

export function BreureLogo({
  className,
  size = 40,
  badge = false,
  animated = false,
}: BreureLogoProps) {
  const glowId = useId().replace(/:/g, "")

  const topWave = animated ? (
    <motion.path
      d={TOP_WAVE}
      stroke="#FFFFFF"
      strokeWidth="7"
      strokeLinecap="round"
      strokeLinejoin="round"
      fill="none"
      initial={{ pathLength: 0 }}
      animate={{ pathLength: 1 }}
      transition={{ duration: 1, delay: 0.8 }}
    />
  ) : (
    <path
      d={TOP_WAVE}
      stroke="#FFFFFF"
      strokeWidth="7"
      strokeLinecap="round"
      strokeLinejoin="round"
      fill="none"
    />
  )

  const bottomWave = animated ? (
    <motion.path
      d={BOTTOM_WAVE}
      stroke="#0A84FF"
      strokeWidth="7"
      strokeLinecap="round"
      strokeLinejoin="round"
      fill="none"
      filter={`url(#${glowId})`}
      initial={{ pathLength: 0 }}
      animate={{ pathLength: 1 }}
      transition={{ duration: 1, delay: 1 }}
    />
  ) : (
    <path
      d={BOTTOM_WAVE}
      stroke="#0A84FF"
      strokeWidth="7"
      strokeLinecap="round"
      strokeLinejoin="round"
      fill="none"
      filter={`url(#${glowId})`}
    />
  )

  const mark = (
    <svg
      viewBox="0 0 512 512"
      fill="none"
      aria-hidden="true"
      className={cn("block", className)}
      style={{ width: size, height: size }}
    >
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
      <g transform="translate(0 256)">
        {topWave}
        {bottomWave}
      </g>
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
