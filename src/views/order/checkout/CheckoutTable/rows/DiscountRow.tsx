import React from 'react';
import { MutedRowStyled, TableCellStyled } from './styles';
import { pricier } from 'utils';

interface Props {
  discount: number;
}

export const DiscountRow = ({ discount }: Props) => {
  return (
    <>
      {discount !== 0 && (
        <MutedRowStyled>
          <TableCellStyled colSpan={2}>First order discount</TableCellStyled>
          <TableCellStyled align="right">- {pricier.format(discount)}</TableCellStyled>
        </MutedRowStyled>
      )}
    </>
  );
};
