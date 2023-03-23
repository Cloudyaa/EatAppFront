import React from 'react';
import { Box } from '@mui/material';
import { useViewport } from 'hooks';

// add space after navbar
export const SpaceFix = () => {
  const { viewportWidth, breakpointDesktop } = useViewport();

  const height = viewportWidth > breakpointDesktop ? '4vh' : '8vh';

  return <Box sx={{ height: { height }, position: 'relative' }} />;
};
