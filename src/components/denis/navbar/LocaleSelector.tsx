'use client'

import { useState } from 'react'
import { usePathname, useRouter } from 'next/navigation'
import Dropdown from '@/components/shared/dropdown/Dropdown'
import { Locale } from '@/constants/locales'
import { useChosenLocale } from '@/hooks/useChosenLocale/useChosenLocale'

type LocaleSelectorOption = {
  code: Locale,
  label: string,
  flag: string,
  isHidden?: boolean
}

const locales: LocaleSelectorOption[] = [
  { code: 'en', label: 'English', flag: '🇬🇧' },
  { code: 'ru', label: 'Russian', flag: '🇷🇺' },
  { code: 'el', label: 'Greek', flag: '🇬🇷', isHidden: true },
]

const LocaleSelector = () => {
  const [isOpen, setIsOpen] = useState(false)
  const pathname = usePathname()
  const router = useRouter()

  const supportedLocaleCodes = locales.map(l => l.code)
  const currentLocale = useChosenLocale(supportedLocaleCodes)

  const currentLocaleData = locales.find(
    l => l.code === currentLocale
  ) || locales[0]
  const localesToChoose = locales.filter(
    l => !l.isHidden && l !== currentLocaleData
  )

  const handleLocaleChange = (newLocale: string) => {
    let pathWithoutLocale = pathname || ''
    if (pathWithoutLocale.startsWith(`/${currentLocale}/`) || pathWithoutLocale === `/${currentLocale}`) {
      pathWithoutLocale = pathWithoutLocale.slice(currentLocale.length + 1)
    }

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
          className=" flex items-center justify-center gap-2
                      h-10 min-w-10 sm:px-3 
                      rounded-full border border-slate-300 dark:border-slate-600 
                      hover:bg-white dark:hover:bg-slate-800 
                      transition-colors 
                      shadow-sm
                    "
          aria-label="Select language"
        >
          {!isOpen && <span className="text-lg sm:w-5">
            {currentLocaleData.flag}
          </span>}
          {isOpen && <svg
            className='w-5 h-4 transition-transform rotate-180 sm:rotate-0'
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path 
              strokeLinecap="round" 
              strokeLinejoin="round" 
              strokeWidth={2} 
              d="M19 9l-7 7-7-7" 
            />
          </svg>}
          <span className="hidden sm:inline font-medium">
            {currentLocaleData.code.toUpperCase()}
          </span>
        </button>
      }
    >
      {localesToChoose.map((locale) => (
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
