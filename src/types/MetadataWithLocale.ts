import { Metadata } from 'next'
import type { ResolvingMetadata } from 'next'
import { MetadataPageProps } from '@/types/MetadataProps'

export type MetadataWithLocale = (props: MetadataPageProps, parent: ResolvingMetadata) => Promise<Metadata>