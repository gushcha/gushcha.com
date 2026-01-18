import React from 'react';
import Heading from '@/components/shared/heading/Heading';

interface SkillProps {
  children: React.ReactNode
  className?: string
  heading?: string
}

const Skill: React.FC<SkillProps> = ({ children, className='', heading }) => (
  <li className={`${className}`}>
    {heading && <Heading level={4} className='text-left'>{heading}</Heading>}
    <p className='text-slate-600'>{children}</p>
  </li>
);

export default Skill;
