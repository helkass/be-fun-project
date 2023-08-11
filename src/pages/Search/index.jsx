import { useEffect, useState } from "react";
import SearchBar from "../../components/input/SearchBar";
import Badge from "../../components/atoms/Badge";
import { useNavigate, useSearchParams } from "react-router-dom";

const Search = () => {
   const [searchInput, setSearchInput] = useState("");
   const [searchHistory, setSearchHistory] = useState([]);
   const [searchParams, setSearchParams] = useSearchParams();
   const navigate = useNavigate();

   const [isLoading, setLoading] = useState(false);
   const [showResultSearching, setShowResultSearching] = useState(false);

   const handleBack = () => {
      if (searchParams.size == 0) {
         navigate("/");
      } else {
         setSearchParams({});
         setSearchInput("");
         setShowResultSearching(false);
      }
   };
   // handle searching
   const handleSearch = (e) => {
      e.preventDefault();
      setSearchHistory([...searchHistory, searchInput]);
      setSearchParams({ query: searchInput });

      // create animation loading searcing
      setLoading(true);
      setShowResultSearching(true);

      setTimeout(() => {
         setLoading(false);
      }, 4000);
   };

   //    handle clear history of seacrh
   const clearHistory = (e) => {
      e.preventDefault();
      setSearchHistory([]);
   };

   //    useEffect(() => {
   //         if(searchInput)
   //    },[]);
   return (
      <section className="min-h-screen w-full bg-white p-5 relative">
         <div className="flex flex-col gap-y-6 w-full">
            <SearchBar
               handleBack={handleBack}
               handleSubmit={handleSearch}
               handleChange={(input) => setSearchInput(input)}
            />
            {/* search history */}
            {(!searchInput.length > 0 || searchParams.size == 0) && (
               <div className="flex flex-col gap-y-4 w-full">
                  <div className="flex justify-between text-sm font-semibold">
                     {searchParams.size == 0 ? (
                        <p>Pencarian terakhir</p>
                     ) : (
                        <p className="font-normal">
                           Hasil pencarian untuk "
                           <strong>{searchParams.get("query")}</strong>"
                        </p>
                     )}
                     {searchHistory.length > 0 && searchParams.size == 0 && (
                        <button
                           onClick={clearHistory}
                           className="text-cyan-800">
                           Hapus Riwayat
                        </button>
                     )}
                  </div>
                  <div className="flex flex-wrap gap-4">
                     {searchHistory.length > 0 &&
                        searchHistory.map((str, idx) => (
                           <Badge title={str} key={idx} type={"i"} />
                        ))}
                  </div>
               </div>
            )}
            {/* show results searching */}
            {showResultSearching && searchParams.size > 0 && (
               <SearchResults isLoading={isLoading} />
            )}
         </div>
      </section>
   );
};

const SearchResults = ({ isLoading }) => {
   const [activeBtn, setActiveBtn] = useState("paket");

   const btnLists = ["paket", "fitur", "poin"];

   return (
      <div className="flex flex-col relative">
         <div className="flex justify-around gap-3 bg-white">
            {btnLists.map((b, id) => (
               <button
                  key={id}
                  onClick={() => setActiveBtn(b)}
                  className={`px-3 py-2 capitalize border-b-2 font-semibol text-sm ${
                     activeBtn == b
                        ? "text-black border-cyan-800"
                        : "text-slate-400 border-transparent"
                  }`}>
                  {b}
               </button>
            ))}
         </div>

         {/* results */}
         <div className="my-6">{isLoading ? "loading..." : "blank result"}</div>
      </div>
   );
};

export default Search;
