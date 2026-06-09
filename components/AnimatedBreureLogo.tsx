"use client"

import { motion } from "framer-motion"
import { useId } from "react"

const TOP_WAVE =
  "M 80 226 C 156 212 204 244 256 226 C 308 208 356 244 420 226"

const BOTTOM_WAVE =
  "M 48 302 C 148 284 196 320 256 302 C 316 284 364 320 464 302"

const MARK_VIEWBOX = "40 198 432 116"
const FULL_VIEWBOX = "0 0 512 512"

const STROKE = {
  full: 5.5,
  compact: 13,
} as const

const GLOW_FILTER = {
  blur: 2.5,
  opacity: 0.35,
} as const

export interface AnimatedBreureLogoProps {
  className?: string
  size?: number
  /** Dark navy badge — use on light backgrounds */
  badge?: boolean
}

export default function AnimatedBreureLogo({
  className = "",
  size = 40,
  badge = false,
}: AnimatedBreureLogoProps) {
  const glowId = useId().replace(/:/g, "")
  const compact = size <= 64
  const viewBox = compact ? MARK_VIEWBOX : FULL_VIEWBOX
  const strokeWidth = compact ? STROKE.compact : STROKE.full
  const showGlow = !compact

  const mark = (
    <svg
      viewBox={viewBox}
      fill="none"
      aria-hidden="true"
      className={`block ${className}`.trim()}
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
              values={`0 0 0 0 1  0 0 0 0 0.416  0 0 0 0 0.173  0 0 0 ${GLOW_FILTER.opacity} 0`}
              result="glow"
            />
            <feMerge>
              <feMergeNode in="glow" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
        </defs>
      )}

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
