import React from 'react';
import { HeroHeaderStyled, HeroHeaderWrapperStyled } from '../styles';

interface Props {
  children: React.ReactNode;
}

export const HeroHeader = ({ children }: Props) => (
  <HeroHeaderWrapperStyled>
    <HeroHeaderStyled>{children}</HeroHeaderStyled>
  </HeroHeaderWrapperStyled>
);
