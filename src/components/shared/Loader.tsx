import React from 'react';

interface LoaderProps {
  size?: 'sm' | 'md' | 'lg';
}

const sizePxMap = {
  sm: 16,
  md: 32,
  lg: 64,
};

const Loader: React.FC<LoaderProps> = ({ size = 'md' }) => {
  const px = sizePxMap[size] || sizePxMap.md;
  return (
    <span role="status" aria-label="Loading" style={{ display: 'inline-block', width: px, height: px }}>
      <svg
        width={px}
        height={px}
        viewBox={`0 0 ${px} ${px}`}
        style={{ display: 'block', margin: '0 auto', animation: 'spin-slow 1s linear infinite' }}
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <circle
          cx={px / 2}
          cy={px / 2}
          r={(px / 2) - 4}
          stroke="currentColor"
          strokeWidth="4"
          opacity="0.15"
        />
        <linearGradient id="loader-gradient" x1="0" y1="0" x2={px} y2={px} gradientUnits="userSpaceOnUse">
          <stop stopColor="currentColor" stopOpacity="0.8" />
          <stop offset="1" stopColor="currentColor" stopOpacity="0.2" />
        </linearGradient>
        <path
          d={`M${px / 2},4 A${(px / 2) - 4},${(px / 2) - 4} 0 1 1 ${px / 2 - 0.01},4`}
          stroke="url(#loader-gradient)"
          strokeWidth="4"
          strokeLinecap="round"
          fill="none"
        />
        <circle
          cx={px / 2}
          cy={px / 6}
          r={px / 16}
          fill="currentColor"
          opacity="0.8"
        />
      </svg>
    </span>
  );
};

export default Loader;
