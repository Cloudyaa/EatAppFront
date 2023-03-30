import { styled } from '@mui/system';
import { TableCell, tableCellClasses } from '@mui/material';
import { colors } from 'styles';

export const TableCellStyled = styled(TableCell)(() => ({
  [`&.${tableCellClasses.body}`]: {
    fontSize: '65%',
    color: colors.primary.main,
  },
}));
