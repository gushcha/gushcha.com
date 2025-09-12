import { cache } from 'react'
import type { Dictionary, DictionaryNamespace, DictionariesMap } from '@/types/dictionaryTypes'
import type { Locale } from '@/constants/locales'

function getDictionaryObject() {
  return { dictionaries: {} as DictionariesMap }
}

const getDictionaryCache = cache(getDictionaryObject)

// TODO rewrite using memoized function that caches the promise
// issue https://github.com/gushcha/gushcha.com/issues/8

/**
 * Retrieve dictionary (or promise) for locale + namespace if present.
 * @param locale Locale code.
 * @param namespace Dictionary namespace.
 * @returns Dictionary, promise, or undefined.
 */
export const getDictionary = (
  locale: Locale,
  namespace: DictionaryNamespace
): Dictionary | Promise<Dictionary> | undefined => {
  const { dictionaries } = getDictionaryCache()
  return dictionaries[locale]?.[namespace]
}

/**
 * Add or replace dictionary entry for locale + namespace.
 * @param locale Locale code.
 * @param namespace Dictionary namespace.
 * @param dictionary Dictionary object or promise.
 */
export const pushDictionary = (
  locale: Locale,
  namespace: DictionaryNamespace,
  dictionary: Dictionary | Promise<Dictionary>
): void => {
  const { dictionaries } = getDictionaryCache()
  dictionaries[locale] = {
    ...dictionaries[locale],
    [namespace]: dictionary
  }
}
