'use client'

import { useRef } from 'react'
import Image from 'next/image'
import { motion, useInView } from 'framer-motion'
import { siteConfig } from '@/site-config'
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
  const projectsRef = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-80px' })
  const projectsInView = useInView(projectsRef, { once: true, margin: '-80px' })

  return (
    <section id="experience" className="section-padding bg-alt">
      <div className="container-custom">
        <motion.div ref={ref} variants={containerVariants} initial="hidden" animate={isInView ? 'visible' : 'hidden'}>
          <motion.h2 variants={itemVariants} className="heading-2 mb-12">
            {dict.experience.title}
          </motion.h2>

          <div className="space-y-6 max-w-3xl">
            {siteConfig.experience.map((exp) => {
              const item = dict.experience.items[exp.id as keyof typeof dict.experience.items]
              if (!item) return null

              return (
                <motion.div key={exp.id} variants={itemVariants} className="card">
                  <div className="flex gap-4 mb-4">
                    <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-xl overflow-hidden flex-shrink-0 bg-background-alt flex items-center justify-center p-1">
                      <Image
                        src={exp.logo}
                        alt={item.company}
                        width={56}
                        height={56}
                        sizes="56px"
                        className="object-contain w-full h-full"
                      />
                    </div>

                    <div className="flex-1">
                      <div className="flex flex-wrap items-start justify-between gap-2">
                        <div>
                          <h3 className="heading-3">{item.company}</h3>
                          <p className="text-sm highlight">{item.role}</p>
                        </div>
                        <div className="text-right">
                          <span className="text-sm text-muted">{item.period}</span>
                          <p className="text-sm text-muted">{item.location}</p>
                        </div>
                      </div>
                    </div>
                  </div>

                  <p className="text-secondary text-sm mb-4">{item.description}</p>

                  <ul className="space-y-2">
                    {(item.achievements as string[]).map((achievement: string, i: number) => (
                      <li key={i} className="flex items-start gap-2 text-sm text-secondary">
                        <span className="text-muted mt-1">-</span>
                        <span className="leading-relaxed">{parseAchievement(achievement)}</span>
                      </li>
                    ))}
                  </ul>
                </motion.div>
              )
            })}
          </div>
        </motion.div>

        <motion.div
          ref={projectsRef}
          variants={containerVariants}
          initial="hidden"
          animate={projectsInView ? 'visible' : 'hidden'}
          className="mt-16"
        >
          <motion.h2 variants={itemVariants} className="heading-2 mb-8">
            {dict.projects.title}
          </motion.h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-3xl">
            {siteConfig.projects.map((proj) => {
              const project = dict.projects.items[proj.id as keyof typeof dict.projects.items]
              if (!project) return null

              return (
                <motion.div key={proj.id} variants={itemVariants} className="card">
                  <div className="flex items-start justify-between gap-3 mb-3">
                    <div>
                      <h3 className="heading-3 mb-1">{project.name}</h3>
                      <p className="text-sm text-muted">{project.period}</p>
                    </div>
                  </div>

                  <p className="text-secondary text-sm mb-4">{project.description}</p>

                  <div className="flex flex-wrap gap-1.5">
                    {(project.tech as string[]).map((tech: string, i: number) => (
                      <span key={i} className="tag text-xs">
                        {tech}
                      </span>
                    ))}
                  </div>
                </motion.div>
              )
            })}
          </div>
        </motion.div>
      </div>
    </section>
  )
}

