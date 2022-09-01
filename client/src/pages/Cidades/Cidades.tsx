import { Stack, Box } from "@mui/material";
import { DataGrid, GridColDef, GridRowsProp } from "@mui/x-data-grid";
import { SearchBar } from "../../components/SearchBar";

const rows: GridRowsProp = [
  {
    id: 1,
    nome: "Cândido Mota",
    estado: "SP",
    aptidaoBoa: 123123,
    aptidaoRegular: 123123,
    aptidaoRestrita: 123123,
    pastagemPlantada: 123123,
    silvicultura: 123123,
    preservacao: 123123,
    fonte: 1,
  },
  {
    id: 2,
    nome: "Assis",
    estado: "SP",
    aptidaoBoa: 321312,
    aptidaoRegular: 321312,
    aptidaoRestrita: 321312,
    pastagemPlantada: 321312,
    silvicultura: 321312,
    preservacao: 321312,
    fonte: 1,
  },
];

const columns: GridColDef[] = [
  { field: "nome", headerName: "Nome", flex: 1 },
  { field: "estado", headerName: "Estado", flex: 1 },
  { field: "aptidaoBoa", headerName: "Aptidão Boa", flex: 1 },
  { field: "aptidaoRegular", headerName: "Aptidão Regular", flex: 1 },
  { field: "aptidaoRestrita", headerName: "Aptidão Restrita", flex: 1 },
  { field: "pastagemPlantada", headerName: "Pastagem Plantada", flex: 1 },
  { field: "silvicultura", headerName: "Silvicultura", flex: 1 },
  { field: "preservacao", headerName: "Preservação", flex: 1 },
  { field: "fonte", headerName: "Fonte", flex: 1 },
];

export const Cidades = () => {
  return (
    <Stack sx={{ width: "100%", height: "100%" }}>
      <Stack sx={{ margin: 2 }} spacing={2}>
        <SearchBar
          placeholder="Pesquise por cidade"
          onChange={(e) => console.log(e)}
        />
        <Box width="100%" height="calc(100vh - 100px)">
          <DataGrid rows={rows} columns={columns} />
        </Box>
      </Stack>
    </Stack>
  );
};
