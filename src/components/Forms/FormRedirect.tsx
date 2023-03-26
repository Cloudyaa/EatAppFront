import React from 'react';
import { Box } from '@mui/material';
import { HashLinkStyled } from '../styled';

interface Props {
  to: 'login' | 'signup';
}

export const FormRedirect = ({ to }: Props) => {
  return (
    <Box
      sx={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        gap: '0.5rem',
        fontSize: '0.9rem',
        mt: 1,
      }}
    >
      {/* prettier-ignore */}
      <p>{to === 'login' ? 'Already have account?' : 'Don\'t have account?'}</p>
      <HashLinkStyled color={'light'} size={'inherit'} to={`/account/${to}`}>
        {to === 'login' ? 'Login now!' : 'Sign up now!'}
      </HashLinkStyled>
    </Box>
  );
};
