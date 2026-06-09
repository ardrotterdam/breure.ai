import { ImageResponse } from "next/og"

import { FaviconMark } from "@/lib/og-image-content"

export const size = { width: 32, height: 32 }
export const contentType = "image/png"

export default function Icon() {
  return new ImageResponse(<FaviconMark size={32} />, { ...size })
}
