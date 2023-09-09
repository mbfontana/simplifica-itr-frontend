import {
  Button,
  Card,
  CardContent,
  Dialog,
  Stack,
  Typography,
} from "@mui/material";
import { deleteCustomer } from "../../../api/Customers";
import { useQueryClient } from "react-query";
import DeleteIcon from "@mui/icons-material/Delete";
import { useState } from "react";
import { Transition } from "../../../components/Transition";

export const DeleteCustomerBtn = ({ selectedData, selectionModel }) => {
  const [openDialog, setOpenDialog] = useState(false);
  const queryClient = useQueryClient();

  const handleOpenDialog = () => {
    setOpenDialog(true);
  };

  const handleCloseDialog = () => {
    setOpenDialog(false);
  };

  const handleDelete = () => {
    deleteCustomer(selectedData.cpf)
      .then(() => {
        queryClient.invalidateQueries("customerRows");
        handleCloseDialog();
      })
      .catch((err) => console.log(err));
  };

  return (
    <>
      <Button
        variant="contained"
        onClick={handleOpenDialog}
        disabled={selectionModel.length === 0}
        sx={{
          backgroundColor: "red",
          "&:hover": {
            backgroundColor: "#B50000",
          },
        }}
      >
        <DeleteIcon />
      </Button>
      <Dialog
        open={openDialog}
        onClose={handleCloseDialog}
        TransitionComponent={Transition}
      >
        <Card sx={{ overflowY: "auto" }}>
          <CardContent>
            <Typography
              sx={{
                borderBottom: "solid 1px",
                borderColor: "divider",
                paddingBottom: 1,
              }}
            >
              EXCLUIR CLIENTE
            </Typography>
            <Typography marginTop={4} marginBottom={4}>
              Tem certeza que deseja excluir o cliente selecionado?
            </Typography>
            <Stack direction="row" justifyContent="flex-end" gap={3}>
              <Button
                onClick={handleDelete}
                sx={{
                  width: "120px",
                  backgroundColor: "red",
                  color: "white",
                  "&:hover": { backgroundColor: "#B50000", color: "white" },
                }}
              >
                Apagar
              </Button>
              <Button onClick={handleCloseDialog} variant="contained">
                Cancelar
              </Button>
            </Stack>
          </CardContent>
        </Card>
      </Dialog>
    </>
  );
};
