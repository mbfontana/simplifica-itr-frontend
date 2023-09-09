import { FormProvider, useForm } from "react-hook-form";
import { NewCustomerFormLayout } from "./NewCustomerFormLayout";
import { GetCustomerResponse } from "../../../api/Customers/types";

type AreasObject = {
  metreage: number;
  condition: string;
};

type PropertiesObject = {
  name: string;
  nirf: string;
  province: string;
  city: string;
  areas: AreasObject[];
};

export const emptyAreas: AreasObject = {
  metreage: 0,
  condition: "",
};

export const emptyProperties: PropertiesObject = {
  name: "",
  nirf: "",
  province: "",
  city: "",
  areas: [emptyAreas],
};

export const NewCustomer = () => {
  const formHook = useForm<GetCustomerResponse>({
    defaultValues: {
      firstName: "",
      lastName: "",
      phone: "",
      birth: "",
      email: "",
      cpf: "",
    },
  });

  return (
    // Provides the defaultValues to all children. In this case the children are the Controllers components of the form
    // NewClienteFormLayout bundles all the inputs together
    <FormProvider {...formHook}>
      <NewCustomerFormLayout />
    </FormProvider>
  );
};
