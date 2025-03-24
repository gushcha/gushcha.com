import type { Dictionary, DictionaryNamespace } from '@/types/dictionaryTypes'
import type { Locale } from '@/types/locale'

export const fetchDictionary = async (
  namespace: DictionaryNamespace,
  locale: Locale
): Promise<Dictionary> => (await import(`~/dictionaries/${namespace}.${locale}.js`)).default as Dictionary
