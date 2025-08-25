import { useParams } from 'next/navigation'

import { Locale } from '@/constants/locales'

export const useChosenLocale = (
  supportedLocales? :readonly Locale[]
): Locale => {
  const { locale: routeLocale } = useParams<{ locale: Locale }>()
  if(!supportedLocales) {
    return routeLocale
  }
  return (supportedLocales).includes(routeLocale) 
    ? routeLocale
    : supportedLocales[0]
}