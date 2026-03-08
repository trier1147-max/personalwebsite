'use client'

import { useRef } from 'react'
import Image from 'next/image'
import { motion, useInView } from 'framer-motion'
import { siteConfig } from '@/site-config'
import { SectionDecorations } from '@/components/section-decorations'
import type { Dictionary } from '@/lib/dictionary'

interface ExperienceProps {
  dict: Dictionary
}

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
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

function parseAchievement(text: string) {
  const parts = text.split(/(\*\*[^*]+\*\*)/)
  return parts.map((part, index) => {
    if (part.startsWith('**') && part.endsWith('**')) {
      return (
        <span key={index} className="highlight">
          {part.slice(2, -2)}
        </span>
      )
    }
    return part
  })
}

export function Experience({ dict }: ExperienceProps) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section id="experience" className="section-padding bg-alt relative overflow-hidden">
      <SectionDecorations />
      <div className="container-custom relative z-10">
        <motion.div ref={ref} variants={containerVariants} initial="hidden" animate={isInView ? 'visible' : 'hidden'}>
          <motion.h2 variants={itemVariants} className="heading-2 mb-6">
            {dict.experience.title}
          </motion.h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {siteConfig.experience.map((exp) => {
              const item = dict.experience.items[exp.id as keyof typeof dict.experience.items]
              if (!item) return null

              return (
                <motion.div key={exp.id} variants={itemVariants} className="card flex flex-col">
                  <div className="flex gap-3 mb-3">
                    <div className="w-11 h-11 rounded-xl overflow-hidden flex-shrink-0 bg-background-alt flex items-center justify-center p-1">
                      <Image
                        src={exp.logo}
                        alt={item.company}
                        width={44}
                        height={44}
                        sizes="44px"
                        className="object-contain w-full h-full"
                      />
                    </div>
                    <div className="min-w-0 flex-1">
                      <h3 className="heading-3 text-base">{item.company}</h3>
                      <p className="text-sm highlight">{item.role}</p>
                      <span className="text-sm text-muted block">{item.period}</span>
                      <span className="text-sm text-muted">{item.location}</span>
                    </div>
                  </div>

                  <p className="text-secondary text-sm mb-3 flex-1 leading-relaxed">{item.description}</p>

                  <ul className="space-y-1.5">
                    {(item.achievements as string[]).map((achievement: string, i: number) => (
                      <li key={i} className="flex items-start gap-2 text-sm text-secondary">
                        <span className="text-muted mt-0.5 shrink-0">-</span>
                        <span className="leading-relaxed">{parseAchievement(achievement)}</span>
                      </li>
                    ))}
                  </ul>
                </motion.div>
              )
            })}
          </div>
        </motion.div>
      </div>
    </section>
  )
}

