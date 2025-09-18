import LocalizedArticle from '@/components/shared/localizedArticle/LocalizedArticle'
import { withLocalization } from '@/components/shared/withLocalization/withLocalization'
import { PageWithLocale } from '@/types/PageWithLocale'


const PageReactServerContext: PageWithLocale = async () => {
  return (
    <main>
      <LocalizedArticle supportedLocales={['en']} name='serverContext'/>
    </main>
  )
}

export default withLocalization(PageReactServerContext)