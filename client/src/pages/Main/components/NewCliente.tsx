import { Card, CardContent } from "@mui/material";
import { FormProvider, useForm } from "react-hook-form";
import { NewClienteFormLayout } from "./NewClienteFormLayout";

type ClientFormInternalType = {
  firstName: string;
  lastName: string;
};

export const NewCliente = () => {
  const formHook = useForm<ClientFormInternalType>({
    defaultValues: {
      firstName: "",
      lastName: "",
    },
  });

  const onClick = (data: any) => console.log(data);

  return (
    // Provides the defaultValues to all childrens. In this case the childrens are the Controllers components of the form
    <FormProvider {...formHook}>
      {/* Component that bundles all the inputs together */}
      <NewClienteFormLayout onClick={onClick} />
    </FormProvider>
  );
};
