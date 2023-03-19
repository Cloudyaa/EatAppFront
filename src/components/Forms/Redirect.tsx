import React from 'react';
import { NavLink } from 'react-router-dom';
import { Box } from '@mui/material';

interface Props {
  to: 'login' | 'signup';
}

export const Redirect = ({ to }: Props) => {
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
      <NavLink className="link-light" to={`/account/${to}`}>
        {to === 'login' ? 'Login now!' : 'Sign up now!'}
      </NavLink>
    </Box>
  );
};
