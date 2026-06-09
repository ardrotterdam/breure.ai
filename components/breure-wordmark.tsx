import { BOTTOM_WAVE, MARK_VIEWBOX, STROKE, TOP_WAVE } from "@/lib/brand-logo"
import { cn } from "@/lib/utils"

interface BreureWordmarkProps {
  className?: string
  /** Height of the wave mark in pixels */
  markHeight?: number
  /** Tailwind classes for the wordmark text */
  textClassName?: string
}

export function BreureWordmark({
  className,
  markHeight = 36,
  textClassName,
}: BreureWordmarkProps) {
  const markWidth = markHeight * 3.72

  return (
    <span
      className={cn("inline-flex items-center gap-2.5 sm:gap-3", className)}
      aria-hidden={false}
    >
      <svg
        viewBox={MARK_VIEWBOX}
        fill="none"
        aria-hidden="true"
        className="shrink-0"
        style={{ height: markHeight, width: markWidth }}
      >
        <path
          d={TOP_WAVE}
          stroke="currentColor"
          strokeWidth={STROKE.compact}
          strokeLinecap="round"
          strokeLinejoin="round"
          className="text-foreground"
        />
        <path
          d={BOTTOM_WAVE}
          stroke="#0A84FF"
          strokeWidth={STROKE.compact}
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
      <span
        className={cn(
          "font-light tracking-tight text-foreground whitespace-nowrap",
          textClassName,
        )}
      >
        Breure<span className="text-accent-soft">.ai</span>
      </span>
    </span>
  )
}
