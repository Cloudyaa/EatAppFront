import { ProductSkeleton } from 'components';
import React from 'react';

export const useProductSkeletons = (size: 'sm' | 'md', qty: number) => {
  const skeletons: JSX.Element[] = [];
  if (size === 'md') {
    for (let i = 0; i < qty; i++) {
      skeletons.push(<ProductSkeleton key={i} />);
    }
  }

  return { skeletons };
};
