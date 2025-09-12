'use server'
import { fetchDictionary } from '@/hooks/useT/fetchDictionary'
import { getDictionary, pushDictionary } from '@/cache/cacheDictionary'
import { chooseLocale } from '@/cache/cacheLocale'
import type { DictionaryNamespace, Dictionary } from '@/types/dictionaryTypes'
import { type Locale } from '@/constants/locales'
import { tAbstract, TParams } from './tAbstract'

const getOrFetchDictionary = async (
  namespace: DictionaryNamespace,
  locale: Locale
): Promise<Dictionary> => {
  const cachedDictionary = getDictionary(locale, namespace)
  if (cachedDictionary && !(cachedDictionary instanceof Promise)) {
    return cachedDictionary
  }

  const dictionaryPromise = cachedDictionary || fetchDictionary(namespace, locale)
  if (!cachedDictionary) {
    pushDictionary(locale, namespace, dictionaryPromise)
  }

  const fetchedDictionary = await dictionaryPromise

  const cachedDictionaryToRevalidate = getDictionary(locale, namespace)

  if (!cachedDictionaryToRevalidate || cachedDictionaryToRevalidate instanceof Promise) {
    pushDictionary(locale, namespace, fetchedDictionary)
  }

  return fetchedDictionary
}

/**
 * Build a translate function bound to a namespace + locale (server only).
 * @param namespace Dictionary namespace to load.
 * @param supportedLocales Optional explicit locales list (defaults to all locales)
 * @returns Translator function taking (key, values?).
 */
export const getT = async (
  namespace: DictionaryNamespace,
  supportedLocales?: Locale[]) => {
  
  const locale = chooseLocale(supportedLocales)

  if (!locale) {
    throw new Error('Locale is not set, is root layout wrapped `withLocalization`?')
  }

  console.log('Locale getT()', locale, namespace, supportedLocales)
  const dictionary = await getOrFetchDictionary(namespace, locale)

  return (...args: TParams) => tAbstract(dictionary, ...args)
}