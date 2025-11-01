import { getT } from '@/hooks/useT/getT'
import Heading from '@/components/shared/heading/Heading'
import LocalizedLink from '@/components/shared/localizedLink/LocalizedLink'
import { Locale } from '@/constants/locales'
import { mapSupportedLocalesToTKey } from '@/constants/localeMapping'
import { getLocale } from '@/cache/cacheLocale'

interface ArticlePreviewProps {
  supportedLocales?: Locale[]
  title: string
  description: string
  datePublished: Date
  dateUpdated?: Date
  href: string
}

const ArticlePreview: React.FC<ArticlePreviewProps> = async ({
  supportedLocales = [],
  title,
  description,
  datePublished,
  dateUpdated,
  href
}) => {
  const tMain = await getT('main', ['en', 'ru', 'el'])

  const supportedLanguages = mapSupportedLocalesToTKey(supportedLocales)
    .map((tKey)=> tMain(tKey))
  const dateLabel = dateUpdated ? tMain('updated') : tMain('published')
  const date = (dateUpdated || datePublished).toLocaleDateString(getLocale())

  return (
    <div>
      <LocalizedLink href={href}>
        <Heading level={2}>{title}</Heading>
      </LocalizedLink>
      <p>{description}</p>
      <p>{tMain('available_languages')}: {supportedLanguages.join(', ')}</p>
      <p>{dateLabel}: {date}</p>
    </div>
  )
}

export default ArticlePreview
