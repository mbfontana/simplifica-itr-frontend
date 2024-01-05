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
      alignItems="space-between"
      justifyContent="flex-start"
      height="100vh"
      minWidth="280px"
    >
      <Stack
        direction="column"
        alignItems="flex-start"
        justifyContent="flex-start"
        spacing={4}
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
      </Stack>
      <Stack
        padding={3}
        height="70px"
        sx={{
          backgroundColor: "black",
          borderTop: `solid 1px ${theme.palette.text.secondary}`,
        }}
      >
        <UpgradeSubscriptionButton />
      </Stack>
    </Stack>
  );
};
