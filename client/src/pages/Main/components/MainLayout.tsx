import React from "react";
import { Main } from "../Main.tsx";
import Box from "@mui/material/Box";
import Navbar from "./Navbar.tsx";
import Sidebar from "./Sidebar.tsx";

export const MainLayout = () => {
  return (
    <>
      <Navbar />
      <Sidebar />
      <Box width="100%" height="100%" mt="80px">
        <Main />
      </Box>
    </>
  );
};
