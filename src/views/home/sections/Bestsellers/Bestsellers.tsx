import React from 'react';
import { SectionHeader, SectionWrapper, SubPageWrapper } from 'components';
import { SectionId } from 'frontTypes';
import { BestsellersProductsContainer } from './BestsellersProductsContainer';
import {ButtonLinkStyled} from "styles";

export const Bestsellers = () => {
  return (
    <SectionWrapper id={SectionId.bestsellers} classes="home__bestsellers">
      <SectionHeader>Our bestsellers</SectionHeader>
      <BestsellersProductsContainer />
      <SubPageWrapper addSx={{ height: '8rem' }}>
        <ButtonLinkStyled color="dark" size="large" to="/products/search">
          Shop all
        </ButtonLinkStyled>
      </SubPageWrapper>
    </SectionWrapper>
  );
};
