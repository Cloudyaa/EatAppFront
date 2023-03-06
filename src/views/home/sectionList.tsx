import React from 'react';
import { SectionId } from '../../types';
import { About, Bestsellers, Contact, DiscountBar, Footer, Hero } from './sections';

export const sectionList = [
  {
    id: SectionId.home,
    section: <Hero />,
  },
  {
    id: SectionId.bestsellers,
    section: <Bestsellers />,
  },
  {
    id: SectionId.about,
    section: <About />,
  },
  {
    id: SectionId.discount,
    section: <DiscountBar />,
  },
  {
    id: SectionId.contact,
    section: <Contact />,
  },
  {
    id: SectionId.footer,
    section: <Footer />,
  },
];
