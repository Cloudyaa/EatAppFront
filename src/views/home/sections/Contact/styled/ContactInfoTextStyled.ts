import styled from '@emotion/styled';
import { Typography } from '@mui/material';

export const ContactInfoTextStyled = styled(Typography)`
  max-width: 400px;
  margin: auto;

  @media (max-width: 900px) {
    max-width: 600px;
  }
`;
