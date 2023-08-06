export const getProducts = async () => {
   const response = await fetch("/db.json");
   const data = await response.json();

   return data?.products;
};
