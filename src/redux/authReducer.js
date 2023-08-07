import { createSlice } from "@reduxjs/toolkit";

const userState = {
   user: localStorage.getItem("g_clothes_user")
      ? JSON.parse(localStorage.getItem("g_clothes_user"))
      : null,
   status: null,
   message: null,
};

const authSlice = createSlice({
   name: "user",
   initialState: userState,
   reducers: {
      REGISTER(state, action) {
         /**
          * @params fullname, email and password
          * @desc static register using localstorage for saving data
          */
         state.user = {
            ...state.user,
            data: action.payload,
            logIn: true,
         };

         state.status = true;
         state.message = "Registration successfully";

         localStorage.setItem(
            "g_clothes_user",
            JSON.stringify({ logIn: true, data: action.payload })
         );
      },
      LOGIN(state, action) {
         /**
          * @params email and password
          */

         // check data at localstorage
         const user = localStorage.getItem("g_clothes_user");

         if (user == null || undefined) {
            state.status = false;
            state.message = "Authentication failure!";
         } else {
            // check data email and password
            const { data, logIn } = user;
            if (data.email == action.payload.email) {
               if (data.password == action.payload.password) {
                  state.user = { ...state.user, logIn: true };
               } else {
                  state.status = false;
                  state.message = "Wrong Password!";
               }
            } else {
               state.status = false;
               state.message = "Wrong Email!";
            }

            localStorage.setItem("g_clothes_user", JSON.stringify(state.user));
         }
      },
      LOGOUT(state, action) {
         state.user = { ...state.user, logIn: false };

         localStorage.setItem("g_clothes_user", JSON.stringify(state.user));
      },
      RESTART_ALERT(state, action) {
         state.status = null;
         state.message = null;
      },
   },
});

export const { REGISTER, LOGIN, RESTART_ALERT } = authSlice.actions;

export default authSlice.reducer;
