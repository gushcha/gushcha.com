
import React from 'react'
import type { Locale } from '@/constants/locales'
import Markdown from 'react-markdown'
import { chooseLocale, getLocale } from '@/cache/cacheLocale'
import { BASE_URL } from '@/constants/baseUrl'
import { getT } from '@/hooks/useT/getT'
import { ASSETS_PATH } from '@/constants/assetsPath'

type LocalizedArticleProps = {
  name: string,
  supportedLocales: Locale[],
  className?: string
  datePublished: Date
  dateUpdated?: Date
}

const LocalizedArticle: React.FC<LocalizedArticleProps> = async ({
  name,
  supportedLocales,
  className = 'prose prose-headings:underline dark:prose-invert mx-auto ' +
  'p-6 shadow-sm ring-1 ring-inset ring-black/10 ' + 
  'dark:ring-white/10 bg-white/60 dark:bg-zinc-900/40 backdrop-blur',
  datePublished,
  dateUpdated,
}) => {
  const locale = chooseLocale(supportedLocales)
  const article = await fetch(`${BASE_URL}${ASSETS_PATH}${name}.${locale}.md`)
    .then(res => res.ok ? res : null)
    .then(res => res ? res.text() : null)

  const t = await getT('main')
  if (!article) {
    return <div> {t('article_not_found')}: {name} ({locale})</div>
  }

  return (
    <>
      <div className={className}>
        <Markdown>{article}</Markdown>
      </div>
      <div className='p-8'>
        <p>{t('published')}: {datePublished.toLocaleDateString(getLocale())}</p>
        {(
          dateUpdated 
        && <p>{t('updated')}: {dateUpdated.toLocaleString(getLocale())}</p>
        )}
      </div>
    </>
  )
}

export default LocalizedArticle
