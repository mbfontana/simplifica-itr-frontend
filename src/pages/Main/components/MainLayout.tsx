import { Main } from "../Main";
import { Sidebar } from "./Sidebar";
import Box from "@mui/material/Box";
import Stack from "@mui/material/Stack";
import { Outlet } from "react-router-dom";

export const MainLayout = () => {
  return (
    <Stack direction="row" alignItems="flex-start" justifyContent="flex-start">
      <Sidebar />
      <Box width="100%" height="100vh">
        <Outlet />
      </Box>
    </Stack>
  );
};
