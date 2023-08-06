import gucci from "../assets/brands/gucci-logo.png";
import ck from "../assets/brands/ck-logo.png";
import guess from "../assets/brands/guess-logo.png";
import adidas from "../assets/brands/adidas-logo.png";
import chanel from "../assets/brands/chanel-logo.jpg";
import gap from "../assets/brands/gap-logo.png";
import zara from "../assets/brands/zara-logo.png";
import vercase from "../assets/brands/vercase-logo.png";

const brandsLists = [gucci, ck, guess, adidas, chanel, gap, zara, vercase];
const Brands = () => {
   return (
      <section className="mt-6">
         <div className="container flex flex-col gap-6">
            <h5 className="font-bold text-2xl">Brands</h5>
            <div className="flex w-full sm:justify-between justify-center items-center gap-10 flex-wrap">
               {brandsLists.map((img, index) => (
                  <div
                     key={index}
                     className="md:w-[50px] md:h-[50px] sm:w-[40px] sm:h-[40px] h-[30px] w-[30px]">
                     <img
                        src={img}
                        alt={`brand-logo${index}`}
                        className="w-full h-full object-contain"
                     />
                  </div>
               ))}
            </div>
         </div>
      </section>
   );
};

export default Brands;
