import { withLocalizationPage } from '@/components/shared/withLocalization/withLocalizationPage'
import { PageWithLocale } from '@/types/PageWithLocale'
import { getT } from '@/hooks/useT/getT'
import ArticlePreview from '@/components/shared/articlePreview/ArticlePreview'
import Block from '@/components/shared/block/Block'
import Heading from '@/components/shared/heading/Heading'
import { withLocalizationMetadata } from '@/components/shared/withLocalization/withLocalizationMetadata'
import {PREVIEW_REACT_SERVER_CONTEXT} from '@/app/[locale]/denis/blog/react-server-context/previewReactServerContext'


export const generateMetadata = withLocalizationMetadata(async ()=>{
  const t = await getT('denis-blog', ['en', 'ru', 'el'])
  return {
    title: t('metadata-title'),
    description: t('metadata_description'),
  }
})

const PageBlog: PageWithLocale = async () => {
  const t = await getT('denis-blog', ['en', 'ru', 'el'])
  
  return (
    <main>
      <Block >
        <Heading level={1} className='text-blue-900 dark:text-blue-200'>{t('blog')}</Heading>
      </Block>
      <Block isContrast>
        <ArticlePreview
          supportedLocales={PREVIEW_REACT_SERVER_CONTEXT.supportedLocales}
          title={t('react_server_context_header')}
          description={t('react_server_context_description')}
          datePublished={PREVIEW_REACT_SERVER_CONTEXT.datePublished}
          dateUpdated={PREVIEW_REACT_SERVER_CONTEXT.dateUpdated}
          href='/denis/blog/react-server-context'
        />
      </Block>
    </main>
  )
}

export default withLocalizationPage(PageBlog)