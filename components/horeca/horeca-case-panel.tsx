"use client"

import { useRef, type CSSProperties } from "react"
import Image from "next/image"
import { motion, useScroll, useTransform } from "framer-motion"

import { usePrefersReducedMotion } from "@/hooks/use-prefers-reduced-motion"
import { fadeUpItem } from "@/lib/motion"

/** Tiny shared blur so next/image can show a placeholder before real covers arrive. */
const COVER_BLUR =
  "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAABAAEDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAn/xAAUEAEAAAAAAAAAAAAAAAAAAAAA/8QAFQEBAQAAAAAAAAAAAAAAAAAAAAX/xAAUEQEAAAAAAAAAAAAAAAAAAAAA/9oADAMBAAIRAxEAPwCdABmX/9k="

export type CaseAccent = {
  wash: string
  washStrong: string
  ink: string
  cream: string
}

export const FRIETKOT_ACCENT: CaseAccent = {
  wash: "rgb(168 42 34 / 0.22)",
  washStrong: "rgb(196 140 48 / 0.28)",
  ink: "#8B1E18",
  cream: "#F3E6C8",
}

export const INDENKONING_ACCENT: CaseAccent = {
  wash: "rgb(36 72 52 / 0.28)",
  washStrong: "rgb(232 220 196 / 0.18)",
  ink: "#244834",
  cream: "#F2E8D5",
}

type HorecaCasePanelProps = {
  name: string
  location: string
  description: string
  cta: string
  href: string
  imageSrc: string
  imageAlt: string
  /** Intrinsic pixel size of the cover — drives the panel aspect ratio. */
  imageWidth: number
  imageHeight: number
  accent: CaseAccent
  label?: string
  reverse?: boolean
}

export function HorecaCasePanel({
  name,
  location,
  description,
  cta,
  href,
  imageSrc,
  imageAlt,
  imageWidth,
  imageHeight,
  accent,
  label,
  reverse = false,
}: HorecaCasePanelProps) {
  const reduceMotion = usePrefersReducedMotion()
  const panelRef = useRef<HTMLElement>(null)
  const { scrollYProgress } = useScroll({
    target: panelRef,
    offset: ["start end", "end start"],
  })
  // Parallax the wash only — translating the screenshot would crop edges.
  const washY = useTransform(
    scrollYProgress,
    [0, 1],
    reduceMotion ? ["0%", "0%"] : ["-4%", "4%"],
  )

  return (
    <motion.section
      ref={panelRef}
      initial={reduceMotion ? false : "hidden"}
      whileInView="visible"
      viewport={{ once: true, amount: 0.25 }}
      variants={fadeUpItem}
      className="relative overflow-hidden bg-background py-16 sm:py-20 lg:py-28"
      style={
        {
          "--case-wash": accent.wash,
          "--case-wash-strong": accent.washStrong,
          "--case-ink": accent.ink,
          "--case-cream": accent.cream,
        } as CSSProperties
      }
    >
      <div className="container mx-auto px-5 sm:px-6 lg:px-12">
        <div
          className={`grid items-center gap-10 lg:gap-16 lg:grid-cols-12 ${
            reverse ? "lg:[&>*:first-child]:order-2" : ""
          }`}
        >
          <div className="lg:col-span-5">
            {label && (
              <p className="mb-4 text-[11px] font-medium uppercase tracking-[0.28em] text-text-eyebrow">
                {label}
              </p>
            )}
            <h2 className="font-light tracking-tight text-foreground leading-[1.08] text-[clamp(1.85rem,4vw,3rem)]">
              {name}
            </h2>
            <div
              aria-hidden
              className="mt-4 h-px w-12"
              style={{
                background:
                  "linear-gradient(90deg, var(--case-ink), var(--case-cream))",
              }}
            />
            <p className="mt-4 text-sm tracking-wide text-text-secondary sm:text-base">
              {location}
            </p>
            <p className="mt-6 max-w-md text-base leading-relaxed text-text-secondary sm:mt-7 sm:text-lg">
              {description}
            </p>
            <a
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              className="group mt-8 inline-flex items-center gap-2.5 text-sm font-medium text-foreground transition-colors hover:text-accent focus:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 sm:mt-10"
              style={{ ["--tw-ring-offset-color" as string]: "var(--ring-offset)" }}
            >
              <span>{cta}</span>
              <span aria-hidden className="transition-transform duration-300 group-hover:translate-x-0.5">
                →
              </span>
            </a>
          </div>

          <div className="min-w-0 lg:col-span-7">
            <a
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              className="group relative block focus:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
              style={{ ["--tw-ring-offset-color" as string]: "var(--ring-offset)" }}
              aria-label={`${cta}: ${name}`}
            >
              <div
                className="relative w-full bg-surface-2"
                style={{ aspectRatio: `${imageWidth} / ${imageHeight}` }}
              >
                <Image
                  src={imageSrc}
                  alt={imageAlt}
                  width={imageWidth}
                  height={imageHeight}
                  sizes="(max-width: 1024px) 100vw, 58vw"
                  placeholder="blur"
                  blurDataURL={COVER_BLUR}
                  className={`h-auto w-full transition-[filter] duration-700 ease-out ${
                    reduceMotion ? "" : "group-hover:brightness-[1.03]"
                  }`}
                />

                <motion.div
                  aria-hidden
                  className={`pointer-events-none absolute inset-[-6%] transition-opacity duration-700 ${
                    reduceMotion
                      ? "opacity-40"
                      : "opacity-30 group-hover:opacity-55"
                  }`}
                  style={{
                    y: reduceMotion ? undefined : washY,
                    background: `linear-gradient(135deg, var(--case-wash), transparent 55%, var(--case-wash-strong))`,
                  }}
                />
              </div>
            </a>
          </div>
        </div>
      </div>
    </motion.section>
  )
}
