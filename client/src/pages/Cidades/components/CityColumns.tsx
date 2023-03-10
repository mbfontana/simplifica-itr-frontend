import { GridColDef } from "@mui/x-data-grid";

export const CityColumns: GridColDef[] = [
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