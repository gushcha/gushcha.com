'use server'
import React from 'react';

export const Denis: React.FC = async () => {
  

  return (
    <section
      aria-labelledby="gushcha-heading"
      className="font-sans leading-relaxed border border-slate-200 rounded-xl px-6 py-5 bg-white shadow-sm max-w-[640px]"
    >
      <header className="mb-3">
        <h2
          id="gushcha-heading"
          className="m-0 text-2xl font-semibold bg-[linear-gradient(90deg,#0f62fe,#6754e2_40%,#b832f9)] bg-clip-text text-transparent tracking-[0.5px]"
        >
          Gushcha
        </h2>
      </header>

      <p className="mb-4 text-slate-600">
        Nice Family full of interesting people.
      </p>
    </section>
  );
};

export default Denis;
