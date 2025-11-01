'use client'

import { useState } from 'react'
import LocalizedLink from '@/components/shared/localizedLink/LocalizedLink'
import BurgerIcon from './BurgerIcon'
import Dropdown from '@/components/shared/dropdown/Dropdown'
import { useT } from '@/hooks/useT/useT'

const NavbarLinks = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const {t, isLoading} = useT('denis-navbar', ['en', 'ru', 'el'])
  const links = [
    { href: '/denis', label: t('home') },
    { href: '/denis/cv', label: t('cv') },
    { href: '/denis/blog', label: t('blog') },
    { href: '/family', label: t('family') },
  ]

  if(isLoading) {
    return <div className="sm:hidden">...</div>
  }

  return (
    <>
      {/* Mobile: Dropdown Menu */}
      <div className="sm:hidden">
        <Dropdown
          isOpen={isMenuOpen}
          onClose={() => setIsMenuOpen(false)}
          trigger={
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="flex items-center justify-center p-2 rounded-md hover:bg-violet-100 dark:hover:bg-violet-900 transition-colors"
              aria-label="Toggle menu"
            >
              <BurgerIcon isOpen={isMenuOpen} />
            </button>
          }
        >
          <div className="fixed left-0 right-0 bottom-[60px] bg-white dark:bg-slate-800 shadow-lg border-t border-slate-200 dark:border-slate-700 rounded-none border-x-0">
            {links.map((link) => (
              <LocalizedLink
                key={link.href}
                href={link.href}
                className="block px-6 py-4 hover:bg-violet-100 dark:hover:bg-violet-900 transition-colors border-b border-slate-100 dark:border-slate-700 last:border-b-0"
                onClick={() => setIsMenuOpen(false)}
              >
                {link.label}
              </LocalizedLink>
            ))}
          </div>
        </Dropdown>
      </div>

      {/* Desktop: Horizontal Links */}
      <div className="hidden sm:flex items-center gap-6">
        {links.map((link) => (
          <LocalizedLink
            key={link.href}
            href={link.href}
            className="font-medium hover:text-violet-600 dark:hover:text-violet-400 transition-colors"
          >
            {link.label}
          </LocalizedLink>
        ))}
      </div>
    </>
  )
}

export default NavbarLinks
