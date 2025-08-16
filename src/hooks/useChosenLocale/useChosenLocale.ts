import { useParams } from 'next/navigation'

import { Locale } from '@/types/locale'
import i18Config from '~/i18.config'

export const useChosenLocale = (
  supportedLocales :readonly Locale[] = i18Config.locales
): Locale => {
  const { locale: routeLocale } = useParams<{ locale: Locale }>()
  return (supportedLocales).includes(routeLocale) 
    ? routeLocale
    : supportedLocales[0]
}