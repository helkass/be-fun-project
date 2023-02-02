import { createSlice } from "@reduxjs/toolkit";

const initialState = {
   cartItems: [],
   cartTotalAmount: 0,
};

const cartSlice = createSlice({
   name: "cart",
   initialState,
   reducers: {
      addCart(state, action) {
         const checkIndex = state.cartItems.findIndex(
            (cart) => cart.id === action.payload.id
         );
         if (checkIndex >= 0) {
            state.cartItems[checkIndex] = {
               ...state.cartItems[checkIndex],
               cartQuantity: state.cartItems[checkIndex].cartQuantity + 1,
            };
         } else {
            const temp = { ...action.payload, cartQuantity: 1 };
            state.cartItems.push(temp);
         }

         state.cartTotalAmount += state.cartItems.map(
            (item) => item.price * item.cartQuantity
         );
      },
      decrementCartItem(state, action) {
         // find the index specifiec for action
         const itemIndex = state.cartItems.findIndex(
            (item) => item._id === action.payload._id
         );

         if (state.cartItems[itemIndex].cartQuantity > 1) {
            state.cartItems[itemIndex].cartQuantity -= 1;
         } else if (state.cartItems[itemIndex].cartQuantity === 1) {
            // remove
            const nextCartItems = state.cartItems.filter(
               (item) => item._id !== action.payload._id
            );

            state.cartItems = nextCartItems;
         }

         localStorage.setItem("cart", JSON.stringify(state.cartItems));
      },
      remove(state, action) {
         const newCartItems = state.cartItems.filter(
            (cartItem) => cartItem.id !== action.payload
         );

         state.cartItems = newCartItems;
      },
   },
});

export const { addCart, remove, decrementCartItem } = cartSlice.actions;

export default cartSlice.reducer;
