import React from 'react';
import { ButtonLink, SectionHeader, SectionWrapper, SubPageWrapper } from 'components';
import { SectionId } from 'frontTypes';
import { BestsellersProductsContainer } from './BestsellersProductsContainer';

export const Bestsellers = () => {
  return (
    <SectionWrapper id={SectionId.bestsellers} classes="home__bestsellers">
      <SectionHeader>Our bestsellers</SectionHeader>
      <BestsellersProductsContainer />
      <SubPageWrapper addSx={{ height: '8rem' }}>
        <ButtonLink color="dark" size="xl" to="/products/search">
          Shop all
        </ButtonLink>
      </SubPageWrapper>
    </SectionWrapper>
  );
};
