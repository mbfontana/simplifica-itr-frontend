import { Controller, useFormContext } from "react-hook-form";
import { FormTextField } from "../../../components/FormTextField";

export const InputEmail = () => {
  const {
    control,
    formState: { errors },
  } = useFormContext();

  const emailRegex = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i;

  return (
    <Controller
      control={control}
      name="email"
      rules={{
        required: { value: true, message: "O e-mail é obrigatório" },
        pattern: {
          value: emailRegex,
          message: "E-mail inválido",
        },
        // validate: { value: isEmailUnique },
      }}
      render={({ field }) => (
        <FormTextField
          field={{ ...field }}
          error={errors.email}
          label="E-mail"
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
        required: { value: true, message: "O nome é obrigatório." },
        maxLength: {
          value: 30,
          message: "O nome é muito longo (máximo de 30 caracteres).",
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
        required: { value: true, message: "O sobrenome é obrigatório." },
        maxLength: {
          value: 30,
          message: "O sobrenome é muito longo (máximo de 30 caracteres).",
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

export const InputBirth = () => {
  const {
    control,
    formState: { errors },
  } = useFormContext();

  return (
    <Controller
      control={control}
      name="birth"
      rules={{
        required: {
          value: true,
          message: "A data de nascimento é obrigatória",
        },
      }}
      render={({ field }) => (
        <FormTextField
          field={{ ...field }}
          error={errors.birth}
          label="Data de nascimento"
          type="date"
        />
      )}
    />
  );
};

export const InputPhone = () => {
  const {
    control,
    formState: { errors },
  } = useFormContext();

  const phoneRegex = /^(\(\d{2}\)\s?)?9\d{4}-\d{4}$/;

  const formatPhone = (value) => {
    return value
      .replace(/\D/g, "") // Remove any non-digit character
      .replace(/^(\d{2})(\d)/g, "($1) $2") // Area code formatting
      .replace(/(\d{1})(\d{4})(\d{4})/, "$1$2-$3") // 9XXXX-XXXX format
      .substr(0, 15); // Limit to max phone length
  };

  return (
    <Controller
      control={control}
      name="phone"
      rules={{
        pattern: {
          value: phoneRegex,
          message: "Telefone inválido",
        },
      }}
      render={({ field }) => (
        <FormTextField
          field={{
            ...field,
            onChange: (e) => {
              const formattedValue = formatPhone(e.target.value);
              e.target.value = formattedValue; // Override the event's value
              field.onChange(e); // Call original onChange provided by RHF's Controller
            },
          }}
          error={errors.phone}
          label="Telefone"
        />
      )}
    />
  );
};
