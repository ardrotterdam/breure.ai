import Image from "next/image"
import Link from "next/link"

const LOGO_WIDTH = 1536
const LOGO_HEIGHT = 340

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
      className={`group inline-flex shrink-0 items-center ${className}`.trim()}
      aria-label="Breure.ai — Home"
    >
      <Image
        src="/breure-logo.png"
        alt="Breure.ai maritime web agency logo"
        width={LOGO_WIDTH}
        height={LOGO_HEIGHT}
        priority
        sizes="(max-width: 640px) 180px, (max-width: 768px) 240px, (max-width: 1024px) 280px, (max-width: 1280px) 340px, (max-width: 1536px) 380px, 420px"
        className="h-auto w-[180px] max-w-[calc(100vw-7rem)] object-contain transition-opacity duration-300 ease-out group-hover:opacity-90 sm:w-[240px] md:w-[280px] lg:w-[340px] xl:w-[380px] 2xl:w-[420px]"
      />
    </Link>
  )
}
