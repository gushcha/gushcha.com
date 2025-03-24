'use client'
import React, { ReactNode, useState } from 'react'
import ContextDictionary, { type PushDictionary } from '@/contexts/contextDictionary'
import { DictionariesMap } from '@/types/dictionaryTypes'

type ContextDictionaryProviderProps = {
  children: ReactNode
}

/**
 * Provider component that supplies the translation context to its children.
 * It manages the dictionaries map state and provides a function to update it.
 */
const ContextDictionaryProvider: React.FC<ContextDictionaryProviderProps> = ({ children }) => {
  const [dictionariesMap, setDictionariesMap] = useState<DictionariesMap>({})

  const pushDictionary: PushDictionary = (locale, namespace, dictionary) => {
    setDictionariesMap(prev => ({
      ...prev,
      [locale]: {
        ...prev[locale],
        [namespace]: dictionary
      }
    }))
  }

  return (
    <ContextDictionary.Provider value={[dictionariesMap, pushDictionary]}>
      {children}
    </ContextDictionary.Provider>
  )
}

export default ContextDictionaryProvider