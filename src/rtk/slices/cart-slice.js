import { createSlice } from "@reduxjs/toolkit";

export const cartSlice = createSlice({
  initialState: [],
  name: "cartSlice",
  reducers: {
    addToCart: (state, action) => {
      const findProduct = state.find(
        (product) => product._id === action.payload._id
      );
      if (findProduct) {
        findProduct.quantity += 1;
      } else {
        const productClone = { ...action.payload, quantity: 1 };
        state.push(productClone);
      }
    },
    increamentQuantity: (state, action) => {
      const product = state.find(
        (product) => product._id === action.payload._id
      );
      if (product) {
        product.quantity++;
      }
    },
    decrementQuantity: (state, action) => {
      const product = state.find(
        (product) => product._id === action.payload._id
      );
      if (product.quantity === 1) {
        product.quantity = 1;
      } else {
        product.quantity--;
      }
    },
    removeFromCart: (state, action) => {
      return state.filter((product) => product._id !== action.payload);
    },
    clear: (state, action) => {
      return [];
    },
  },
});

export const { addToCart, removeFromCart, clear, increamentQuantity, decrementQuantity } = cartSlice.actions;
export default cartSlice.reducer;
