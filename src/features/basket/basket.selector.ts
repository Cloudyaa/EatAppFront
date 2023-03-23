import { createSelector } from '@reduxjs/toolkit';
import { RootState } from 'store';

const selectBasketState = (state: RootState) => state.basket;

export const selectProductQty = createSelector(
  [selectBasketState],
  (basket) => (productId: string) => {
    const product = basket.products.find((product) => product.productId === productId);
    return product ? product.qtyInBasket : 0;
  },
);
