import React from 'react';
import { TableRow } from '@mui/material';
import { TableCellStyled } from 'components';
import { capitalizeAndSplit, pricier } from 'utils';
import { useSelector } from 'react-redux';
import { RootState } from 'store';

export const ProductRows = () => {
  const basket = useSelector((state: RootState) => state.basket);
  return (
    <>
      {basket.products.map((one) => (
        <TableRow key={one.productId}>
          <TableCellStyled>{capitalizeAndSplit(one.name)}</TableCellStyled>
          <TableCellStyled align="right">{pricier.format(one.price)}</TableCellStyled>
          <TableCellStyled align="right">{one.qtyInBasket}</TableCellStyled>
          <TableCellStyled align="right">
            {pricier.format(one.qtyInBasket * one.price)}
          </TableCellStyled>
        </TableRow>
      ))}
    </>
  );
};
