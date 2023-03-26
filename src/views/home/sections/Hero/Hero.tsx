import React from 'react';
import { HeroBottom, HeroDescription, HeroImage, HeroTitle } from './parts';
import { SectionId } from 'frontTypes';
import {HeroContainerStyled} from "styles";

export const Hero = () => (
  <main id={SectionId.home} className="hero">
    <HeroContainerStyled>
      <HeroTitle />
      <HeroDescription />
      <HeroBottom />
      <HeroImage />
    </HeroContainerStyled>
  </main>
);
