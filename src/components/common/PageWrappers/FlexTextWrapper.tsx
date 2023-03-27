import React from 'react';
import { Box } from '@mui/material';

interface Props {
  children: React.ReactNode;
  addSx?: object;
}

export const FlexTextWrapper = ({ children, addSx }: Props) => (
  <Box
    sx={{
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      gap: '0.5rem',
      fontSize: '0.9rem',
      mt: 1,
      ...addSx,
    }}
  >
    {children}
  </Box>
);
