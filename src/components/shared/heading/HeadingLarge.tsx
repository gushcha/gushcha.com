import React from 'react'

interface HeadingLargeProps {
  level: 1 | 2 | 3 | 4 | 5 | 6
  displayLevel?: 1 | 2 | 3 | 4 | 5 | 6
  children: React.ReactNode
  className?: string
}

const HeadingLarge: React.FC<HeadingLargeProps> = ({ 
  level,
  displayLevel,
  children, 
  className = '' 
}) => {
  const getClassName = () => {
    switch (displayLevel || level) {
      case 1:
        return 'text-4xl sm:text-5xl font-bold text-shadow text-center sm:text-left pb-4 lg:pb-8'
      case 2:
        return 'text-2xl sm:text-4xl font-bold  text-center sm:text-left pb-4 lg:pb-8'
      case 3:
        return 'text-xl sm:text-2xl  font-bold text-center sm:text-left pb-4 lg:pb-8'
      case 4:
        return 'text-lg sm:text-xl text-center sm:text-left pb-4 lg:pb-8'
      case 5:
        return 'text-base sm:text-lg text-center sm:text-left pb-4 lg:pb-8'
      case 6:
        return 'text-sm sm:text-base text-center sm:text-left pb-4 lg:pb-8'
      default:
        return 'text-lg sm:text-xl text-center sm:text-left pb-4 lg:pb-8'
    }
  }

  const props = { className: `${getClassName()} ${className}` }

  switch (level) {
    case 1:
      return <h1 {...props}>{children}</h1>
    case 2:
      return <h2 {...props}>{children}</h2>
    case 3:
      return <h3 {...props}>{children}</h3>
    case 4:
      return <h4 {...props}>{children}</h4>
    case 5:
      return <h5 {...props}>{children}</h5>
    case 6:
      return <h6 {...props}>{children}</h6>
    default:
      return <h1 {...props}>{children}</h1>
  }
}

export default HeadingLarge
