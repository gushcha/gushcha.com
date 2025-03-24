import Family from '@/components/family/Family'
import { withLocalization } from '@/components/shared/withLocalization/withLocalization'
import { PageWithLocale } from '@/types/PageWithLocale'
import React from 'react'

const SubPage: PageWithLocale = async () => {
  return (
    <Family/>
  )
}

export default withLocalization(SubPage)