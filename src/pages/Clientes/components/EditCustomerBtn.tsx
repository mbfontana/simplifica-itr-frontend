import { Button } from "@mui/material";
import EditIcon from "@mui/icons-material/Edit";
import { useQuery } from "react-query";
import { getCustomerById } from "../../../api/Customers";
import { useState } from "react";
import { GetCustomerResponse } from "../../../api/Customers/types";

export const EditCustomerBtn = ({ selectionModel }) => {
  const [customer, setCustomer] = useState<GetCustomerResponse>();

  useQuery(["getCustomerById", selectionModel], () =>
    getCustomerById(selectionModel)
  );

  const handleEdit = async () => {
    const editCustomer = await getCustomerById(selectionModel);
    if (editCustomer.status.toString() === "200") {
      setCustomer(editCustomer.data);
    } else {
      setCustomer(null);
    }
  };

  return (
    <Button
      variant="contained"
      onClick={handleEdit}
      disabled={selectionModel.length === 0}
      sx={{
        backgroundColor: "blue",
        ":hover": {
          backgroundColor: "#002FA1",
        },
      }}
    >
      <EditIcon />
    </Button>
  );
};
