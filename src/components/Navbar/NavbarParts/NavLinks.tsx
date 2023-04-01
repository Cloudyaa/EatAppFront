import React from 'react';
import { SectionId } from 'frontTypes';
import { offsetScroll } from 'utils';
import { HashLinkStyled } from 'components';
import { NavPartWrapperStyled } from './NavPartWrapper.styled';

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
    <NavPartWrapperStyled>
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
    </NavPartWrapperStyled>
  );
};
