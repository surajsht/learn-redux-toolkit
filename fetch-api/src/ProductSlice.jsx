import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

export const fetchProduct = createAsyncThunk("fetchProduct", async () => {
  const response = await fetch("https://fakestoreapi.com/products");
  return await response.json();
});

export const ProductSlice = createSlice({
  name: "product",
  initialState: {
    isLoading: false,
    data: [],
    isError: false,
  },
  extraReducers: (builder) => {
    builder.addCase(fetchProduct.pending, (state) => {
      state.isLoading = true;
    });

    builder.addCase(fetchProduct.fulfilled, (state, action) => {
      state.isLoading = false;
      state.data = action.payload;
    });

    builder.addCase(fetchProduct.rejected, (state, action) => {
      console.log(action.payload);
      state.isError = true;
    });
  },
});

export default ProductSlice.reducer;
