import React from 'react';
import { ButtonLink, SectionHeader, SectionWrapper, SubPageWrapper } from 'components';

export const SuccessSignupPage = () => {
  return (
    <SectionWrapper>
      <SectionHeader>Success!</SectionHeader>
      <SubPageWrapper>
        <h3>Your account has been created successfully</h3>
        <p>You can now log into your account</p>
        <ButtonLink to={'/account/login'} size="sm" color="light">
          Go to login page
        </ButtonLink>
      </SubPageWrapper>
    </SectionWrapper>
  );
};
