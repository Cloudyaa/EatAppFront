import React from 'react';
import { Box } from '@mui/material';
import { FatFontStyled, SpaceFix } from 'components';
import { ContactAddress } from './ContactAddress';
import { ContactIcons } from './ContactIcons';

export const FindUsBox = () => {
  return (
    <Box sx={{ gridArea: 'findUs', paddingTop: '1.5rem' }}>
      <FatFontStyled light>Find us there</FatFontStyled>
      <ContactAddress />
      <SpaceFix />
      <ContactIcons />
    </Box>
  );
};
