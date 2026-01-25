import { PropsWithChildren } from 'react'
import { withLocalizationPage } from '@/components/shared/withLocalization/withLocalizationPage'
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

  const generateMemberMetadata = await getMemberArtifactByHost({
    'family': generateDenisMetadata,
    'denis': generateDenisMetadata,
    'grigory': generateGrigoryMetadata,
  })

  return await generateMemberMetadata(props)
}

const RootLayout: PageWithLocale<PropsWithChildren> = async ({ children, ...props}) => {

  const MemberLayout = await getMemberArtifactByHost({
    'family': FamilyLayout,
    'denis': DenisLayout,
    'grigory': GrigoryLayout,
  })

  return (
    <ContextDictionaryProvider>
      <MemberLayout {...props}>
        {children}
      </MemberLayout>
    </ContextDictionaryProvider>
  )
}

export default withLocalizationPage(RootLayout)