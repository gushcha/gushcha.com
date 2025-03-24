import Grigory from '@/components/grigory/Grigory'
import { withLocalization } from '@/components/shared/withLocalization/withLocalization'
import { PageWithLocale } from '@/types/PageWithLocale'
import React from 'react'

const SubPage: PageWithLocale = async () => {
  return (
    <Grigory/>
  )
}

export default withLocalization(SubPage)