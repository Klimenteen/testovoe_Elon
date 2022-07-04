import React, { Suspense } from "react";
// import { Routes, Route } from "react-router-dom";
import { Routes } from "react-router-dom";
import Hero from "./components/Hero/Hero";
import Navbar from "./components/NavBar/NavBar";

import "./index.css";

function App() {
  return (
    <>
      <Suspense fallback={<div>Ждите...☻</div>}>
        <Navbar />
        <Hero />
        
      </Suspense>
      <Routes>
        {/* <Route path="/glxtrvl" element={<Video />} />
         */}
      </Routes>
    </>
  );
}

export default App;
