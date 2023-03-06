import React from 'react';
import { SectionHeader, SectionWrapper } from '../../../components';
import { SectionId } from '../../../types';

export const DiscountBar = () => {
  return (
    <SectionWrapper
      id={SectionId.discount}
      classes="home__discount"
    >
      <SectionHeader>Discount</SectionHeader>
    </SectionWrapper>
  );
};
