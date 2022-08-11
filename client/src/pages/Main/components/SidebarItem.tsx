import { Stack } from "@mui/material";
import React from "react";

type SidebarItemProps = {
  children?: React.ReactNode;
  alignItems: string;
};

export const SidebarItem = ({ children, alignItems }: SidebarItemProps) => {
  return (
    <Stack alignItems={alignItems} sx={{ width: "100%" }}>
      {children}
    </Stack>
  );
};
