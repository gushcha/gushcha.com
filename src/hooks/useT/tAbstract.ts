import stringTemplate from 'string-template'

import type { Dictionary } from '@/types/dictionaryTypes'

/**
 * Translate a key from a provided dictionary with optional interpolation.
 * @param dictionary Source dictionary map.
 * @param key Translation key.
 * @param values Optional interpolation values.
 * @returns Translated string or key if missing.
 */
export const tAbstract = (
  dictionary: Dictionary,
  key: string,
  values?: Record<string, string | number>
) => {
  const translationTemplate = dictionary[key]
  if (!translationTemplate) {
    setTimeout(() => {
      throw new Error(`Translation for ${key} not found`)
    })
    return key
  }

  const translation = stringTemplate(translationTemplate, values)
  return translation
}
/**
 * Parameter tuple type for tAbstract without the dictionary arg.
 */
export type TParams = Parameters<typeof tAbstract> extends [unknown, ...infer R] ? R : never
