'use client'

import { useEffect, useRef, ReactNode, FC } from 'react'

interface DropdownProps {
  isOpen: boolean
  onClose: () => void
  trigger: ReactNode
  children: ReactNode
  className?: string
  dropdownClassName?: string
  align?: 'left' | 'center' | 'right'
}

const Dropdown: FC<DropdownProps> = ({
  isOpen,
  onClose,
  trigger,
  children,
  className = '',
  dropdownClassName = '',
  align = 'left',
}) => {
  const dropdownRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent | TouchEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        onClose()
      }
    }

    if (isOpen) {
      document.addEventListener('mousedown', handleClickOutside)
      document.addEventListener('touchstart', handleClickOutside)
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside)
      document.removeEventListener('touchstart', handleClickOutside)
    }
  }, [isOpen, onClose])

  return (
    <div ref={dropdownRef} className={`relative ${className}`}>
      {trigger}
      {isOpen && (
        <div
          className={`
            fixed sm:absolute z-50

            w-[100vw] sm:w-auto
            
            bg-white/60 dark:bg-slate-900/60 
            backdrop-blur-sm shadow-lg
            ${dropdownClassName}`}
        >
          {children}
        </div>
      )}
    </div>
  )
}

export default Dropdown
