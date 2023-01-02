import { LoginFormLayout } from "./components/LoginFormLayout";
import { Box, Stack, Button, useMediaQuery, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { theme } from "../../global/theme";
import { FormProvider, useForm } from "react-hook-form";

type LoginFormInternalType = {
  email: string;
  password: string;
  checkbox: boolean;
};

export const Login = () => {
  const formHook = useForm<LoginFormInternalType>({
    defaultValues: {
      email: "",
      password: "",
    },
  });
  const navigate = useNavigate();
  const breakPoint = useMediaQuery("(min-width:712px)");

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

          <FormProvider {...formHook}>
            <LoginFormLayout />
          </FormProvider>

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
              justifyContent="flex-start"
            >
              <Typography
                variant="body1"
                color={theme.palette.primary.main}
                onClick={() => navigate("/register")}
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

// Old login layout
//
// <Stack
//   direction="row"
//   justifyContent="flex-start"
//   alignItems="flex-start"
//   height="100vh"
//   width="100vw"
// >
//   <Stack
//     spacing={20}
//     sx={{ height: "100%", minWidth: "350px", p: 5, pr: 15 }}
//   >
//     <Button
//       onClick={() => navigate("/")}
//       sx={{ "&:hover": { backgroundColor: "white" } }}
//     >
//       <Box component="img" src="logo.svg" alt="Logo" width="100%" />
//     </Button>
//     <LoginForm />
//   </Stack>
//   <Box component="img" src="home.svg" alt="Accountant" height="100%" />
// </Stack>
//
