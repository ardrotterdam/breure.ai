import Image from "next/image"

type InsightFigureProps = {
  src: string
  alt: string
  width?: number
  height?: number
  caption?: string
  priority?: boolean
  variant?: "hero" | "inline"
}

export function InsightFigure({
  src,
  alt,
  width = 1536,
  height = 1024,
  caption,
  priority = false,
  variant = "inline",
}: InsightFigureProps) {
  if (variant === "hero") {
    return (
      <figure className="mb-10 sm:mb-12">
        <div className="relative aspect-video overflow-hidden rounded-xl border border-border/40">
          <Image
            src={src}
            alt={alt}
            width={width}
            height={height}
            priority={priority}
            className="h-full w-full object-cover object-center"
            sizes="(max-width: 768px) 100vw, 768px"
          />
        </div>
      </figure>
    )
  }

  return (
    <figure className="mt-8 sm:mt-10">
      <div className="overflow-hidden rounded-xl border border-border/40">
        <Image
          src={src}
          alt={alt}
          width={width}
          height={height}
          className="h-auto w-full"
          sizes="(max-width: 768px) 100vw, 768px"
        />
      </div>
      {caption ? (
        <figcaption className="mt-3 text-sm text-text-eyebrow leading-relaxed">
          {caption}
        </figcaption>
      ) : null}
    </figure>
  )
}
