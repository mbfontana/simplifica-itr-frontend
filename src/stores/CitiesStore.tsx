import { create } from "zustand";
import { persist } from "zustand/middleware";
import { GetAllCitiesResponse } from "../api/Cities/types";

type CitiesStoreProps = {
  cities: GetAllCitiesResponse[];
  setCities: (e: GetAllCitiesResponse[]) => void;
};

export const useCitiesStore = create<CitiesStoreProps>()(
  persist(
    (set) => ({
      cities: undefined,
      setCities: (e) => set(() => ({ cities: e })),
    }),
    {
      name: "simplifica-itr-cities",
      getStorage: () => sessionStorage,
    }
  )
);
