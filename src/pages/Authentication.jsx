import { FcGoogle } from "react-icons/fc";
import InputComponent from "../components/atoms/InputComponent";
import { ButtonPayment } from "../components/atoms/Button";
import { useState } from "react";

const Authentication = () => {
   const [isLogin, setIsLogin] = useState(false);
   return (
      <section className="my-12">
         <div className="container flex">
            <div className="xl:w-1/2 w-full flex flex-col gap-3 text-center justify-center items-center">
               <h2 className="font-semibold text-3xl">
                  {isLogin ? "Welcome back" : "Create your account"}
               </h2>
               <p className="text-sm text-slate-400">
                  Let's get started to updgrade your fashions
               </p>
               <ButtonAuthPlatform>
                  <FcGoogle />
                  {isLogin ? "Login" : "Signup"} with Google
               </ButtonAuthPlatform>
               <p className="or">
                  <span className="bg-white z-10 relative px-2 text-slate-400">
                     or
                  </span>
               </p>
               <form className="xl:w-7/12 sm:w-9/12 w-10/12 flex flex-col gap-2">
                  {!isLogin && (
                     <InputComponent
                        label={"Fullname"}
                        required
                        name={"fullname"}
                     />
                  )}
                  <InputComponent label={"Email"} required name={"email"} />
                  <InputComponent
                     label={"Password"}
                     required
                     name={"password"}
                     type={"password"}
                  />
                  <label
                     htmlFor="agree"
                     className="flex gap-3 text-sm font-semibold my-2">
                     <input type="checkbox" name="agree" />I agree to all Term,
                     Privacy Policy and Fees
                  </label>
                  <ButtonPayment
                     title={isLogin ? "Sign In" : "Sign Up"}
                     type={"submit"}
                  />
               </form>
               <p className="text-sm font-semibold">
                  {isLogin
                     ? "Don't have and account?"
                     : "Already have an account"}{" "}
                  <span
                     className="text-emerald-500 cursor-pointer"
                     onClick={() => setIsLogin(!isLogin)}>
                     {isLogin ? "Sign up" : "Log in"}
                  </span>
               </p>
            </div>
            <div className="w-1/2 hidden sm:block">
               <img
                  src="/images/1.jpg"
                  className="h-full object-cover rounded-se-[120px] rounded-bl-[120px]"
               />
            </div>
         </div>
      </section>
   );
};

const ButtonAuthPlatform = ({ children, onClick }) => {
   return (
      <button
         onClick={onClick}
         className="flex gap-4 rounded-full border text-sm font-semibold xl:w-7/12 sm:w-9/12 w-10/12 justify-center items-center px-5 py-2">
         {children}
      </button>
   );
};

export default Authentication;
