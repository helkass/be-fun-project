import BtnIcon, { Button } from "./atoms/BtnIcon";

import { BiUser } from "react-icons/bi";
import { FiSearch } from "react-icons/fi";
import { LuUserCog } from "react-icons/lu";
import { ImHome, ImTrophy } from "react-icons/im";
import { FaShoppingBag } from "react-icons/fa";
import logo from "../assets/telkomsel-logo.svg";

import { IoIosArrowForward, IoMdNotificationsOutline } from "react-icons/io";
import { IoRocketOutline } from "react-icons/io5";
import BtnLink from "./atoms/BtnLink";
import { useLocation, useNavigate } from "react-router-dom";

export function NavgationHomeTop() {
   const { pathname } = useLocation();
   const location = pathname.split("/")[1];
   const links = [
      {
         title: "mobile",
         link: "/mobile",
      },
      {
         title: "indihome",
         link: "/indihome",
      },
      {
         title: "one",
         link: "/one",
      },
      {
         title: "video",
         link: "/video",
      },
   ];
   return (
      <header className="bg-white/80 z-50 fixed top-0 w-full max-w-[620px]">
         <div className="px-5 flex flex-col min-h-[100px] gap-3 w-full">
            <div className="flex capitalize justify-between items-center my-2">
               <WrapperFlex>
                  <BtnIcon active link={"/user"} Icon={BiUser} />
                  <span>Hi Helka</span>
                  <IoIosArrowForward />
               </WrapperFlex>
               <WrapperFlex>
                  <BtnIcon active link={"/search"} Icon={FiSearch} />
                  <BtnIcon
                     active
                     link={"/notification"}
                     Icon={IoMdNotificationsOutline}>
                     <span className="absolute text-[10px] -top-1 right-0 bg-red-600 text-white rounded-full w-[12px] p-[1px]">
                        2
                     </span>
                  </BtnIcon>
                  <BtnIcon active link={"/admin"} Icon={LuUserCog} />
               </WrapperFlex>
            </div>
            <div className="overflow-hidden w-full">
               <div className="flex gap-3 flex-nowrap justify-between">
                  {links.map((str, idx) => (
                     <BtnLink
                        active={location == str.title}
                        link={str.link}
                        key={idx}>
                        {str.title}
                     </BtnLink>
                  ))}
               </div>
            </div>
         </div>
      </header>
   );
}

export function NavigationMainBottom() {
   const { pathname } = useLocation();
   const navigate = useNavigate();
   const location = pathname.split("/")[1];

   const links = [
      {
         title: "Beranda",
         data: ["mobile", "indihome", "one", "video"],
         link: "/mobile",
      },
      {
         title: "Belanja",
         link: "/belanja",
         data: ["belanja", "internet", "roaming", "hiburan", "telepon&sms"],
      },
      {
         title: "Menu",
         link: "/menu",
         data: ["x", "x", "x", "x"],
      },
      {
         title: "Reward",
         link: "/reward",
         data: ["x", "x", "x", "x"],
      },
      {
         title: "Jelajah",
         link: "/jelajah",
         data: ["x", "x", "x", "x"],
      },
   ];

   const icons = [
      {
         type: "icon",
         data: ImHome,
      },
      {
         type: "icon",
         data: FaShoppingBag,
      },
      {
         type: "img",
         data: logo,
      },
      {
         type: "icon",
         data: ImTrophy,
      },
      {
         type: "icon",
         data: IoRocketOutline,
      },
   ];
   return (
      <div className="bg-white/50 flex justify-between z-50 fixed bottom-0 py-4 backdrop-blur px-5 w-full max-w-[620px]">
         {links.map((link, idx) => {
            if (icons[idx].type == "img") {
               return (
                  <Button
                     onClick={() => navigate(link.link)}
                     key={idx}
                     className="px-2 pt-2 flex !justify-end">
                     <img
                        src={icons[idx].data}
                        className="w-[85px] h-[60px] -translate-y-5 object-cover absolute -top-[60%]"
                        alt="x"
                     />
                     <span>{link.title}</span>
                  </Button>
               );
            }
            return (
               <BtnIcon
                  key={idx}
                  title={link.title}
                  link={link.link}
                  active={link.data.includes(location)}
                  Icon={icons[idx].data}
               />
            );
         })}
      </div>
   );
}

const WrapperFlex = ({ children }) => {
   return <div className="flex flex-nowrap gap-3 items-center">{children}</div>;
};
