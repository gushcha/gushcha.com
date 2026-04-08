import { withLocalizationPage } from '@/components/shared/withLocalization/withLocalizationPage'
import Denis from '@/components/denis/Denis'
import Grigory from '@/components/grigory/Grigory'
import Family from '@/components/family/Family'
import { PageWithLocale } from '@/types/PageWithLocale'
import { getMemberArtifactByHostServer } from '@/hooks/getMemberArtifactByHost/getMemberArtifactByHostServer'
import { allLocales } from '@/constants/locales'

export const generateStaticParams = async () => (allLocales.map(locale => ({ locale })))

const Home: PageWithLocale = async () => {
  const Component = await getMemberArtifactByHostServer({
    'family': Denis,
    'denis': Denis,
    'grigory': Grigory,
  })

  return <Component />
}

export default withLocalizationPage(Home)
