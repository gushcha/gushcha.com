'use client'
import React from 'react'
import { usePathname } from 'next/navigation'

const BackgroundTransitioner: React.FC = () => {
  const pathname = usePathname();
  const currentPathLevel = pathname.split('/').length - 1;
  const [pathLevel, setPathLevel] = React.useState(currentPathLevel);

  React.useEffect(() => {
    if (typeof document !== undefined 
      && document?.body 
      && currentPathLevel !== pathLevel
    ) {
      setPathLevel(currentPathLevel)
      document.body.style.backgroundPosition = `${50*currentPathLevel}vw`

      //debugger
    }
  }, [currentPathLevel])
  return null;
};

export default BackgroundTransitioner;