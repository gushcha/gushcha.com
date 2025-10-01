import {FC} from 'react'
import ContactIconLinkedIn from './ContactIcons/ContactIconLinkedIn'
import ContactIconGithub from './ContactIcons/ContactIconGithub'
import ContactIconGmail from './ContactIcons/ContactIconGmail'
import ContactIconTelegram from './ContactIcons/ContactIconTelegram'
import ContactIconGushcha from './ContactIcons/ContactIconGushcha'

export enum ContactType {
  Gmail = 'gmail',
  Telegram = 'telegram',
  Github = 'github',
  LinkedIn = 'linkedin',
  Website = 'website',
}

type ContactIconProps = {
  type: ContactType
}

const ContactIcon: FC<ContactIconProps> = ({
  type,
}) => {
  switch (type) {
    case ContactType.Gmail:
      return <ContactIconGmail/>
    case ContactType.Telegram:
      return <ContactIconTelegram/>
    case ContactType.Github:
      return <ContactIconGithub/>
    case ContactType.LinkedIn:
      return <ContactIconLinkedIn/>
    case ContactType.Website:
      return <ContactIconGushcha/>
    default:
      return (null)
  }
}

export default ContactIcon