import { motion } from 'framer-motion'
import type { ReactNode } from 'react'

export function Section({
  id,
  index,
  title,
  children,
}: {
  id: string
  index: string
  title: string
  children: ReactNode
}) {
  return (
    <section id={id} className="mx-auto max-w-content scroll-mt-24 px-5 py-20 sm:py-24">
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-80px' }}
        transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
      >
        <div className="mb-10 flex items-baseline gap-3">
          <span className="font-mono text-sm text-violet">{index} /</span>
          <h2 className="font-display text-2xl font-600 tracking-tight text-snow sm:text-3xl">
            {title}
          </h2>
          <div className="ml-4 hidden h-px flex-1 bg-gradient-to-r from-edge to-transparent sm:block" />
        </div>
        {children}
      </motion.div>
    </section>
  )
}

export function Reveal({ children, delay = 0 }: { children: ReactNode; delay?: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{ duration: 0.55, delay, ease: [0.16, 1, 0.3, 1] }}
    >
      {children}
    </motion.div>
  )
}
