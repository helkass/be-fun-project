import data from "../api/fake.json";
export const getCoffee = async (params) => {
   const response = await fetch(data);
   console.log(response);
   const json = await response.json();

   return json;
};
