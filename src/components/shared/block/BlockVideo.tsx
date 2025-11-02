// use client
import React, {FC} from 'react'

type Props = {
  videoSrc?: string
  children?: React.ReactNode
}

const BlockVideo: FC<Props> =(({ videoSrc, children }) => {
  if (!videoSrc) return <>{children}</>
  return (
    <div>
      <div>
        {children}
      </div>
      <video
        autoPlay
        src={videoSrc}
        muted
        loop
        playsInline
        aria-hidden="true"
        className="absolute right-0 top-0 h-full w-auto object-cover opacity-40 pointer-events-none z-0"
      />
    </div>
  )
})

BlockVideo.displayName = 'BlockVideo'

export default BlockVideo
