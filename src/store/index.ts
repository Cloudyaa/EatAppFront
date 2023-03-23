import { configureStore } from '@reduxjs/toolkit';
import { useDispatch } from 'react-redux';
import { basketSlice } from 'features/basket';
import { productSlice } from 'features/product';

export const store = configureStore({
  reducer: {
    products: productSlice.reducer,
    basket: basketSlice.reducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export const useAppDispatch: () => AppDispatch = useDispatch;
