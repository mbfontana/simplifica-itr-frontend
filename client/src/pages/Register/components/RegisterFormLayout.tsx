import { useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  Stack,
  Box,
  useMediaQuery,
  Button,
  Grid,
  Typography,
} from "@mui/material";
import { GreenButton } from "../../../components/GreenButton";
import { theme } from "../../../global/theme";
import { useFormContext } from "react-hook-form";
import * as Form from "./RegisterForm";
import { RegisterFormInternalType } from "../Register";

export const RegisterFormLayout = () => {
  const mdBreakPoint = useMediaQuery("(min-width:712px)");
  const smBreakPoint = useMediaQuery("(min-width:600px)");
  const navigate = useNavigate();
  const { handleSubmit } = useFormContext();

  const onSubmit = (e: RegisterFormInternalType) => {
    var myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");

    var raw = JSON.stringify({
      name: `${e.firstName} ${e.lastName}`,
      email: e.email,
      cpf: e.cpf,
      password: e.password,
    });

    var requestOptions = {
      method: "POST",
      headers: myHeaders,
      body: raw,
    };

    fetch("https://localhost:7072/api/user/register", requestOptions)
      .then(() => navigate("/login"))
      .catch((error) => console.log("error", error));
  };

  return (
    <Stack
      height="100vh"
      width="100vw"
      sx={{ backgroundImage: "url(images/login_background3.svg)" }}
    >
      <Stack
        height={mdBreakPoint ? "auto" : "100vh"}
        width={mdBreakPoint ? "auto" : "100vw"}
        sx={{
          margin: "auto",
          backgroundColor: theme.palette.background.default,
          boxShadow: "0px 4px 24px rgb(0 0 0 / 10%)",
        }}
      >
        <Stack
          spacing={6}
          sx={{
            padding: mdBreakPoint
              ? "50px 80px 100px 80px"
              : "50px 50px 0px 50px ",
          }}
        >
          <Button
            onClick={() => navigate("/")}
            sx={{
              "&:hover": { backgroundColor: theme.palette.background.default },
            }}
          >
            <Box component="img" src="logo.svg" alt="Logo" width="100%" />
          </Button>
          <form onSubmit={handleSubmit(onSubmit)}>
            <Stack spacing={3}>
              <Box sx={{ display: "flex", alignItems: "flex-end" }}>
                <Form.InputEmail />
              </Box>
              <Stack>
                <Grid container width="100%" ml={0}>
                  <Grid
                    item
                    sm={6}
                    xs={12}
                    sx={smBreakPoint ? { pr: 1.5, pb: 0 } : { pr: 0, pb: 1.5 }}
                  >
                    <Form.InputFirstName />
                  </Grid>
                  <Grid
                    item
                    sm={6}
                    xs={12}
                    sx={smBreakPoint ? { pl: 1.5, pt: 0 } : { pl: 0, pt: 1.5 }}
                  >
                    <Form.InputLastName />
                  </Grid>
                </Grid>
              </Stack>
              <Box sx={{ display: "flex", alignItems: "flex-end" }}>
                <Form.InputCpf />
              </Box>
              <Box sx={{ display: "flex", alignItems: "flex-end" }}>
                <Form.InputPassword />
              </Box>
              <GreenButton type="submit" sx={{ width: "100%" }}>
                Continue
              </GreenButton>
            </Stack>
          </form>
          <Stack
            direction="row"
            alignItems="center"
            justifyContent="flex-start"
            spacing={1}
            mt={10}
          >
            <Typography variant="body2" color={theme.palette.text.secondary}>
              Já possui uma conta?
            </Typography>
            <Stack
              direction="row"
              alignItems="center"
              justifyContent="baseline"
            >
              <Typography
                variant="body1"
                color={theme.palette.primary.main}
                onClick={() => navigate("/login")}
                sx={{ cursor: "pointer" }}
              >
                Entre agora
              </Typography>
              <Typography variant="body2" color={theme.palette.text.secondary}>
                .
              </Typography>
            </Stack>
          </Stack>
        </Stack>
      </Stack>
    </Stack>
  );
};