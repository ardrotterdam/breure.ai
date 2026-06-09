/** Shared Breure.ai wave mark geometry — single source of truth for SVG + React */

/** Mirrors design tokens in app/globals.css (static SVG assets cannot read CSS vars). */
export const BRAND = {
  ink: "#0A1628",
  text: "#F4F8FC",
  accent: "#0078d4",
} as const

/** Shorter top wave — subtle organic swell */
export const TOP_WAVE =
  "M 80 226 C 156 212 204 244 256 226 C 308 208 356 244 420 226"

/** Longer bottom wave — deeper, fluid maritime flow */
export const BOTTOM_WAVE =
  "M 48 302 C 148 284 196 320 256 302 C 316 284 364 320 464 302"

export const MARK_VIEWBOX = "40 198 432 116"

export const FULL_VIEWBOX = "0 0 512 512"

export const STROKE = {
  full: 5.5,
  compact: 13,
} as const

export const GLOW_FILTER = {
  blur: 2.5,
  opacity: 0.35,
} as const
