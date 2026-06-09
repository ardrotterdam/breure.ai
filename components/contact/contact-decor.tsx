"use client"

import { motion } from "framer-motion"

export function ContactDecor() {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      <div
        className="absolute top-1/3 -left-32 w-[480px] h-[480px] rounded-full blur-[120px]"
        style={{ backgroundColor: "var(--accent-blur)" }}
      />
      <div
        className="absolute bottom-1/4 right-0 w-[420px] h-[420px] rounded-full blur-[140px]"
        style={{ backgroundColor: "var(--divider-blur)" }}
      />

      <motion.div
        className="absolute -right-48 top-1/2 -translate-y-1/2 w-[500px] h-[500px] rounded-full border border-border/30"
        animate={{ rotate: 360 }}
        transition={{ duration: 120, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
      />
      <motion.div
        className="absolute -right-32 top-1/2 -translate-y-1/2 w-[350px] h-[350px] rounded-full border border-border/20"
        animate={{ rotate: -360 }}
        transition={{ duration: 90, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
      />
    </div>
  )
}
