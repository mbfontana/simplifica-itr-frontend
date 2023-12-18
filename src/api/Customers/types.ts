export type CityObject = {
  id: number;
  name: string;
  province: string;
  font: number;
};

export type ConditionObject = {
  id: number;
  value: number;
  type: {
    id: number;
    description: string;
  };
};

export type AreaObject = {
  id: number;
  metreage: number;
  condition: ConditionObject;
};

export type PropertyObject = {
  id: number;
  name: string;
  nirf: string;
  city: CityObject;
  totalArea: number;
  areas: AreaObject[];
};

export type GetCustomerResponse = {
  id: number;
  firstName: string;
  lastName: string;
  email: string;
  cpf: string;
  phone: string;
  birth: string;
  properties?: PropertyObject[];
};

export type GetAllCustomersResponse = {
  id: number;
  firstName: string;
  lastName: string;
  email: string;
  cpf: string;
  phone: string;
  birth: string;
  createdAt: string;
  updatedAt: string;
};

export type CreateCustomer = {
  firstName: string;
  lastName: string;
  email: string;
  cpf: string;
  phone: string;
  birth: string;
};
