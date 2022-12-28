import Box from "@mui/material/Box";
import { Outlet } from "react-router-dom";
import { NavBar } from "./NavBar";

export const HomeLayout = () => {
  return (
    <Box maxHeight="100vh" height="100vh">
      <Box position="fixed" top="0" width="100%" zIndex={11}>
        <NavBar />
      </Box>
      <Box pt="50px" mt="80px">
        <Box maxWidth="1600px" m="0 auto">
          <Outlet />
        </Box>
      </Box>
    </Box>
  );
};
