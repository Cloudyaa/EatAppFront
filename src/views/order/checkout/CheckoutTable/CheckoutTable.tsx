import React from 'react';
import { Paper, Table, TableContainer } from '@mui/material';
import { CheckoutTableHead } from './CheckoutTableHead';
import { CheckoutTableBody } from './CheckoutTableBody';

export const CheckoutTable = () => (
  <TableContainer sx={{ maxWidth: 600 }} component={Paper}>
    <Table size="small" aria-label="order summary table">
      <CheckoutTableHead />
      <CheckoutTableBody />
    </Table>
  </TableContainer>
);
