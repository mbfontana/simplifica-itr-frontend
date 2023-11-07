import { useState } from "react";
import { useNavigate } from "react-router-dom";
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
import { MainAPI } from "../../../api/AuthenticatedAxios";
import { useSessionStore } from "../../../stores/SessionStore";
import { LoginUserResponse } from "../../../api/Login/types";
import { getAllCities } from "../../../api/Cities";
import { useCitiesStore } from "../../../stores/CitiesStore";
import { getConditionTypes } from "../../../api/Conditions";
import { useConditionTypesStore } from "../../../stores/ConditionTypesStore";

export const LoginFormLayout = () => {
  const [checkbox, setCheckbox] = useState(false);
  const [errorMessage, setErrorMessage] = useState(false);
  const breakPoint = useMediaQuery("(min-width:712px)");
  const navigate = useNavigate();
  const { handleSubmit } = useFormContext();

  const tryLoginUser = async (e: { email: string; password: string }) => {
    try {
      const response = await MainAPI.post<LoginUserResponse>("/auth/login", {
        email: e.email,
        password: e.password,
      });
      const loggedUser = response.data;
      useSessionStore.getState().setFirstName(loggedUser.firstName);
      useSessionStore.getState().setLastName(loggedUser.lastName);
      useSessionStore.getState().setEmail(loggedUser.email);
      useSessionStore.getState().setToken(loggedUser.token);

      if (!useCitiesStore.getState().cities) {
        const citiesResponse = await getAllCities();
        if (citiesResponse) {
          useCitiesStore.getState().setCities(citiesResponse.data);
        }
      }

      if (!useConditionTypesStore.getState().conditionTypes) {
        const conditionTypesResponse = await getConditionTypes();
        if (conditionTypesResponse) {
          useConditionTypesStore
            .getState()
            .setConditionTypes(conditionTypesResponse.data);
        }
      }

      navigate("/main");
    } catch (error) {
      setErrorMessage(true);
    }
  };

  const onSubmitHandler = (values) => {
    tryLoginUser(values);
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
          <form onSubmit={handleSubmit(onSubmitHandler)}>
            {errorMessage && (
              <Typography color="red" padding={0} marginBottom={4}>
                Email ou senha incorretos
              </Typography>
            )}
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
