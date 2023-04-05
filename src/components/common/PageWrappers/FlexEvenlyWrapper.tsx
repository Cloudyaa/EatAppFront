import React from 'react';
import { Box } from '@mui/material';

interface Props {
  children: React.ReactNode;
  addSx?: object;
}

export const FlexEvenlyWrapper = ({ children, addSx }: Props) => (
  <Box
    sx={{
      display: 'flex',
      justifyContent: 'space-evenly',
      ...addSx,
    }}
  >
    {children}
  </Box>
);
