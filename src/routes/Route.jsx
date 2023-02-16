import { Routes, Route } from "react-router-dom";
import React from "react";
import Home from "../pages/home/Home";

const RoutePages = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
    </Routes>
  );
};

export default RoutePages;
