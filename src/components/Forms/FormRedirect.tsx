import React from 'react';
import { FlexLink } from '../common';

interface Props {
  to: 'login' | 'signup';
}

export const FormRedirect = ({ to }: Props) => {
  return (
    <>
      {/* prettier-ignore */}
      <FlexLink
          text={to === 'login' ? 'Already have account?' : 'Don\'t have account?'}
          to={`/account/${to}`}
        >
          {to === 'login' ? 'Login now!' : 'Sign up now!'}
        </FlexLink>
    </>
  );
};
