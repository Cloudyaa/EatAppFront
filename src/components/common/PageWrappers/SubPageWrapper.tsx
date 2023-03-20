import React from 'react';
import { Box } from '@mui/material';

interface Props {
  children: React.ReactNode;
  addSx?: object;
}

export const SubPageWrapper = ({ children, addSx }: Props) => (
  <Box
    sx={{
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
      textAlign: 'center',
      gap: '1rem',
      paddingBottom: '2rem',
      ...addSx,
    }}
  >
    {children}
  </Box>
);
