import { match } from '@formatjs/intl-localematcher'
import Negotiator from 'negotiator'
import { NextResponse, NextRequest } from 'next/server'

import i18Config from '~/i18.config'

function suggestLocale(req: NextRequest) {
  const headersObject = Object.fromEntries(req.headers.entries())
  const languages = new Negotiator({ headers: headersObject }).languages()
  return match(languages, i18Config.locales, i18Config.defaultLocale)
}

export function middleware(req: NextRequest) {
  const { pathname } = req.nextUrl
  const pathnameHasLocale = i18Config.locales.some(
    locale => pathname.startsWith(`/${locale}/`) || pathname === `/${locale}`
  )

  if (pathnameHasLocale) return

  const suggestedLocale = suggestLocale(req)
  req.nextUrl.pathname = `/${suggestedLocale}${pathname}`
  return NextResponse.redirect(req.nextUrl)
}

export const config = {
  matcher: [
    {
      source: '/((?!api|_next/static|_next/image|favicon.ico|sitemap.xml|robots.txt).*)',
      missing: [
        { type: 'header', key: 'next-router-prefetch' },
        { type: 'header', key: 'purpose', value: 'prefetch' }
      ]
    },
    {
      source: '/((?!api|_next/static|_next/image|favicon.ico|sitemap.xml|robots.txt).*)',
      has: [
        { type: 'header', key: 'next-router-prefetch' },
        { type: 'header', key: 'purpose', value: 'prefetch' }
      ]
    },
    {
      source: '/((?!api|_next/static|_next/image|favicon.ico|sitemap.xml|robots.txt).*)',
      has: [{ type: 'header', key: 'x-present' }],
      missing: [{ type: 'header', key: 'x-missing', value: 'prefetch' }]
    }
  ]
}