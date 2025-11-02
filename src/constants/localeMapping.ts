import { Locale } from './locales'

enum LOCALE_T_KEY {
  english = 'english',
  russian = 'russian',
  greek = 'greek',
}

const LOCALES_TO_T_KEY_MAP: Record<Locale, LOCALE_T_KEY> = {
  'en': LOCALE_T_KEY.english,
  'ru': LOCALE_T_KEY.russian,
  'el': LOCALE_T_KEY.greek,
}

/**
 * Maps an array of locales to their corresponding translation keys.
 * @param locales - An array of supported locales.
 * @returns An array of translation keys corresponding to the input locales.
 */
export function mapSupportedLocalesToTKey(locales: Locale[]) {
  return locales.map(locale => LOCALES_TO_T_KEY_MAP[locale])
}
