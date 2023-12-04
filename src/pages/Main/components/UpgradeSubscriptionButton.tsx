import { Button, Stack, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";
import RocketLaunchIcon from "@mui/icons-material/RocketLaunch";

export const UpgradeSubscriptionButton = () => {
  const navigate = useNavigate();

  return (
    <Button
      sx={{
        border: "solid 1px yellow",
        backgroundColor: "transparent",
        color: "white",
        textTransform: "none",
      }}
    >
      <Stack direction="row" spacing={1}>
        <RocketLaunchIcon sx={{ color: "yellow" }} />
        <Typography>Aprimorar Plano</Typography>
      </Stack>
    </Button>
  );
};
