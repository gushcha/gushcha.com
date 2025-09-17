'use server'
import React from 'react';

export const Grigory: React.FC = async () => {
  const interests = ['Music Production', 'Sound Engineering', 'Audio Technology'];

  return (
    <section
      aria-labelledby="grigory-heading"
      className="max-w-[700px] w-full p-6 rounded-2xl bg-gradient-to-br from-fuchsia-500 via-amber-300 to-cyan-400 shadow-lg"
    >
      <header className="mb-3">
        <h2
          id="grigory-heading"
          className="m-0 text-[70px] leading-80px] break-words bg-gradient-to-r from-fuchsia-700 via-amber-500 to-cyan-500 bg-clip-text text-transparent drop-shadow"
        >
          Grigory Gushcha
        </h2>
        <p className="mt-1 text-[0.95rem] font-medium text-pink-600">
          Music Producer / Sound Engineer
        </p>
        <p className="mt-1 text-[0.8rem] tracking-[0.4px] uppercase font-semibold text-pink-600">
          Belgrade
        </p>
      </header>

      <p className="mb-4 text-pink-600">
        I create immersive soundscapes and high-quality audio productions. My passion lies in blending technology with creativity to produce music that resonates emotionally. Also checkout my spotify profile.
      </p>

      <div aria-label="Key interests">
        <ul className="list-none p-0 m-0 flex flex-wrap gap-2">
          {interests.map(tag => (
            <li
              key={tag}
              className="text-[0.7rem] font-semibold tracking-[0.5px] py-1 px-2 rounded-full bg-white/20 text-pink-600 border border-white/30 backdrop-blur-sm"
            >
              {tag}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default Grigory;
