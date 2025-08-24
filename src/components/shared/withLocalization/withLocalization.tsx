import React from 'react'
import { setLocale } from '@/cache/cacheLocale'
import { isLocale } from '@/constants/locales'
import { PageWithLocale, PageWithLocaleProps } from '@/types/PageWithLocale'

/**
 * Server HOC that ensures a valid locale is set before rendering the wrapped component.
 * @param Wrapped Component expecting a params promise containing locale.
 * @returns Async wrapper component that validates and sets locale then renders Wrapped.
 */
export const withLocalization = (Wrapped: PageWithLocale) => {
  const WithLocalizationServerWrapper = async (props: PageWithLocaleProps) => {
    const { locale } = await props.params

    if (!isLocale(locale)) {
      throw new Error(`Invalid locale: ${locale}`)
    }
    setLocale(locale)
    return <Wrapped {...props} />
  }

  return WithLocalizationServerWrapper
}
