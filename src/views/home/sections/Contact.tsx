import React from 'react';
import { SectionHeader, SectionWrapper } from 'components';
import { SectionId } from 'frontTypes';

export const Contact = () => {
  return (
    <SectionWrapper id={SectionId.contact} classes="home__contact">
      <SectionHeader>Contact</SectionHeader>
    </SectionWrapper>
  );
};
