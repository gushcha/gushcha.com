import { setLocale } from '@/cache/cacheLocale'
import { isLocale } from '@/constants/locales'
import { MetadataPageProps } from '@/types/MetadataProps'
import { MetadataWithLocale } from '@/types/MetadataWithLocale'

/**
 * Server HOF that ensures a valid locale is set before rendering the wrapped component.
 * @param Wrapped Component expecting a params promise containing locale.
 * @returns Async wrapper component that validates and sets locale then renders Wrapped.
 */
export const withLocalizationMetadata = (wrapped: MetadataWithLocale) => {
  const withLocalizationMetadataServerWrapper = async (props: MetadataPageProps) => {
    const { locale } = await props.params

    if (!isLocale(locale)) {
      throw new Error(`Invalid locale: ${locale}`)
    }
    setLocale(locale)
    return wrapped(props)
  }

  return withLocalizationMetadataServerWrapper
}