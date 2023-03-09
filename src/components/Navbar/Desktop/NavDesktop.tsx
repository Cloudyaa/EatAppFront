import React from 'react';
import { NavLinks, NavActions } from '../NavbarParts';
import { LogoBtn } from '../../Logo/LogoBtn';
import { DesktopToolbar } from './DesktopToolbar';

export const NavDesktop = () => {
  return (
    <DesktopToolbar>
      <NavLinks />
      <LogoBtn />
      <NavActions />
    </DesktopToolbar>
  );
};
