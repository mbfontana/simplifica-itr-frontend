import React from "react";
import { Stack, Typography } from "@mui/material";
import { theme } from "../../../global/theme.tsx";

type SidebarNavigationRow = { children?: React.ReactNode; text: string };

export const SidebarNavigationRow = ({
  children,
  text,
}: SidebarNavigationRow) => {
  return (
    <Stack
      direction="row"
      justifyContent="flex-start"
      alignItems="center"
      sx={{
        height: "50px",
        paddingLeft: "20px",
        "&:hover": {
          backgroundColor: "#404040",
          cursor: "pointer",
        },
      }}
    >
      {children}
      <Typography
        variant="body2"
        sx={{ padding: "20px", color: theme.palette.text.secondary }}
      >
        {text}
      </Typography>
    </Stack>
  );
};
