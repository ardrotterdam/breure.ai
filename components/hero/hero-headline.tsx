"use client"

import { motion } from "framer-motion"

import { AnimatedWord } from "@/components/animated-text"

type HeroHeadlineProps = {
  headlineMain: string
  headlineAccent: string
  headlineEnd: string
}

export function HeroHeadline({ headlineMain, headlineAccent, headlineEnd }: HeroHeadlineProps) {
  return (
    <h1 className="text-[2.25rem] leading-[1.05] sm:text-5xl lg:text-6xl xl:text-7xl font-light tracking-tight mb-6 sm:mb-8">
      <AnimatedWord
        text={headlineMain}
        className="block text-foreground"
        delay={0.4}
      />
      <span className="block mt-2">
        <motion.span
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.7 }}
          className="text-gradient font-normal"
        >
          {headlineAccent}
        </motion.span>
        <motion.span
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.4, delay: 1.1 }}
          className="text-foreground"
        >
          {headlineEnd}
        </motion.span>
      </span>
    </h1>
  )
}
