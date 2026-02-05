import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import '../globals.css'
import { siteConfig, type Locale } from '@/site-config'
import { getDictionary } from '@/lib/dictionary'
import { Navbar, Footer } from '@/components'

const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-inter',
})

export async function generateStaticParams() {
  return siteConfig.i18n.locales.map((lang) => ({ lang }))
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ lang: string }>
}): Promise<Metadata> {
  const { lang } = await params
  const locale = siteConfig.i18n.locales.includes(lang as Locale)
    ? (lang as Locale)
    : siteConfig.i18n.defaultLocale
  const dict = await getDictionary(locale)
  
  return {
    metadataBase: new URL(siteConfig.url),
    title: dict.meta.title,
    description: dict.meta.description,
    openGraph: {
      title: dict.meta.title,
      description: dict.meta.description,
      type: 'website',
      images: [
        {
          url: '/og.svg',
          width: 1200,
          height: 630,
          alt: dict.meta.title,
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title: dict.meta.title,
      description: dict.meta.description,
      images: ['/og.svg'],
    },
  }
}

export default async function RootLayout({
  children,
  params,
}: {
  children: React.ReactNode
  params: Promise<{ lang: string }>
}) {
  const { lang } = await params
  const locale = siteConfig.i18n.locales.includes(lang as Locale)
    ? (lang as Locale)
    : siteConfig.i18n.defaultLocale
  const dict = await getDictionary(locale)

  return (
    <html lang={locale} className={inter.variable}>
      <body className="min-h-screen bg-background antialiased">
        <Navbar dict={dict} lang={locale} />
        <main>{children}</main>
        <Footer dict={dict} />
      </body>
    </html>
  )
}
