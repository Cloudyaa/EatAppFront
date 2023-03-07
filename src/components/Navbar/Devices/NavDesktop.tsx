import React from 'react';
import { AppBar, Toolbar } from '@mui/material';
import { NavLinks, NavActions } from '../NavbarParts';
import { LogoBtn } from '../../Logo/LogoBtn';

export const NavDesktop = () => {
  return (
    <AppBar position="static" sx={{ background: 'none', boxShadow: 'none' }}>
      <Toolbar className="navbar" sx={{ display: 'grid' }}>
        <NavLinks />
        <LogoBtn />
        <NavActions />
      </Toolbar>
    </AppBar>
  );
};
