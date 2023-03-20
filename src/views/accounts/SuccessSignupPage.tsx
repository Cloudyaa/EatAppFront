import React from 'react';
import { ButtonLink, SectionHeader, SectionWrapper, SpaceFix, SubPageWrapper } from 'components';
import { useViewport } from 'hooks';

export const SuccessSignupPage = () => {
  const { viewportWidth, breakpoint } = useViewport();

  return (
    <SectionWrapper>
      <SectionHeader>Success!</SectionHeader>
      <SubPageWrapper addSx={{ marginBlock: 5 }}>
        <h3>Your account has been created successfully</h3>
        {viewportWidth > breakpoint ? <SpaceFix /> : null}
        <p>You can now log into your account</p>
        <ButtonLink to={'/account/login'} size="sm" color="light">
          Go to login page
        </ButtonLink>
      </SubPageWrapper>
    </SectionWrapper>
  );
};
