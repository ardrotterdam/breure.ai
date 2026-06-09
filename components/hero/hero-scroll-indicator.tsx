"use client"

import { motion } from "framer-motion"

export function HeroScrollIndicator() {
  return (
    <motion.div
      className="hidden sm:block absolute bottom-8 right-6 lg:right-12"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 2.5 }}
    >
      <motion.div
        className="w-6 h-10 border border-border/50 rounded-full flex items-start justify-center p-2"
        animate={{ y: [0, 5, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        <motion.div
          className="w-1 h-2 bg-accent-soft rounded-full"
          animate={{ y: [0, 8, 0], opacity: [1, 0.3, 1] }}
          transition={{ duration: 2, repeat: Infinity }}
        />
      </motion.div>
    </motion.div>
  )
}
