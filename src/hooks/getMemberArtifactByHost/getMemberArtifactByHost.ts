type NonNullish = {}

export type HostPrefixToArtefactMap<T extends NonNullish> = {
  family: T
  denis: T
  grigory: T
}

/**
 * Determines the member artifact based on the host prefix.
 * example: if the host is "family.gushcha.com", it will return the artifact for "family".
 * @param hostPrefixToArtefactMap Map of host prefixes to artifacts
 * @param host Optional explicit host string, if not provided will attempt to read window.location.host
 * @returns artifact based on the host prefix, family artefact for default.
 */
export const getMemberArtifactByHost = <T extends NonNullish>(
  hostPrefixToArtefactMap: HostPrefixToArtefactMap<T>,
  host?: string
): T => {
  let activeHost = host || ''
  
  if (!activeHost && typeof window !== 'undefined') {
    activeHost = window.location.host
  }

  const artifact = Object.entries(hostPrefixToArtefactMap)
    .find(([prefix]) => activeHost.startsWith(`${prefix}.`))?.[1]

  return artifact || hostPrefixToArtefactMap.denis // Default to family if no match found
}
