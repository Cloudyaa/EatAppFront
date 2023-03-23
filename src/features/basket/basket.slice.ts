import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { SimpleProductEntity } from 'types';

export interface BasketProductEntity extends SimpleProductEntity {
  qtyInBasket: number;
}

export interface BasketState {
  products: BasketProductEntity[];
  totalQty: number;
  totalPrice: number;
}

const initialState: BasketState = {
  products: [],
  totalQty: 0,
  totalPrice: 0,
};

export const basketSlice = createSlice({
  name: 'basket',
  initialState,
  reducers: {
    addToBasket: (state, action: PayloadAction<BasketProductEntity>) => {
      const productIndex = state.products.findIndex(
        (product: BasketProductEntity) => product.productId === action.payload.productId,
      );
      if (productIndex !== -1) {
        state.products[productIndex].qtyInBasket += 1;
      } else {
        state.products.push({ ...action.payload, qtyInBasket: 1 });
      }

      // Update total
      state.totalQty += 1;
      state.totalPrice -= action.payload.price;
    },

    removeFromBasket(state, action: PayloadAction<string>) {
      const productIndex = state.products.findIndex(
        (product: BasketProductEntity) => product.productId === action.payload,
      );
      if (productIndex !== -1) {
        const productPrice = state.products[productIndex].price;

        if (state.products[productIndex].qtyInBasket > 1) {
          state.products[productIndex].qtyInBasket -= 1;

          state.totalQty -= 1;
          state.totalPrice -= productPrice;
        } else {
          state.totalQty -= state.products[productIndex].qtyInBasket;
          state.totalPrice -= productPrice * state.products[productIndex].qtyInBasket;

          // Remove product from basket
          state.products.splice(productIndex, 1);
        }
      }
    },

    clearBasket(state) {
      state.products = [];
    },
  },
});

export const { addToBasket, removeFromBasket, clearBasket } = basketSlice.actions;
