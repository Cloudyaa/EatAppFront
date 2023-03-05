import React from 'react';
import { Box } from '@mui/material';
import { Header } from '../../components/Header/Header';
import { Button } from '../../components/Button/Button';
import { Image } from '../../components/Image/Image';

export const Hero = () => (
  <header className="home__hero">
    <Box className="container home__hero-container">
      <div className="home__hero-title">
        <Header>Because you must</Header>
      </div>
      <div className="home__hero-title-side">
        <p>eat.</p>
      </div>
      <div className="home__hero-desc">
        <p>
          Our mission is to deliver the best quality food to people. We believe that fresh fruits
          and vegetables are necessary to keep you alive. And happy. Nobody likes to be hungry.
        </p>
      </div>
      <div className="home__hero-bottom">
        <Image
          name={'hero-left'}
          alt={'orange image'}
          addClass="home__hero-bottom-image-left"
        />
        <div className="home__hero-bottom-btn">
          <Button
            color={'light'}
            size={'lg'}
          >
            See our products
          </Button>
        </div>
      </div>
      <div className="home__hero-image-right">
        <Image
          name={'hero-right'}
          alt={'vegetables image'}
        />
      </div>
    </Box>
  </header>
);
