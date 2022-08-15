import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useQuery, useQueryClient } from "react-query";
import {
  Stack,
  Box,
  TextField,
  Checkbox,
  Button,
  Input,
  Typography,
  FormControl,
} from "@mui/material";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import KeyIcon from "@mui/icons-material/Key";
import { GreenButton } from "../../../components/GreenButton";
import { resourceLimits } from "worker_threads";

export const LoginForm = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [checkbox, setCheckbox] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    var myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/x-www-form-urlencoded");

    var urlencoded = new URLSearchParams();
    urlencoded.append("email", email);
    urlencoded.append("password", password);

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
    <form>
      <Stack spacing={2}>
        <Box sx={{ display: "flex", alignItems: "flex-end" }}>
          <AccountCircleIcon sx={{ color: "action.active", mr: 1, my: 0.5 }} />
          <TextField
            id="email"
            label="E-mail"
            type="text"
            onChange={(e) => setEmail(e.target.value)}
            variant="standard"
            sx={{ width: "100%" }}
          />
        </Box>
        <Box sx={{ display: "flex", alignItems: "flex-end" }}>
          <KeyIcon sx={{ color: "action.active", mr: 1, my: 0.5 }} />
          <TextField
            id="password"
            label="Senha"
            type="password"
            onChange={(e) => setPassword(e.target.value)}
            variant="standard"
            sx={{ width: "100%" }}
          />
        </Box>
        <Stack direction="row" justifyContent="flex-start" alignItems="center">
          <Checkbox
            onChange={(e) => setCheckbox(e.target.checked)}
            id="rememberMe"
            color="default"
            sx={{ ml: "-9px" }}
          />
          <Typography variant="body2" fontSize={20}>
            Me mantenha conectado
          </Typography>
        </Stack>
        <Box>
          <GreenButton
            sx={{ width: "100%" }}
            type="submit"
            onClick={(e) => handleSubmit(e)}
          >
            Entrar
          </GreenButton>
        </Box>
      </Stack>
    </form>
  );
};
