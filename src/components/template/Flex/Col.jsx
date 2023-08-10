import React from "react";

const Col = ({ size, children, items, center }) => {
   function sizing(ty) {
      switch (ty) {
         case "sm":
            return "gap-y-1";
         case "md":
            return "gap-y-2";
         case "xl":
            return "gap-y-4";
         default:
            break;
      }
   }
   return (
      <div
         className={`flex flex-col ${sizing(size)} ${
            items && `text-${items}`
         } ${center && "justify-center items-center"}`}>
         {children}
      </div>
   );
};

export default Col;
