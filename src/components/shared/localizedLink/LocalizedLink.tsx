'use client'
import React from 'react'
import Link from 'next/link'
import { Locale } from '@/constants/locales'
import { useChosenLocale } from '@/hooks/useChosenLocale/useChosenLocale'

type LocalizedLinkProps = React.ComponentProps<typeof Link> & {
  href: string
  supportedLocales?: Locale[]
}

const LocalizedLink: React.FC<LocalizedLinkProps> = ({supportedLocales, href, ...props}) => {
  const locale = useChosenLocale(supportedLocales)
  const localizedHref = `/${locale}/${href}`.replace(/\/{2,}/g, '/')

  return <Link className='underline' href={localizedHref} {...props} />
}

export default LocalizedLink
