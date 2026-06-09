import Link from "next/link"

import { BreureWordmark } from "@/components/breure-wordmark"

interface NavbarLogoProps {
  href?: string
  className?: string
  onClick?: () => void
}

export function NavbarLogo({ href = "/", className = "", onClick }: NavbarLogoProps) {
  return (
    <Link
      href={href}
      onClick={onClick}
      className={`group inline-flex shrink-0 items-center transition-opacity duration-300 ease-out hover:opacity-90 ${className}`.trim()}
      aria-label="Breure.ai — Home"
    >
      <BreureWordmark
        markHeight={32}
        textClassName="text-lg sm:text-xl md:text-2xl lg:text-[1.65rem] xl:text-[1.85rem] 2xl:text-[2rem]"
      />
    </Link>
  )
}
