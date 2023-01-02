import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Stack, Box, Checkbox, Typography } from "@mui/material";
import { GreenButton } from "../../../components/GreenButton";
import { theme } from "../../../global/theme";
import { useFormContext } from "react-hook-form";
import * as Form from "./LoginForm";

export const LoginFormLayout = () => {
  const [checkbox, setCheckbox] = useState(false);
  const navigate = useNavigate();
  const { handleSubmit } = useFormContext();

  const onSubmit = (e) => {
    var myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/x-www-form-urlencoded");

    var urlencoded = new URLSearchParams();
    urlencoded.append("email", e.email);
    urlencoded.append("password", e.password);

    var requestOptions = {
      method: "POST",
      headers: myHeaders,
      body: urlencoded,
    };

    fetch("http://localhost:3001/api/user/login", requestOptions)
      .then((response) => response.json())
      .then((result) => {
        console.log(result);
        if (result.token !== undefined) {
          if (checkbox) {
            localStorage.setItem("token", result.token);
          } else {
            sessionStorage.setItem("token", result.token);
          }
          navigate("/main");
        }
      })
      .catch((error) => console.log("error", error));
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Stack spacing={2}>
        <Box sx={{ display: "flex", alignItems: "flex-end" }}>
          <Form.InputEmail />
        </Box>
        <Box sx={{ display: "flex", alignItems: "flex-end" }}>
          <Form.InputPassword />
        </Box>
        <Stack direction="row" justifyContent="flex-start" alignItems="center">
          <Checkbox
            onChange={(e) => setCheckbox(e.target.checked)}
            id="rememberMe"
            sx={{ ml: "-12px" }}
          />
          <Typography
            variant="body1"
            fontSize={15}
            color={theme.palette.text.secondary}
          >
            Me mantenha conectado
          </Typography>
        </Stack>
        <Box>
          <GreenButton sx={{ width: "100%" }} type="submit">
            Entrar
          </GreenButton>
        </Box>
      </Stack>
    </form>
  );
};
