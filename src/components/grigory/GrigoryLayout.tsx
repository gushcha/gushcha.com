import { PropsWithChildren } from 'react'
import { Tiny5 } from 'next/font/google'

import { getT } from '@/hooks/useT/getT'
import { PageWithLocale } from '@/types/PageWithLocale'
import { getLocale } from '@/cache/cacheLocale'
import { MetadataLayoutProps } from '@/types/MetadataProps'
import { BACKGROUNDS } from '@/constants/backgrounds'

const tiny5 = Tiny5({
  subsets: ['latin', 'cyrillic'],
  weight: '400'
})


export const generateGrigoryMetadata = async (_props: MetadataLayoutProps) => {
  console.log('RENDERING Grigory METADATA')
  const t = await getT('metadata')
  return {
    title: t('metadata_title') + ' - Grigory',
    description: 'Grigory page coming soon',
  }
}

const GrigoryLayout: PageWithLocale<PropsWithChildren> = async ({ children }) => {
  getLocale()
  console.log('RENDERING Grigory LAYOUT')
  return (
    <html lang={getLocale()}>
      <body className={`${tiny5.className} antialiased min-h-screen ${BACKGROUNDS.grigory} transition-background duration-1000`}> 
        {children}
      </body>
    </html>
  )
}

export default GrigoryLayout
