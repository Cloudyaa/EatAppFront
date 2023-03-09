import React from 'react';
import { SectionId } from '../../types';
import { About, Bestsellers, Contact, DiscountBar, Footer, Hero } from './sections';

export const sectionList = [
  {
    id: SectionId.home,
    section: <Hero key={SectionId.home} />,
  },
  {
    id: SectionId.bestsellers,
    section: <Bestsellers key={SectionId.bestsellers} />,
  },
  {
    id: SectionId.about,
    section: <About key={SectionId.about} />,
  },
  {
    id: SectionId.discount,
    section: <DiscountBar key={SectionId.discount} />,
  },
  {
    id: SectionId.contact,
    section: <Contact key={SectionId.contact} />,
  },
  {
    id: SectionId.footer,
    section: <Footer key={SectionId.footer} />,
  },
];
