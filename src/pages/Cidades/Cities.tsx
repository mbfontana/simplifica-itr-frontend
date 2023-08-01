import { useContext, useEffect, useState } from "react";
import { useStore } from "zustand";
import { Stack, Box } from "@mui/material";
import { DataGrid, GridColDef, GridRowModel } from "@mui/x-data-grid";
import { useQuery } from "react-query";
import { getAllCities } from "../../api/Cities";
import { GetAllCitiesResponse } from "../../api/Cities/types";
import { SearchBar } from "../../components/SearchBar";
import { useCityFilterStore } from "../../stores/CitiesTableContext";
import { CityColumns } from "./components/CityColumns";
import { useSessionStore } from "../../stores/SessionStore";

export const Cities = () => {
  //const filterValue = useStore(useCityFilterStore, (e) => e.filterValue);
  const rowsQuery = useQuery(["cityRows"], getAllCities);
  const rows: GridRowModel<GetAllCitiesResponse[]> = rowsQuery.data?.data;
  const filterValue = "";

  if (filterValue !== "") rows.map((e) => e.name.includes(filterValue));

  if (rows) {
    return (
      <Stack sx={{ width: "100%", height: "100%" }}>
        <Stack sx={{ margin: 2 }} spacing={2}>
          <SearchBar
            placeholder="Pesquisar por cidade"
            onChange={(searchValue) =>
              rows.map((row) => {
                return row.name.includes(searchValue);
              })
            }
          />
          <Box width="100%" height="calc(100vh - 100px)">
            <DataGrid rows={rows} columns={CityColumns} />
          </Box>
        </Stack>
      </Stack>
    );
  }

  <h1>Loading</h1>;
};
