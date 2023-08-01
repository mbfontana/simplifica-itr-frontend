import { Stack, Box } from "@mui/material";
import { DataGrid, GridRowsProp, GridColDef } from "@mui/x-data-grid";
import { useContext } from "react";
import { useStore } from "zustand";
import { SearchBar } from "../../components/SearchBar";
import { ClientesTableContext } from "../../stores/ClientesTableContext";

const rows: GridRowsProp = [
  { id: 1, nome: "Matheus Begosso Fontana", cpf: "480.588.188-79" },
  { id: 2, nome: "Maria Paula Bernardo", cpf: "021.853.912-76" },
];

const columns: GridColDef[] = [
  { field: "nome", headerName: "Nome" },
  { field: "cpf", headerName: "CPF" },
];

export const Clientes = () => {
  return (
    <Stack sx={{ width: "100%", height: "100%" }}>
      <Stack sx={{ margin: 2 }} spacing={2}>
        <ClientesSearchBar placeholder="Pesquisar por cliente" />
        <Box width="100%" height="calc(100vh - 100px)">
          <DataGrid checkboxSelection rows={rows} columns={columns} />
        </Box>
      </Stack>
    </Stack>
  );
};

type ClientesSearchBarProps = {
  placeholder: string;
};

const ClientesSearchBar = ({ placeholder }: ClientesSearchBarProps) => {
  const store = useContext(ClientesTableContext);
  const setValueFilter = useStore(store, (e) => e.setFilterValue);

  return <SearchBar placeholder={placeholder} onChange={setValueFilter} />;
};
