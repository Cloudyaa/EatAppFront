import React from 'react';
import { TableCell } from '@mui/material';
import { MutedRowStyled, TableCellStyled } from './styles';
import { pricier } from 'utils';
import { useSelector } from 'react-redux';
import { RootState } from 'store';

export const SubtotalRow = () => {
  const basket = useSelector((state: RootState) => state.basket);

  return (
    <MutedRowStyled>
      <TableCell rowSpan={4} />
      <TableCellStyled colSpan={2}>Subtotal</TableCellStyled>
      <TableCellStyled align="right">{pricier.format(basket.totalValue)}</TableCellStyled>
    </MutedRowStyled>
  );
};
