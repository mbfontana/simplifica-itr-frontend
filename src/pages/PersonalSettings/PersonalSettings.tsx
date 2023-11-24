import { Box, Stack } from "@mui/material";
import { Outlet } from "react-router-dom";
import { PersonalSettingsLayout } from "./components/PersonalSettingsLayout";

export const PersonalSettings = () => {
  return (
    <>
      <PersonalSettingsLayout />
      <Stack
        direction="row"
        alignItems="flex-start"
        justifyContent="flex-start"
      >
        <Box width="100%" height="100vh">
          <Outlet />
        </Box>
      </Stack>
    </>
  );
};
