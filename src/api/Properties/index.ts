import { MainAPI } from "../AuthenticatedAxios";
import { PropertyObject } from "../Customers/types";

export const getPropertiesById = (customerId: number) =>
  MainAPI.get<PropertyObject[]>(`/properties?id=${customerId}`);
