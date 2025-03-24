import { PropsWithChildren } from 'react'
import { Geist, Geist_Mono } from 'next/font/google'

import { getT } from '@/hooks/useT/getT'
import { PageWithLocale } from '@/types/PageWithLocale'
import { getLocale } from '@/cache/cacheLocale'
import { MetadataLayoutProps } from '@/types/MetadataProps'

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin', 'cyrillic'],
})

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
})

export const generateDenisMetadata = async (_props: MetadataLayoutProps) => {
  console.log('RENDERING Denis METADATA')
  const t = await getT('metadata')
  return {
    title: t('title') + ' - Denis',
    description: 'Denis page coming soon',
  }
}

const DenisLayout: PageWithLocale<PropsWithChildren> = async ({ children }) => {
  getLocale()
  console.log('RENDERING Denis LAYOUT')
  return (
    <html lang={getLocale()}>
      <body
        className={`${geistSans.className} ${geistMono.className} min-h-screen bg-gradient-to-br from-fuchsia-500 via-pink-500 to-amber-400`}
      >
        {children}
      </body>
    </html>
  )
}

export default DenisLayout
