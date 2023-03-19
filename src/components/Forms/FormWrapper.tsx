import React from 'react';
import { Box } from '@mui/material';

interface Props {
  children: React.ReactNode;
}

export const FormWrapper = ({ children }: Props) => {
  return (
    <Box className="form-wrapper" sx={{ maxWidth: '35ch', marginInline: 'auto' }}>
      {children}
    </Box>
  );
};
