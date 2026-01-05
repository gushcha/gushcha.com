import React from 'react';
import BlockSeparator from '../block/BlockSeparator';

interface BlockProps {
  children: React.ReactNode;
  className?: string;
  hideSeparator?: boolean;
}

const Block: React.FC<BlockProps> = ({ children, className, hideSeparator }) => (
  <div className={`relative ${hideSeparator ? '' : 'pb-[8vw] 2xl:pb-30'}`}>
    <section className={`px-4 sm:px-10 container mx-auto ${className}`}>
      {children}
    </section>
    {!hideSeparator && <BlockSeparator />}
  </div>
);

export default Block;
