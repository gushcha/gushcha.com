import React from 'react';

interface ButtonProps {
  href: string;
  children: React.ReactNode;
  className?: string;
}

const Button: React.FC<ButtonProps> = ({ href, children, className = '' }) => {
  return (
    <a
      href={href}
      className={`bg-black text-white px-6 py-2 rounded-lg hover:bg-gray-800 transition-colors ${className}`}
    >
      {children}
    </a>
  );
};

export default Button;
