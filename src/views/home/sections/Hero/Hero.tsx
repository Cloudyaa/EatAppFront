import React from 'react';
import { Box } from '@mui/material';
import { HeroBottom, HeroDescription, HeroImage, HeroTitle } from './parts';
import { SectionId } from 'frontTypes';

export const Hero = () => (
  <header id={SectionId.home} className="home__hero">
    <Box className="container home__hero-container">
      <HeroTitle />
      <HeroDescription />
      <HeroBottom />
      <HeroImage />
    </Box>
  </header>
);
