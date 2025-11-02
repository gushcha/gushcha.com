'use server'
import React from 'react';
import LocalizedLink from '@/components/shared/localizedLink/LocalizedLink';
import Block from '@/components/shared/block/Block'
import Heading from '@/components/shared/heading/Heading'

export const Denis: React.FC = async () => {
  const interests = ['TypeScript', 'React', 'Performance', 'DX', 'Clean Architecture'];

  return (
    <main>
      <Block>
        <Heading level={1} className='text-blue-900 dark:text-blue-200'>Denis Gushcha</Heading>
        <p className="font-light text-slate-700 dark:text-slate-300">
          Frontend Developer / Betting Industry
        </p>
        <p className="mt-1 text-[0.8rem] tracking-[0.4px] uppercase font-semibold text-slate-400">
          Limassol
        </p>
        <p className="mb-4">
          I build modern, performant web interfaces with a strong focus on type safety,
          maintainability, and developer experience. I enjoy refining architectures,
          optimizing bundles, and elevating UI polish.
        </p>
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
        <Heading level={2}>Here you can:</Heading>
        <p>
          Check out my work experience in my <LocalizedLink href='/denis/cv'>CV</LocalizedLink>.
        </p>
        <p className='mt-4'>
          Discover my interests in <LocalizedLink href='/denis/blog'>Blog</LocalizedLink>.
        </p>
        <p className='mt-4'>
          Or if you were looking for a sound engineer with same surname, checkout <LocalizedLink href='/grigory'>my brother&apos;s webpage</LocalizedLink>.
        </p>

      </Block>
    </main>
  );
};

export default Denis;
