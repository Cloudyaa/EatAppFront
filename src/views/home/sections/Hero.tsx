import React from 'react';
import { Box } from '@mui/material';
import { SectionHeader, Button, Image } from '../../../components';
import { SectionId } from '../../../types';
import { Logo } from '../../../components/Logo/Logo';

export const Hero = () => (
  <header id={SectionId.home} className="home__hero">
    <Box className="container home__hero-container">
      <SectionHeader classes="home__hero-title">Because you must</SectionHeader>
      <div className="home__hero-title-side">
        <Logo size="lg" />
      </div>
      <div className="home__hero-desc">
        <p>
          Our mission is to deliver the best quality food to people. We believe that fresh fruits
          and vegetables are necessary to keep you alive. And happy. Nobody likes to be hungry.
        </p>
      </div>
      <div className="home__hero-bottom">
        <Image name={'hero-left'} alt={'orange image'} addClass="home__hero-bottom-image-left" />
        <div className="home__hero-bottom-btn">
          <Button to={'/products/search'} color={'light'} size={'lg'}>
            See our products
          </Button>
        </div>
      </div>
      <div className="home__hero-image-right">
        <Image name={'hero-right'} alt={'vegetables image'} />
      </div>
    </Box>
  </header>
);
