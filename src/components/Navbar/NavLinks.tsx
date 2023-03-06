import React from 'react';
import { NavLink } from 'react-router-dom';
import { Box } from '@mui/material';
import { SectionId } from '../../types';

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
    <Box className="navbar__links-wrapper">
      {navLinks.map(({ linkText, id }) => {
        return (
          <NavLink
            to={`#${id}`}
            key={id}
            className="navbar__links-item"
          >
            {linkText}
          </NavLink>
        );
      })}
    </Box>
  );
};
