import { Stack, Box, Button, Dialog } from "@mui/material";
import { DataGrid, GridRowModel } from "@mui/x-data-grid";
import { useEffect, useState } from "react";
import { SearchBar } from "../../components/SearchBar";
import { useQuery } from "react-query";
import { getAllCustomers } from "../../api/Customers";
import { GetAllCustomersResponse } from "../../api/Customers/types";
import { CustomersColumns } from "./components/CustomersColumns";
import AddIcon from "@mui/icons-material/Add";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";
import { MainAPI } from "../../api/AuthenticatedAxios";
import { NewCustomer } from "../Main/components/NewCustomer";
import { Transition } from "../../components/Transition";

export const Customers = () => {
  const rowsQuery = useQuery(["customerRows"], getAllCustomers);
  const rows: GridRowModel<GetAllCustomersResponse[]> = rowsQuery.data?.data;

  useEffect(() => {}, [rows]);

  const [selectionModel, setSelectionModel] = useState([]);
  const [selectedData, setSelectedData] = useState<GetAllCustomersResponse>();
  const [searchTerm, setSearchTerm] = useState("");
  const [filteredData, setFilteredData] = useState(rows ? rows : []);
  const [openDialog, setOpenDialog] = useState(false);

  const handleOpenDialog = () => {
    setOpenDialog(true);
  };

  const handleCloseDialog = () => {
    setOpenDialog(false);
  };

  const handleSelectionChange = (newSelection) => {
    const newSelectionModel = newSelection.slice(-1);
    setSelectionModel(newSelectionModel);

    const selectedResult = rows.find((row) => row.id === newSelectionModel[0]);
    setSelectedData(selectedResult);
    console.log(selectedData);
  };

  const handleSearch = (value) => {
    setSearchTerm(value);
    const filteredResults = rows.filter(
      (item) =>
        item.firstName.toLowerCase().includes(value.toLowerCase()) ||
        item.lastName.toLowerCase().includes(value.toLowerCase()) ||
        item.email.toLowerCase().includes(value.toLowerCase()) ||
        item.cpf.toLowerCase().includes(value.toLowerCase()) ||
        item.phone.toLowerCase().includes(value.toLowerCase()) ||
        item.birth.toLowerCase().includes(value.toLowerCase())
    );
    setFilteredData(filteredResults);
  };

  const handleCreate = async () => {};

  const handleEdit = async () => {};

  const handleDelete = async () => {
    try {
      const response = await MainAPI.delete("/customers", {
        data: { cpf: selectedData.cpf },
      });
      console.log(response);
    } catch (error: any) {
      console.log("error", error);
    }
  };

  if (rows) {
    return (
      <>
        <Stack sx={{ width: "100%", height: "100%" }}>
          <Stack sx={{ margin: 2 }} spacing={2}>
            <Stack display="flex" direction="row" spacing={2}>
              <SearchBar
                placeholder="Pesquisar por cliente"
                onSearch={handleSearch}
              />
              <Button
                variant="contained"
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
              <Button variant="contained" onClick={handleOpenDialog}>
                <AddIcon />
              </Button>
            </Stack>
            <Box width="100%" height="calc(100vh - 100px)">
              <DataGrid
                rows={filteredData.length > 0 ? filteredData : rows}
                columns={CustomersColumns}
                checkboxSelection
                onSelectionModelChange={handleSelectionChange}
                selectionModel={selectionModel}
              />
            </Box>
          </Stack>
        </Stack>
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
  }

  return <h1>Loading</h1>;
};
