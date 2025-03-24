import React from 'react'
import { setLocale } from '@/cache/cacheLocale'
import { isLocale, Locale } from '@/types/locale'
import { PageWithLocale, PageWithLocaleProps } from '@/types/PageWithLocale'
import { redirect, RedirectType } from 'next/navigation'
import i18Config from '~/i18.config'

/**
 * Server HOC that ensures a valid locale is set before rendering the wrapped component.
 * @param Wrapped Component expecting a params promise containing locale.
 * @returns Async wrapper component that validates and sets locale then renders Wrapped.
 */
export const withLocalization = (
  Wrapped: PageWithLocale,
  supportedLocales: readonly Locale[] = i18Config.locales ) => {
  const WithLocalizationServerWrapper = async (props: PageWithLocaleProps) => {
    const { locale } = await props.params

    if (!isLocale(locale)) {
      throw new Error(`Invalid locale: ${locale}`)
    }

    if (supportedLocales.includes(locale)) {
      setLocale(supportedLocales[0])
    } else {
      setLocale(locale)
    }

    return <Wrapped {...props} />
  }

  return WithLocalizationServerWrapper
}
