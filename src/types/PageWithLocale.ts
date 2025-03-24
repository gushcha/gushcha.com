import React from 'react'

export type PageWithLocaleProps<TProps extends object = object> = {
  params: Promise<{
    locale: string
  }>
} & TProps

export type PageWithLocale<TProps extends object = object> = (
  props: PageWithLocaleProps<TProps>
) => Promise<React.JSX.Element>
