import React from 'react';
import { SectionHeader, SectionWrapper } from '../../../components';
import { SectionId } from '../../../types';

export const Bestsellers = () => {
  return (
    <SectionWrapper
      id={SectionId.bestsellers}
      classes="home__bestsellers"
    >
      <SectionHeader>Our bestsellers</SectionHeader>
      <ul>
        {/* {bestsellers.map((one) => ( */}
        {/*   <li key={one.productId}>{one.name}</li> */}
        {/* ))} */}
        <li className="txt-muted">test</li>
      </ul>
    </SectionWrapper>
  );
};
