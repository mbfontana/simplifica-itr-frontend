import { Button, Dialog } from "@mui/material";
import EditIcon from "@mui/icons-material/Edit";
import { useState } from "react";
import { Transition } from "../../../components/Transition";
import { EditCustomer } from "./EditCustomer";

export const EditCustomerBtn = ({ selectionModel, selectedData }) => {
  const [openDialog, setOpenDialog] = useState(false);

  const handleOpenDialog = () => {
    setOpenDialog(true);
  };

  const handleCloseDialog = () => {
    setOpenDialog(false);
  };

  return (
    <>
      <Button
        variant="contained"
        disabled={selectionModel.length === 0}
        onClick={handleOpenDialog}
        sx={{
          backgroundColor: "blue",
          ":hover": {
            backgroundColor: "#002FA1",
          },
        }}
      >
        <EditIcon />
      </Button>
      <Dialog
        open={openDialog}
        onClose={handleCloseDialog}
        TransitionComponent={Transition}
      >
        {/* Calls the component that controls the forms with the defaultValues and the FormProvider (root component) */}
        <EditCustomer customerId={Number(selectionModel)} />
      </Dialog>
    </>
  );
};
