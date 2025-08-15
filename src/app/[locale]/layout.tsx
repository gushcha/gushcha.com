import { PropsWithChildren } from 'react'
import { withLocalization } from '@/components/shared/withLocalization/withLocalization'
import ContextDictionaryProvider from '@/components/shared/contextDictionaryProvider/ContextDictionaryProvider'
import { PageWithLocale } from '@/types/PageWithLocale'
import FamilyLayout, { generateFamilyMetadata } from '@/components/family/FamilyLayout'
import { Metadata } from 'next'
import DenisLayout, { generateDenisMetadata } from '@/components/denis/DenisLayout'
import GrigoryLayout, { generateGrigoryMetadata } from '@/components/grigory/GrigoryLayout'
import { getMemberArtifactByHost } from '@/hooks/getMemberArtifactByHost/getMemberArtifactByHost'
import { MetadataLayoutProps } from '@/types/MetadataProps'
import '@/app/globals.css';

export const generateMetadata = async (
  props: MetadataLayoutProps
): Promise<Metadata> => {
  console.log('RENDERING ROOT METADATA')

  const generateMemberMetadata = await getMemberArtifactByHost({
    'family': generateFamilyMetadata,
    'denis': generateDenisMetadata,
    'grigory': generateGrigoryMetadata,
  })

  return await generateMemberMetadata(props)
}

const RootLayout: PageWithLocale<PropsWithChildren> = async ({ children, ...props}) => {
  console.log('RENDERING ROOT LAYOUT')

  const MemberLayout = await getMemberArtifactByHost({
    'family': FamilyLayout,
    'denis': DenisLayout,
    'grigory': GrigoryLayout,
  })

  return (
    <MemberLayout {...props}>
      <ContextDictionaryProvider>
        {children}
      </ContextDictionaryProvider>
    </MemberLayout>
  )
}

export default withLocalization(RootLayout)