import React from 'react';
import { Alert } from '@mui/material';

interface Props {
  children: React.ReactNode;
}

export const ErrorMessage = ({ children }: Props) => (
  <Alert
    variant="outlined"
    severity="error"
    sx={{
      maxWidth: 'inherit',
      alignSelf: 'start',
      fontSize: '60%',
      fontFamily: 'var(--main-text-font)',
    }}
  >
    <span className="txt-bolder">Error! </span>
    {children}
  </Alert>
);
