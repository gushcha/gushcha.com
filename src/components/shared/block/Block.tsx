import React, {FC} from 'react'
interface BlockProps {
  children?: React.ReactNode
  isContrast?: boolean
  isWide?: boolean
}
const Block: FC<BlockProps> = ({children, isContrast = false, isWide = false }) => {
  // subtle background with small opacity; hover increases opacity slightly
  const bgClass = isContrast
    ? 'bg-white/5 dark:bg-white/10'
    : 'bg-black/5 dark:bg-black/10'

  const widthClass = isWide ? 'max-w-5xl' : 'max-w-prose'

  // section is full width; inner container limits content width and handles padding/rounding
  const className = `${bgClass} w-full transition-colors duration-200 ease-in-out hover:bg-opacity-30`

  return (
    <div className={className}>
      <div className={`${widthClass} mx-auto rounded-lg p-6`}>
        {children}
      </div>
    </div>
  )
}

export default Block