import React from 'react';
import { HeaderStyled } from './Header.styled';

interface Props {
  children: React.ReactNode;
  color?: 'light';
}

export const SectionHeader = ({ children, color }: Props) => (
  <div className={'section-header__wrapper'}>
    <HeaderStyled color={color}>{children}</HeaderStyled>
  </div>
);
