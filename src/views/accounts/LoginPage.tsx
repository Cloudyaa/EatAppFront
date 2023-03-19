import React from 'react';
import { SectionHeader, SectionWrapper, LoginForm } from 'components';

export const LoginPage = () => {
  return (
    <SectionWrapper classes="accounts__login">
      <SectionHeader>Welcome back!</SectionHeader>
      <LoginForm />
    </SectionWrapper>
  );
};
