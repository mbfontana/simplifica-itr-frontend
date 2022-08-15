
import { LoginForm } from "./components/LoginForm";
import { Box, Stack, Button } from "@mui/material";
import { useNavigate } from "react-router-dom";

export const Login = () => {
  const navigate = useNavigate();
  return (
    <Stack
      direction="row"
      justifyContent="flex-start"
      alignItems="flex-start"
      sx={{ height: "100vh" }}
    >
      <Stack
        spacing={20}
        sx={{ height: "100%", minWidth: "400px", p: 5, pr: 15 }}
      >
        <Button onClick={() => navigate("/")}>
          <Box component="img" src="logo.svg" alt="Logo" width="100%" />
        </Button>
        <LoginForm />
      </Stack>
      <Box component="img" src="home.svg" alt="Accountant" />
    </Stack>
  );
};
