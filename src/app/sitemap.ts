import { getMemberArtifactByHost } from '@/hooks/getMemberArtifactByHost/getMemberArtifactByHost'
import { BASE_URL } from '@/constants/baseUrl'
import { BASE_PROTOCOL } from '@/constants/baseProtocol'
import type { MetadataRoute } from 'next'
import { headers } from 'next/headers'
import { localesByMember } from '@/constants/locales'

const denisRoutes = [
  '',
  '/denis/blog',
  '/denis/blog/react-server-context',
  '/denis/contact',
  '/denis/cv',
]

const familyRoutes = ['']

const grigoryRoutes = ['']

type GenerateSitemapEntryParams = {
  routes: string[]
  locales: readonly string[]
  baseUrl: string
}

function generateSitemapEntries({
  routes,
  locales,
  baseUrl
}: GenerateSitemapEntryParams): MetadataRoute.Sitemap {
  return routes.map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    alternates: {
      languages: Object.fromEntries(
        locales.map((locale) => [locale, `${baseUrl}/${locale}${route}`])
      ),
    },
  }))
}

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const headersList = await headers()
  const host = headersList.get('host')
  const baseUrl = host ? `${BASE_PROTOCOL}://${host}` : BASE_URL

  const memberSitemapConfig = await getMemberArtifactByHost<GenerateSitemapEntryParams>({
    'family': {
      routes: familyRoutes,
      locales: localesByMember.family,
      baseUrl,
    },
    'denis': {
      routes: denisRoutes,
      locales: ['en', 'ru'], //overrides default localesByMember.denis,
      baseUrl,
    },
    'grigory': {
      routes: grigoryRoutes,
      locales: localesByMember.grigory,
      baseUrl,
    },
  })

  return generateSitemapEntries(memberSitemapConfig)
}

