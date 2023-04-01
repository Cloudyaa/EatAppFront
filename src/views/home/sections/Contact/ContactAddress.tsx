import React from 'react';
import { FlexEvenlyWrapper } from 'components';
import { Box, Typography } from '@mui/material';

export const ContactAddress = () => (
  <FlexEvenlyWrapper>
    <Box sx={{ textAlign: 'left' }}>
      <Typography>81 Wern Ddu Lane</Typography>
      <Typography>Ludborough</Typography>
      <Typography>DN36 7UT</Typography>
      <Typography>United Kingdom</Typography>
    </Box>
    <Box sx={{ textAlign: 'right' }}>
      <Typography>contact@eat.com</Typography>
      <Typography>077 3483 7229</Typography>
    </Box>
  </FlexEvenlyWrapper>
);

