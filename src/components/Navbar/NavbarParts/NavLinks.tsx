import React from 'react';
import { HashLink } from 'react-router-hash-link';
import { SectionId } from '../../../types';
import { NavbarPartWrapper } from './NavbarPartWrapper';

export const NavLinks = () => {
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
      {navLinks.map(({ linkText, id }) => {
        return (
          <HashLink to={`#${id}`} key={id} className="navbar__links-item">
            {linkText}
          </HashLink>
        );
      })}
    </NavbarPartWrapper>
  );
};
