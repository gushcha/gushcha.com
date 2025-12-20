'use client'
import LocalizedLink from '@/components/shared/localizedLink/LocalizedLink'
import React, { FC, useState } from 'react'
import { useT } from '@/hooks/useT/useT'
import Modal from '@/components/shared/modal/Modal'
import GetInTouch from '@/components/denis/getInTouch/GetInTouch'

const NavbarContactMe: FC = () => {
  const [t, isLoading] = useT('denis-navbar', ['en', 'ru', 'el'])
  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault()
    setIsModalOpen(true)
  }

  const [isModalOpen, setIsModalOpen] = useState(false)

  if(isLoading) {
    return <span>...</span>
  }

  return (
    <span>
      <LocalizedLink 
        href='/denis/contact' 
        onClick={handleClick}
        className='font-bold 
        text-blue-900 dark:text-blue-200 
        hover:text-violet-600 dark:hover:text-violet-400
        transition-colors 
        no-underline'
      >
        {t('contact')}
      </LocalizedLink>
      <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)}>
        <div className='bg-radial from-blue-50 dark:from-violet-950 from-20% to-violet-100  dark:to-pink-950 to-80%'>
          <GetInTouch formClassName='h-[calc(100dvh-248px)] max-h-[840px]'/>
        </div>
      </Modal>
    </span>
  )
}

export default NavbarContactMe