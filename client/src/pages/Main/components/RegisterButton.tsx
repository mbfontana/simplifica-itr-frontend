import { Box, Button, Stack, Typography } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";

import { GreenButton } from "../../../components/GreenButton";

export const RegisterButton = () => {
  return (
    <GreenButton
      sx={{
        width: "85%",
        justifyContent: "flex-start",
        borderRadius: 5,
      }}
    >
      <Stack
        direction="row"
        justifyContent="flex-start"
        alignItems="center"
        spacing={2}
      >
        <AddIcon sx={{ color: "#fff" }} />
        <Typography color="white" variant="body2">
          Cadastrar
        </Typography>
      </Stack>
    </GreenButton>
  );
};
