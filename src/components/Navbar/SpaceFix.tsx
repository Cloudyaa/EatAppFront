import React from 'react';
import { useViewport } from '../../hooks';
import { Toolbar } from '@mui/material';

export const SpaceFix = () => {
  const { viewportWidth } = useViewport();
  const breakpoint = 800;

  return viewportWidth > breakpoint ? null : <Toolbar />;
};
