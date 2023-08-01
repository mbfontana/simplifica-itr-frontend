import { LoginFormLayout } from "./components/LoginFormLayout";
import { FormProvider, useForm } from "react-hook-form";

type LoginFormInternalType = {
  email: string;
  password: string;
  checkbox: boolean;
};

export const Login = () => {
  const formHook = useForm<LoginFormInternalType>({
    defaultValues: {
      email: "",
      password: "",
    },
  });

  return (
    <FormProvider {...formHook}>
      <LoginFormLayout />
    </FormProvider>
  );
};
