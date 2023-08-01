import { createContext } from "react";
import { createStore } from "zustand";

type ClientesTableContextType = {
  filterValue: string;
  setFilterValue: (e: string) => void;
};

export const ClientesTableStore = createStore<ClientesTableContextType>()(
  (set) => ({
    filterValue: "",
    setFilterValue: (e: string) => set({ filterValue: e }),
  })
);

export const ClientesTableContext = createContext(ClientesTableStore);
