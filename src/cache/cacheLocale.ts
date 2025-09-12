import { cache } from 'react'
import type { Locale } from '@/constants/locales'

function getLocaleObject() {
  return { locale: undefined as Locale | undefined }
}

const getLocaleCache = cache(getLocaleObject)

/**
 * Get cached locale (set during request) or throw if unset.
 * @returns Active locale code.
 */
export const getLocale = (): Locale => {
  const { locale } = getLocaleCache()
  if (!locale) {
    throw new Error('Locale is not set.')
  }
  return locale
}
/**
 * Choose locale from list using cached.
 * @param supportedLocales Optional list of supported locales.
 * @returns cached locale if in list, else first in list.
 */
export const chooseLocale = (supportedLocales?: Locale[]): Locale => {
  const { locale } = getLocaleCache()
  if (!locale) {
    throw new Error('Locale is not set.')
  }
  if(!supportedLocales || supportedLocales.length === 0) {
    return locale
  }
  if (supportedLocales.includes(locale)) {
    return locale
  }
  return supportedLocales[0]
}

/**
 * Set locale once; subsequent different values throw.
 * @param locale Locale code to cache.
 */
export const setLocale = (locale: Locale) => {
  const localeCache = getLocaleCache()
  localeCache.locale = locale
}
