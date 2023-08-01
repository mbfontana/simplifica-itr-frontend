import create from "zustand";

type CityTableStoreProps = {
  filterValue: string;
  setFilterValue: (e: string) => void;
};

export const useCityFilterStore = create<CityTableStoreProps>()((set) => ({
  filterValue: "",
  setFilterValue: (e: string) => set({ filterValue: e }),
}));
