import React from 'react';
import { Logo, SectionHeader } from 'components';

export const HeroTitle = () => (
  <>
    <SectionHeader classes="home__hero-title">Because you must</SectionHeader>
    <div className="home__hero-title-side">
      <Logo size="lg" />
    </div>
  </>
);
