import { setLocale } from '@/cache/cacheLocale'
import { DEFAULT_LOCALE, isLocale, localesByMember } from '@/constants/locales'
import { MetadataPageProps } from '@/types/MetadataProps'
import { MetadataWithLocale } from '@/types/MetadataWithLocale'
import type { ResolvingMetadata, Metadata } from 'next'
import { headers } from 'next/headers'
import { getMemberArtifactByHostServer } from '@/hooks/getMemberArtifactByHost/getMemberArtifactByHostServer'

/**
 * Server HOF that ensures a valid locale is set before rendering the wrapped component.
 * @param wrapped Component expecting a params promise containing locale.
 * @returns Async wrapper component that validates and sets locale then renders Wrapped.
 */
export const withLocalizationMetadata = (wrapped: MetadataWithLocale) => {
  const withLocalizationMetadataServerWrapper = async (
    props: MetadataPageProps, parent: ResolvingMetadata
  ): Promise<Metadata> => {
    const { locale } = await props.params

    if (!isLocale(locale)) {
      throw new Error(`Invalid locale: ${locale}`)
    }
    setLocale(locale)
    const result = await wrapped(props, parent)

    try {
      const headersList = await headers()
      const host = headersList.get('host') || ''

      const memberLocales = await getMemberArtifactByHostServer(localesByMember) || []

      const pathname = headersList.get('x-request-pathname') || ''
      const defaultLocale = memberLocales[0] || DEFAULT_LOCALE

      // Standardize protocol (checking x-forwarded-proto mainly for reverse proxies/Vercel)
      const protocol = headersList.get('x-forwarded-proto') || 'http'
      const baseUrl = `${protocol}://${host}`

      // Determine what the current request path looks like.
      const canonicalReqPath = (locale === defaultLocale) ? pathname : `/${locale}${pathname === '/' ? '' : pathname}`
      const canonicalUrl = `${baseUrl}${canonicalReqPath}`

      const languages: Record<string, string> = {}
      for (const loc of memberLocales) {
        languages[loc] = `${baseUrl}${loc === defaultLocale ? pathname : `/${loc}${pathname === '/' ? '' : pathname}`}`
      }

      return {
        ...result,
        alternates: {
          ...(result?.alternates || {}),
          canonical: canonicalUrl,
          languages
        }
      }
    } catch {
      return result;
    }
  }

  return withLocalizationMetadataServerWrapper
}