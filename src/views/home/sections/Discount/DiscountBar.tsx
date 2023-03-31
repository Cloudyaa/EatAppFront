import React from 'react';
import { SectionWrapper } from 'components';
import { SectionId } from 'frontTypes';
import { DiscountWrapperStyled } from './styled';
import { DiscountBarImage } from './DiscountBarImage';
import { DiscountBarContent } from './DiscountBarContent';
import { DiscountBarButton } from './DiscountBarButton';

export const DiscountBar = () => {
  return (
    <SectionWrapper id={SectionId.discount} classes="home__discount" fullWidth>
      <DiscountWrapperStyled fullWidth>
        <DiscountBarImage />
        <DiscountBarContent />
        <DiscountBarButton />
      </DiscountWrapperStyled>
    </SectionWrapper>
  );
};
