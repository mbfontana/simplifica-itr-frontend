import { create } from "zustand";
import { persist } from "zustand/middleware";
import {
  GetAllCustomersResponse,
  PropertyObject,
} from "../api/Customers/types";

type GenerateTaxStoreProps = {
  customer: GetAllCustomersResponse;
  properties: PropertyObject[];
  setCustomer: (e: GetAllCustomersResponse) => void;
  setProperties: (e: PropertyObject[]) => void;
};

export const useGenerateTaxStore = create<GenerateTaxStoreProps>()(
  persist(
    (set) => ({
      customer: undefined,
      properties: undefined,
      setCustomer: (e) => set(() => ({ customer: e })),
      setProperties: (e) => set(() => ({ properties: e })),
    }),
    {
      name: "simplifica-itr-generate-tax",
      getStorage: () => sessionStorage,
    }
  )
);
