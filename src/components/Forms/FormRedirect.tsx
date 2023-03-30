import React from 'react';
import { HashLinkStyled } from '../styled';
import { FlexTextWrapper } from '../common';

interface Props {
  to: 'login' | 'signup';
}

export const FormRedirect = ({ to }: Props) => {
  return (
    <FlexTextWrapper>
      {/* prettier-ignore */}
      <p>{to === 'login' ? 'Already have account?' : 'Don\'t have account?'}</p>
      <HashLinkStyled color={'light'} size={'inherit'} to={`/account/${to}`}>
        {to === 'login' ? 'Login now!' : 'Sign up now!'}
      </HashLinkStyled>
    </FlexTextWrapper>
  );
};
