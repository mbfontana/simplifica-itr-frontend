import { Box, Stack, Typography } from "@mui/material";
import { theme } from "../../../global/theme";
import { UserInfo } from "./UserInfo";
import { NewClienteButton } from "./NewClienteButton";
import { MenuItems } from "./MenuItems";
import { SidebarItem } from "./SidebarItem";

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
        {/* Calls the button to open the forms that registers a new cliente */}
        <NewClienteButton />
      </SidebarItem>
      <MenuItems />
    </Stack>
  );
};
