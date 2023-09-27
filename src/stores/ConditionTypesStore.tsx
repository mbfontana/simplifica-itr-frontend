import { create } from "zustand";
import { persist } from "zustand/middleware";
import { GetConditionTypesResponse } from "../api/Conditions/types";

type ConditionTypesStoreProps = {
  conditionTypes: GetConditionTypesResponse[];
  setConditionTypes: (e: GetConditionTypesResponse[]) => void;
};

export const useConditionTypesStore = create<ConditionTypesStoreProps>()(
  persist(
    (set) => ({
      conditionTypes: undefined,
      setConditionTypes: (e) => set(() => ({ conditionTypes: e })),
    }),
    {
      name: "simplifica-itr-condition-types",
      getStorage: () => sessionStorage,
    }
  )
);
