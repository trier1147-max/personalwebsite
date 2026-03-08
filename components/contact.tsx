'use client'

import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { siteConfig } from '@/site-config'
import { SectionDecorations } from '@/components/section-decorations'
import type { Dictionary } from '@/lib/dictionary'

interface ContactProps {
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

export function Contact({ dict }: ContactProps) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section id="contact" className="section-padding bg-alt relative overflow-hidden">
      <SectionDecorations />
      <div className="container-custom relative z-10">
        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
          className="max-w-2xl"
        >
          <motion.h2 variants={itemVariants} className="heading-2 mb-4">
            {dict.contact.title}
          </motion.h2>

          <motion.p variants={itemVariants} className="text-secondary text-lg mb-5">
            {dict.contact.subtitle}
          </motion.p>

          <motion.div variants={itemVariants} className="space-y-3 mb-5">
            <a
              href={`mailto:${dict.contact.email}`}
              className="flex items-center gap-3 text-lg hover:opacity-70 transition-opacity"
            >
              <span className="highlight underline underline-offset-4 decoration-1">
                {dict.contact.email}
              </span>
            </a>

            {dict.contact.phone && (
              <a
                href={`tel:${dict.contact.phone}`}
                className="flex items-center gap-2 text-secondary hover:opacity-70 transition-opacity"
              >
                <span className="highlight">{dict.contact.phone}</span>
              </a>
            )}

            <p className="text-secondary flex items-center gap-2">
              <svg className="w-4 h-4 text-muted" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={1.5}
                  d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                />
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={1.5}
                  d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                />
              </svg>
              {dict.contact.location}
            </p>
          </motion.div>

          <motion.div variants={itemVariants} className="flex flex-wrap items-center gap-4 mb-6">
            <a href={`mailto:${siteConfig.social.email}`} className="btn btn-primary">
              {dict.contact.cta}
            </a>
            <a href={siteConfig.social.github} target="_blank" rel="noopener noreferrer" className="btn btn-link">
              GitHub
            </a>
            <a href={siteConfig.social.linkedin} target="_blank" rel="noopener noreferrer" className="btn btn-link">
              LinkedIn
            </a>
            <a href={siteConfig.social.xiaohongshu} target="_blank" rel="noopener noreferrer" className="btn btn-link">
              {dict.contact.social.xiaohongshu}
            </a>
          </motion.div>

          <motion.div variants={itemVariants} className="inline-flex items-center gap-3 px-4 py-3 rounded-xl border border-border bg-background">
            <span className="text-lg">📕</span>
            <div>
              <p className="text-sm font-medium text-foreground">{dict.contact.social.xiaohongshuHandle}</p>
              <p className="text-xs text-muted">{dict.contact.social.xiaohongshuStat}</p>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
