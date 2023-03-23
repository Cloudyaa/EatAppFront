import { SkeletonMedium } from 'components';
import React from 'react';

export const useSkeletons = (size: 'sm' | 'md', qty: number) => {
  const skeletons: JSX.Element[] = [];
  if (size === 'md') {
    for (let i = 0; i < qty; i++) {
      skeletons.push(<SkeletonMedium key={i} />);
    }
  }

  return { skeletons };
};
