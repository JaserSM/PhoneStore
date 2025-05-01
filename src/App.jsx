import { BrowserRouter, Route, Routes } from "react-router";
import './App.css';
import HomePage from "./pages/home/home";
import PhoneDetailPage from "./pages/detail/PhoneDetail";
import React from "react";


function App() {
  return (
    <>
    <BrowserRouter>
      <Routes>
        <Route path={"/"} element={<HomePage />} />
        <Route path="/home" element={<HomePage />} />
        <Route path="/phone" element={<PhoneDetailPage />} />
      </Routes>
    </BrowserRouter>
  </>
  );
}

export default App;