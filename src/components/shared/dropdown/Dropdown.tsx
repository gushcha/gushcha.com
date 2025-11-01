'use client'

import { useEffect, useRef, ReactNode, FC } from 'react'

interface DropdownProps {
  isOpen: boolean
  onClose: () => void
  trigger: ReactNode
  children: ReactNode
  className?: string
  dropdownClassName?: string
  position?: 'bottom' | 'top'
  align?: 'left' | 'center' | 'right'
}

const Dropdown: FC<DropdownProps> = ({
  isOpen,
  onClose,
  trigger,
  children,
  className = '',
  dropdownClassName = '',
  position = 'bottom',
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

  const getPositionClasses = () => {
    const positions = {
      bottom: 'top-full mt-2',
      top: 'bottom-full mb-2',
    }
    return positions[position]
  }

  const getAlignmentClasses = () => {
    const alignments = {
      left: 'left-0',
      center: 'left-1/2 -translate-x-1/2',
      right: 'right-0',
    }
    return alignments[align]
  }

  return (
    <div ref={dropdownRef} className={`relative ${className}`}>
      {trigger}
      {isOpen && (
        <div
          className={`absolute ${getPositionClasses()} ${getAlignmentClasses()} bg-white dark:bg-slate-800 rounded-md shadow-lg border border-slate-200 dark:border-slate-700 z-50 ${dropdownClassName}`}
        >
          {children}
        </div>
      )}
    </div>
  )
}

export default Dropdown
