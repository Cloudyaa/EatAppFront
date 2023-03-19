import React from 'react';
import { ButtonLink, Image } from 'components';

export const HeroBottom = () => {
  return (
    <div className="home__hero-bottom">
      <Image name={'hero-left'} alt={'orange image'} addClass="home__hero-bottom-image-left" />
      <div className="home__hero-bottom-btn">
        <ButtonLink to={'/products/search'} color={'light'} size={'lg'}>
          See our products
        </ButtonLink>
      </div>
    </div>
  );
};
