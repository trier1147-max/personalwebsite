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
  const dict = await getDictionary(lang as Locale)
  
  return {
    title: dict.meta.title,
    description: dict.meta.description,
    openGraph: {
      title: dict.meta.title,
      description: dict.meta.description,
      type: 'website',
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
  const dict = await getDictionary(lang as Locale)

  return (
    <html lang={lang} className={inter.variable}>
      <body className="min-h-screen bg-background antialiased">
        <Navbar dict={dict} lang={lang} />
        <main>{children}</main>
        <Footer dict={dict} />
      </body>
    </html>
  )
}
