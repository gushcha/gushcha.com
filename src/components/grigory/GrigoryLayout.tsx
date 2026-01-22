import { PropsWithChildren } from 'react'
import { Inter } from 'next/font/google'

import '@/components/grigory/GrigoryLayout.css'
import { getT } from '@/hooks/useT/getT'
import { PageWithLocale } from '@/types/PageWithLocale'
import { getLocale } from '@/cache/cacheLocale'
import { MetadataLayoutProps } from '@/types/MetadataProps'
import { BACKGROUNDS } from '@/constants/backgrounds'

const inter = Inter({
  subsets: ['latin', 'cyrillic'],
  weight: '400'
})

const DESCRIPTION = "Film Audio Post/Mixing, Location Sound, " +
"Music Mixing/Mastering. Audio producer providing technical audio support " + 
"for film crews and musicians. Studio Recording, Synchronisation, " + 
"dialogue editing, noise reduction,sound restoration, sound design, " + 
"audio processing, Foley, mixing in stereo and surround (5.1) systems, mastering."

export const generateGrigoryMetadata = async (_props: MetadataLayoutProps) => {
  return {
    title: "Audio Production Grigory",
    description: DESCRIPTION,
  }
}

const GrigoryLayout: PageWithLocale<PropsWithChildren> = async ({ children }) => {
  return (
    <html lang={getLocale()} className='text-[18px] 3xl:text-[24px] scroll-smooth'>
      <body className={`grigory-layout ${inter.className} antialiased min-h-screen ${BACKGROUNDS.grigory} transition-background duration-1000`}> 
        {children}
      </body>
    </html>
  )
}

export default GrigoryLayout
