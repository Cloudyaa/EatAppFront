import React from 'react';
import { Logo } from 'components';
import { HeroHeader } from './HeroHeader';
import { HeroSideLogoStyled } from '../styles';

export const HeroTitle = () => (
  <>
    <HeroHeader>Because you must</HeroHeader>
    <HeroSideLogoStyled>
      <Logo size="large" />
    </HeroSideLogoStyled>
  </>
);
