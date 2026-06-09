"use client"

import { motion } from "framer-motion"
import type { ReactNode } from "react"

import { fadeUpItem, staggerContainer } from "@/lib/motion"

type StaggerInViewProps = {
  children: ReactNode
  className?: string
  delayChildren?: number
  amount?: number
}

export function StaggerInView({
  children,
  className,
  delayChildren = 0.2,
  amount = 0.2,
}: StaggerInViewProps) {
  return (
    <motion.div
      className={className}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount }}
      variants={staggerContainer(delayChildren)}
    >
      {children}
    </motion.div>
  )
}

type StaggerItemProps = {
  children: ReactNode
  className?: string
}

export function StaggerItem({ children, className }: StaggerItemProps) {
  return (
    <motion.div variants={fadeUpItem} className={className}>
      {children}
    </motion.div>
  )
}
