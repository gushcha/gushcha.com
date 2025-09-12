import { PropsWithChildren } from 'react'
import { Geist, Geist_Mono } from 'next/font/google'

import { getT } from '@/hooks/useT/getT'
import { PageWithLocale } from '@/types/PageWithLocale'
import { getLocale } from '@/cache/cacheLocale'
import { MetadataLayoutProps } from '@/types/MetadataProps'
import ThemeToggle from '@/components/shared/theme/ThemeToggle'
import ThemeAntiFlicker from '@/components/shared/theme/ThemeAntiFlicker'
import Head from 'next/head'


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
    <html lang={getLocale()} suppressHydrationWarning>
      <Head>
        <ThemeAntiFlicker />
      </Head>
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased bg-blue-200 dark:bg-blue-900 text-gray-900 dark:text-gray-100 transition-colors`}> 
        {children}
        <ThemeToggle />
      </body>
    </html>
  )
}

export default FamilyLayout