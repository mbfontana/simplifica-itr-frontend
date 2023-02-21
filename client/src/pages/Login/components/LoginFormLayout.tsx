import { useState } from "react";
import { Navigate, useNavigate } from "react-router-dom";
import {
  Stack,
  Box,
  Checkbox,
  Typography,
  Button,
  useMediaQuery,
} from "@mui/material";
import { GreenButton } from "../../../components/GreenButton";
import { theme } from "../../../global/theme";
import { useFormContext } from "react-hook-form";
import * as Form from "./LoginForm";
import { useQuery } from "react-query";
import { loginUser } from "../../../api/Login";
import { setAxiosToken } from "../../../api/AuthenticatedAxios";

export const LoginFormLayout = () => {
  const [checkbox, setCheckbox] = useState(false);
  const breakPoint = useMediaQuery("(min-width:712px)");
  const navigate = useNavigate();
  const { handleSubmit } = useFormContext();

  const onSubmit = (e) => {
    // <QueryLogin email={e.email} password={e.password} />;

    var myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");
    var raw = JSON.stringify({
      email: e.email,
      password: e.password,
    });
    var requestOptions = {
      method: "POST",
      headers: myHeaders,
      body: raw,
    };
    fetch("https://localhost:7072/api/user/login", requestOptions)
      .then((response) => response.json())
      .then((result) => {
        console.log(result);
        if (result.token !== undefined) {
          setAxiosToken("main", result.token);
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
    <Stack
      height="100vh"
      width="100vw"
      sx={{ backgroundImage: "url(images/login_background3.svg)" }}
    >
      <Stack
        height={breakPoint ? "auto" : "100vh"}
        width={breakPoint ? "auto" : "100vw"}
        sx={{
          margin: "auto",
          backgroundColor: theme.palette.background.default,
          boxShadow: "0px 4px 24px rgb(0 0 0 / 10%)",
        }}
      >
        <Stack
          spacing={6}
          sx={{
            padding: breakPoint
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
            <Stack spacing={2}>
              <Box sx={{ display: "flex", alignItems: "flex-end" }}>
                <Form.InputEmail />
              </Box>
              <Box sx={{ display: "flex", alignItems: "flex-end" }}>
                <Form.InputPassword />
              </Box>
              <Stack
                direction="row"
                justifyContent="flex-start"
                alignItems="center"
              >
                <Checkbox
                  onChange={(e) => setCheckbox(e.target.checked)}
                  id="rememberMe"
                  sx={{ ml: "-12px" }}
                />
                <Typography
                  variant="body2"
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
          <Stack
            direction="row"
            alignItems="center"
            justifyContent="flex-start"
            spacing={1}
            mt={10}
          >
            <Typography variant="body2" color={theme.palette.text.secondary}>
              Novo por aqui?
            </Typography>
            <Stack
              direction="row"
              alignItems="center"
              justifyContent="baseline"
            >
              <Typography
                variant="body1"
                color={theme.palette.primary.main}
                onClick={() => navigate("/register")}
                sx={{ cursor: "pointer" }}
              >
                Assine agora
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

type QueryLoginProps = {
  email: string;
  password: string;
};

// export const QueryLogin = ({ email, password }: QueryLoginProps) => {
//   const loginResponse = useQuery(["login", email, password], ({ queryKey }) =>
//     loginUser(queryKey[1] as string, queryKey[2] as string)
//   );
//   const loginData = loginResponse.data?.data;

//   if (loginData) {
//     return <Navigate to="/main" />;
//   }
//   console.log("login");
//   return <></>;
// };