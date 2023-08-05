import { MainAPI } from "../AuthenticatedAxios";
import { GetAllCustomersResponse } from "./types";

export const getAllCustomers = () =>
  MainAPI.get<GetAllCustomersResponse[]>("/customers");
