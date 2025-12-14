import LocalizedArticle from '@/components/shared/localizedArticle/LocalizedArticle'
import { withLocalizationPage } from '@/components/shared/withLocalization/withLocalizationPage'
import { PageWithLocale } from '@/types/PageWithLocale'
import {PREVIEW_REACT_SERVER_CONTEXT} from '@/app/[locale]/denis/blog/react-server-context/previewReactServerContext'
import { withLocalizationMetadata } from '@/components/shared/withLocalization/withLocalizationMetadata'
import { getT } from '@/hooks/useT/getT'

export const generateMetadata = withLocalizationMetadata(async ()=>{
  const t = await getT('server-context', ['en'])
  return {
    title: t('metadata-title'),
    description: t('metadata_description'),
  }
})

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