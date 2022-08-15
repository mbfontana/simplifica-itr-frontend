import { Stack, Typography } from "@mui/material";
import { Box } from "@mui/system";
import { useNavigate } from "react-router-dom";
import { theme } from "../../../global/theme";

type SidebarNavigationRow = {
  children?: React.ReactNode;
  text: string;
  path: string;
};

export const SidebarNavigationRow = ({
  children,
  text,
  path,
}: SidebarNavigationRow) => {
  const navigate = useNavigate();
  return (
    <Box onClick={() => navigate(`./${path}`)}>
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
    </Box>
  );
};
