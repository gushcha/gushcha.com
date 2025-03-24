import Denis from '@/components/denis/Denis'
import { withLocalization } from '@/components/shared/withLocalization/withLocalization'
import { PageWithLocale } from '@/types/PageWithLocale'
import React from 'react'

const SubPage: PageWithLocale = async () => {
  return (
    <Denis/>
  )
}

export default withLocalization(SubPage)