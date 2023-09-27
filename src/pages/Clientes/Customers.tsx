import { Stack, Box, Button, Dialog, CircularProgress } from "@mui/material";
import { DataGrid, GridRowModel } from "@mui/x-data-grid";
import { useEffect, useState } from "react";
import { SearchBar } from "../../components/SearchBar";
import { useQuery, useQueryClient } from "react-query";
import { deleteCustomer, getAllCustomers } from "../../api/Customers";
import { GetAllCustomersResponse } from "../../api/Customers/types";
import { CustomersColumns } from "./components/CustomersColumns";
import { CreateCustomerBtn } from "./components/CreateCustomerBtn";
import { DeleteCustomerBtn } from "./components/DeleteCustomerBtn";
import { EditCustomerBtn } from "./components/EditCustomerBtn";
import { LoadingSpinner } from "../../components/LoadingSpinner";

export const Customers = () => {
  const rowsQuery = useQuery(["customerRows"], getAllCustomers);
  const rows: GridRowModel<GetAllCustomersResponse[]> = rowsQuery.data?.data;

  const [selectionModel, setSelectionModel] = useState([]);
  const [selectedData, setSelectedData] = useState<GetAllCustomersResponse>();
  const [searchTerm, setSearchTerm] = useState("");
  const [filteredData, setFilteredData] = useState(rows ? rows : []);

  const handleSelectionChange = (newSelection) => {
    const newSelectionModel = newSelection.slice(-1);
    setSelectionModel(newSelectionModel);

    const selectedResult = rows.find((row) => row.id === newSelectionModel[0]);
    setSelectedData(selectedResult);
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
              <EditCustomerBtn selectionModel={selectionModel} />
              <DeleteCustomerBtn
                selectedData={selectedData}
                selectionModel={selectionModel}
              />
              <CreateCustomerBtn />
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
      </>
    );
  }

  return <LoadingSpinner />;
};
