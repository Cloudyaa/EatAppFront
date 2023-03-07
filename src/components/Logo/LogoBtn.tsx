import React from 'react';
import { Logo } from './Logo';
import { NavLink } from 'react-router-dom';

export const LogoBtn = () => {
  return (
    <NavLink to="/" className="logo__link">
      <Logo />
    </NavLink>
  );
};
