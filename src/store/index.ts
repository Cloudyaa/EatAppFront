import { configureStore } from '@reduxjs/toolkit';
import { productSlice } from '../features/product/product.slice';

export const store = configureStore({
  reducer: {
    products: productSlice.reducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
