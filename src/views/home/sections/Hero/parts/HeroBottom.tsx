import React from 'react';
import { Image } from 'components';
import { ButtonLinkStyled } from '../../../../../styles/emotion-styled-components/Button/ButtonLink.styled';

export const HeroBottom = () => {
  return (
    <div className="home__hero-bottom">
      <Image name={'hero-left'} alt={'orange image'} addClass="home__hero-bottom-image-left" />
      <div className="home__hero-bottom-btn">
        <ButtonLinkStyled to={'/products/search'} color={'light'} size={'large'}>
          See our products
        </ButtonLinkStyled>
      </div>
    </div>
  );
};
