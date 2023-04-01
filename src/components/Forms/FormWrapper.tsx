import React from 'react';
import { Box } from '@mui/material';

interface Props {
  children: React.ReactNode;
  addSx?: object;
}

export const FormWrapper = ({ children, addSx }: Props) => {
  return (
    <Box className="form-wrapper" sx={{ maxWidth: '35ch', marginInline: 'auto', ...addSx }}>
      {children}
    </Box>
  );
};
