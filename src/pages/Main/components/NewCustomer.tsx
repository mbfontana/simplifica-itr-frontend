import { FormProvider, useForm } from "react-hook-form";
import { NewCustomerFormLayout } from "./NewCustomerFormLayout";

type AreasObject = {
  size: string;
  condition: string;
  city: string;
};

type PropertiesObject = {
  name: string;
  nirf: string;
  areas: AreasObject[];
};

type CustomerFormInternalType = {
  firstName: string;
  lastName: string;
  cpf: string;
  properties: PropertiesObject[];
};

export const emptyAreas: AreasObject = {
  size: "",
  condition: "",
  city: "",
};

export const emptyProperties: PropertiesObject = {
  name: "",
  nirf: "",
  areas: [emptyAreas],
};

export const NewCustomer = () => {
  const formHook = useForm<CustomerFormInternalType>({
    defaultValues: {
      firstName: "",
      lastName: "",
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
