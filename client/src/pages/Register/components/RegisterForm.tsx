import { Controller, useFormContext } from "react-hook-form";
import { FormTextField } from "../../../components/FormTextField";

const isEmailUnique = async (email: string) => {
  var response;

  var myHeaders = new Headers();
  myHeaders.append("Content-Type", "application/json");

  var raw = JSON.stringify({
    email: email,
  });

  var requestOptions = {
    method: "POST",
    headers: myHeaders,
    body: raw,
  };

  response = await fetch(
    "https://localhost:7072/api/user/email",
    requestOptions
  )
    .then((response) => {
      if (response.status === 409) return "E-mail já registrado.";
      else if (response.status === 200) return true;
    })
    .catch((error) => console.log("error", error));

  return response;
};

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
        required: {
          value: true,
          message: "O endereço de e-mail é um campo obrigatório.",
        },
        pattern: {
          value:
            /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
          message: "O endereço de e-mail parece ser inválido.",
        },
        validate: { value: isEmailUnique },
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

export const InputCpf = () => {
  const {
    control,
    formState: { errors },
  } = useFormContext();

  return (
    <Controller
      control={control}
      name="cpf"
      rules={{
        required: { value: true, message: "O CPF é obrigatório." },
        maxLength: {value: 11, message: "Insira um CPF válido."},
        minLength: {value: 11, message: "Insira um CPF válido."},
        pattern: {
          value:
            /([0-9]{2}[\.]?[0-9]{3}[\.]?[0-9]{3}[\/]?[0-9]{4}[-]?[0-9]{2})|([0-9]{3}[\.]?[0-9]{3}[\.]?[0-9]{3}[-]?[0-9]{2})/,
          message: "Insira um CPF válido.",
        },
      }}
      render={({ field }) => (
        <FormTextField field={{ ...field }} error={errors.cpf} label="CPF" />
      )}
    />
  );
};
