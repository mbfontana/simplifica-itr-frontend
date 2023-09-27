import { MainAPI } from "../AuthenticatedAxios";
import { GetConditionTypesResponse } from "./types";

export const getConditionTypes = () =>
  MainAPI.get<GetConditionTypesResponse[]>("/conditions");
