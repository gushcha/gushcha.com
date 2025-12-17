import { match } from '@formatjs/intl-localematcher'
import Negotiator from 'negotiator'
import { NextResponse, NextRequest } from 'next/server'

import { MEMBERS, type Member } from './constants/members'
import { allLocales, localesByMember, type Locale } from './constants/locales'


type RequestLocaleParams = {
  locale?: Locale,
  member?: Member
  pathNameWithoutLocale: string
}

const localeParamsMatcher = new RegExp(
  `^(\/(${allLocales.join('|')}))?(\/((${MEMBERS.join('|')})(\/|$))?.*)?$`
)
const hostMemberMatcher = new RegExp(
  `^${MEMBERS.join('|')}(?=\.)`
)

function getRequestLocaleParams (req: NextRequest):RequestLocaleParams {
  const [,,
    reqLocale,
    reqPathNameWithoutLocale,,
    reqMember,
  ] = req.nextUrl.pathname.match(localeParamsMatcher) || []
  const [
    hostMember
  ] = (req.headers.get('Host') || '').match(hostMemberMatcher) || []

  console.warn('localeParamsMatcher', localeParamsMatcher)
  return {
    locale: reqLocale as Locale | undefined,
    member: (reqMember ?? hostMember) as Member | undefined, 
    pathNameWithoutLocale: reqPathNameWithoutLocale ?? ''
  }
}

function suggestLocale(req: NextRequest, availableLocales: Locale[]) {
  const headersObject = Object.fromEntries(req.headers.entries())
  const languages = new Negotiator({ headers: headersObject }).languages()
  return match(languages, [...availableLocales], availableLocales[0])
}

export function proxy(req: NextRequest) {
  console.debug('-------------------')
  console.warn(req.nextUrl.pathname)
  const {locale, member, pathNameWithoutLocale} = getRequestLocaleParams(req)
  const availableLocales = localesByMember[member ?? 'family']
  console.info('PARAMS',{locale, member, pathNameWithoutLocale, availableLocales})

  if (locale && availableLocales.includes(locale)) {
    console.warn('PASS', req.nextUrl.pathname)
    return
  }

  const suggestedLocale = suggestLocale(req, availableLocales)
  req.nextUrl.pathname = `/${suggestedLocale}${pathNameWithoutLocale}`
  console.warn('REDIRECT TO', req.nextUrl.pathname)
  return NextResponse.redirect(req.nextUrl)
}

export const config = {
  matcher: [
    {
      source: '/((?!api|_next/static|_next/image|favicon.ico|sitemap.xml|robots.txt|assets|\.well-known).*)',
      missing: [
        { type: 'header', key: 'next-router-prefetch' },
        { type: 'header', key: 'purpose', value: 'prefetch' }
      ]
    },
    {
      source: '/((?!api|_next/static|_next/image|favicon.ico|sitemap.xml|robots.txt|assets|\.well-known).*)',
      has: [
        { type: 'header', key: 'next-router-prefetch' },
        { type: 'header', key: 'purpose', value: 'prefetch' }
      ]
    },
    {
      source: '/((?!api|_next/static|_next/image|favicon.ico|sitemap.xml|robots.txt|assets|\.well-known).*)',
      has: [{ type: 'header', key: 'x-present' }],
      missing: [{ type: 'header', key: 'x-missing', value: 'prefetch' }]
    },
  ]
}