import { Outlet } from "react-router-dom";
import { HeaderBelanja, HeroBelanja, PilihPaket } from "../components/belanja";

export default function BelanjaLayout() {
   return (
      <section>
         <HeaderBelanja />
         <HeroBelanja />
         <div className="bg-white relative">
            <PilihPaket>
               <Outlet />
            </PilihPaket>
         </div>
      </section>
   );
}
