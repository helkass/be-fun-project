import {
   Navigate,
   useLocation,
   useParams,
   useSearchParams,
} from "react-router-dom";
import { vouchers } from "../constants/vouchers";
import { replaceSpacingAll } from "../utils/replaced";

function getFilter(path) {
   return vouchers.findIndex(
      (link) => replaceSpacingAll(link.title) == replaceSpacingAll(path)
   );
}

const AutoRedirect = ({ children }) => {
   const { pathname, search } = useLocation();
   const params = useParams();
   const [paramSearch, setSearchParam] = useSearchParams();
   let param = "internet";

   // checking
   const objParams = Object.entries(params);

   // check params is exist
   if (objParams.length === 0) {
      // create params
      return <Navigate to={`${param}?filter=internet-sakti`} replace />;
   } else if (paramSearch.get("filter") == 0 || search.length === 0) {
      const query = vouchers[getFilter(params?.paket)].vouchers[0].title;
      return (
         <Navigate to={`${params?.paket}?filter=${replaceSpacingAll(query)}`} />
      );
   }
   return children;
};

export default AutoRedirect;
