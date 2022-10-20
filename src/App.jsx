import React, { Suspense } from "react";
import { Routes, Route } from "react-router-dom";
import HomePage from "./Routes/HomePage";
import PagePlaceholder from "./Routes/components/PagePlaceholder/PagePlaceholder";
import "./index.css";

function App() {
  return (
    <>
      <Suspense fallback={<div>Ждите...☻</div>}>
        <Routes>
          <Route path="/testovoe_Elon" element={<HomePage />} />
          <Route path="/technologies" element={<PagePlaceholder text='Технологии' />} />
          <Route path="/schedule" element={<PagePlaceholder text='График полётов' />} />
          <Route path="/guarantee" element={<PagePlaceholder text='Гарантии' />} />
          <Route path="/about" element={<PagePlaceholder text='О компании' />} />
          <Route path="/contact" element={<PagePlaceholder text='Контакты' />} />
        </Routes>
      </Suspense>
    </>
  );
}

export default App;
