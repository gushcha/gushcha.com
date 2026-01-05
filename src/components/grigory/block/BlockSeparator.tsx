import React from 'react'

interface BlockSeparatorProps {
  className?: string
}

const BlockSeparator: React.FC<BlockSeparatorProps> = ({ className }) => (
  <svg
    viewBox="100 0 500 23"
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    aria-hidden="true"
    focusable="false"
    className={`w-100vw h-auto min-[1400px]:scale-y-[0.6] min-[1800px]:scale-y-[0.4] min-[2400px]::scale-y-[0.2] min-[3000px]:scale-y-[0.17] absolute left-0 right-0 bottom-0 ${className ?? ''}`}
  >
    <path
      d="M 0 7 C 35 0, 65 0, 100 4 C 135 7, 165 7, 200 4 C 235 0, 265 0, 300 4 C 335 7, 365 7, 400 4 C 435 0, 465 0, 500 4 C 535 7, 565 7, 600 4"
      stroke="#F2A25A"
      strokeWidth="1"
      strokeLinecap="round"
    />
    <path
      d="M 0 16 C 35 23, 65 23, 100 16 C 135 9, 165 9, 200 16 C 235 23, 265 23, 300 16 C 335 9, 365 9, 400 16 C 435 23, 465 23, 500 16 C 535 9, 565 9, 600 16"
      stroke="#DDDDDD"
      strokeWidth="1"
      strokeLinecap="round"
    />
  </svg>
)

export default BlockSeparator
