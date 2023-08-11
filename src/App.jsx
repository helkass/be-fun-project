import { Routes, Route, Navigate } from "react-router-dom";
import ScreenLayout from "./layouts/ScreenLayout";
import { Home, Dashboard, Indihome, OnePacket, Video } from "./pages/Home";
import BelanjaLayout from "./layouts/BelanjaLayout";
import { Packets } from "./pages/Belanja";
import AutoRedirect from "./middleware/AutoRedirect";
import { HomeReward } from "./pages/Reward";
import Search from "./pages/Search";

function App() {
   return (
      <div className="App">
         <main className="max-w-[620px] container relative mx-auto">
            <div className="cs" />
            <div className="cs2" />
            <Routes>
               <Route element={<ScreenLayout />}>
                  <Route path="/" element={<Home />}>
                     <Route path="mobile" element={<Dashboard />} />
                     <Route path="indihome" element={<Indihome />} />
                     <Route path="one" element={<OnePacket />} />
                     <Route path="video" element={<Video />} />
                  </Route>
                  <Route
                     path="/belanja"
                     element={
                        <AutoRedirect>
                           <BelanjaLayout />
                        </AutoRedirect>
                     }>
                     {/*  handling url without params */}

                     <Route path=":paket" element={<Packets />} />
                  </Route>
                  <Route path="/reward" element={<HomeReward />} />
               </Route>
               {/* handling 404 */}
               <Route path="*" element={<Navigate to="/mobile" replace />} />

               {/* -------search page */}
               <Route path="/search" element={<Search />} />
            </Routes>
         </main>
      </div>
   );
}

export default App;
