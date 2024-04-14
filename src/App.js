import React from "react";
import { Route, BrowserRouter, Routes } from "react-router-dom";
// import { Helmet } from "react-helmet";
// Screens
import Home from "./screens/Landing.jsx";
import Login from "./components/Sections/Login.jsx";
import Profile from "./components/Profile/Profile.jsx";
import AllSchemes from "./components/Sections/AllSchemes.jsx";

import MutualFunds from "./components/SchemeDetails/MutualFunds.jsx";
import FixedDeposit from "./components/SchemeDetails/FixedDeposit.jsx";
import GoldInvestment from "./components/SchemeDetails/GoldInvestment.jsx";
import HealthInsurance from "./components/SchemeDetails/HealthInsurance.jsx";
import NPS from "./components/SchemeDetails/NPS.jsx";
import PPF from "./components/SchemeDetails/PPF.jsx";

export default function App() {
  return (
    <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/all-schemes" element={<AllSchemes /> }/>

          <Route path="/mutual-funds" element={<MutualFunds />} />
          <Route path="/fixed-deposit" element={<FixedDeposit />} />
          <Route path="/gold-investment" element={<GoldInvestment />} />
          <Route path="/health-insurance" element={<HealthInsurance />} />
          <Route path="/ppf" element={<PPF />} />
          <Route path="/nps" element={<NPS />} />
        </Routes>
      </BrowserRouter>
  );
}