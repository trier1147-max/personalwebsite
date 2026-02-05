'use client'

import Image from 'next/image'
import { motion } from 'framer-motion'
import type { Dictionary } from '@/lib/dictionary'

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

const photoVariants = {
  hidden: { opacity: 0, scale: 0.95 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      duration: 0.5,
      ease: [0.25, 0.4, 0.25, 1],
    },
  },
}

const floatingVariants = {
  animate: {
    y: [-6, 6, -6],
    transition: {
      duration: 5,
      ease: 'easeInOut',
      repeat: Infinity,
    },
  },
}

const DecorativeElements = () => (
  <div className="absolute inset-0 overflow-hidden pointer-events-none" aria-hidden>
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
      ✶
    </motion.div>
    <motion.div
      className="absolute bottom-40 left-[8%] text-lg opacity-20"
      animate={{ y: [0, -5, 0] }}
      transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut', delay: 1 }}
    >
      ✷
    </motion.div>
    <motion.div
      className="absolute bottom-32 right-[12%] text-xl opacity-25"
      animate={{ y: [0, 8, 0], rotate: [0, 15, 0] }}
      transition={{ duration: 4.5, repeat: Infinity, ease: 'easeInOut', delay: 0.3 }}
    >
      ✳
    </motion.div>
    <motion.div
      className="absolute top-1/2 right-[5%] text-lg opacity-20"
      animate={{ y: [0, -6, 0] }}
      transition={{ duration: 5.5, repeat: Infinity, ease: 'easeInOut', delay: 0.8 }}
    >
      ✺
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
    <section className="min-h-screen flex items-center pt-16 relative">
      <DecorativeElements />

      <div className="container-custom w-full relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-6 items-center">
          <motion.div
            className="order-2 lg:order-1 lg:col-span-7"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            <motion.p variants={itemVariants} className="text-base text-muted mb-4 font-medium">
              {dict.hero.welcome}
            </motion.p>

            <motion.div variants={itemVariants} className="flex items-center gap-2 text-muted mb-4">
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
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
              <span className="text-sm">{dict.contact.location}</span>
            </motion.div>

            <motion.h1 variants={itemVariants} className="heading-1 mb-5">
              {dict.hero.greeting}
              <br />
              {dict.hero.name} !
            </motion.h1>

            <motion.p variants={itemVariants} className="text-lg text-secondary leading-relaxed mb-3">
              {dict.hero.intro}
            </motion.p>

            <motion.p variants={itemVariants} className="text-lg text-secondary leading-relaxed mb-3">
              {dict.hero.summary}
            </motion.p>

            <motion.div variants={itemVariants} className="flex flex-wrap gap-2 mb-5">
              {(dict.hero.highlights as string[]).map((highlight: string, index: number) => (
                <span key={index} className="tag text-sm">
                  {highlight}
                </span>
              ))}
            </motion.div>

            <motion.p variants={itemVariants} className="text-secondary mb-7">
              {dict.hero.ctaText}
            </motion.p>

            <motion.div variants={itemVariants} className="flex flex-wrap items-center gap-4">
              <a href="#contact" className="btn btn-primary">
                {dict.hero.linkSayHello}
              </a>
              <a href="#experience" className="btn btn-link">
                {dict.hero.linkExperience}
              </a>
              <a href="#education" className="btn btn-link">
                {dict.hero.linkEducation}
              </a>
            </motion.div>
          </motion.div>

          <motion.div
            className="order-1 lg:order-2 lg:col-span-5 flex justify-center lg:justify-end lg:translate-x-4"
            variants={photoVariants}
            initial="hidden"
            animate="visible"
          >
            <motion.div className="photo-glow" variants={floatingVariants} animate="animate">
              <div className="photo-frame w-72 h-72 sm:w-80 sm:h-80 md:w-96 md:h-96 relative">
                <Image
                  src="/images/profile.png"
                  alt="Profile photo"
                  fill
                  sizes="(min-width: 1024px) 40vw, 70vw"
                  className="object-cover"
                  priority
                />
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
