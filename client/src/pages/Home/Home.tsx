import React from "react";
import { useNavigate } from "react-router-dom";
import { Stack, Typography } from "@mui/material";
import { GreenButton } from "../../components/GreenButton.tsx";

export const Home = () => {
  const navigate = useNavigate();
  return (
    <Stack
      direction="column"
      justifyContent="center"
      alignItems="center"
      spacing={4}
      sx={{ width: "80%", m: "0 auto" }}
    >
      <Typography variant="h1" align="center">
        Economize o seu tempo, salve o seu dinheiro
      </Typography>

      <Typography variant="body1" align="center">
        Semanas de trabalho finalizadas em poucas horas.
      </Typography>

      <GreenButton
        variant="contained"
        onClick={() =>
          localStorage.getItem("token") ? navigate("/main") : navigate("/login")
        }
        sx={{
          color: "white",
          width: "300px",
        }}
      >
        Acessar
      </GreenButton>
    </Stack>
  );
};
