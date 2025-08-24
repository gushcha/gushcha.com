import { cache } from 'react'
import type { Locale } from '@/constants/locales'

function getLocaleCache() {
  return { locale: undefined as Locale | undefined }
}

/**
 * Get cached locale (set during request) or throw if unset.
 * @returns Active locale code.
 */
export const getLocale = (): Locale => {
  const { locale } = cache(getLocaleCache)()
  if (!locale) {
    throw new Error('Locale is not set.')
  }
  return locale
}

/**
 * Set locale once; subsequent different values throw.
 * @param locale Locale code to cache.
 */
export const setLocale = (locale: Locale) => {
  const localeCache = cache(getLocaleCache)()
  localeCache.locale = locale
}
