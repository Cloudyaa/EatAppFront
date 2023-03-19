import { SkeletonMedium } from 'components';
import React from 'react';

export const useSkeletons = (size: 'sm' | 'md') => {
  const skeletons: JSX.Element[] = [];
  if (size === 'md') {
    for (let i = 0; i < 3; i++) {
      skeletons.push(<SkeletonMedium />);
    }
  }

  return { skeletons };
};
