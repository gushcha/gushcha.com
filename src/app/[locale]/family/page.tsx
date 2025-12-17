import Family from '@/components/family/Family'
import { withLocalizationPage } from '@/components/shared/withLocalization/withLocalizationPage'
import { PageWithLocale } from '@/types/PageWithLocale'
import React from 'react'

const SubPage: PageWithLocale = async () => {
  return (
    <Family/>
  )
}

export default withLocalizationPage(SubPage)