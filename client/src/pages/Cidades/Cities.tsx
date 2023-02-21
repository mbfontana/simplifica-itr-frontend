import { Stack, Box } from "@mui/material";
import { DataGrid, GridColDef, GridRowModel } from "@mui/x-data-grid";
import { useQuery } from "react-query";
import { getAllCities } from "../../api/Cities";
import { GetAllCitiesResponse } from "../../api/Cities/types";
import { SearchBar } from "../../components/SearchBar";

const columns: GridColDef[] = [
  { field: "name", headerName: "Nome", type: "string", minWidth: 200 },
  { field: "state", headerName: "Estado", flex: 1 },
  {
    field: "aptidaoBoa",
    headerName: "Aptidão Boa",
    flex: 2,
    renderCell: (data) => `R$ ${data.value}`,
  },
  {
    field: "aptidaoRegular",
    headerName: "Aptidão Regular",
    flex: 2,
    renderCell: (data) => `R$ ${data.value}`,
  },
  {
    field: "aptidaoRestrita",
    headerName: "Aptidão Restrita",
    flex: 2,
    renderCell: (data) => `R$ ${data.value}`,
  },
  {
    field: "pastagemPlantada",
    headerName: "Pastagem Plantada",
    flex: 2,
    renderCell: (data) => `R$ ${data.value}`,
  },
  {
    field: "silvicultura",
    headerName: "Silvicultura",
    flex: 2,
    renderCell: (data) => `R$ ${data.value}`,
  },
  {
    field: "preservacao",
    headerName: "Preservação",
    flex: 2,
    renderCell: (data) => `R$ ${data.value}`,
  },
  { field: "font", headerName: "Fonte", flex: 0.5 },
];

export const Cities = () => {
  const allCitiesResponse = useQuery(["cityRows"], getAllCities);
  const rows: GridRowModel<GetAllCitiesResponse[]> =
    allCitiesResponse.data?.data;

  if (rows) {
    return (
      <Stack sx={{ width: "100%", height: "100%" }}>
        <Stack sx={{ margin: 2 }} spacing={2}>
          <SearchBar
            placeholder="Pesquisar por cidade"
            onChange={(e) => console.log(e)}
          />
          <Box width="100%" height="calc(100vh - 100px)">
            <DataGrid rows={rows} columns={columns} />
          </Box>
        </Stack>
      </Stack>
    );
  }

  <h1>Loading</h1>;
};
