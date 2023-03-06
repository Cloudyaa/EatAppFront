import React from 'react';
import { SectionHeader, SectionWrapper } from '../../../components';
import { SectionId } from '../../../types';

export const Contact = () => {
  return (
    <SectionWrapper id={SectionId.contact} classes="home__contact">
      <SectionHeader>Contact</SectionHeader>
    </SectionWrapper>
  );
};
