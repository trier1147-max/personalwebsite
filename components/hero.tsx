'use client'

import { motion } from 'framer-motion'
import { siteConfig } from '@/site-config'
import type { Dictionary } from '@/lib/dictionary'

const GitHubIcon = ({ className }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="currentColor" aria-hidden>
    <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12" />
  </svg>
)

const XiaohongshuIcon = ({ className }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="currentColor" aria-hidden>
    <path d="M12 2C6.477 2 2 6.477 2 12s4.477 10 10 10 10-4.477 10-10S17.523 2 12 2zm3.6 5.4h-1.36v-.92h-1.04v.92H11.8v.96h1.4v.52H11.8v.96h1.4v2.56h-1.56v.96h1.56v1.04h1.04v-1.04H15.8v-.96h-1.56V9.84H15.8v-.96h-1.4v-.52H15.8v-.96zm-4.72 5.52c-.28.56-.72 1.04-1.32 1.36l.6.84c.52-.32.96-.72 1.28-1.2v3.48H12.5v-5.96h-1.04v1.28c-.16-.24-.28-.52-.32-.8h-1.04c.08.56.28 1.04.56 1.44-.36.2-.76.32-1.2.36l.28.96c.6-.08 1.12-.28 1.56-.56l.56.8z" />
  </svg>
)

interface HeroProps {
  dict: Dictionary
}

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.06,
      delayChildren: 0.1,
    },
  },
}

const itemVariants = {
  hidden: { opacity: 0, y: 16 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.4,
      ease: [0.25, 0.4, 0.25, 1],
    },
  },
}

const DecorativeElements = () => (
  <div className="absolute inset-0 overflow-hidden pointer-events-none" aria-hidden>
    {/* 两侧边缘装饰，填充宽屏留白 */}
    <motion.div
      className="absolute top-[20%] left-[2%] text-xl opacity-25"
      animate={{ y: [0, -6, 0], rotate: [0, 8, 0] }}
      transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut' }}
    >
      ✦
    </motion.div>
    <motion.div
      className="absolute bottom-[35%] left-[1%] text-lg opacity-20"
      animate={{ y: [0, 5, 0] }}
      transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut', delay: 0.5 }}
    >
      ✦
    </motion.div>
    <motion.div
      className="absolute top-[30%] right-[2%] text-xl opacity-25"
      animate={{ y: [0, 6, 0], rotate: [0, -8, 0] }}
      transition={{ duration: 5.5, repeat: Infinity, ease: 'easeInOut', delay: 0.3 }}
    >
      ✦
    </motion.div>
    <motion.div
      className="absolute bottom-[40%] right-[1%] text-lg opacity-20"
      animate={{ y: [0, -5, 0] }}
      transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut', delay: 1 }}
    >
      ✦
    </motion.div>
    <motion.div
      className="absolute top-20 left-[10%] text-2xl opacity-30"
      animate={{ y: [0, -8, 0], rotate: [0, 10, 0] }}
      transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
    >
      ✦
    </motion.div>
    <motion.div
      className="absolute top-32 right-[15%] text-xl opacity-25"
      animate={{ y: [0, 6, 0], rotate: [0, -5, 0] }}
      transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut', delay: 0.5 }}
    >
      ✦
    </motion.div>
    <motion.div
      className="absolute bottom-40 left-[8%] text-lg opacity-20"
      animate={{ y: [0, -5, 0] }}
      transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut', delay: 1 }}
    >
      ✦
    </motion.div>
    <motion.div
      className="absolute bottom-32 right-[12%] text-xl opacity-25"
      animate={{ y: [0, 8, 0], rotate: [0, 15, 0] }}
      transition={{ duration: 4.5, repeat: Infinity, ease: 'easeInOut', delay: 0.3 }}
    >
      ✦
    </motion.div>
    <motion.div
      className="absolute top-1/2 right-[5%] text-lg opacity-20"
      animate={{ y: [0, -6, 0] }}
      transition={{ duration: 5.5, repeat: Infinity, ease: 'easeInOut', delay: 0.8 }}
    >
      ✦
    </motion.div>

    <motion.div
      className="absolute top-24 right-[20%] w-16 h-16 rounded-full bg-amber-200/20"
      animate={{ scale: [1, 1.1, 1], opacity: [0.2, 0.3, 0.2] }}
      transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
    />
    <motion.div
      className="absolute bottom-48 left-[15%] w-12 h-12 rounded-2xl bg-blue-200/15 rotate-12"
      animate={{ rotate: [12, 24, 12], y: [0, -4, 0] }}
      transition={{ duration: 7, repeat: Infinity, ease: 'easeInOut' }}
    />
    <motion.div
      className="absolute top-40 left-[25%] w-8 h-8 rounded-full bg-purple-200/15"
      animate={{ y: [0, 5, 0], x: [0, 3, 0] }}
      transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut', delay: 0.2 }}
    />
  </div>
)

export function Hero({ dict }: HeroProps) {
  return (
    <section id="contact" className="pt-24 pb-7 md:pt-24 md:pb-8 relative">
      <DecorativeElements />

      <div className="container-custom w-full relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-5 lg:gap-10 items-center">
          <motion.div
            className="lg:col-span-7"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            <motion.p variants={itemVariants} className="text-sm text-muted mb-2 font-medium">
              {dict.hero.name} · {dict.hero.tagline}
            </motion.p>

            <motion.h1
              variants={itemVariants}
              className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight leading-[1.08] text-foreground mb-3 max-w-3xl"
            >
              {dict.hero.workTitle}
            </motion.h1>

            <motion.p variants={itemVariants} className="text-base text-secondary leading-relaxed max-w-3xl">
              {dict.hero.intro}
            </motion.p>
          </motion.div>

          <motion.div
            className="lg:col-span-5"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            <motion.div variants={itemVariants} className="flex flex-wrap gap-2 mb-3">
              {(dict.hero.highlights as string[]).map((highlight: string, index: number) => (
                <span key={index} className="tag text-xs">
                  {highlight}
                </span>
              ))}
            </motion.div>

            <motion.div variants={itemVariants} className="flex flex-wrap items-center gap-3 mb-3">
              <a href="#projects" className="btn btn-primary">
                {dict.hero.projectCta}
              </a>
              <a href={`mailto:${siteConfig.social.email}`} className="btn btn-link">
                {dict.contact.cta}
              </a>
            </motion.div>

            <motion.div variants={itemVariants} className="flex flex-wrap gap-2 mb-3">
              <a
                href={siteConfig.social.github}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-3 py-2 rounded-xl border border-border bg-background hover:-translate-y-0.5 hover:shadow-sm transition-all duration-200"
              >
                <GitHubIcon className="w-4 h-4" />
                <span className="text-sm font-medium">GitHub</span>
              </a>
              <a
                href={siteConfig.social.xiaohongshu}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-3 py-2 rounded-xl border border-border bg-background hover:-translate-y-0.5 hover:shadow-sm transition-all duration-200"
              >
                <XiaohongshuIcon className="w-4 h-4 text-[#FF2442]" />
                <span className="text-sm font-medium">{dict.contact.social.xiaohongshu}</span>
              </a>
            </motion.div>

            <motion.div variants={itemVariants} className="flex flex-wrap items-center gap-x-4 gap-y-1 text-sm text-muted">
              <a href={`mailto:${dict.contact.email}`} className="hover:text-foreground transition-colors underline underline-offset-4 decoration-1">
                {dict.contact.email}
              </a>
              {dict.contact.phone && (
                <span>{dict.contact.phone}</span>
              )}
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
