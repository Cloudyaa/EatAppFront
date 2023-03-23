import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { ErrorResponse, SimpleProductEntity } from 'types';

interface ProductState {
  products: SimpleProductEntity[] | null;
  status: 'idle' | 'loading' | 'success' | 'failed';
  error: ErrorResponse | null;
}

const initialState: ProductState = {
  products: null,
  status: 'idle',
  error: null,
};

export const fetchProducts = createAsyncThunk<
  SimpleProductEntity[],
  string,
  { rejectValue: ErrorResponse }
>('products/fetchProducts', async (path, { rejectWithValue }) => {
  const res = await fetch(path);
  if (res.ok) {
    const data: SimpleProductEntity[] = await res.json();
    return data.map((product) => ({
      ...product,
      qtyInBasket: 0,
    }));
  } else {
    const errorData: ErrorResponse = await res.json();
    return rejectWithValue(errorData);
  }
});

export const productSlice = createSlice({
  name: 'products',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchProducts.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchProducts.fulfilled, (state, action) => {
        state.products = action.payload;
        state.status = 'success';
      })

      .addCase(fetchProducts.rejected, (state, action) => {
        state.status = 'failed';
        if (action.payload) {
          state.error = action.payload;
        }
      });
  },
});
