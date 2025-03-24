import { createContext } from 'react'

import type { DictionariesMap, DictionaryNamespace, Dictionary } from '@/types/dictionaryTypes'
import type { Locale } from '@/types/locale'

/**
 * Function signature for adding or updating a dictionary in the context map.
 * @param locale Target locale code.
 * @param namespace Dictionary namespace.
 * @param dictionary Dictionary object or loading promise.
 * @returns void
 */
export type PushDictionary = (
  locale: Locale,
  namespace: DictionaryNamespace,
  dictionary: Dictionary | Promise<Dictionary>,
) => void

const unimplementedFunction = () => {
  throw new Error('Uninitialized contextDictionary, is root layout wrapped `withT`?')
}

/**
 * Translation context storing a mutable dictionaries map and a push function.
 */
const ContextDictionary = createContext<[DictionariesMap, PushDictionary]>([{}, unimplementedFunction])

export default ContextDictionary
