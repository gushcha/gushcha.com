import LocalizedArticle from '@/components/shared/localizedArticle/LocalizedArticle'
import { withLocalizationPage } from '@/components/shared/withLocalization/withLocalizationPage'
import { PageWithLocale } from '@/types/PageWithLocale'
import {PREVIEW_REACT_SERVER_CONTEXT} from '@/app/[locale]/denis/blog/react-server-context/previewReactServerContext'


const PageReactServerContext: PageWithLocale = async () => {
  return (
    <main>
      <LocalizedArticle 
        supportedLocales={PREVIEW_REACT_SERVER_CONTEXT.supportedLocales} 
        name='serverContext'
        datePublished={PREVIEW_REACT_SERVER_CONTEXT.datePublished}
        dateUpdated={PREVIEW_REACT_SERVER_CONTEXT.dateUpdated}
      />
    </main>
  )
}

export default withLocalizationPage(PageReactServerContext)