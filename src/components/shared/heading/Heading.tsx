import React from 'react'

interface HeadingProps {
  level: 1 | 2 | 3 | 4 | 5 | 6
  children: React.ReactNode
  className?: string
}

const Heading: React.FC<HeadingProps> = ({ 
  level, 
  children, 
  className = '',
}) => {
  const getClassName = () => {
    switch (level) {
      case 1:
        return 'text-2xl sm:text-3xl font-bold text-shadow text-center sm:text-left pb-2'
      case 2:
        return 'text-xl sm:text-2xl text-center sm:text-left pb-2'
      case 3:
        return 'text-lg text-center sm:text-left pb-2'
      case 4:
        return 'text-base text-center sm:text-left pb-2'
      case 5:
        return 'text-sm text-center sm:text-left pb-2'
      case 6:
        return 'text-xs text-center sm:text-left pb-2'
      default:
        return 'text-base text-center sm:text-left pb-2'
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

export default Heading
