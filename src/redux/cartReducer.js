import { createSlice } from "@reduxjs/toolkit";
export const cartState = {
   carts: localStorage.getItem("g_clothes_carts")
      ? JSON.parse(localStorage.getItem("g_clothes_carts"))
      : [],
   cartTotalQuantity: localStorage.getItem("g_clothes_cartTotalQty")
      ? JSON.parse(localStorage.getItem("g_clothes_cartTotalQty"))
      : 0,
};

const cartSlice = createSlice({
   name: "cart",
   initialState: cartState,
   reducers: {
      ADD_CART(state, action) {
         // find index
         const ids = state.carts?.findIndex(
            (cart) => cart.id == action.payload.id
         );
         // check exist product on carts
         const product = state.carts[ids];
         if (ids >= 0) {
            const detail = action.payload.details;

            // get size from details of array
            let indColor = product.details.findIndex(
               (dt) => dt.size == detail.size
            );
            // check color color
            const matcher = product.details[indColor]?.color == detail.color;

            // size exist and color
            if (indColor >= 0 && matcher) {
               // only update detail_quantity
               const qtyUpdate =
                  state.carts[ids].details[indColor].detail_quantity +
                  detail.detail_quantity;
               state.carts[ids].details[indColor] = {
                  ...state.carts[ids].details[indColor],
                  detail_quantity: qtyUpdate,
               };
            } else {
               const details = state.carts[ids].details;
               details.push(detail);
               const pars = JSON.stringify(details);

               const out = JSON.parse(pars);
               // push size and color in details array
               state.carts[ids] = {
                  ...state.carts[ids],
                  details: out,
               };
            }
            // update cartQuantity
            const quantitiesSingleProduct = product.details.map(
               (data) => data.detail_quantity
            );
            const sumQuantities = quantitiesSingleProduct.reduce(
               (a, b) => a + b
            );
            // update cartQuantity state
            state.carts[ids] = {
               ...state.carts[ids],
               cartQuantity: sumQuantities,
            };
         } else {
            const details = [];
            details.push(action.payload.details);
            let tempProduct = {
               ...action.payload,
               details: details,
               cartQuantity: action.payload.details.detail_quantity,
               amount: action.payload.amount,
            };
            state.carts.push(tempProduct);
         }

         const quantities = state.carts.map((data) => data.cartQuantity);
         const sumQuantities = quantities.reduce((a, b) => a + b);
         // update cartQuantity state
         state.cartTotalQuantity = sumQuantities;

         localStorage.setItem(
            "g_clothes_cartTotalQty",
            JSON.stringify(state.cartTotalQuantity)
         );

         localStorage.setItem("g_clothes_carts", JSON.stringify(state.carts));
      },
   },
});

export const { ADD_CART } = cartSlice.actions;

export default cartSlice.reducer;
