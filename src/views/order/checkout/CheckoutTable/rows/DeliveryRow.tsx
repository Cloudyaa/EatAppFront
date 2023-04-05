import React from 'react';
import { MutedRowStyled, TableCellStyled } from 'components';
import { pricier } from 'utils';

interface Props {
  charge: number;
}

export const DeliveryRow = ({ charge }: Props) => {
  return (
    <MutedRowStyled>
      <TableCellStyled colSpan={2}>Delivery</TableCellStyled>
      <TableCellStyled align="right">{pricier.format(charge)}</TableCellStyled>
    </MutedRowStyled>
  );
};
