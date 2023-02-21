import { RegisterFormLayout } from "./components/RegisterFormLayout";
import { FormProvider, useForm } from "react-hook-form";

export type RegisterFormInternalType = {
  firstName: string;
  lastName: string;
  cpf: string;
  email: string;
  password: string;
  checkbox: boolean;
};

export const Register = () => {
  const formHook = useForm<RegisterFormInternalType>({
    defaultValues: {
      firstName: "",
      lastName: "",
      cpf: "",
      email: "",
      password: "",
    },
  });

  return (
    <FormProvider {...formHook}>
      <RegisterFormLayout />
    </FormProvider>
  );
};
