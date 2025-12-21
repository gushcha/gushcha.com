'use client'
import React from 'react';
import { Locale } from '@/constants/locales';
import { useChosenLocale } from '@/hooks/useChosenLocale/useChosenLocale';
import Loader from '@/components/shared/loader/Loader';

type ContactFormProps = {
  localizedSrc: Partial<Record<Locale, string>>;
  className?: string;
};

const ContactForm: React.FC<ContactFormProps> = ({localizedSrc, className=''}) => {
  const locale = useChosenLocale()
  const src = localizedSrc[locale] || Object.values(localizedSrc)[0];
  const resultClassName = `h-[calc(100dvh-210px)] ${className}`
  const [loading, setLoading] = React.useState(true);

  return (
    <div style={{position: 'relative'}}>
      {loading && (
        <div className="absolute top-0 left-0 w-full h-full 
                        flex items-center justify-center z-[1]"
        >
          <span className="text-blue-900 dark:text-blue-200">
            <Loader size="lg" />
          </span>
        </div>
      )}
      <iframe 
        src={src} 
        width='100%'
        className={resultClassName}
        style={loading ? {opacity: 0} : {opacity: 1, transition: 'opacity 0.3s'}}
        onLoad={() => setLoading(false)}
        title="Contact Form"
      >
        Loading…
      </iframe>
    </div>
  );
};

export default ContactForm;
