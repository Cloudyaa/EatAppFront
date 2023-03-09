import React from 'react';
import { useViewport } from '../../hooks';
import { NavDesktop } from './Desktop';
import { NavMobile } from './Mobile';

export const Navbar = () => {
  const { viewportWidth, breakpoint } = useViewport();
  return viewportWidth > breakpoint ? <NavDesktop /> : <NavMobile />;
};
