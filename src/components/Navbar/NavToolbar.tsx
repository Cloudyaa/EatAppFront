import React, { useEffect, useState } from 'react';
import { AppBar, Toolbar } from '@mui/material';

interface Props {
  children: React.ReactNode;
  position: 'fixed' | 'static';
  shadow?: boolean | undefined;
}

interface AppBar {
  background: 'var(--main-background)';
  boxShadow?: 'none' | undefined;
}

export const NavToolbar = ({ children, position, shadow }: Props) => {
  const [appBarProps, setAppBarProps] = useState<AppBar>({
    background: 'var(--main-background)',
  });

  useEffect(() => {
    shadow === undefined &&
      setAppBarProps({
        ...appBarProps,
        boxShadow: 'none',
      });
  }, [shadow]);

  return (
    <AppBar position={position} sx={appBarProps}>
      <Toolbar className="navbar">{children}</Toolbar>
    </AppBar>
  );
};
