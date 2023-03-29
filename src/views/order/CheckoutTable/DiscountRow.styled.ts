import { styled } from '@mui/system';
import { TableRow } from '@mui/material';
import { colors } from 'styles';

export const DiscountRowStyled = styled(TableRow)`
  > * {
    color: ${colors.dark.light} !important;
    font-size: 60% !important;
  }
`;
