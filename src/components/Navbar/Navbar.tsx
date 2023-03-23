import React from 'react';
import { useViewport } from 'hooks';
import { NavDesktop, NavMobile } from 'components';

export const Navbar = () => {
  const { viewportWidth, breakpointDesktop } = useViewport();
  return viewportWidth > breakpointDesktop ? <NavDesktop /> : <NavMobile />;
};
