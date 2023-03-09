import React from 'react';
import { Button, Image } from 'components';

export const HeroBottom = () => {
  return (
    <div className="home__hero-bottom">
      <Image name={'hero-left'} alt={'orange image'} addClass="home__hero-bottom-image-left" />
      <div className="home__hero-bottom-btn">
        <Button to={'/products/search'} color={'light'} size={'lg'}>
          See our products
        </Button>
      </div>
    </div>
  );
};
