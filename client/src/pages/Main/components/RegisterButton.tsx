import { Button, Slide, Stack, TextField, Typography } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import { GreenButton } from "../../../components/GreenButton";
import { useState, forwardRef, useEffect } from "react";
import { RegisterDialog } from "./RegisterDialog";

export const RegisterButton = () => {
  const [open, setOpen] = useState(true);

  const handleOpen = () => {
    setOpen(true);
  };

  return (
    <>
      <GreenButton
        sx={{
          width: "85%",
          justifyContent: "flex-start",
          borderRadius: 5,
        }}
        onClick={handleOpen}
      >
        <Stack
          direction="row"
          justifyContent="flex-start"
          alignItems="center"
          spacing={2}
        >
          <AddIcon sx={{ color: "#fff" }} />
          <Typography color="white" variant="body2">
            Cadastrar
          </Typography>
        </Stack>
      </GreenButton>
      <RegisterDialog open={open} />
    </>
  );
};
