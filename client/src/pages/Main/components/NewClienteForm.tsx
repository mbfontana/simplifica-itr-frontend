import { Controller, useFormContext } from "react-hook-form";
import { FormTextField } from "../../../components/FormTextField";

// This file contains all the components that are input fields of the New Cliente Forms
// FormTextField is an example of a generic component used to build all kind of forms

export const InputFirstName = () => {
  const {
    control,
    formState: { errors },
  } = useFormContext();

  return (
    <Controller
      control={control}
      name="firstName"
      rules={{
        required: { value: true, message: "O nome é obrigatório" },
        maxLength: {
          value: 30,
          message: "O nome é muito longo (máximo de 30 caracteres)",
        },
      }}
      render={({ field }) => (
        <FormTextField
          field={{ ...field }}
          error={errors.firstName}
          label="Nome"
        />
      )}
    />
  );
};

export const InputLastName = () => {
  const {
    control,
    formState: { errors },
  } = useFormContext();

  return (
    <Controller
      control={control}
      name="lastName"
      rules={{
        required: { value: true, message: "O sobrenome é obrigatório" },
        maxLength: {
          value: 30,
          message: "O sobrenome é muito longo (máximo de 30 caracteres)",
        },
      }}
      render={({ field }) => (
        <FormTextField
          field={{ ...field }}
          error={errors.lastName}
          label="Sobrenome"
        />
      )}
    />
  );
};
