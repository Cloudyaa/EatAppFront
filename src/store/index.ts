import { configureStore } from '@reduxjs/toolkit';
import { useDispatch } from 'react-redux';
import { persistedReducer } from 'features/basket';
import { productSlice } from 'features/product';
import { persistStore } from 'redux-persist';

export const store = configureStore({
  reducer: {
    products: productSlice.reducer,
    basket: persistedReducer,
  },
});

persistStore(store);

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export const useAppDispatch: () => AppDispatch = useDispatch;
