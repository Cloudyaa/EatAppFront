import React from 'react';
import { TableBody, TableRow } from '@mui/material';
import { OrderEntity } from 'types';
import { pricier, makeOrderNumber } from 'utils';
import { TableCellStyled } from 'components';
import moment from 'moment';

interface Props {
  orders: OrderEntity[] | null;
}

export const UserOrdersTableBody = ({ orders }: Props) => {
  return (
    <TableBody>
      {orders &&
        orders.map((one) => (
          <TableRow key={one.orderId}>
            <TableCellStyled>{makeOrderNumber(one.orderNo)}</TableCellStyled>
            <TableCellStyled align="right">
              {moment.utc(one.createdAt).format('DD-MM-YYYY')}
            </TableCellStyled>
            <TableCellStyled align="right">{one.totalQty}</TableCellStyled>
            <TableCellStyled align="right">{pricier.format(one.totalValue)}</TableCellStyled>
            <TableCellStyled align="right">{one.status}</TableCellStyled>
          </TableRow>
        ))}
    </TableBody>
  );
};
