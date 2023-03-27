import React from 'react';
import {ButtonLinkStyled, FormRedirect, SectionHeader, SectionWrapper, SubPageWrapper} from 'components';
import { Typography } from '@mui/material';

export const PleaseLogInView = () => {
  return (
    <SectionWrapper classes="error__please-login">
      <SectionHeader>Sorry!</SectionHeader>
      <SubPageWrapper>
        <h3>You need to log in to place an order in our shop. </h3>
        <Typography>
          It&apos;s a simple step that will ensure a seamless checkout experience.
          <br/>Don&apos;t worry if you don&apos;t have an account yet, creating one only takes a few moments.
          <br/>Join now and discover our great selection of products!
        </Typography>

        <ButtonLinkStyled to={'/account/signup'}>
         Sign up now!
        </ButtonLinkStyled>
        <FormRedirect to="login"></FormRedirect>
      </SubPageWrapper>
    </SectionWrapper>
  );
};
