import { getDictionary } from '@/lib/dictionary'
import { siteConfig, type Locale } from '@/site-config'
import { Hero, Education, Experience, Skills, Contact } from '@/components'

interface PageProps {
  params: Promise<{ lang: string }>
}

export default async function HomePage({ params }: PageProps) {
  const { lang } = await params
  const locale = siteConfig.i18n.locales.includes(lang as Locale)
    ? (lang as Locale)
    : siteConfig.i18n.defaultLocale
  const dict = await getDictionary(locale)

  return (
    <>
      <Hero dict={dict} />
      <Education dict={dict} />
      <Experience dict={dict} />
      <Skills dict={dict} />
      <Contact dict={dict} />
    </>
  )
}
