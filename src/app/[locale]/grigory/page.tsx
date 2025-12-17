import Grigory from '@/components/grigory/Grigory'
import { withLocalizationPage } from '@/components/shared/withLocalization/withLocalizationPage'
import { PageWithLocale } from '@/types/PageWithLocale'
import React from 'react'

const SubPage: PageWithLocale = async () => {
  return (
    <Grigory/>
  )
}

export default withLocalizationPage(SubPage)