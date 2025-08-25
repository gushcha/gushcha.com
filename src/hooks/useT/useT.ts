'use client'

import ContextDictionary from '@/contexts/contextDictionary'
import { useMemo, useContext, useEffect, useRef } from 'react'
import type { DictionaryNamespace, Dictionary } from '@/types/dictionaryTypes'
import type { Locale } from '@/constants/locales'
import { tAbstract, TParams } from './tAbstract'
import { fetchDictionary } from '@/hooks/useT/fetchDictionary'
import { useChosenLocale } from '@/hooks/useChosenLocale/useChosenLocale'

const NOOP_T = () => '' as ReturnType<typeof tAbstract>

const constructT = (dictionary?: Dictionary | Promise<Dictionary>) => {
  if (dictionary && !(dictionary instanceof Promise)) {
    return (...args: TParams) => tAbstract(dictionary, ...args)
  }
  return NOOP_T
}

/**
 * React hook returning a translator and loading flag for a namespace.
 * Fetches and caches dictionaries; returns noop translator while loading.
 * @param namespace Dictionary namespace.
 * @param supportedLocales Optional explicit locales list (defaults to all locales).
 * @returns Object with translator function t and isLoading boolean.
 */
export const useT = (
  namespace: DictionaryNamespace,
  supportedLocales: readonly Locale[]
) => {
  const [dictionariesMap, pushDictionary] = useContext(ContextDictionary)
  const requestKeyGuard = useRef<string>('')
  const locale = useChosenLocale(supportedLocales)
  const providedDictionary = dictionariesMap[locale]?.[namespace]

  useEffect(() => {
    const key = `${locale}:${namespace}`
    requestKeyGuard.current = key

    if (providedDictionary && !(providedDictionary instanceof Promise)) {
      return
    }

    if (providedDictionary instanceof Promise) {
      providedDictionary.then(fetchedDictionary => {
        if (requestKeyGuard.current === key) {
          pushDictionary(locale, namespace, fetchedDictionary)
        }
      })
      return
    }

    const dictionaryPromise = fetchDictionary(namespace, locale)
    pushDictionary(locale, namespace, dictionaryPromise)
    dictionaryPromise.then(fetchedDictionary => {
      if (requestKeyGuard.current === key) {
        pushDictionary(locale, namespace, fetchedDictionary)
      }
    })
  }, [providedDictionary, locale, namespace, pushDictionary])

  const t = useMemo(() => constructT(providedDictionary), [providedDictionary])

  const isLoading = !providedDictionary || providedDictionary instanceof Promise

  return { t, isLoading }
}