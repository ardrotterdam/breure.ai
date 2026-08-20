import Link from "next/link"

const TOKEN = /(\*\*[^*]+\*\*|\[[^\]]+\]\([^)]+\))/g

type InsightRichTextProps = {
  text: string
  className?: string
}

export function InsightRichText({ text, className }: InsightRichTextProps) {
  const parts = text.split(TOKEN)

  return (
    <span className={className}>
      {parts.map((part, index) => {
        const bold = /^\*\*([^*]+)\*\*$/.exec(part)
        if (bold) {
          return (
            <strong key={index} className="font-medium text-foreground">
              {bold[1]}
            </strong>
          )
        }

        const link = /^\[([^\]]+)\]\(([^)]+)\)$/.exec(part)
        if (link) {
          return (
            <Link
              key={index}
              href={link[2]}
              className="text-foreground underline decoration-accent/40 underline-offset-[0.22em] transition-colors hover:text-accent hover:decoration-accent"
            >
              {link[1]}
            </Link>
          )
        }

        return <span key={index}>{part}</span>
      })}
    </span>
  )
}
