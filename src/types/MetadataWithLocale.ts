import { Metadata } from 'next'
import { MetadataPageProps } from '@/types/MetadataProps'

export type MetadataWithLocale = (props: MetadataPageProps) => Promise<Metadata>