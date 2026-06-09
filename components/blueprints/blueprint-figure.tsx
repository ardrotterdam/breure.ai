import Image from "next/image"

type BlueprintFigureProps = {
  src: string
  className?: string
  priority?: boolean
}

export function BlueprintFigure({ src, className, priority }: BlueprintFigureProps) {
  return (
    <div className={className}>
      <Image
        src={src}
        alt=""
        aria-hidden
        width={680}
        height={320}
        className="w-full h-auto max-w-full"
        priority={priority}
      />
    </div>
  )
}
