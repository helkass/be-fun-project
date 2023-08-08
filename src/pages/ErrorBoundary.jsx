import { Link } from "react-router-dom";

const ErrorBoundary = () => {
   return (
      <section className="my-12 min-h-screen">
         <div className="container text-slate-700 gap-y-3 flex flex-col h-full justify-center items-center">
            <h1 className="text-7xl xl:text-[10rem] font-bold">404</h1>
            <h2>Something's missing!</h2>
            <Link to={"/"} className="underline">
               Go back!
            </Link>
         </div>
      </section>
   );
};

export default ErrorBoundary;
