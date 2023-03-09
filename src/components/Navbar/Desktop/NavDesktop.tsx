import React from 'react';
import { NavLinks, NavActions } from '../NavbarParts';
import { LogoBtn, DesktopToolbar } from 'components';

export const NavDesktop = () => {
  return (
    <DesktopToolbar>
      <NavLinks />
      <LogoBtn />
      <NavActions />
    </DesktopToolbar>
  );
};
