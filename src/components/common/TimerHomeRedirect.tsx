import React from 'react';
import { Typography } from '@mui/material';
import { useRedirectToHome } from 'hooks';

export const TimerHomeRedirect = () => {
  const { timer } = useRedirectToHome();
  return (
    <Typography maxWidth={600} sx={{ fontSize: '70%' }}>
      You will be redirected to the home page in {timer} seconds...
    </Typography>
  );
};
