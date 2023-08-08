import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./cartReducer";
import authReducer from "./authReducer";
import orderReducer from "./orderReducer";

export const store = configureStore({
   reducer: {
      cart: cartReducer,
      user: authReducer,
      order: orderReducer,
   },
});
