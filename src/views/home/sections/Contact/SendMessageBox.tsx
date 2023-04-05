import React from 'react';
import { Box } from '@mui/material';
import { FatFontStyled } from 'components';
import { ContactInfoTextStyled } from './styled';

export const SendMessageBox = () => (
  <Box sx={{ gridArea: 'sendMessage' }}>
    <FatFontStyled color="light">Send us a message</FatFontStyled>
    <ContactInfoTextStyled>
      We are committed to providing high-quality products and service to our customers. When
      something goes wrong, we need you to tell us about it. This will help us to maintain the
      highest quality products and best working practices. We will reply ASAP.
    </ContactInfoTextStyled>
  </Box>
);
