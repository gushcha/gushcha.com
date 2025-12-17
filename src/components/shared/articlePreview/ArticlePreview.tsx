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
    <LocalizedLink href={href} className='no-underline group'>
      <Heading level={2} className='group-hover:underline'>{title}</Heading>
      <p className=''>{description}</p>
      <div className='flex mt-4 flex-col sm:flex-row sm:justify-between text-slate-400 text-sm'>
        <p>{tMain('available_languages')}: {supportedLanguages.join(', ')}</p>
        <p>{dateLabel}: {date}</p>
      </div>
    </LocalizedLink>
  )
}

export default ArticlePreview
