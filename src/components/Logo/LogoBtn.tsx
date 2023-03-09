import React from 'react';
import { Logo } from './Logo';
import { offsetScroll } from '../../utilis/offsetScroll';
import { NavHashLink } from 'react-router-hash-link';

interface Props {
  handleShow?: () => void;
  isOpen?: boolean;
}

export const LogoBtn = ({ handleShow, isOpen }: Props) => {
  const closeMobileNav = () => isOpen && handleShow && handleShow();

  return (
    <NavHashLink
      to="/#"
      className="logo__link"
      scroll={(el) => offsetScroll(el)}
      onClick={closeMobileNav}
    >
      <Logo />
    </NavHashLink>
  );
};
