import React from 'react';
import { useCookies } from 'react-cookie';
import { useNavigate } from 'react-router-dom';
import { ButtonFull } from 'components';
import { Box } from '@mui/material';

export const LogOutBtn = () => {
  const [, , removeCookie] = useCookies();
  const navigate = useNavigate();

  const handleLogout = () => {
    removeCookie('token', { path: '/' });
    navigate('/');
  };
  return (
    <Box sx={{ maxWidth: '40ch' }}>
      <ButtonFull onClick={handleLogout}>Log out</ButtonFull>
    </Box>
  );
};
