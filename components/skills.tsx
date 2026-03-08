'use client'

import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { siteConfig } from '@/site-config'
import { SectionDecorations } from '@/components/section-decorations'
import type { Dictionary } from '@/lib/dictionary'

interface SkillsProps {
  dict: Dictionary
}

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.08,
    },
  },
}

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: [0.25, 0.4, 0.25, 1],
    },
  },
}

const tagVariants = {
  hidden: { opacity: 0, scale: 0.9 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      duration: 0.3,
      ease: [0.25, 0.4, 0.25, 1],
    },
  },
}

export function Skills({ dict }: SkillsProps) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section id="skills" className="section-padding relative overflow-hidden">
      <SectionDecorations />
      <div className="container-custom relative z-10">
        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
        >
          <motion.h2 variants={itemVariants} className="heading-2 mb-6">
            {dict.skills.title}
          </motion.h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {siteConfig.skillCategories.map((categoryKey) => {
              const category = dict.skills.categories[categoryKey as keyof typeof dict.skills.categories]
              if (!category) return null

              return (
                <motion.div
                  key={categoryKey}
                  variants={itemVariants}
                  className="card"
                >
                  <h3 className="heading-3 mb-3">{category.name}</h3>
                  <motion.div
                    className="flex flex-wrap gap-2"
                    variants={containerVariants}
                  >
                    {(category.items as string[]).map((skill: string, i: number) => (
                      <motion.span
                        key={i}
                        variants={tagVariants}
                        className="tag"
                      >
                        {skill}
                      </motion.span>
                    ))}
                  </motion.div>
                </motion.div>
              )
            })}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
