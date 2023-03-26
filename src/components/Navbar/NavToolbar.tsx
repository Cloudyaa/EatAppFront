import React, { useEffect, useState } from 'react';
import { AppBar } from '@mui/material';
import { ToolbarStyled } from './Toolbar.styled';
import {colors} from 'styles';

interface Props {
  children: React.ReactNode;
  position: 'fixed' | 'static';
  shadow?: boolean | undefined;
}

interface AppBar {
  background: string;
  boxShadow?: 'none' | undefined;
}

export const NavToolbar = ({ children, position, shadow }: Props) => {
  const [appBarProps, setAppBarProps] = useState<AppBar>({
    background: colors.light.main,
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
      <ToolbarStyled>{children}</ToolbarStyled>
    </AppBar>
  );
};
