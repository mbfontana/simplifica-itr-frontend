import { Controller, useFormContext } from "react-hook-form";
import { FormTextField } from "../../../components/FormTextField";

export const InputEmail = () => {
  const {
    control,
    formState: { errors },
  } = useFormContext();

  return (
    <Controller
      control={control}
      name="email"
      rules={{
        required: { value: true, message: "O email é obrigatório." },
        pattern: {
          value:
            /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
          message: "Informe um email válido.",
        },
      }}
      render={({ field }) => (
        <FormTextField
          field={{ ...field }}
          error={errors.email}
          label="Email"
        />
      )}
    />
  );
};

export const InputPassword = () => {
  const {
    control,
    formState: { errors },
  } = useFormContext();

  return (
    <Controller
      control={control}
      name="password"
      rules={{
        required: { value: true, message: "A senha é obrigatória." },
        minLength: {
          value: 4,
          message: "A senha deve ter entre 4 e 60 caracteres.",
        },
        maxLength: {
          value: 60,
          message: "A senha deve ter entre 4 e 60 caracteres.",
        },
      }}
      render={({ field }) => (
        <FormTextField
          field={{ ...field }}
          error={errors.password}
          label="Senha"
          type="password"
        />
      )}
    />
  );
};
