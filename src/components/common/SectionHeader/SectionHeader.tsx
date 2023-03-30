import React from 'react';
import { HeaderStyled } from './Header.styled';

interface Props {
  children: React.ReactNode;
}

export const SectionHeader = ({ children }: Props) => (
  <div className={'section-header__wrapper'}>
    <HeaderStyled>{children}</HeaderStyled>
  </div>
);
