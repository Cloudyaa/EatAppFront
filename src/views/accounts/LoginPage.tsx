import React from 'react';
import { SectionHeader, SectionWrapper } from 'components';
import { SectionId } from 'frontTypes';
import { LoginForm } from '../../components/Forms';

export const LoginPage = () => {

  return (
    <SectionWrapper id={SectionId.about} classes="accounts__login">
      <SectionHeader>Welcome back!</SectionHeader>
      <LoginForm />
    </SectionWrapper>
  );
};
