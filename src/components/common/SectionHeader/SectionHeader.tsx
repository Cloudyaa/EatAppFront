import React from 'react';
import { HeaderStyled } from './Header.styled';

interface Props {
  children: React.ReactNode;
  classes?: string;
}

export const SectionHeader = ({ children, classes }: Props) => (
  <div className={`section-header__wrapper ${classes}`}>
    <HeaderStyled>{children}</HeaderStyled>
  </div>
);
