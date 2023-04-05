import React from 'react';
import { TableCell } from '@mui/material';
import { pricier } from 'utils';
import { TotalRowStyled } from 'components';

interface Props {
  total: number;
}

export const TotalValueRow = ({ total }: Props) => {
  return (
    <TotalRowStyled>
      <TableCell colSpan={2}>Total</TableCell>
      <TableCell align="right">{pricier.format(total)}</TableCell>
    </TotalRowStyled>
  );
};
