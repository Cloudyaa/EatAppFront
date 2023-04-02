import React from 'react';
import { Box } from '@mui/material';
import { pricier } from 'utils';
import { useSelector } from 'react-redux';
import { RootState } from 'store';

export const BasketTotalPrice = () => {
  const basket = useSelector((state: RootState) => state.basket);
  return (
    <Box sx={{ width: '100%', display: 'flex', justifyContent: 'space-around', marginBlock: 5 }}>
      <h3>Total price</h3>
      <h3>{pricier.format(basket.totalValue)}</h3>
    </Box>
  );
};
