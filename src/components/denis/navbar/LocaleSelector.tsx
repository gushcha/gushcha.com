'use client'

import { useState } from 'react'
import { usePathname, useRouter } from 'next/navigation'
import Dropdown from '@/components/shared/dropdown/Dropdown'

const LocaleSelector = () => {
  const [isOpen, setIsOpen] = useState(false)
  const pathname = usePathname()
  const router = useRouter()

  const locales = [
    { code: 'en', label: 'English', flag: '🇬🇧' },
    { code: 'ru', label: 'Русский', flag: '🇷🇺' },
    { code: 'el', label: 'Ελληνικά', flag: '🇬🇷' },
  ]

  const currentLocale = pathname?.split('/')[1] || 'en'
  const currentLocaleData = locales.find(l => l.code === currentLocale) || locales[0]

  const handleLocaleChange = (newLocale: string) => {
    const pathWithoutLocale = pathname?.replace(/^\/[a-z]{2}/, '') || ''
    router.push(`/${newLocale}${pathWithoutLocale}`)
    setIsOpen(false)
  }

  return (
    <Dropdown
      isOpen={isOpen}
      onClose={() => setIsOpen(false)}
      position={typeof window !== 'undefined' && window.innerWidth < 640 ? 'top' : 'bottom'}
      align="right"
      dropdownClassName="min-w-[160px]"
      trigger={
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="flex items-center gap-2 px-3 py-2 rounded-md bg-violet-100 dark:bg-violet-900 hover:bg-violet-200 dark:hover:bg-violet-800 transition-colors"
          aria-label="Select language"
        >
          <span className="text-lg">{currentLocaleData.flag}</span>
          <span className="hidden sm:inline font-medium">{currentLocaleData.code.toUpperCase()}</span>
          <svg
            className={`w-4 h-4 transition-transform ${isOpen ? 'rotate-180' : ''}`}
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
          </svg>
        </button>
      }
    >
      {locales.map((locale) => (
        <button
          key={locale.code}
          onClick={() => handleLocaleChange(locale.code)}
          className={`w-full text-left px-4 py-2 hover:bg-violet-100 dark:hover:bg-violet-900 first:rounded-t-md last:rounded-b-md transition-colors flex items-center gap-2 ${
            locale.code === currentLocale ? 'bg-violet-50 dark:bg-violet-950' : ''
          }`}
        >
          <span className="text-lg">{locale.flag}</span>
          <span className="font-medium">{locale.label}</span>
        </button>
      ))}
    </Dropdown>
  )
}

export default LocaleSelector
