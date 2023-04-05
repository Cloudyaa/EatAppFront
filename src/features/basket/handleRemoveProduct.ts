import { BasketProductEntity, BasketState } from './basket.slice';
import { Draft } from '@reduxjs/toolkit';

export const handleRemoveProduct = (
  state: Draft<BasketState>,
  productId: string,
  qtyToRemove: number,
) => {
  const productIndex = state.products.findIndex(
    (product: BasketProductEntity) => product.productId === productId,
  );
  if (productIndex !== -1) {
    const productPrice = state.products[productIndex].price;
    const productQty = state.products[productIndex].qtyInBasket;

    // Update total
    state.totalQty -= qtyToRemove;
    state.totalValue -= productPrice * qtyToRemove;

    if (qtyToRemove >= productQty) {
      // Remove product from basket
      state.products.splice(productIndex, 1);
    } else {
      // Reduce quantity in basket
      state.products[productIndex].qtyInBasket -= qtyToRemove;
    }
  }
};
