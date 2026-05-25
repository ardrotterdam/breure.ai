"use client"

import { motion } from "framer-motion"
import type { ReactNode } from "react"

interface PageHeaderProps {
  eyebrow: string
  title: ReactNode
  description?: string
}

export function PageHeader({ eyebrow, title, description }: PageHeaderProps) {
  return (
    <section className="relative pt-32 pb-16 lg:pt-40 lg:pb-20 bg-[#080f1e] overflow-hidden">
      {/* Ambient glow */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-32 -left-32 w-[480px] h-[480px] rounded-full bg-[#0078D4]/12 blur-[140px]" />
        <div className="absolute top-0 right-0 w-[420px] h-[420px] rounded-full bg-[#1e3a5f]/30 blur-[140px]" />
      </div>

      {/* Subtle dot grid */}
      <div
        className="absolute inset-0 opacity-[0.03] pointer-events-none"
        style={{
          backgroundImage: `radial-gradient(circle at 1px 1px, rgba(255,255,255,0.4) 1px, transparent 0)`,
          backgroundSize: "32px 32px",
        }}
      />

      <div className="relative container mx-auto px-6 lg:px-12">
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: [0.25, 0.4, 0.25, 1] }}
          className="text-sm font-medium tracking-[0.3em] uppercase text-[#5a7a9e] mb-6"
        >
          {eyebrow}
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1, ease: [0.25, 0.4, 0.25, 1] }}
          className="text-4xl sm:text-5xl lg:text-6xl font-light tracking-tight text-white max-w-4xl leading-[1.05]"
        >
          {title}
        </motion.h1>

        {description && (
          <motion.p
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2, ease: [0.25, 0.4, 0.25, 1] }}
            className="mt-8 text-lg text-[#8ba3c0] max-w-2xl leading-relaxed"
          >
            {description}
          </motion.p>
        )}
      </div>

      {/* Bottom border */}
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#1e3a5f] to-transparent" />
    </section>
  )
}
