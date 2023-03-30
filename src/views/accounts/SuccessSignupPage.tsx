import React from 'react';
import {
  ButtonLinkStyled,
  SectionHeader,
  SectionWrapper,
  SpaceFix,
  SubPageWrapper,
  TimerHomeRedirect,
} from 'components';
import { useViewport } from 'hooks';

export const SuccessSignupPage = () => {
  const { viewportWidth, breakpointDesktop } = useViewport();

  return (
    <SectionWrapper>
      <SectionHeader>Success!</SectionHeader>
      <SubPageWrapper addSx={{ marginBlock: 5 }}>
        <h3>Your account has been created successfully</h3>
        {viewportWidth > breakpointDesktop ? <SpaceFix /> : null}
        <p>You can now log into your account</p>
        <ButtonLinkStyled to={'/account/login'} color="light">
          Go to login page
        </ButtonLinkStyled>
        <TimerHomeRedirect />
      </SubPageWrapper>
    </SectionWrapper>
  );
};
