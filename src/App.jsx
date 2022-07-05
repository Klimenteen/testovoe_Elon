import React, { Suspense } from "react";
import { Routes, Route } from "react-router-dom";
import HomePage from "./Routes/HomePage";
import Technologies from "./Routes/Technologies";
import Contact from "./Routes/Contact";
import Guarantee from "./Routes/Guarantee";
import About from "./Routes/About";

import "./index.css";
import Schedule from "./Routes/Schedule";

function App() {
  return (
    <>
      <Suspense fallback={<div>Ждите...☻</div>}>
        <Routes>
          <Route path="/testovoe_Elon" element={<HomePage />} />
          <Route path="/technologies" element={<Technologies />} />
          <Route path="/schedule" element={<Schedule />} />
          <Route path="/guarantee" element={<Guarantee />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </Suspense>
    </>
  );
}

export default App;
