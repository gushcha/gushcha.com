import { withLocalizationPage } from '@/components/shared/withLocalization/withLocalizationPage'
import Denis from '@/components/denis/Denis'
import Grigory from '@/components/grigory/Grigory'
import Family from '@/components/family/Family'
import { PageWithLocale } from '@/types/PageWithLocale'
import { getMemberArtifactByHost } from '@/hooks/getMemberArtifactByHost/getMemberArtifactByHost'

const Home: PageWithLocale = async () => {
  const Component = await getMemberArtifactByHost({
    'family': Denis,
    'denis': Denis,
    'grigory': Grigory,
  })

  return <Component />
}

export default withLocalizationPage(Home)
