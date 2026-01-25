import { Member } from './members'

const localesByParticularMember = {
  denis: ['en', 'ru', 'el'] as ['en', 'ru', 'el'],
  grigory: ['en'] as ['en']
}

export type Locale = typeof localesByParticularMember[
  keyof typeof localesByParticularMember
][number]

export const allLocales: Locale[] = Array.from(
  new Set(
    Object.values(localesByParticularMember).flat()
  )
)

export const localesByMember: Record<Member, Locale[]> = {
  ...localesByParticularMember,
  'family': allLocales,
}


/**
 * Runtime type guard to validate locale values.
 * @param value Unknown value.
 * @returns True if value is a supported locale.
 */
export function isLocale(value: unknown): value is Locale {
  return typeof value === 'string' && (allLocales as string[]).includes(value)
}