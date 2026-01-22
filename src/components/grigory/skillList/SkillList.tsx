import React, { ReactElement } from 'react';
import Skill from '@/components/grigory/skillList/Skill';

type SkillElement = ReactElement<typeof Skill>;

interface SkillListProps {
  children: SkillElement | SkillElement[];
  className?: string;
}

const SkillList: React.FC<SkillListProps> = ({ children, className = '' }) => (
  <ul className={`space-y-5 ${className}`}>
    {children}
  </ul>
);

export default SkillList;
