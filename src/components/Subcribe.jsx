import { Link } from "react-router-dom";
import { HiArrowNarrowRight } from "react-icons/hi";
import { CiMail } from "react-icons/ci";

const Subcribe = () => {
   return (
      <section className="my-20">
         <div className="container flex flex-col gap-5 jusity-center items-center">
            {/* banner offer */}
            <div className="sm:bg-black relative flex max-h-[280px] mb-10 overlay-cs">
               <img
                  src="/images/1.jpg"
                  alt="subscribe-banner"
                  className="w-full object-cover w-full rounded-md sm:rounded-none sm:w-5/12"
               />
               <div className="flex absolute sm:relative flex-col gap-4 z-10 text-white p-7 justify-center">
                  <span className="uppercase sm:text-white/50 text-sm">
                     limited offer
                  </span>
                  <h4 className="font-bold xl:text-4xl text-3xl w-11/12 xl:w-9/12">
                     35% off only this friday and get special gift
                  </h4>
                  <Link
                     to="/"
                     className="flex gap-2 bg-white z-10 px-5 py-3 w-max text-black rounded">
                     Grab it now <HiArrowNarrowRight size={20} />
                  </Link>
               </div>
            </div>
            {/* subscribe contents */}
            <h4 className="font-bold md:text-4xl text-2xl w-full sm:w-9/12 xl:w-7/12 text-center">
               Subcribe to our newsletter to get updates to our latest
               collections
            </h4>
            <span className="text-slate-400 text-center text-sm">
               Get 20% off on your first order just by subscribing to our
               newsletter
            </span>
            <div className="flex gap-2 flex-nowrap">
               <label
                  htmlFor="subdcribe"
                  className="bg-gray-50 text-black/70 rounded py-3 px-5 flex gap-2 border border-gray-100">
                  <CiMail size={20} />
                  <input
                     type="text"
                     name="subcribe"
                     className="placeholder:text-sm sm:w-[270px] w-[160px] cursor-text bg-transparent"
                     placeholder="Enter your email"
                  />
               </label>
               <button className="bg-black text-white px-6 rounded-md py-3">
                  Subscribe
               </button>
            </div>
            <div className="flex flex-col gap-1 text-slate-400 text-center text-sm">
               <span>You will be able to unsubscribe at any time.</span>
               <span>
                  Read our Privacy Policy{" "}
                  <strong className="text-black/50 underline">here</strong>
               </span>
            </div>
         </div>
      </section>
   );
};

export default Subcribe;
