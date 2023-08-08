import { createSlice } from "@reduxjs/toolkit";

/**
 * {
 *      data_user: {
 *          fullname: "",
 *          country: "",
 *          email: "",
 *          phone: "",
 *          street: "",
 *          city: "",
 *          region: "",
 *          postal_code: "",
 *      },
 *      shipping_method: "",
 *      payment_details: {
 *          type: "",
 *          card_number: "",
 *          card_name: "",
 *          expiration_date: "",
 *          cvv: ""
 *      },
 *      billing_address: {
 *          phone: "",
 *          street: "",
 *          city: "",
 *          region: "",
 *          postal_code: "",
 *          shipping_country: "",
 *      },
 *      response_transaction: {
 *          transaction_status: "",
 *          transaction_products: [
 *              {
 *                  product_id: "",
 *                  product_name: "",
 *                  product_details: [
 *                      {
 *                          size: "",
 *                          color: "",
 *                          quantity: 0
 *                       }
 *                  ]
 *              }
 *          ],
 *          gross_amount: 0,
 *          payment_details: {
 *              type: "",
 *              card_number: "",
 *              card_name: "",
 *              expiration_date: "",
 *              cvv: ""
 *          },
 *      }
 * }
 */

const initialState = {
   orders: localStorage.getItem("g_clothes_orders")
      ? JSON.parse(localStorage.getItem("g_clothes_orders"))
      : null,
   status: null,
   message: null,
};

const orderSlice = createSlice({
   name: "order",
   initialState,
   reducers: {
      createOrderForm(state, action) {
         const { shippingMethod, ...rest } = action.payload;
         state.orders = {
            ...state.orders,
            data_user: rest,
            shipping_method: shippingMethod,
         };

         // save
         localStorage.setItem("g_clothes_orders", JSON.stringify(state.orders));
      },
      createOrderPayment(state, action) {
         state.orders = { ...state.orders, ...action.payload };
         // save
         localStorage.setItem("g_clothes_orders", JSON.stringify(state.orders));
      },
      createOrder(state, action) {
         // get products at cart
         const cart = JSON.parse(localStorage.getItem("g_clothes_carts"));
         // take spesifiecs for transaction
         const products = cart.map((product) => {
            return {
               product_name: product.product_name,
               product_id: product.id,
               product_details: product.details,
            };
         });
         state.orders = {
            ...state.orders,
            response_transaction: {
               transaction_status: "settlement",
               transaction_products: products,
               gross_amount: JSON.parse(
                  localStorage.getItem("g_clothes_cartTotalAmount")
               ),
               payment_details: state.orders.payment_details,
               transaction_createdAt: Date(),
            },
         };

         state.status = true;
         state.message = "Transaction successfully";

         localStorage.setItem("g_clothes_orders", JSON.stringify(state.orders));
      },
      RESTART_ALERT(state, action) {
         state.status = null;
         state.message = null;
      },
      removeTransactionHistory(state, action) {
         state.orders = { ...state.orders, response_transaction: null };
         localStorage.setItem("g_clothes_orders", JSON.stringify(state.orders));
      },
   },
});

export const {
   createOrder,
   createOrderForm,
   createOrderPayment,
   RESTART_ALERT,
   removeTransactionHistory,
} = orderSlice.actions;

export default orderSlice.reducer;
