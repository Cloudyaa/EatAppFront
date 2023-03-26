import React from 'react';
import { Logo } from 'components';
import { HeroSideLogoStyled } from 'styles';
import {HeroHeader} from "./HeroHeader";

export const HeroTitle = () => (
  <>
    <HeroHeader>Because you must</HeroHeader>
    <HeroSideLogoStyled>
      <Logo size="large" />
    </HeroSideLogoStyled>
  </>
);
