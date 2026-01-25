import { BASE_URL } from '@/constants/baseUrl'
import { BASE_PROTOCOL } from '@/constants/baseProtocol'
import type { MetadataRoute } from 'next'
import { headers } from 'next/headers'

export default async function robots(): Promise<MetadataRoute.Robots> {
  const headersList = await headers()
  const host = headersList.get('host')
  const baseUrl = host ? `${BASE_PROTOCOL}://${host}` : BASE_URL

  return {
    rules: {
      userAgent: '*',
      allow: '/',
    },
    sitemap: `${baseUrl}/sitemap.xml`,
  }
}