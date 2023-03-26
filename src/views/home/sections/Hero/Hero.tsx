import React from 'react';
import { HeroBottom, HeroDescription, HeroImage, HeroTitle } from './parts';
import { SectionId } from 'frontTypes';
import {HeroContainerStyled} from "styles";

export const Hero = () => (
  <header id={SectionId.home} className="home__hero">
    <HeroContainerStyled>
      <HeroTitle />
      <HeroDescription />
      <HeroBottom />
      <HeroImage />
    </HeroContainerStyled>
  </header>
);
