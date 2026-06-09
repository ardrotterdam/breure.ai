import type { Variants } from "framer-motion"

export const EASE_SMOOTH = [0.25, 0.4, 0.25, 1] as const

export function staggerContainer(delayChildren = 0.2): Variants {
  return {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren,
      },
    },
  }
}

export const fadeUpItem: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: EASE_SMOOTH },
  },
}
