import React from "react";
import { Router, Routes, Route } from "react-router-dom";
import { useQuery } from "react-query";
import { fetchMessages } from "./api/index.ts";
import { Login } from "./pages/Login/Login.tsx";
import { Home } from "./pages/Home/Home.tsx";
import { Main } from "./pages/Main/Main.tsx";
import { HomeLayout } from "./components/HomeLayout.tsx";
import { CheckAuthentication } from "./components/CheckAuthentication.tsx";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<HomeLayout />}>
        <Route path="/" element={<Home />} />
      </Route>
      <Route path="login" element={<Login />} />
      <Route path="main" element={<CheckAuthentication />} />
    </Routes>
  );
};

export default App;
