import React from 'react';
import { Box } from '@mui/material';

interface Props {
  children: React.ReactNode;
}

export const SubPageWrapper = ({ children }: Props) => (
  <Box
    sx={{
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
      gap: '1rem',
    }}
  >
    {children}
  </Box>
);
