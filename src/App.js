import React from "react";
import { Route, BrowserRouter, Routes } from "react-router-dom";
// import { Helmet } from "react-helmet";
// Screens
import Home from "./screens/Landing.jsx";
import Login from "./components/Sections/Login.jsx";
export default function App() {
  return (
    <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          {/* <Route path="/profile" element={<Profile />} /> */}
        </Routes>
      </BrowserRouter>
  );
}