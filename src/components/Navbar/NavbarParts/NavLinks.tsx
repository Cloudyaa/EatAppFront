import React from 'react';
import { HashLink } from 'react-router-hash-link';
import { SectionId } from 'frontTypes';
import { NavbarPartWrapper } from './NavbarPartWrapper';
import { offsetScroll } from '../../../utilis/offsetScroll';

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
        <HashLink
          to={`/#${id}`}
          key={id}
          className="navbar__links-item"
          onClick={handleShow}
          scroll={(el) => offsetScroll(el)}
        >
          {linkText}
        </HashLink>
      ))}
    </NavbarPartWrapper>
  );
};
