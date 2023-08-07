import { Button, Dialog } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import { NewCustomer } from "../../Main/components/NewCustomer";
import { useState } from "react";
import { Transition } from "../../../components/Transition";

export const CreateCustomerBtn = () => {
  const [openDialog, setOpenDialog] = useState(false);

  const handleOpenDialog = () => {
    setOpenDialog(true);
  };

  const handleCloseDialog = () => {
    setOpenDialog(false);
  };

  return (
    <>
      <Button variant="contained" onClick={handleOpenDialog}>
        <AddIcon />
      </Button>
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
