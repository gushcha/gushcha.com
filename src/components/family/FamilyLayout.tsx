import { PropsWithChildren } from 'react'
import { Geist, Geist_Mono } from 'next/font/google'

import { getT } from '@/hooks/useT/getT'
import { PageWithLocale } from '@/types/PageWithLocale'
import { getLocale } from '@/cache/cacheLocale'
import { MetadataLayoutProps } from '@/types/MetadataProps'

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
})

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
})

export const generateFamilyMetadata = async (_props: MetadataLayoutProps) => {
  console.log('RENDERING Family METADATA')
  const t = await getT('metadata')
  return {
    title: t('title'),
    description: 'Family site coming soon',
  }
}

const FamilyLayout: PageWithLocale<PropsWithChildren> = async ({ children }) => {
  getLocale()
  console.log('RENDERING Family LAYOUT')
  return (
    <html lang={getLocale()}>
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased bg-blue-500`}>
        {children}
      </body>
    </html>
  )
}

export default FamilyLayout