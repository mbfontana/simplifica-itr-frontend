import { Dialog, Stack, Typography } from "@mui/material";
import PostAddIcon from "@mui/icons-material/PostAdd";
import { GreenButton } from "../../../components/GreenButton";
import { useState } from "react";
import { Transition } from "../../../components/Transition";
import { GenerateTaxReport } from "./GenerateTaxReport";

export const GenerateTaxReportBtn = () => {
  const [openDialog, setOpenDialog] = useState(false);

  const handleOpenDialog = () => {
    setOpenDialog(true);
  };

  const handleCloseDialog = () => {
    setOpenDialog(false);
  };

  return (
    <>
      <GreenButton
        sx={{
          width: "85%",
          justifyContent: "flex-start",
          borderRadius: 5,
        }}
        onClick={handleOpenDialog}
      >
        <Stack
          direction="row"
          justifyContent="flex-start"
          alignItems="center"
          spacing={2}
        >
          <PostAddIcon sx={{ color: "#fff" }} />
          <Typography color="white" variant="body2">
            Gerar declaração
          </Typography>
        </Stack>
      </GreenButton>
      <Dialog
        open={openDialog}
        onClose={handleCloseDialog}
        TransitionComponent={Transition}
      >
        <GenerateTaxReport />
      </Dialog>
    </>
  );
};
