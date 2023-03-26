import React from 'react';
import { SectionId } from 'frontTypes';
import { NavbarPartWrapper } from './NavbarPartWrapper';
import { offsetScroll } from 'utils';
import { HashLinkStyled } from '../../styled';

interface Props {
  handleShow?: () => void;
}

export const NavLinks = ({ handleShow }: Props) => {
  const navLinks = [
    {
      id: SectionId.home,
      linkText: 'Home',
    },
    {
      id: SectionId.about,
      linkText: 'About us',
    },
    {
      id: SectionId.contact,
      linkText: 'Contact',
    },
  ];

  return (
    <NavbarPartWrapper>
      {navLinks.map(({ linkText, id }) => (
        <HashLinkStyled
          to={`/#${id}`}
          key={id}
          onClick={handleShow}
          scroll={(el) => offsetScroll(el)}
        >
          {linkText}
        </HashLinkStyled>
      ))}
    </NavbarPartWrapper>
  );
};
