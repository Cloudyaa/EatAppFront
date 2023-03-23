import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { SimpleProductEntity } from 'types';
import { handleRemoveProduct } from './handleRemoveProduct';

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
      state.totalPrice += action.payload.price;
    },

    reduceQtyInBasket(state, action: PayloadAction<string>) {
      handleRemoveProduct(state, action.payload, 1);
    },

    removeFromBasket(state, action: PayloadAction<string>) {
      const productIndex = state.products.findIndex(
        (product: BasketProductEntity) => product.productId === action.payload,
      );
      if (productIndex !== -1) {
        const productQty = state.products[productIndex].qtyInBasket;
        handleRemoveProduct(state, action.payload, productQty);
      }
    },

    clearBasket(state) {
      state.products = [];
    },
  },
});

export const { addToBasket, reduceQtyInBasket, removeFromBasket, clearBasket } =
  basketSlice.actions;
