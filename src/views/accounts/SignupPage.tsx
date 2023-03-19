import React from 'react';
import { SectionHeader, SectionWrapper, SignupForm } from 'components';

export const SignupPage = () => {
  return (
    <SectionWrapper classes="accounts__signup">
      <SectionHeader>Welcome back!</SectionHeader>
      <SignupForm />
    </SectionWrapper>
  );
};
