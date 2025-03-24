import i18Config from '~/i18.config'

export type DictionaryNamespace = (typeof i18Config.dictionaryNamespaces)[number]
export type Dictionary = Record<string, string>
export type DictionariesMap = {
  [key in import('./locale').Locale]?: { [key in DictionaryNamespace]?: Dictionary | Promise<Dictionary> }
}