import { Route, Routes, Navigate } from "react-router-dom";
import Layout from "./components/layout/Layout";
import CheckoutLayout from "./components/layout/CheckoutLayout";
import {
   Authentication,
   Cart,
   Checkout,
   DetailProduct,
   ErrorBoundary,
   Home,
   Notifications,
   Payment,
   Products,
   UserDetail,
} from "./pages";
import ProtectedRoute from "./middleware/ProtectedRoute";
import { ScrollToTop } from "./components";

function App() {
   return (
      <div className="App">
         <ScrollToTop />
         <Routes>
            <Route element={<Layout />}>
               <Route index element={<Home />} />
               <Route path="products" element={<Products />} />
               <Route path="products/:id" element={<DetailProduct />} />
               <Route path="cart" element={<Cart />} />
               <Route path="checkout" element={<CheckoutLayout />}>
                  <Route index element={<Checkout />} />
                  <Route path="payment" element={<Payment />} />
               </Route>
               <Route path="notification" element={<Notifications />} />
               <Route path="auth" element={<Authentication />} />
               <Route
                  path="user/:id"
                  element={
                     <ProtectedRoute>
                        <UserDetail />
                     </ProtectedRoute>
                  }
               />
               <Route path="*" element={<ErrorBoundary />} />
            </Route>
         </Routes>
      </div>
   );
}

export default App;
