import { FormProvider, useForm } from "react-hook-form";
import { NewClienteFormLayout } from "./NewClienteFormLayout";

type ClientFormInternalType = {
  firstName: string;
  lastName: string;
  cpf: string;
};

export const NewCliente = () => {
  const formHook = useForm<ClientFormInternalType>({
    defaultValues: {
      firstName: "",
      lastName: "",
      cpf: "",
    },
  });

  const onClick = (data: any) => console.log(data);

  return (
    // Provides the defaultValues to all children. In this case the children are the Controllers components of the form
    // NewClienteFormLayout bundles all the inputs together
    <FormProvider {...formHook}>
      <NewClienteFormLayout onClick={onClick} />
    </FormProvider>
  );
};
