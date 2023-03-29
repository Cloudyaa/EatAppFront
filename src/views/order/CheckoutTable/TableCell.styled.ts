import { styled } from '@mui/system';
import { TableCell, tableCellClasses } from '@mui/material';
import { colors } from 'styles';

export const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: theme.palette.primary.main,
    color: colors.light.main,
    textAlign: 'center',
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
  },
}));
