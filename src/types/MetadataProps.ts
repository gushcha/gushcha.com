export type MetadataLayoutProps = {
  params: Promise<{ id: string }>
}

export type MetadataPageProps = {
  params: { locale: string }
  searchParams: { [key: string]: string | string[] | undefined }
} & MetadataLayoutProps