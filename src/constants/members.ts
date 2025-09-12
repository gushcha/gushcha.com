export const MEMBERS = [
  'denis',
  'grigory',
  'family',
] as [
  'denis',
  'grigory',
  'family',
]

export type Member = typeof MEMBERS[number]

export function isMember(value: unknown): value is Member {
  return typeof value === 'string' && (MEMBERS as string[]).includes(value)
}