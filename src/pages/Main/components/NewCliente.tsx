import { FormProvider, useForm } from "react-hook-form";
import { NewClienteFormLayout } from "./NewClienteFormLayout";

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

type ClientFormInternalType = {
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

export const NewCliente = () => {
  const formHook = useForm<ClientFormInternalType>({
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
      <NewClienteFormLayout />
    </FormProvider>
  );
};
