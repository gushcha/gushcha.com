import { PropsWithChildren } from 'react'
import { Geist, Geist_Mono } from 'next/font/google'

import { getT } from '@/hooks/useT/getT'
import { PageWithLocale } from '@/types/PageWithLocale'
import { getLocale } from '@/cache/cacheLocale'
import { MetadataLayoutProps } from '@/types/MetadataProps'
import BackgroundTransitioner from '../backgroundTransitioner/BackgroundTransitioner'
import ThemeAntiFlicker from '../shared/theme/ThemeAntiFlicker'
import ThemeToggle from '../shared/theme/ThemeToggle'

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
    <html lang={getLocale()} suppressHydrationWarning>
      <head>
        <ThemeAntiFlicker />
      </head>
      <body
        className={`${geistSans.className} ${geistMono.className} min-h-screen bg-radial from-fuchsia-500 dark:from-fuchsia-900 from-30% to-pink-500 dark:to-pink-900  dark:text-gray-100 transition-background duration-1000 `}
      >
        {children}
        <ThemeToggle />
      </body>
      <BackgroundTransitioner />
    </html>
  )
}

export default DenisLayout
