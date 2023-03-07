import React from 'react';
import { NavDesktop } from './Devices/NavDesktop';
import { NavMobile } from './Devices/NavMobile';
import { useViewport } from '../../hooks';

export const Navbar = () => {
  const { viewportWidth } = useViewport();
  const breakpoint = 800;

  return viewportWidth > breakpoint ? <NavDesktop /> : <NavMobile />;
};
