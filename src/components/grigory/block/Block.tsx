import React from 'react';
import BlockSeparator from '../block/BlockSeparator';

interface BlockProps {
  children: React.ReactNode;
  className?: string;
}

const Block: React.FC<BlockProps> = ({ children, className }) => (
  <section className={className}>
    {children}
    <BlockSeparator />
  </section>
);

export default Block;
