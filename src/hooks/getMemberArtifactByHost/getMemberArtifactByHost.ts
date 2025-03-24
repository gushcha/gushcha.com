'use server'

import { headers } from 'next/headers'

// eslint-disable-next-line @typescript-eslint/no-empty-object-type
type NonNullish = {}

type HostPrefixToArtefactMap<T extends NonNullish> = {
  family: T
  denis: T
  grigory: T
}
/**
 * Determines the member artifact based on the host prefix.
 * example: if the host is "family.gushcha.com", it will return the artifact for "family".
 * @param hostPrefixToArtefactMap 
 * @returns artifact based on the host prefix, family artefact for default.
 */
export const getMemberArtifactByHost = async<T extends NonNullish> (
  hostPrefixToArtefactMap: HostPrefixToArtefactMap<T>
):Promise<T> => {
  const headersList = await headers()
  const host = headersList.get('host') || ''
  const artifact = Object.entries(hostPrefixToArtefactMap)
    .find(([prefix]) => host.startsWith(`${prefix}.`))?.[1]

  return artifact || hostPrefixToArtefactMap.family // Default to family if no match found
}

