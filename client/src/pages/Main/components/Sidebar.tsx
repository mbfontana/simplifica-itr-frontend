import React from "react";
import { Box, Stack, Typography } from "@mui/material";
import { theme } from "../../../global/theme.tsx";
import { UserInfo } from "./UserInfo.tsx";
import { RegisterButton } from "./RegisterButton.tsx";
import { MenuItems } from "./MenuItems.tsx";
import { SidebarItem } from "./SidebarItem.tsx";

export const Sidebar = () => {
  return (
    <Stack
      direction="column"
      alignItems="flex-start"
      justifyContent="flex-start"
      spacing={4}
      minWidth="280px"
      height="100vh"
      sx={{ backgroundColor: "#1A1A1A" }}
    >
      <SidebarItem alignItems="flex-start">
        <UserInfo />
      </SidebarItem>
      <SidebarItem alignItems="center">
        <RegisterButton />
      </SidebarItem>
      <MenuItems />
    </Stack>
  );
};
