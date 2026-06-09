"use client"

import { motion } from "framer-motion"
import type { ReactNode } from "react"

import { EASE_SMOOTH } from "@/lib/motion"

type FadeInOnMountProps = {
  children: ReactNode
  className?: string
  delay?: number
  y?: number
}

export function FadeInOnMount({
  children,
  className,
  delay = 0,
  y = 0,
}: FadeInOnMountProps) {
  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, y }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay, ease: EASE_SMOOTH }}
    >
      {children}
    </motion.div>
  )
}
