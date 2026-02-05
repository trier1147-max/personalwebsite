import { getDictionary } from '@/lib/dictionary'
import type { Locale } from '@/site-config'
import { Hero, Education, Experience, Skills, Contact } from '@/components'

interface PageProps {
  params: Promise<{ lang: Locale }>
}

export default async function HomePage({ params }: PageProps) {
  const { lang } = await params
  const dict = await getDictionary(lang)

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
