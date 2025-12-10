import Denis from '@/components/denis/Denis'
import { withLocalizationPage } from '@/components/shared/withLocalization/withLocalizationPage'
import { PageWithLocale } from '@/types/PageWithLocale'
import React from 'react'


const DenisPage: PageWithLocale = async () => {
  return (
    <Denis/>
  )
}

export default withLocalizationPage(DenisPage)