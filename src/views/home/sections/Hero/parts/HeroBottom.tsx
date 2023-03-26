import React from 'react';
import { ButtonLinkStyled, Image } from 'components';
import { ButtonWrapperStyled, HeroBottomWrapperStyled } from '../styles';

export const HeroBottom = () => {
  return (
    <HeroBottomWrapperStyled>
      <Image name={'hero-left'} alt={'orange image'} addClass="hero-image-left" />
      <ButtonWrapperStyled>
        <ButtonLinkStyled to="/products/search" color="light" size="large">
          See our products
        </ButtonLinkStyled>
      </ButtonWrapperStyled>
    </HeroBottomWrapperStyled>
  );
};
