import React from 'react';
import { Box } from '@mui/material';
import { Header } from '../../components/Header/Header';
import { Button } from '../../components/Button/Button';

export const Hero = () => (
  <header className="home__hero">
    <Box className="container home__hero-container">
      <Header addClass="home__hero-title">Because you must</Header>
      <p className="home__hero-title-side">eat.</p>
      <p className="home__hero-desc">
        Our mission is to deliver the best quality food to people. We believe that fresh fruits and
        vegetables are necessary to keep you alive. And happy. Nobody likes to be hungry.
      </p>
      <div className="home__hero-bottom">
        <img
          className="home__hero-bottom-image-left"
          src="/img/hero-left.png"
          alt="orange image"
        />
        <Button size="xl" color="accent-light">See our products</Button>
      </div>
      <div className="home__hero-image-right">
        <img
          src="/img/hero-right-400.png"
          srcSet="/img/hero-right-400.png 344w,
                  /img/hero-right-600.png 516w,
                  /img/hero-right-800.png 631w"
          alt="vegetables image"
          loading="lazy"
        />
      </div>
    </Box>
  </header>
);
