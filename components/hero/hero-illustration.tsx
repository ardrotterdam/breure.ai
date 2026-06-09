"use client"

import { motion } from "framer-motion"

import { FadeIn } from "@/components/animated-text"
import { BlueprintSupplyVessel } from "@/components/blueprints/blueprint-supply-vessel"

type HeroIllustrationProps = {
  badgeOne: string
  badgeTwo: string
  variant: "mobile" | "desktop"
}

export function HeroIllustration({ badgeOne, badgeTwo, variant }: HeroIllustrationProps) {
  if (variant === "mobile") {
    return (
      <div className="lg:hidden mt-12">
        <FadeIn delay={1.6}>
          <motion.div
            className="relative w-full max-w-md sm:max-w-xl mx-auto aspect-[17/8]"
            animate={{ y: [0, -8, 0] }}
            transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
          >
            <BlueprintSupplyVessel className="w-full h-full" />
          </motion.div>
        </FadeIn>
      </div>
    )
  }

  return (
    <div className="hidden lg:block relative">
      <FadeIn delay={0.8} direction="left">
        <motion.div
          className="relative w-full aspect-[17/8] max-w-[640px] ml-auto"
          animate={{ y: [0, -10, 0] }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        >
          <BlueprintSupplyVessel className="w-full h-full" />

          <motion.div
            className="absolute -left-4 top-1/4 bg-card/90 backdrop-blur-sm border border-border px-4 py-3"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 1.5, duration: 0.6 }}
          >
            <div className="flex items-center gap-3">
              <div className="w-2 h-2 rounded-full bg-accent-soft animate-pulse" />
              <span className="text-xs text-foreground/80 font-medium tracking-wide">{badgeOne}</span>
            </div>
          </motion.div>

          <motion.div
            className="absolute -right-4 bottom-1/3 bg-card/90 backdrop-blur-sm border border-border px-4 py-3"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 1.8, duration: 0.6 }}
          >
            <div className="flex items-center gap-3">
              <svg className="w-4 h-4 text-accent-soft" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden>
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <span className="text-xs text-foreground/80 font-medium tracking-wide">{badgeTwo}</span>
            </div>
          </motion.div>
        </motion.div>
      </FadeIn>
    </div>
  )
}
