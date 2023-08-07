import { Button } from "@mui/material";
import { deleteCustomer } from "../../../api/Customers";
import { useQueryClient } from "react-query";
import DeleteIcon from "@mui/icons-material/Delete";

export const DeleteCustomerBtn = ({ selectedData, selectionModel }) => {
  const queryClient = useQueryClient();

  console.log(selectionModel);

  const handleDelete = () => {
    deleteCustomer(selectedData.cpf)
      .then(() => queryClient.invalidateQueries("customerRows"))
      .catch();
  };

  return (
    <Button
      variant="contained"
      onClick={handleDelete}
      disabled={selectionModel.length === 0}
      sx={{
        backgroundColor: "red",
        ":hover": {
          backgroundColor: "#B50000",
        },
      }}
    >
      <DeleteIcon />
    </Button>
  );
};
