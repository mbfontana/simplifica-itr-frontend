import React from "react";
import { Main } from "../Main.tsx";
import { Sidebar } from "./Sidebar.tsx";
import Box from "@mui/material/Box";
import Stack from "@mui/material/Stack";

export const MainLayout = () => {
  return (
    <Stack direction="row" alignItems="flex-start" justifyContent="flex-start">
      <Sidebar />
      <Box width="100%" height="100%">
        <Main />
      </Box>
    </Stack>
  );
};
