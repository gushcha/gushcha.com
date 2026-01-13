import React from 'react'

type WavePaths = [string, string, string];
interface BlockSeparatorProps {
  className?: string
  variant?: 0 | 1 | 2
}

const topWavePaths: WavePaths = [
  ` M 0 7 
    C 35 0, 65 0, 100 4 
    C 135 7, 165 7, 200 4 
    C 235 0, 265 0, 300 4 
    C 335 7, 365 7, 400 4 
    C 435 0, 465 0, 500 4 
    C 535 7, 565 7, 600 4
  `,
  ` M 0 7 
    C 35 0, 65 0, 100 6 
    C 135 7, 165 7, 200 4 
    C 235 0, 265 0, 300 11 
    C 335 19, 365 7, 400 4 
    C 435 0, 465 0, 500 4 
    C 535 7, 565 7, 600 4
  `,
  ` M 0 7 
    C 35 0, 65 0, 100 4 
    C 135 5, 165 4, 200 2 
    C 235 0, 265 0, 300 1 
    C 335 4, 395 1, 400 1
    C 435 0, 465 0, 500 3 
    C 535 5, 565 3, 600 4
  `,
]

const bottomWavePaths: WavePaths = [
  `
    M 0 16 
    C 35 23, 65 23, 100 16
    C 135 9, 165 9, 200 16
    C 235 23, 265 23, 300 16
    C 335 9, 365 9, 400 16
    C 435 23, 465 23, 500 16
    C 535 9, 565 9, 600 16
  `,
  `
    M 0 16 
    C 35 23, 65 23, 100 16
    C 135 19, 165 9, 200 16
    C 235 23, 265 23, 300 20
    C 335 19, 365 14, 400 18
    C 435 23, 465 23, 500 16
    C 535 11, 565 19, 600 16
  `,
  `
    M 0 16 
    C 35 23, 65 23, 100 16
    C 135 6, 165 3, 200 13
    C 235 23, 265 23, 300 19
    C 335 16, 365 13, 400 18
    C 435 23, 465 20, 500 17
    C 535 14, 565 9, 600 16
  `,
]

const BlockSeparator: React.FC<BlockSeparatorProps> = ({ className, variant=0 }) => {

  return(
    <svg
      viewBox="100 0 500 23"
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      aria-hidden="true"
      focusable="false"
      className={`w-100vw h-auto min-[1400px]:scale-y-[0.6] min-[1800px]:scale-y-[0.4] min-[2400px]::scale-y-[0.2] min-[3000px]:scale-y-[0.17] absolute left-0 right-0 bottom-0 ${className ?? ''}`}
    >
      <path
        d={topWavePaths[variant]}
        stroke="#F2A25A"
        strokeWidth="1"
        strokeLinecap="round"
      />
      <path
        d={bottomWavePaths[variant]}
        stroke="#DDDDDD"
        strokeWidth="1"
        strokeLinecap="round"
      />
    </svg>)
}

export default BlockSeparator
