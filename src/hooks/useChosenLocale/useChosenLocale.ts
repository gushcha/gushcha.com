import { useParams } from 'next/navigation'

import { Locale, localesByMember, DEFAULT_LOCALE } from '@/constants/locales'
import { getMemberArtifactByHost } from '@/hooks/getMemberArtifactByHost/getMemberArtifactByHost'

export const useChosenLocale = (
  supportedLocales?: Locale[]
): Locale => {
  const { locale: routeLocale } = useParams<{ locale: Locale }>()

  const defaultLocale = getMemberArtifactByHost(localesByMember)?.[0] || DEFAULT_LOCALE

  if (!supportedLocales) {
    return routeLocale || defaultLocale
  }
  return (supportedLocales).includes(routeLocale)
    ? routeLocale
    : defaultLocale
}