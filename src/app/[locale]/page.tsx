import { withLocalization } from '@/components/shared/withLocalization/withLocalization'
import Denis from '@/components/denis/Denis'
import Grigory from '@/components/grigory/Grigory'
import Family from '@/components/family/Family'
import { PageWithLocale } from '@/types/PageWithLocale'
import { getMemberArtifactByHost } from '@/hooks/getMemberArtifactByHost/getMemberArtifactByHost'

const Home: PageWithLocale = async () => {
  const Component = await getMemberArtifactByHost({
    'family': Family,
    'denis': Denis,
    'grigory': Grigory,
  })

  return <Component />
}

export default withLocalization(Home)
