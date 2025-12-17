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
    // { code: 'el', label: 'Ελληνικά', flag: '🇬🇷' },
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
      align="right"
      dropdownClassName="
        min-w-[160px]
        bottom-[64px] right-0
        sm:bottom-auto
      "
      trigger={
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="flex items-center justify-center sm:px-3 gap-2 h-10 min-w-10 rounded-full border border-slate-300 dark:border-slate-600 hover:bg-white dark:hover:bg-slate-800 transition-colors shadow-sm"
          aria-label="Select language"
        >
          {!isOpen && <span className="text-lg sm:w-5">{currentLocaleData.flag}</span>}
          {isOpen && <svg
            className='w-5 h-4 transition-transform rotate-180 sm:rotate-0'
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
          </svg>}
          <span className="hidden sm:inline font-medium">{currentLocaleData.code.toUpperCase()}</span>
        </button>
      }
    >
      {locales.map((locale) => (
        <button
          key={locale.code}
          onClick={() => handleLocaleChange(locale.code)}
          className="
            w-full px-4 py-2 
            hover:bg-violet-100/60 dark:hover:bg-violet-900/60
            transition-colors
            flex gap-2
            justify-center
            sm:justify-start
          "
        >
          <span className="text-lg">{locale.flag}</span>
          <span className="font-medium">{locale.label}</span>
        </button>
      ))}
    </Dropdown>
  )
}

export default LocaleSelector
