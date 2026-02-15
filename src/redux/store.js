import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./cartSlice";

const localStorageMiddleware = (store) => (next) => (action) => {
  const result = next(action);
  
  if (action.type?.startsWith("cart/")) {
    const cartState = store.getState().cart.cartList;
    localStorage.setItem("cartItems", JSON.stringify(cartState));
  }
  return result;
};

const loadFromLocalStorage = () => {
  try {
    const serializedState = localStorage.getItem("cartItems");
    return serializedState ? JSON.parse(serializedState) : [];
  } catch (e) {
    return [];
  }
};

export const store = configureStore({
  reducer: {
    cart: cartReducer,
  },
  preloadedState: {
    cart: {
      cartList: loadFromLocalStorage(),
    },
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(localStorageMiddleware),
});