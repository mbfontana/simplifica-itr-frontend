import { GridColDef } from "@mui/x-data-grid";

export const CustomersColumns: GridColDef[] = [
  { field: "firstName", headerName: "Nome", type: "string", flex: 1 },
  //{ field: "lastName", headerName: "Sobrenome", type: "string", flex: 1 },
  { field: "email", headerName: "E-mail", type: "string", flex: 1 },
  {
    field: "cpf",
    headerName: "CPF",
    type: "string",
    flex: 1,
    valueFormatter: (e) =>
      e.value.replace(/(\d{3})(\d{3})(\d{3})/, "$1.$2.$3."),
  },
  {
    field: "phone",
    headerName: "Telefone",
    type: "string",
    flex: 1,
    valueFormatter: (e) =>
      e.value.replace(/(\d{2})(\d{5})(\d{4})/, "($1) $2-$3"),
  },
  {
    field: "birth",
    headerName: "Data de nascimento",
    type: "string",
    flex: 1,
  },
];
