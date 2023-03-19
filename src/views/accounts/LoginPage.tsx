import React from 'react';
import { SectionHeader, SectionWrapper, LoginForm } from 'components';
import { SectionId } from 'frontTypes';

export const LoginPage = () => {
  return (
    <SectionWrapper id={SectionId.about} classes="accounts__login">
      <SectionHeader>Welcome back!</SectionHeader>
      <LoginForm />
    </SectionWrapper>
  );
};
