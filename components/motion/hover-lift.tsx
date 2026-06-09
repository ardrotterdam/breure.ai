"use client"

import { motion } from "framer-motion"
import type { ReactNode } from "react"

type HoverLiftProps = {
  children: ReactNode
  className?: string
  y?: number
  x?: number
}

export function HoverLift({ children, className, y = -4, x = 0 }: HoverLiftProps) {
  return (
    <motion.div
      className={className}
      whileHover={{ y, x, borderColor: "var(--border-hover)" }}
      transition={{ duration: 0.3 }}
    >
      {children}
    </motion.div>
  )
}
