import React from 'react';
import { Image } from 'components';
import { ButtonLinkStyled, ButtonWrapperStyled } from 'styles';

export const HeroBottom = () => {
  return (
    <div className="home__hero-bottom">
      <Image name={'hero-left'} alt={'orange image'} addClass="home__hero-bottom-image-left" />
      <ButtonWrapperStyled>
        <ButtonLinkStyled to="/products/search" color="light" size="large">
          See our products
        </ButtonLinkStyled>
      </ButtonWrapperStyled>
    </div>
  );
};
