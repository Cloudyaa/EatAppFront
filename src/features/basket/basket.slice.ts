import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { SimpleProductEntity } from 'types';
import { handleRemoveProduct } from './handleRemoveProduct';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

export interface BasketProductEntity extends SimpleProductEntity {
  qtyInBasket: number;
}

export interface BasketState {
  products: BasketProductEntity[];
  totalQty: number;
  totalValue: number;
}

const initialState: BasketState = {
  products: [],
  totalQty: 0,
  totalValue: 0,
};

const persistConfig = {
  key: 'root',
  storage,
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
      state.totalValue += action.payload.price;
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
      state.totalQty = 0;
      state.totalValue = 0;
    },
  },
});

export const persistedReducer = persistReducer(persistConfig, basketSlice.reducer);

export const { addToBasket, reduceQtyInBasket, removeFromBasket, clearBasket } =
  basketSlice.actions;
