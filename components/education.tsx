'use client'

import { useRef } from 'react'
import Image from 'next/image'
import { motion, useInView } from 'framer-motion'
import { siteConfig } from '@/site-config'
import type { Dictionary } from '@/lib/dictionary'

interface EducationProps {
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

export function Education({ dict }: EducationProps) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section id="education" className="section-padding">
      <div className="container-custom">
        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
        >
          <motion.h2 variants={itemVariants} className="heading-2 mb-12">
            {dict.education.title}
          </motion.h2>

          <div className="space-y-6 max-w-3xl">
            {siteConfig.education.map((edu) => {
              const school = dict.education.schools[edu.id as keyof typeof dict.education.schools]
              if (!school) return null

              return (
                <motion.div key={edu.id} variants={itemVariants} className="card">
                  <div className="flex gap-4 mb-4">
                    <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-xl overflow-hidden flex-shrink-0 bg-background-alt flex items-center justify-center">
                      <Image
                        src={edu.logo}
                        alt={school.name}
                        width={56}
                        height={56}
                        sizes="56px"
                        className="object-contain w-full h-full"
                      />
                    </div>

                    <div className="flex-1">
                      <div className="flex flex-wrap items-start justify-between gap-2">
                        <div>
                          <h3 className="heading-3">{school.name}</h3>
                          <p className="text-sm text-muted">{school.degree}</p>
                        </div>
                        <span className="text-sm text-muted">{school.period}</span>
                      </div>
                    </div>
                  </div>

                  <div className="ml-15 pl-15">
                    <div className="flex flex-wrap items-center gap-4 text-sm text-muted mb-4">
                      <span>{school.location}</span>
                      <span>
                        GPA: <span className="highlight">{school.gpa}</span>
                      </span>
                    </div>

                    <ul className="space-y-1.5">
                      {(school.highlights as string[]).map((highlight: string, i: number) => (
                        <li key={i} className="flex items-start gap-2 text-sm text-secondary">
                          <span className="text-muted mt-1">-</span>
                          {highlight}
                        </li>
                      ))}
                    </ul>

                    <div className="mt-4 pt-4 border-t border-border">
                      <div className="flex flex-wrap gap-2">
                        {(school.courses as string[]).slice(0, 4).map((course: string, i: number) => (
                          <span key={i} className="tag text-xs">
                            {course}
                          </span>
                        ))}
                      </div>
                    </div>
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

