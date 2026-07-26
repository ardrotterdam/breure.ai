"use client"

import { useEffect, useState } from "react"

/**
 * Tracks `prefers-reduced-motion: reduce`.
 * Defaults to `false` on the server / before hydration to avoid flash.
 */
export function usePrefersReducedMotion(): boolean {
  const [reduced, setReduced] = useState(false)

  useEffect(() => {
    const mediaQuery = window.matchMedia("(prefers-reduced-motion: reduce)")
    const update = () => setReduced(mediaQuery.matches)

    update()
    mediaQuery.addEventListener("change", update)
    return () => mediaQuery.removeEventListener("change", update)
  }, [])

  return reduced
}
