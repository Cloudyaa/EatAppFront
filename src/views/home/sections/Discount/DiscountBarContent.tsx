import React from 'react';
import { DiscountContentWrapperStyled, DiscountSubTextStyled } from './styled';
import { SectionHeader } from 'components';

export const DiscountBarContent = () => (
  <DiscountContentWrapperStyled>
    <SectionHeader color="light">Get 15% off</SectionHeader>
    <DiscountSubTextStyled>when order for the first time</DiscountSubTextStyled>
    <DiscountSubTextStyled small>discount will be applied automatically</DiscountSubTextStyled>
  </DiscountContentWrapperStyled>
);
