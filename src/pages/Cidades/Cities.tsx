import { Stack, Box } from "@mui/material";
import { DataGrid, GridRowModel } from "@mui/x-data-grid";
import { useQuery } from "react-query";
import { getAllCities } from "../../api/Cities";
import { GetAllCitiesResponse } from "../../api/Cities/types";
import { SearchBar } from "../../components/SearchBar";
import { CityColumns } from "./components/CityColumns";
import { useState } from "react";

export const Cities = () => {
  const rowsQuery = useQuery(["cityRows"], getAllCities);
  const rows: GridRowModel<GetAllCitiesResponse[]> = rowsQuery.data?.data;

  const [filteredData, setFilteredData] = useState(rows ? rows : []);
  const [searchTerm, setSearchTerm] = useState("");

  const handleSearch = (value) => {
    setSearchTerm(value);
    const filteredResults = rows.filter(
      (item) =>
        item.name.toLowerCase().includes(value.toLowerCase()) ||
        item.province.toLowerCase().includes(value.toLowerCase())
    );
    setFilteredData(filteredResults);
  };

  if (rows) {
    return (
      <Stack sx={{ width: "100%", height: "100%" }}>
        <Stack sx={{ margin: 2 }} spacing={2}>
          <SearchBar
            placeholder="Pesquisar por cidade"
            onSearch={handleSearch}
          />
          <Box width="100%" height="calc(100vh - 100px)">
            <DataGrid
              rows={filteredData.length > 0 ? filteredData : rows}
              columns={CityColumns}
            />
          </Box>
        </Stack>
      </Stack>
    );
  }

  return <h1>Loading</h1>;
};
