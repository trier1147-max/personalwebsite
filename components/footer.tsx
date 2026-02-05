'use client'

import type { Dictionary } from '@/lib/dictionary'

interface FooterProps {
  dict: Dictionary
}

export function Footer({ dict }: FooterProps) {
  return (
    <footer className="py-8">
      <div className="container-custom">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 text-sm text-muted">
          <p>{dict.footer.copyright}</p>
          <p>{dict.footer.builtWith}</p>
        </div>
      </div>
    </footer>
  )
}
