import React from 'react';
import { TableCell, TableHead } from '@mui/material';
import { HeadRowStyled } from 'components';

export const UserOrdersTableHead = () => {
  const columnHeads = ['Order number', 'Order date', 'Ordered qty', 'Total price', 'Status'];
  return (
    <TableHead>
      <HeadRowStyled>
        {columnHeads.map((one: string, index: number) => (
          <TableCell component="th" scope="row" key={index}>
            {one}
          </TableCell>
        ))}
      </HeadRowStyled>
    </TableHead>
  );
};
