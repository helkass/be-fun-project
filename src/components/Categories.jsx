import { Disclosure, Transition } from "@headlessui/react";
import { MdOutlineKeyboardArrowUp } from "react-icons/md";

const datas = [
   {
      name: "category",
      data: [
         {
            data_name: "woman",
            lists: ["tops", "jackets", "sweaters"],
         },
         {
            data_name: "men",
            lists: ["tops", "jackets", "sweaters"],
         },
         {
            data_name: "kids",
            lists: ["tops", "jackets", "sweaters"],
         },
         {
            data_name: "sporty",
            lists: ["tops", "jackets", "sweaters"],
         },
         {
            data_name: "casual",
            lists: ["tops", "jackets", "sweaters"],
         },
      ],
   },
   {
      name: "brands",
      data: ["gucci", "zara", "gap"],
   },
];

const Categories = () => {
   return (
      <div className={`px-3 sm:w-3/12 rounded h-max overflow-hidden`}>
         <div
            className={`mx-auto w-full gap-2 sm:max-w-md rounded-md bg-white`}>
            {datas.map((d, index) => (
               <Disclosure key={index}>
                  {({ open }) => (
                     <>
                        <Disclosure.Button className="flex w-full justify-between capitalize rounded mt-2 bg-gray-100 px-4 py-2 text-left text-sm font-medium text-gray-900 hover:bg-gray-200 focus:outline-none focus-visible:ring focus-visible:ring-gray-500 focus-visible:ring-opacity-75">
                           <span>{d.name}</span>
                           <MdOutlineKeyboardArrowUp
                              className={`${
                                 open ? "rotate-180 transform" : ""
                              } h-5 w-5 text-gray-500`}
                           />
                        </Disclosure.Button>
                        <Transition
                           enter="transition duration-100 ease-out"
                           enterFrom="transform scale-95 opacity-0"
                           enterTo="transform scale-100 opacity-100"
                           leave="transition duration-75 ease-out"
                           leaveFrom="transform scale-100 opacity-100"
                           leaveTo="transform scale-95 opacity-0">
                           {/* condition if data.name not null */}
                           {d.data.map((dt, i) => {
                              if (dt.data_name) {
                                 return (
                                    <Disclosure.Panel
                                       key={i}
                                       className="px-4 py-1 text-sm text-gray-500">
                                       <Disclosure>
                                          {({ open }) => (
                                             <>
                                                <Disclosure.Button className="flex w-full justify-between rounded bg-gray-100 px-4 py-2 text-left text-sm font-medium text-gray-900 hover:bg-gray-200 focus:outline-none focus-visible:ring focus-visible:ring-gray-500 focus-visible:ring-opacity-75">
                                                   <span>{dt.data_name}</span>
                                                   <MdOutlineKeyboardArrowUp
                                                      className={`${
                                                         open
                                                            ? "rotate-180 transform"
                                                            : ""
                                                      } h-5 w-5 text-gray-500`}
                                                   />
                                                </Disclosure.Button>
                                                <Transition
                                                   enter="transition duration-100 ease-out"
                                                   enterFrom="transform scale-95 opacity-0"
                                                   enterTo="transform scale-100 opacity-100"
                                                   leave="transition duration-75 ease-out"
                                                   leaveFrom="transform scale-100 opacity-100"
                                                   leaveTo="transform scale-95 opacity-0">
                                                   {dt.lists.map((list, id) => (
                                                      <Disclosure.Panel
                                                         key={id}
                                                         className="px-4 pt-4 pb-2 text-sm text-gray-500">
                                                         {list}
                                                      </Disclosure.Panel>
                                                   ))}
                                                </Transition>
                                             </>
                                          )}
                                       </Disclosure>
                                    </Disclosure.Panel>
                                 );
                              }
                              // condition data out of objects an array
                              return (
                                 <Disclosure.Panel
                                    key={i}
                                    className="px-4 pt-4 pb-2 text-sm text-gray-500">
                                    {dt}
                                 </Disclosure.Panel>
                              );
                           })}
                        </Transition>
                     </>
                  )}
               </Disclosure>
            ))}
         </div>
      </div>
   );
};

export default Categories;
