import React from 'react';
import { Logo } from './Logo';
import { offsetScroll } from 'utils';
import { HashLinkStyled } from '../styled';

interface Props {
  handleShow?: () => void;
  isOpen?: boolean;
}

export const LogoBtn = ({ handleShow, isOpen }: Props) => {
  const closeMobileNav = () => isOpen && handleShow && handleShow();

  return (
    <HashLinkStyled
      to="/#"
      scroll={(el) => offsetScroll(el)}
      onClick={closeMobileNav}
    >
      <Logo />
    </HashLinkStyled>
  );
};
