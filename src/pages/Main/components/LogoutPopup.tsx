import { Card, CardContent, Stack, Typography } from "@mui/material";
import { LoadingSpinner } from "../../../components/LoadingSpinner";
import { useEffect } from "react";
import { useSessionStore } from "../../../stores/SessionStore";
import { useNavigate } from "react-router-dom";

export const LogoutPopup = () => {
  const navigate = useNavigate();

  useEffect(() => {
    setTimeout(() => {
      useSessionStore.getState().clear();
      navigate("/");
    }, 1000);
  }, []);

  return (
    <Card>
      <CardContent>
        <Stack spacing={4} padding={1}>
          <Typography>Estamos te desconectando</Typography>
          <LoadingSpinner />
        </Stack>
      </CardContent>
    </Card>
  );
};
