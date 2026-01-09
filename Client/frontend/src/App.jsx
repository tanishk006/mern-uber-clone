import React from "react";
import { Routes, Route } from "react-router-dom";

import Home from "./Pages/Home/home";
import UserLogin from "./Pages/userLogin/userlogin";
import UserSignup from "./Pages/userSignup/userSignUp";
import CaptainLogin from "./Pages/captainlogin/captainLogin";
import CaptainSignup from "./Pages/captainSignup/captainSignup";


const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/login" element={<UserLogin />} />
      <Route path="/signup" element={<UserSignup />} />
      <Route path="/captain-login" element={<CaptainLogin />} />
      <Route path="/captain-signup" element={<CaptainSignup />} />
    </Routes>
  );
};

export default App;
