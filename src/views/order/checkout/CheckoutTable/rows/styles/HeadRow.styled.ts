import { styled } from '@mui/system';
import { TableRow } from '@mui/material';
import { colors } from 'styles';

export const HeadRowStyled = styled(TableRow)`
  > * {
    background-color: ${colors.primary.main};
    color: ${colors.light.main} !important;
    text-align: right;

    &:first-child {
      text-align: left;
    }
`;
