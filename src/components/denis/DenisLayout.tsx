import { PropsWithChildren } from 'react'
import { Geist, Geist_Mono } from 'next/font/google'

import { getT } from '@/hooks/useT/getT'
import { PageWithLocale } from '@/types/PageWithLocale'
import { getLocale } from '@/cache/cacheLocale'
import { MetadataLayoutProps } from '@/types/MetadataProps'
import BackgroundTransitioner from '@/components/shared/backgroundTransitioner/BackgroundTransitioner'
import ThemeAntiFlicker from '@/components/shared/theme/ThemeAntiFlicker'
import ThemeToggle from '@/components/shared/theme/ThemeToggle'

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
    <html lang={getLocale()} suppressHydrationWarning className='bg-pink-100 dark:bg-pink-950'>
      <head>
        <ThemeAntiFlicker />
      </head>
      <body
        className={`${geistSans.className} ${geistMono.className} min-h-screen bg-radial from-fuchsia-100 dark:from-fuchsia-950 from-30% to-pink-200 dark:to-pink-950  dark:text-gray-100 transition-background duration-1000 `}
      >
        {children}
        <ThemeToggle />
      </body>
      <BackgroundTransitioner />
    </html>
  )
}

export default DenisLayout
