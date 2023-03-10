import React from 'react';
import { SectionHeader, SectionWrapper } from 'components';
import { SectionId } from 'frontTypes';

export const Bestsellers = () => {
  return (
    <SectionWrapper id={SectionId.bestsellers} classes="home__bestsellers">
      <SectionHeader>Our bestsellers</SectionHeader>
      <div className="auto-grid-container bestsellers__cards-container">
        <div className="bestsellers__card-wrapper"></div>
        <div className="bestsellers__card-wrapper"></div>
        <div className="bestsellers__card-wrapper"></div>
      </div>
    </SectionWrapper>
  );
};
