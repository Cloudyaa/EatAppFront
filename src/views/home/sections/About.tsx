import React from 'react';
import { SectionHeader, SectionWrapper } from '../../../components';
import { SectionId } from '../../../types';

export const About = () => {
  return (
    <SectionWrapper
      id={SectionId.about}
      classes="home__about-us"
    >
      <SectionHeader>About us</SectionHeader>
    </SectionWrapper>
  );
};
