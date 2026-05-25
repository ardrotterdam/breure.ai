"use client"

import { useEffect } from "react"
import { useTheme } from "next-themes"

export function ThemeColorMeta() {
  const { resolvedTheme } = useTheme()

  useEffect(() => {
    const meta = document.querySelector('meta[name="theme-color"]')
    if (!meta) return

    meta.setAttribute(
      "content",
      resolvedTheme === "light" ? "#f4f6f9" : "#080f1e",
    )
  }, [resolvedTheme])

  return null
}
