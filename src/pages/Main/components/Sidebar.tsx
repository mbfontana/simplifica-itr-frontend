import { Box, Stack, Typography } from "@mui/material";
import { theme } from "../../../global/theme";
import { UserInfo } from "./UserInfo";
import { GenerateTaxReportBtn } from "./GenerateTaxReportBtn";
import { MenuItems } from "./MenuItems";
import { SidebarItem } from "./SidebarItem";
import { UpgradeSubscriptionButton } from "./UpgradeSubscriptionButton";

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
        <GenerateTaxReportBtn />
      </SidebarItem>
      <MenuItems />
      <UpgradeSubscriptionButton />
    </Stack>
  );
};
