'use client'

import { useState, useEffect, useMemo } from 'react'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { siteConfig, type Locale } from '@/site-config'
import type { Dictionary } from '@/lib/dictionary'

interface NavbarProps {
  dict: Dictionary
  lang: Locale
}

export function Navbar({ dict, lang }: NavbarProps) {
  const [scrolled, setScrolled] = useState(false)
  const [activeSection, setActiveSection] = useState<string | null>(null)
  const navItems = useMemo(() => siteConfig.navigation, [])

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    const sectionIds = navItems
      .map((item) => item.href)
      .filter((href) => href.startsWith('#'))
      .map((href) => href.replace('#', ''))

    const sections = sectionIds
      .map((id) => document.getElementById(id))
      .filter((el): el is HTMLElement => Boolean(el))

    if (!sections.length) return

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)

        if (visible[0]?.target?.id) {
          setActiveSection(visible[0].target.id)
        }
      },
      {
        root: null,
        rootMargin: '-40% 0px -50% 0px',
        threshold: [0.1, 0.2, 0.4, 0.6],
      }
    )

    sections.forEach((section) => observer.observe(section))

    return () => observer.disconnect()
  }, [navItems])

  const otherLang = lang === 'zh' ? 'en' : 'zh'

  return (
    <motion.header
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5 }}
      className={`navbar ${scrolled ? 'navbar-scrolled' : ''}`}
    >
      <nav className="container-custom">
        <div className="flex items-center justify-between h-16">
          {/* Name/Logo */}
          <Link
            href={`/${lang}`}
            className="text-lg font-semibold text-foreground hover:opacity-70 transition-opacity"
          >
            {dict.hero.name}
          </Link>

          {/* Navigation Links */}
          <div className="flex items-center gap-6">
            {navItems.map((item) => {
              const label = dict.nav[item.key as keyof typeof dict.nav]
              const isAnchor = item.href.startsWith('#')
              const href = item.href === '/' ? `/${lang}` : `/${lang}${item.href}`
              const isActive = isAnchor && activeSection === item.href.replace('#', '')

              return (
                <Link
                  key={item.key}
                  href={href}
                  className={`nav-link ${isActive ? 'nav-link-active' : ''} hidden sm:block`}
                >
                  {label}
                </Link>
              )
            })}

            {/* Language Switch */}
            <Link
              href={`/${otherLang}`}
              className="text-sm font-medium text-muted hover:text-foreground transition-colors"
            >
              {otherLang === 'zh' ? '中文' : 'EN'}
            </Link>
          </div>
        </div>
      </nav>
    </motion.header>
  )
}
