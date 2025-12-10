export type MetadataLayoutProps = {
  params: Promise<{ id: string }>
}

export type MetadataPageProps = {
  params: Promise<{ locale: string }>
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>
} & MetadataLayoutProps