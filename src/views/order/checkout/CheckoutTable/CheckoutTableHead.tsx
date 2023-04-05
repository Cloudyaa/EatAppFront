import React from 'react';
import { TableCell, TableHead } from '@mui/material';
import { HeadRowStyled } from 'components';

export const CheckoutTableHead = () => {
  const columnHeads = ['Name', 'Net price', 'Ordered qty', 'Total price'];
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
