import { headers } from 'next/headers'
import { getMemberArtifactByHost, type HostPrefixToArtefactMap } from './getMemberArtifactByHost'

// eslint-disable-next-line @typescript-eslint/no-empty-object-type
type NonNullish = {}

/**
 * Determines the member artifact based on the host prefix for server components.
 * Automatically resolves the host from Next.js headers().
 * 
 * @param hostPrefixToArtefactMap Map of host prefixes to artifacts
 * @returns Promise resolving to the artifact based on the host prefix
 */
export const getMemberArtifactByHostServer = async <T extends NonNullish>(
  hostPrefixToArtefactMap: HostPrefixToArtefactMap<T>
): Promise<T> => {
  let host = ''
  try {
    const headersList = await headers()
    host = headersList.get('host') || ''
  } catch (error) {
    // Fallback if headers are not available for some reason
    console.error('Failed to get headers in getMemberArtifactByHostServer', error)
  }
  
  return getMemberArtifactByHost(hostPrefixToArtefactMap, host)
}
