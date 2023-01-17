import Home from "./pages/Home";
import Explore from "./pages/Explore";
import Info from "./pages/Info";
import Cab from "./pages/Cab";
import Hotel from "./pages/Hotel";
import Food from "./pages/Food";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./pages/Login";
function App() {

  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="explore" element={<Explore/>}/>
          <Route path="info" element={<Info/>}/>
          <Route path="cab" element={<Cab/>}/>
          <Route path="hotel" element={<Hotel/>}/>
          <Route path="food" element={<Food/>}/>
          <Route path="login" element={<Login/>}/>
        </Routes>
      </Router>    
    </div>
  )
}

export default App
