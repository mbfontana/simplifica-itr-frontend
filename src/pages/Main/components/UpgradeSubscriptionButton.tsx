import { Button, Dialog, Stack, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";
import RocketLaunchIcon from "@mui/icons-material/RocketLaunch";
import { useState } from "react";
import { Transition } from "../../../components/Transition";
import { AppConfig } from "../../../global/AppGlobalConfig";

export const UpgradeSubscriptionButton = () => {
  const navigate = useNavigate();

  const handleClick = () => {
    const baseURL = window.location.origin;
    window.open(`${baseURL}/subscriptions`, "_blank");
  };

  return (
    <Button
      sx={{
        border: "solid 2px #fcb100",
        borderRadius: "4px",
        backgroundColor: "#1A1A1A",
        color: "white",
        textTransform: "none",
      }}
      onClick={() => handleClick()}
    >
      <Stack direction="row" alignItems="center" spacing={1}>
        <RocketLaunchIcon sx={{ width: "24px", color: "#fcb100" }} />
        <Typography fontSize="18px" lineHeight="24px" color="#fcb100">
          Aprimorar Plano
        </Typography>
      </Stack>
    </Button>
  );
};
