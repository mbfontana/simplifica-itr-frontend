
import Box from "@mui/material/Box";
import { Outlet } from "react-router-dom";
import { NavBar } from "./NavBar";

export const HomeLayout = () => {
  return (
    <>
      <NavBar />
      <Box pt="30px" mt="80px">
        <Box maxWidth="1220px" m="0 auto">
          <Outlet />
        </Box>
      </Box>
    </>
  );
};
