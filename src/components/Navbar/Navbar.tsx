import React from 'react';
import { useViewport } from 'hooks';
import { NavDesktop, NavMobile } from 'components';

export const Navbar = () => {
  const { viewportWidth, breakpoint } = useViewport();
  return viewportWidth > breakpoint ? <NavDesktop /> : <NavMobile />;
};
