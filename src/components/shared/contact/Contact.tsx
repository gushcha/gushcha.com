import React, {FC} from 'react'
import ContactIcon, { ContactType } from './ContactIcon'

type ContactProps = {
  type: ContactType
  value: string
  children: React.ReactNode
}

const Contact: FC<ContactProps> = ({
  type,
  value,
  children
}) => {

  return (
    <a href={value} className="pr-4 inline-flex items-center gap-2">
      <ContactIcon type={type} /> {children}
    </a>
  )
}

export default Contact