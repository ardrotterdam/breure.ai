import Image from "next/image"
import Link from "next/link"

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
      <Image
        src="/images/breure-ai-webbureau-rotterdam-logo.webp"
        alt="Breure.ai – AI webbureau Rotterdam"
        width={662}
        height={160}
        priority
        className="h-12 w-auto sm:h-14 md:h-16 lg:h-[4.25rem] xl:h-20 2xl:h-24"
      />
    </Link>
  )
}
