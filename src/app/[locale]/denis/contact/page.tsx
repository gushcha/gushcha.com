import { withLocalizationPage } from '@/components/shared/withLocalization/withLocalizationPage'
import { withLocalizationMetadata } from '@/components/shared/withLocalization/withLocalizationMetadata'
import { PageWithLocale } from '@/types/PageWithLocale'
import { getT } from '@/hooks/useT/getT'
import GetInTouch from '@/components/denis/getInTouch/GetInTouch'

export const generateMetadata = withLocalizationMetadata(async ()=>{
  const t = await getT('denis-contact', ['en', 'ru', 'el'])
  return {
    title: t('metadata-title'),
    description: t('metadata_description'),
  }
})

const ContactPage: PageWithLocale = async () => {
  return (
    <main>
      <GetInTouch />
    </main>
  )
}

export default withLocalizationPage(ContactPage)