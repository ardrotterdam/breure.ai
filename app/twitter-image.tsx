import { ImageResponse } from "next/og"

import { OgSocialCard } from "@/lib/og-image-content"

export const alt = "Breure.ai — Premium maritime web agency"
export const size = { width: 1200, height: 630 }
export const contentType = "image/png"

export default function TwitterImage() {
  return new ImageResponse(<OgSocialCard />, { ...size })
}
