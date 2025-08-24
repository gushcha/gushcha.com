export const MEMBERS = [
  'denis',
  'grigory',
  'family',
] as const

export type Member = typeof MEMBERS[number]

export function isMember(value: unknown): value is Member {
  return typeof value === 'string' && (MEMBERS as readonly string[]).includes(value)
}