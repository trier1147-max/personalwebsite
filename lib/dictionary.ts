import type { Locale } from '@/site-config'

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export type Dictionary = any

const dictionaries: Record<Locale, () => Promise<Dictionary>> = {
  en: () => import('@/dictionaries/en.json').then((module) => module.default),
  zh: () => import('@/dictionaries/zh.json').then((module) => module.default),
}

export const getDictionary = async (locale: Locale): Promise<Dictionary> => {
  const loadDictionary = dictionaries[locale] || dictionaries['zh']
  return loadDictionary()
}
