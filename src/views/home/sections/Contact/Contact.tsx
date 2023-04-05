import React from 'react';
import {
  MoveSectionUp,
  SectionHeader,
  SectionWrapper,
  SubPageWrapper,
  ContactForm,
} from 'components';
import { SectionId } from 'frontTypes';
import { ContactWrapperStyled } from './styled';
import { ContactContent } from './ContactContent';

export const Contact = () => {
  return (
    <MoveSectionUp>
      <SectionWrapper id={SectionId.contact} classes="home__contact">
        <SectionHeader>Contact</SectionHeader>
        <SubPageWrapper>
          <ContactWrapperStyled>
            <ContactContent />
            <ContactForm />
          </ContactWrapperStyled>
        </SubPageWrapper>
      </SectionWrapper>
    </MoveSectionUp>
  );
};
