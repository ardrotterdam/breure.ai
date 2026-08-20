import Link from "next/link"

import { InsightRichText } from "@/components/insights/insight-rich-text"
import type { InsightBlock } from "@/lib/insights"

const bodyText =
  "text-base sm:text-[1.05rem] text-text-secondary leading-relaxed"

type InsightBlocksProps = {
  blocks: InsightBlock[]
}

export function InsightBlocks({ blocks }: InsightBlocksProps) {
  return (
    <div className="mt-5 space-y-5">
      {blocks.map((block, index) => (
        <InsightBlockView key={`${block.type}-${index}`} block={block} />
      ))}
    </div>
  )
}

function InsightBlockView({ block }: { block: InsightBlock }) {
  switch (block.type) {
    case "paragraph":
      return (
        <p className={bodyText}>
          <InsightRichText text={block.text} />
        </p>
      )
    case "emphasis":
      return (
        <p className="text-base sm:text-lg font-medium text-foreground leading-relaxed">
          <InsightRichText text={block.text} />
        </p>
      )
    case "heading":
      return (
        <h3 className="pt-4 sm:pt-6 text-lg sm:text-xl font-light tracking-tight text-foreground">
          {block.text}
        </h3>
      )
    case "callout":
      return (
        <aside className="border-l-2 border-accent pl-5 sm:pl-6 py-1">
          <p className="text-lg sm:text-xl font-light tracking-tight text-foreground leading-snug">
            <InsightRichText text={block.text} />
          </p>
        </aside>
      )
    case "formula":
      return (
        <div className="rounded-xl border border-border/60 bg-ocean-deep/40 px-5 py-6 sm:px-8 sm:py-8">
          <p className="text-center text-base sm:text-lg font-light tracking-tight text-foreground leading-snug">
            <InsightRichText text={block.text} />
          </p>
        </div>
      )
    case "quote":
      return (
        <blockquote className="border-l-2 border-accent/40 pl-5 sm:pl-6">
          <p className="text-base sm:text-[1.05rem] text-foreground/90 leading-relaxed italic">
            <InsightRichText text={block.text} />
          </p>
        </blockquote>
      )
    case "list":
      return block.ordered ? (
        <ol className="my-2 space-y-2.5">
          {block.items.map((item, itemIndex) => (
            <li
              key={item}
              className={`flex gap-3 ${bodyText}`}
            >
              <span className="w-5 shrink-0 text-accent-soft tabular-nums">
                {itemIndex + 1}.
              </span>
              <span>
                <InsightRichText text={item} />
              </span>
            </li>
          ))}
        </ol>
      ) : (
        <ul className="my-2 space-y-2.5">
          {block.items.map((item) => (
            <li key={item} className={`flex gap-3 ${bodyText}`}>
              <span
                className="mt-[0.7em] h-1 w-1 shrink-0 rounded-full bg-accent"
                aria-hidden
              />
              <span>
                <InsightRichText text={item} />
              </span>
            </li>
          ))}
        </ul>
      )
    case "cta":
      return (
        <p className="pt-2">
          <Link href={block.href} className="btn-primary px-6 py-3 text-sm">
            {block.label}
          </Link>
        </p>
      )
  }
}
