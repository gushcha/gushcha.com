'use server'
import React from 'react';
import LocalizedLink from '@/components/shared/localizedLink/LocalizedLink';
import Block from '@/components/shared/block/Block'
import Heading from '@/components/shared/heading/Heading'
import { getT } from '@/hooks/useT/getT'

export const Denis: React.FC = async () => {
  const t = await getT('denis')

  const interests = ['TypeScript', 'React', 'Performance', 'DX', 'Clean Architecture'];

  return (
    <main>
      <Block>
        <Heading level={1} className='text-blue-900 dark:text-blue-200'>{t('denis_gushcha')}</Heading>
        <p className="font-light text-slate-700 dark:text-slate-300">{t('frontend_developer_betting_industry')}</p>
        <p className="mt-1 text-[0.8rem] tracking-[0.4px] uppercase font-semibold text-slate-400">{t('limassol')}</p>
        <p className="mb-4">{t('i_build_modern_performant')}</p>
        <div aria-label="Key interests">
          <ul className="list-none p-0 m-0 flex flex-wrap gap-2">
            {interests.map(tag => (
              <li
                key={tag}
                className="text-[0.7rem] font-semibold border tracking-[0.5px] py-1 px-2 rounded-full bg-blue-100 border-blue-200 dark:bg-blue-950 dark:border-blue-900"
              >
                {tag}
              </li>
            ))}
          </ul>
        </div>
      </Block>
      <Block isContrast>
        <Heading level={2}>{t('here_you_can')}</Heading>
        <p>{t('check_out_my_work')}<LocalizedLink href='/denis/cv'>{t('cv')}</LocalizedLink>.
        </p>
        <p className='mt-4'>{t('discover_my_interests_in')}<LocalizedLink href='/denis/blog'>{t('blog')}</LocalizedLink>.
        </p>
        {/* <p className='mt-4'>{t('or_if_you_were')}<LocalizedLink href='/grigory'>{t('my_brother_apos_s')}</LocalizedLink>.
        </p> */}

      </Block>
    </main>
  );
};

export default Denis;
