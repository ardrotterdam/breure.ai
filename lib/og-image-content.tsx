/** Shared JSX for next/og ImageResponse — favicons and social cards */

export const OG_BRAND = {
  navy: "#081220",
  navyDeep: "#080f1e",
  white: "#FFFFFF",
  blue: "#0A84FF",
  accent: "#2b88d8",
  muted: "#8ba3c0",
} as const

export const OG_TAGLINE =
  "Maritieme websites — engineered for trust"

/** Wave mark paths scaled for a 48×48 favicon canvas */
export function FaviconMark({ size = 48 }: { size?: number }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 48 48"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect width="48" height="48" fill={OG_BRAND.navy} />
      <path
        d="M 4 20.5 C 10.5 19 14.5 21.5 24 20.5 C 33.5 19 37.5 21.5 44 20.5"
        stroke={OG_BRAND.white}
        strokeWidth="2.2"
        strokeLinecap="round"
        strokeLinejoin="round"
        fill="none"
      />
      <path
        d="M 2 27.5 C 10.5 26 15.5 29 24 27.5 C 32.5 26 37.5 29 46 27.5"
        stroke={OG_BRAND.blue}
        strokeWidth="2.2"
        strokeLinecap="round"
        strokeLinejoin="round"
        fill="none"
      />
    </svg>
  )
}

/** Large wave mark for OG / Twitter cards */
export function OgWaveMark() {
  return (
    <svg width="200" height="120" viewBox="40 198 432 116" fill="none">
      <path
        d="M 80 226 C 156 212 204 244 256 226 C 308 208 356 244 420 226"
        stroke={OG_BRAND.white}
        strokeWidth="5.5"
        strokeLinecap="round"
        strokeLinejoin="round"
        fill="none"
      />
      <path
        d="M 48 302 C 148 284 196 320 256 302 C 316 284 364 320 464 302"
        stroke={OG_BRAND.blue}
        strokeWidth="5.5"
        strokeLinecap="round"
        strokeLinejoin="round"
        fill="none"
      />
    </svg>
  )
}

export function OgSocialCard({
  tagline = OG_TAGLINE,
}: {
  tagline?: string
}) {
  return (
    <div
      style={{
        width: "100%",
        height: "100%",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        background: `linear-gradient(160deg, ${OG_BRAND.navyDeep} 0%, ${OG_BRAND.navy} 45%, #0f2038 100%)`,
        fontFamily: "system-ui, sans-serif",
      }}
    >
      <OgWaveMark />
      <div
        style={{
          display: "flex",
          marginTop: 32,
          fontSize: 64,
          fontWeight: 300,
          letterSpacing: "-0.02em",
          color: OG_BRAND.white,
        }}
      >
        <span>Breure</span>
        <span style={{ color: OG_BRAND.accent }}>.ai</span>
      </div>
      <div
        style={{
          marginTop: 16,
          fontSize: 26,
          fontWeight: 400,
          letterSpacing: "0.12em",
          textTransform: "uppercase",
          color: OG_BRAND.muted,
        }}
      >
        {tagline}
      </div>
    </div>
  )
}
