'use server'
import React from 'react';
import LocalizedLink from '@/components/shared/localizedLink/LocalizedLink';

export const Denis: React.FC = async () => {
  const interests = ['TypeScript', 'React', 'Performance', 'DX', 'Clean Architecture'];

  return (
    <div className="flex justify-center px-4 my-8">
      <section
        aria-labelledby="denis-heading"
        className="font-sans leading-relaxed border border-slate-200/60 rounded-xl px-6 py-5 bg-white/80 shadow-sm max-w-[640px] w-full"
      >
        <header className="mb-3">
          <h2
            id="denis-heading"
            className="m-0 text-2xl font-semibold bg-[linear-gradient(90deg,#0f62fe,#6754e2_40%,#b832f9)] bg-clip-text text-transparent tracking-[0.5px]"
          >
            Denis Gushcha
          </h2>
          <p className="mt-1 text-[0.95rem] font-medium text-slate-700">
            Frontend Developer / Betting Industry
          </p>
          <p className="mt-1 text-[0.8rem] tracking-[0.4px] uppercase font-semibold text-slate-500">
            Limassol
          </p>
        </header>

        <p className="mb-4 text-slate-600">
          I build modern, performant web interfaces with a strong focus on type safety,
          maintainability, and developer experience. I enjoy refining architectures,
          optimizing bundles, and elevating UI polish.
        </p>

        <div aria-label="Key interests">
          <ul className="list-none p-0 m-0 flex flex-wrap gap-2">
            {interests.map(tag => (
              <li
                key={tag}
                className="text-[0.7rem] font-semibold tracking-[0.5px] py-1 px-2 rounded-full bg-slate-100 text-slate-700 border border-slate-200"
              >
                {tag}
              </li>
            ))}
          </ul>
        </div>
        <LocalizedLink href='/family'>Family</LocalizedLink>
        <LocalizedLink href='/grigory'>Григорие</LocalizedLink>
        <div
          aria-label="Decorative gradient square"
          className="mt-6 w-[100px] h-[100px] bg-gradient-to-br from-indigo-500 via-fuchsia-500 to-rose-500 shadow-sm"
        ><span className="text-white text-[90px] leading-none font-bold">Г</span></div>
      </section>
    </div>
  );
};

export default Denis;
