import i18Config from '~/i18.config'

export type Locale = (typeof i18Config.locales)[number]

const localeSet: ReadonlySet<string> = new Set(i18Config.locales)
/**
 * Runtime type guard to validate locale values.
 * @param value Unknown value.
 * @returns True if value is a supported locale.
 */
export function isLocale(value: unknown): value is Locale {
  return typeof value === 'string' && localeSet.has(value)
}
