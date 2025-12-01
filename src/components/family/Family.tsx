'use server'
import React from 'react';
import { getT } from '@/hooks/useT/getT'
import Block from '@/components/shared/block/Block'
import Heading from '@/components/shared/heading/Heading'
import LocalizedLink from '../shared/localizedLink/LocalizedLink';


export const Family: React.FC = async () => {
  const t = await getT('family', ['en', 'ru', 'el'])
  const tDenis = await getT('denis', ['en', 'ru', 'el']);

  return (
    <main>
      <Block >
        <Heading level={1}>{t('heading')}</Heading>
      </Block>
      <LocalizedLink href={'/denis'} className='no-underline'>
        <Block isContrast>
          <Heading level={2}>{tDenis('denis_gushcha')}</Heading>
          <p className="font-light text-slate-700 dark:text-slate-300">{tDenis('frontend_developer_betting_industry')}</p>
          <p className="mt-1 text-[0.8rem] tracking-[0.4px] uppercase font-semibold text-slate-400">{tDenis('limassol')}</p>
        </Block>
      </LocalizedLink>
    </main>
  );
};

export default Family;
