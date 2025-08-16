'use client'
import React from 'react'
import Link from 'next/link'
import { Locale } from '../../../types/locale'
import { useChosenLocale } from '@/hooks/useChosenLocale/useChosenLocale'

type LocalizedLinkProps = React.ComponentProps<typeof Link> & {
  href: string
  supportedLocales?: readonly Locale[]
}

const LocalizedLink: React.FC<LocalizedLinkProps> = ({supportedLocales, href, ...props}) => {
  const locale = useChosenLocale(supportedLocales)
  const localizedHref = `/${locale}/${href}`.replace(/\/{2,}/g, '/')

  return <Link href={localizedHref} {...props} />
}

export default LocalizedLink
