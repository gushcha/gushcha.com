import { withLocalization } from '@/components/shared/withLocalization/withLocalization'
import { PageWithLocale } from '@/types/PageWithLocale'
import { getT } from '@/hooks/useT/getT'
import ArticlePreview from '@/components/shared/articlePreview/ArticlePreview'
import Block from '@/components/shared/block/Block'
import Heading from '@/components/shared/heading/Heading'
import {PREVIEW_REACT_SERVER_CONTEXT} from '@/app/[locale]/denis/blog/react-server-context/previewReactServerContext'

const PageBlog: PageWithLocale = async () => {
  const t = await getT('denis-blog', ['en', 'ru', 'el'])
  
  return (
    <main>
      <Block >
        <Heading level={1}>{t('blog')}</Heading>
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

export default withLocalization(PageBlog)