import React from 'react';
import BlockSeparator from '../block/BlockSeparator';

interface BlockProps {
  children: React.ReactNode;
  className?: string;
  separatorVariant?: 0 | 1 | 2;
  id?: string;
}

const Block: React.FC<BlockProps> = ({ children, className, separatorVariant, id }) => (
  <div className={`relative ${separatorVariant === undefined ? '' : 'pb-[8vw] 2xl:pb-30'}`}>
    <section className={`px-4 sm:px-10 container mx-auto ${className}`} id={id}>
      {children}
    </section>
    {separatorVariant !== undefined && <BlockSeparator variant={separatorVariant} />}
  </div>
);

export default Block;
