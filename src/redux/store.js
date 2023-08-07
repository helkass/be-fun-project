import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./cartReducer";
import authReducer from "./authReducer";

export const store = configureStore({
   reducer: {
      cart: cartReducer,
      user: authReducer,
   },
});
