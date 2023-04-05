import React, { useEffect, useState } from 'react';
import { TableBody } from '@mui/material';
import { useDiscount } from 'hooks';
import { DeliveryRow, DiscountRow, ProductRows, SubtotalRow, TotalValueRow } from './rows';

export const CheckoutTableBody = () => {
  const { discount, totalAtCheckout } = useDiscount();
  const [deliveryCharge, setDeliveryCharge] = useState<number>(5.99);

  useEffect(() => {
    setDeliveryCharge(totalAtCheckout > 50 ? 0 : 5.99);
  }, []);

  return (
    <TableBody>
      <ProductRows />
      <SubtotalRow />
      <DeliveryRow charge={deliveryCharge} />
      <DiscountRow discount={discount} />
      <TotalValueRow total={totalAtCheckout + deliveryCharge} />
    </TableBody>
  );
};
