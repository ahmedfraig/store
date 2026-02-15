import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  cartList: [],
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state, action) => {
      const productToAdd = action.payload;
      const product = state.cartList.find(
        (item) => item.id === productToAdd.id,
      );

      const quantityToAdd = productToAdd.qty ? productToAdd.qty : 1;

      if (product) {
        product.qty += quantityToAdd;
      } else {
        state.cartList.push({ ...productToAdd, qty: quantityToAdd });
      }
    },

    decreaseQty: (state, action) => {
      const product = state.cartList.find(
        (item) => item.id === action.payload.id,
      );

      if (product.qty === 1) {
        state.cartList = state.cartList.filter(
          (item) => item.id !== action.payload.id,
        );
      } else {
        product.qty -= 1;
      }
    },

    deleteProduct: (state, action) => {
      state.cartList = state.cartList.filter(
        (item) => item.id !== action.payload.id,
      );
    },
  },
});

export const { addToCart, decreaseQty, deleteProduct } = cartSlice.actions;
export default cartSlice.reducer;
