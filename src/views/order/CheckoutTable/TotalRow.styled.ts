import { styled } from '@mui/system';
import { TableRow } from '@mui/material';
import { colors } from 'styles';

export const TotalRowStyled = styled(TableRow)`
  > * {
    color: ${colors.primary.main};
    font-size: 100%;
    font-weight: 700;
  }
`;
