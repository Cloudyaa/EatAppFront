import React from 'react';
import { Box } from '@mui/material';
import { useViewport } from '../../hooks';

// add space after navbar
export const SpaceFix = () => {
  const { viewportWidth, breakpoint } = useViewport();

  const height = viewportWidth > breakpoint ? '4vh' : '8vh';

  return <Box sx={{ height: { height }, position: 'relative' }} />;
};
