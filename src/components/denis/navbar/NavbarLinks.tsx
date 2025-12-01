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
      <div className="sm:hidden">
        <Dropdown
          isOpen={isMenuOpen}
          onClose={() => setIsMenuOpen(false)}
          dropdownClassName="
            min-w-[160px]
            bottom-[64px] right-0
            sm:bottom-auto
          "
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
          {links.map((link) => (
            <LocalizedLink
              key={link.href}
              href={link.href}
              className="
                block px-6 py-4
                hover:bg-violet-100/60 dark:hover:bg-violet-900/60
                no-underline 
                transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              {link.label}
            </LocalizedLink>
          ))}
        </Dropdown>
      </div>

      {/* Desktop: Horizontal Links */}
      <div className="hidden sm:flex items-center gap-6">
        {links.map((link) => (
          <LocalizedLink
            key={link.href}
            href={link.href}
            className="font-medium hover:text-violet-600 dark:hover:text-violet-400 transition-colors no-underline"
          >
            {link.label}
          </LocalizedLink>
        ))}
      </div>
    </>
  )
}

export default NavbarLinks
