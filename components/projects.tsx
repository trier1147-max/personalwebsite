'use client'

import { useRef, useState } from 'react'
import Image from 'next/image'
import { motion, useInView } from 'framer-motion'
import { siteConfig } from '@/site-config'
import { SectionDecorations } from '@/components/section-decorations'
import type { Dictionary } from '@/lib/dictionary'

interface ProjectsProps {
  dict: Dictionary
}

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1 },
  },
}

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: [0.25, 0.4, 0.25, 1] },
  },
}

function parseHighlight(text: string) {
  const parts = text.split(/(\*\*[^*]+\*\*)/)
  return parts.map((part, index) => {
    if (part.startsWith('**') && part.endsWith('**')) {
      return <span key={index} className="highlight">{part.slice(2, -2)}</span>
    }
    return part
  })
}

/** 手机外壳 + 截图 */
function PhoneMockup({ src, alt }: { src: string; alt: string }) {
  const [imgError, setImgError] = useState(false)
  return (
    <div className="flex-shrink-0 flex justify-center">
      {/* 手机外壳 */}
      <div className="relative w-44 sm:w-48">
        <div className="relative bg-gray-900 rounded-[2.4rem] p-[3px] shadow-2xl ring-1 ring-white/10">
          {/* 顶部刘海 */}
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-20 h-5 bg-gray-900 rounded-b-2xl z-10" />
          {/* 屏幕区域 */}
          <div className="rounded-[2.2rem] overflow-hidden bg-gray-100" style={{ aspectRatio: '9/19.5' }}>
            {imgError ? (
              <div className="w-full h-full flex items-center justify-center">
                <span className="text-4xl opacity-20">✦</span>
              </div>
            ) : (
              <img
                src={src}
                alt={alt}
                className="w-full h-full object-cover object-top"
                onError={() => setImgError(true)}
              />
            )}
          </div>
          {/* 底部 home bar */}
          <div className="flex justify-center py-2">
            <div className="w-16 h-1 bg-gray-600 rounded-full" />
          </div>
        </div>
      </div>
    </div>
  )
}

/** 普通横版图片 */
function LandscapeImage({ src, alt }: { src: string; alt: string }) {
  const [imgError, setImgError] = useState(false)
  if (imgError) return <span className="text-4xl opacity-30">✦</span>
  return (
    <Image
      src={src}
      alt={alt}
      fill
      className="object-cover object-top transition-transform duration-300 group-hover:scale-105"
      sizes="(min-width: 1024px) 50vw, 100vw"
      onError={() => setImgError(true)}
    />
  )
}

/** 项目详情（标题 + 内容） */
function ProjectContent({
  item,
  hasStatus,
  statusLabel,
  roleLabel,
  github,
  githubLabel,
  live,
  liveLabel,
  requiresProxy,
  proxyHint,
}: {
  item: { name: string; status: string | null; oneLiner: string; role: string; period?: string; tech: string[]; description: string; highlights: string[] }
  hasStatus: boolean
  statusLabel: string
  roleLabel: string
  github: string | null
  githubLabel: string
  live: string | null
  liveLabel: string
  requiresProxy: boolean
  proxyHint: string
}) {
  return (
    <div className="flex-1 min-w-0">
      <div className="flex items-start justify-between gap-2 mb-2 flex-wrap">
        <div className="flex items-center gap-2 flex-wrap">
          <h3 className="heading-3">{item.name}</h3>
          {live && (
            <span className="inline-flex items-center gap-2 flex-wrap">
              <a href={live} target="_blank" rel="noopener noreferrer" className="text-sm font-medium text-blue-600 hover:text-blue-500 underline underline-offset-4 decoration-1 transition-colors shrink-0">
                {liveLabel} →
              </a>
              {requiresProxy && <span className="text-xs text-amber-700">{proxyHint}</span>}
            </span>
          )}
        </div>
        {hasStatus && (
          <span className="tag text-xs bg-amber-100/80 text-amber-800 shrink-0">{statusLabel}</span>
        )}
      </div>

      <p className="text-secondary text-sm leading-relaxed mb-2">{item.oneLiner}</p>
      <p className="text-sm text-muted mb-2">
        <span className="font-medium highlight">{roleLabel}:</span>{' '}{item.role}
      </p>
      {item.period && <p className="text-sm text-muted mb-2">{item.period}</p>}

      <div className="flex flex-wrap gap-2 mb-3">
        {(item.tech as string[]).map((t: string, i: number) => (
          <span key={i} className="tag text-sm">{t}</span>
        ))}
      </div>

      <p className="text-secondary leading-relaxed text-sm mb-3">{item.description}</p>

      <ul className="space-y-1.5 text-sm text-secondary mb-3">
        {(item.highlights as string[]).map((h: string, i: number) => (
          <li key={i} className="flex gap-2">
            <span className="timeline-dot mt-1.5 shrink-0" />
            {parseHighlight(h)}
          </li>
        ))}
      </ul>

      {github && (
        <a href={github} target="_blank" rel="noopener noreferrer" className="btn btn-link mt-2 inline-block">
          {githubLabel} →
        </a>
      )}
    </div>
  )
}

export function Projects({ dict }: ProjectsProps) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section id="projects" className="section-padding bg-alt relative overflow-hidden">
      <SectionDecorations />
      <div className="container-custom relative z-10">
        <motion.div ref={ref} variants={containerVariants} initial="hidden" animate={isInView ? 'visible' : 'hidden'}>
          <motion.h2 variants={itemVariants} className="heading-2 mb-4">
            {dict.projects.title}
          </motion.h2>
          <motion.p variants={itemVariants} className="text-secondary mb-6 max-w-2xl">
            {dict.projects.subtitle}
          </motion.p>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
            {siteConfig.projects.map((project) => {
              const item = dict.projects.items[project.id as keyof typeof dict.projects.items]
              if (!item) return null
              const hasStatus = item.status === 'inDev' || item.status === 'launching'
              const statusLabel = item.status === 'launching'
                ? dict.projects.statusLaunching
                : dict.projects.statusInDev

              // 竖版截图：横跨两列，左图右文
              if (project.imagePortrait) {
                return (
                  <motion.article
                    key={project.id}
                    variants={itemVariants}
                    className="card overflow-hidden group cursor-default transition-all duration-300 hover:shadow-lg hover:-translate-y-1"
                  >
                    <div className="flex flex-col sm:flex-row gap-6 items-start">
                      {project.image ? (
                        <PhoneMockup src={project.image} alt={item.name} />
                      ) : (
                        <div className="flex-shrink-0 w-44 sm:w-48 flex items-center justify-center" style={{ aspectRatio: '9/19.5' }}>
                          <motion.span className="text-4xl opacity-30" animate={{ opacity: [0.3, 0.5, 0.3] }} transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}>✦</motion.span>
                        </div>
                      )}
                      <ProjectContent
                        item={item as Parameters<typeof ProjectContent>[0]['item']}
                        hasStatus={hasStatus}
                        statusLabel={statusLabel}
                        roleLabel={dict.projects.roleLabel}
                        github={project.github}
                        githubLabel={dict.projects.viewOnGitHub}
                        live={project.live ?? null}
                        liveLabel={dict.projects.viewLive}
                        requiresProxy={project.requiresProxy}
                        proxyHint={dict.projects.proxyHint}
                      />
                    </div>
                  </motion.article>
                )
              }

              // 横版/无图：普通卡片，图在上
              return (
                <motion.article
                  key={project.id}
                  variants={itemVariants}
                  className="card overflow-hidden group cursor-default transition-all duration-300 hover:shadow-lg hover:-translate-y-1"
                >
                  <div className="relative aspect-[3/2] rounded-xl overflow-hidden bg-gradient-to-br from-amber-200/20 via-blue-200/15 to-purple-200/15 mb-4 flex items-center justify-center">
                    {project.image ? (
                      <LandscapeImage src={project.image} alt={item.name} />
                    ) : (
                      <motion.span className="text-4xl opacity-30" animate={{ opacity: [0.3, 0.5, 0.3] }} transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}>✦</motion.span>
                    )}
                  </div>
                  <ProjectContent
                    item={item as Parameters<typeof ProjectContent>[0]['item']}
                    hasStatus={hasStatus}
                    statusLabel={statusLabel}
                    roleLabel={dict.projects.roleLabel}
                    github={project.github}
                    githubLabel={dict.projects.viewOnGitHub}
                    live={project.live ?? null}
                    liveLabel={dict.projects.viewLive}
                    requiresProxy={project.requiresProxy}
                    proxyHint={dict.projects.proxyHint}
                  />
                </motion.article>
              )
            })}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
