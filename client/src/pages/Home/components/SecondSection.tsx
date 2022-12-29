import { Stack, Typography } from "@mui/material";
import { theme } from "../../../global/theme";

export const SecondSection = () => {
  return (
    <Stack
      padding="150px 0"
      spacing={4}
      sx={{ backgroundColor: theme.palette.primary.main }}
    >
      <Typography variant="h2" align="center">
        Title, Title, Title
      </Typography>
      <Typography variant="h2" align="center">
        Text, Text, Text, Text
      </Typography>
    </Stack>
  );
};
