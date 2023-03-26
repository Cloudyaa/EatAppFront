import React from 'react';
import { Image } from 'components';
import { HeroMainImageStyled } from '../styles';

export const HeroImage = () => (
  <HeroMainImageStyled>
    <Image name={'hero-right'} alt={'vegetables image'} />
  </HeroMainImageStyled>
);
