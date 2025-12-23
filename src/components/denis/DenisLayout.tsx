import { PropsWithChildren } from 'react'
import { Geist, Geist_Mono } from 'next/font/google'

import '@/components/denis/DenisLayout.css'
import { getT } from '@/hooks/useT/getT'
import { PageWithLocale } from '@/types/PageWithLocale'
import { getLocale } from '@/cache/cacheLocale'
import { MetadataLayoutProps } from '@/types/MetadataProps'
import BackgroundTransitioner from '@/components/shared/backgroundTransitioner/BackgroundTransitioner'
import ThemeAntiFlicker from '@/components/shared/theme/ThemeAntiFlicker'
import ThemeToggle from '@/components/shared/theme/ThemeToggle'
import Navbar from '@/components/denis/navbar/Navbar'
import { BACKGROUNDS } from '@/constants/backgrounds'

const geistSans = Geist({
  variable: '--font-sans',
  subsets: ['latin', 'cyrillic'],
})

const geistMono = Geist_Mono({
  variable: '--font-mono',
  subsets: ['latin', 'cyrillic'],
})

export const generateDenisMetadata = async (_props: MetadataLayoutProps) => {
  const t = await getT('denis', ['en', 'ru'])
  return {
    title: t('metadata_title'),
    description: t('metadata_description'),
  }
}

const DenisLayout: PageWithLocale<PropsWithChildren> = async ({ children }) => {
  return (
    <html lang={getLocale()} suppressHydrationWarning className={`${geistSans.className} ${geistMono.className} bg-violet-100 dark:bg-pink-950`}>
      <head>
        <ThemeAntiFlicker />
      </head>
      <body
        className={`denis-layout font-sans overflow-hidden ${BACKGROUNDS.denis} overflow-hidden dark:text-slate-200 text-slate-800 transition-background duration-1000 `}
      >
        <Navbar />
        <div className='max-h-[calc(100dvh-64px)] overflow-scroll sm:max-h-screen sm:pt-[64px]'>
          {children}
        </div>
        <ThemeToggle />
      </body>
      <BackgroundTransitioner />
    </html>
  )
}

export default DenisLayout
