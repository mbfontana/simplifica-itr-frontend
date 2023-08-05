import {
  Card,
  CardContent,
  Dialog,
  Slide,
  Stack,
  Typography,
} from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import { GreenButton } from "../../../components/GreenButton";
import { useState, forwardRef } from "react";
import { TransitionProps } from "@mui/material/transitions";
import { NewCustomer } from "./NewCustomer";

export const NewCustomerButton = () => {
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
          <AddIcon sx={{ color: "#fff" }} />
          <Typography color="white" variant="body2">
            Cadastrar cliente
          </Typography>
        </Stack>
      </GreenButton>
      <Dialog
        open={openDialog}
        onClose={handleCloseDialog}
        TransitionComponent={Transition}
      >
        {/* Calls the component that controls the forms with the defaultValues and the FormProvider (root component) */}
        <NewCustomer />
      </Dialog>
    </>
  );
};

const Transition = forwardRef(function Transition(
  props: TransitionProps & {
    children: React.ReactElement<any, any>;
  },
  ref: React.Ref<unknown>
) {
  return <Slide direction="up" ref={ref} {...props} />;
});
