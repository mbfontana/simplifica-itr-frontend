import { Avatar, Button, Stack, Typography, Box } from "@mui/material";

import { theme } from "../../../global/theme";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

export const UserInfo = () => {
  return (
    <Stack
      direction="row"
      justifyContent="flex-start"
      alignItems="center"
      spacing={2}
      padding="24px 24px 0 24px"
    >
      <Avatar alt="" src="" />
      <Stack
        direction="row"
        justifyContent="flex-start"
        alignItems="center"
        spacing={0}
      >
        <Typography
          variant="body2"
          sx={{ color: theme.palette.text.secondary }}
        >
          Valmir Advocacia
        </Typography>
        <ExpandMoreIcon
          sx={{ color: theme.palette.text.secondary, width: "20px" }}
        />
      </Stack>
    </Stack>
  );
};
