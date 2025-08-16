'use server'
import React from 'react';

export const Denis: React.FC = async () => {
  

  return (
    <section className="p-4 rounded-lg bg-testcolor text-white animate-testpulse">
      <header className="mb-3">
        <h2 className="text-2xl font-semibold tracking-wide">Gushcha <span className="inline-block ml-2 px-2 py-0.5 text-xs font-bold bg-white/20 rounded-full animate-testpulse">LIVE</span></h2>
      </header>

      <p className="text-sm opacity-90">
        Nice Family full of interesting people.
      </p>
      <div className='bg-green-500'>1</div>
      <div className='bg-test-pink'>2</div>
    </section>
  );
};

export default Denis;
