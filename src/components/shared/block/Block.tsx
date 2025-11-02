import React, {FC} from 'react'
import BlockVideo from './BlockVideo'
interface BlockProps {
  children?: React.ReactNode
  videoSrc?: string
  isContrast?: boolean
  isWide?: boolean
}
const Block: FC<BlockProps> = ({children, videoSrc, isContrast = false, isWide = false }) => {
  // subtle background with small opacity; hover increases opacity slightly
  const bgClass = isContrast
    ? 'bg-white/3 dark:bg-white/5'
    : 'bg-black/3 dark:bg-black/5'

  const widthClass = isWide ? 'max-w-5xl' : 'max-w-prose'

  // section is full width; inner container limits content width and handles padding/rounding
  const className = `${bgClass} w-full transition-colors duration-200 ease-in-out hover:bg-opacity-30`
  return (
    <BlockVideo videoSrc={videoSrc}>
      <div className={className}>
        <div className={`${widthClass} mx-auto rounded-lg p-6`}>
          {children}
        </div>
      </div>
    </BlockVideo>
  )
}

export default Block