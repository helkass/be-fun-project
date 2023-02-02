import { configureStore } from "@reduxjs/toolkit";

// reducer
import cartReducer from "./cart/cartReducer";

export const store = configureStore({
   reducer: { cart: cartReducer },
});
