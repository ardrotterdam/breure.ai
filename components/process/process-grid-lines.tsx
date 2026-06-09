"use client"

import { motion } from "framer-motion"

export function ProcessGridLines() {
  return (
    <div className="absolute right-0 top-0 bottom-0 w-1/2 overflow-hidden opacity-[0.06] dark:opacity-[0.03]">
      <motion.div
        className="absolute inset-0"
        style={{
          background: `repeating-linear-gradient(
              90deg,
              var(--foreground) 0px,
              var(--foreground) 1px,
              transparent 1px,
              transparent 60px
            )`,
        }}
        animate={{ x: [0, 60] }}
        transition={{ duration: 20, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
      />
    </div>
  )
}
