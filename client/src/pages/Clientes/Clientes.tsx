import { Stack, Box } from "@mui/material";
import { DataGrid, GridRowsProp, GridColDef } from "@mui/x-data-grid";
import { SearchBar } from "../../components/SearchBar";

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
        <SearchBar
          placeholder="Pesquisar por cliente"
          onChange={(e) => console.log(e)}
        />
        <Box width="100%" height="calc(100vh - 100px)">
          <DataGrid checkboxSelection rows={rows} columns={columns} />
        </Box>
      </Stack>
    </Stack>
  );
};
