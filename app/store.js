import { configureStore } from "@reduxjs/toolkit";

import cartReducer from "../slices/cartSlice";

// Global state
export const store = configureStore({
  reducer: {
    cart: cartReducer,
  },
});
