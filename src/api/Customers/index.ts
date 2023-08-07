import { MainAPI } from "../AuthenticatedAxios";
import {
  CreateCustomer,
  GetAllCustomersResponse,
  GetCustomerResponse,
} from "./types";

export const getCustomerById = (customerId: number) =>
  MainAPI.get<GetCustomerResponse>(`/customers/${customerId}`);

export const getAllCustomers = () =>
  MainAPI.get<GetAllCustomersResponse[]>("/customers");

export const registerCustomer = (
  firstName,
  lastName,
  phone,
  birth,
  email,
  cpf
) => {
  return MainAPI.post<CreateCustomer>("/customers", {
    firstName: firstName,
    lastName: lastName,
    phone: phone,
    birth: birth,
    email: email,
    cpf: cpf,
  });
};

export const deleteCustomer = (cpf) =>
  MainAPI.delete("/customers", {
    data: { cpf },
  });
