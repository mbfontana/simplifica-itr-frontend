import { Stack } from "@mui/material";
import React from "react";
import { theme } from "../../../global/theme.tsx";

type SidebarNavigationProps = {
  children?: React.ReactNode;
};

export const SidebarNavigation = ({ children }: SidebarNavigationProps) => {
  return (
    <Stack
      spacing={1}
      sx={{
        width: "100%",
        color: theme.palette.text.secondary,
      }}
    >
      {children}
    </Stack>
  );
};
