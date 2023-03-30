import React from 'react';
import { TableBody } from '@mui/material';
import { useDiscount } from 'hooks';
import { DiscountRow, ProductRows, SubtotalRow, TotalValueRow } from './rows';

export const CheckoutTableBody = () => {
  const { discount, totalAtCheckout } = useDiscount();

  return (
    <TableBody>
      <ProductRows />
      <SubtotalRow />
      <DiscountRow discount={discount} />
      <TotalValueRow total={totalAtCheckout} />
    </TableBody>
  );
};
