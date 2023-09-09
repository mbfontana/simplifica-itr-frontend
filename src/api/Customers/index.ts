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
  cpf,
  properties
) => {
  return MainAPI.post<CreateCustomer>("/customers", {
    firstName: firstName,
    lastName: lastName,
    phone: phone,
    birth: birth,
    email: email,
    cpf: cpf,
    properties: properties,
  });
};

export const updateCustomer = (
  firstName,
  lastName,
  phone,
  birth,
  email,
  cpf,
  properties
) => {
  return MainAPI.put<CreateCustomer>("/customers", {
    firstName: firstName,
    lastName: lastName,
    phone: phone,
    birth: birth,
    email: email,
    cpf: cpf,
    properties: properties,
  });
};

export const deleteCustomer = (cpf) =>
  MainAPI.delete("/customers", {
    data: { cpf },
  });
