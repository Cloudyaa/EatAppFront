import React from 'react';
import { AppBar, Toolbar } from '@mui/material';

interface Props {
  children: React.ReactNode;
  position: 'fixed' | 'static';
}

export const MobileToolbar = ({ children, position }: Props) => {
  return (
    <AppBar position={position}>
      <Toolbar
        sx={{
          display: 'flex',
          justifyContent: 'space-between',
          background: 'var(--nav-background)',
        }}
      >
        {children}
      </Toolbar>
    </AppBar>
  );
};
