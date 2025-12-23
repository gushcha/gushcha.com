'use client'
import {FC} from 'react'

import ContactForm from '@/components/shared/contactForm/ContactForm'
import Contact from '@/components/shared/contact/Contact'
import { ContactType } from '@/components/shared/contact/ContactIcon'
import Heading from '@/components/shared/heading/Heading'
import { useT } from '@/hooks/useT/useT'

const localizedSrc = {
  'en': 'https://docs.google.com/forms/d/e/1FAIpQLSf1vV5ccj4kJX3vMHToBxaFnDdXx_fU_46-Umwt_tD11N3S1A/viewform?embedded=true&hl=en',
  'ru': 'https://docs.google.com/forms/d/e/1FAIpQLSeW-csJqbFqwZ7uUV22R3fzsJOC-RCv7ECYhNJUm93wKWe5hA/viewform?embedded=true&hl=ru',
  'el': 'https://docs.google.com/forms/d/e/1FAIpQLSdGssu9dLMtRxY9XtS9Ow5JF2OQAqsrlU9BxvLESoZcdSY_vw/viewform?embedded=true&hl=el',
}

const GetInTouch: FC<{formClassName?: string}> = ({formClassName}) => {
  const [tContact, isLoadingTContacts] = useT('denis-contact', ['en', 'ru', 'el'])
  const [tCv, isLoadingTCv] = useT('denis-cv', ['en', 'ru'])

  if(isLoadingTContacts || isLoadingTCv) {
    return <span>...</span>
  }
  return (
    <>
      <section className='w-[90%] max-w-[640px] mx-auto px-[1px] pt-6'>
        <Heading level={1} className='text-blue-900 dark:text-blue-200'>{tContact('header')}</Heading>
        <p>
          <Contact type={ContactType.Gmail} value="mailto:denis.gushcha@gmail.com">
            denis@gushcha.com
          </Contact>
          <Contact type={ContactType.Telegram} value="https://t.me/ootconose">
            {tCv('telegram')}
          </Contact>
          <Contact type={ContactType.Github} value="https://t.me/ootconose">
            {tCv('github')}
          </Contact>
          <Contact type={ContactType.LinkedIn} value="https://www.linkedin.com/in/denis-gushcha-442469295/">
            {tCv('linkedin')}
          </Contact>
        </p>
      </section>
      <ContactForm localizedSrc={localizedSrc} className={formClassName}/>
    </>
  )
}

export default GetInTouch