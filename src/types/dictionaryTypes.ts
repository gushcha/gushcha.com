import {type Locale} from '@/constants/locales'
import {DICTIONARY_NAMES} from '@/constants/dictionaryNames'

export type DictionaryNamespace = (typeof DICTIONARY_NAMES)[number]
export type Dictionary = Record<string, string>
export type DictionariesMap = {
  [key in Locale]?: { [key in DictionaryNamespace]?: Dictionary | Promise<Dictionary> }
}