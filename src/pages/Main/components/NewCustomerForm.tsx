import {
  Autocomplete,
  IconButton,
  List,
  ListItem,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import {
  Controller,
  useFieldArray,
  useFormContext,
  useWatch,
} from "react-hook-form";
import { FormTextField } from "../../../components/FormTextField";
import AddIcon from "@mui/icons-material/Add";
import { FormSelect } from "../../../components/FormSelect";
import { emptyAreas } from "./NewCustomer";
import DeleteOutlineIcon from "@mui/icons-material/DeleteOutline";
import { GetAllCitiesResponse } from "../../../api/Cities/types";
import { useEffect, useState } from "react";
import { useConditionTypesStore } from "../../../stores/ConditionTypesStore";

// This file contains all the components that are input fields of the New Customer Forms
// FormTextField is an example of a generic component used to build all kind of forms

type InputCpfProps = {
  disabled?: boolean;
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

export const InputCpf = ({ disabled }: InputCpfProps) => {
  const {
    control,
    formState: { errors },
  } = useFormContext();

  const cpfRegex = /^\d{3}\.\d{3}\.\d{3}-\d{2}$/;

  const isValidCPF = (num) => {
    let sum, rest;
    sum = 0;
    if (num === "00000000000") return false;

    for (let i = 1; i <= 9; i++)
      sum = sum + parseInt(num.substring(i - 1, i)) * (11 - i);
    rest = (sum * 10) % 11;

    if (rest === 10 || rest === 11) rest = 0;
    if (rest !== parseInt(num.substring(9, 10))) return false;

    sum = 0;
    for (let i = 1; i <= 10; i++)
      sum = sum + parseInt(num.substring(i - 1, i)) * (12 - i);
    rest = (sum * 10) % 11;

    if (rest === 10 || rest === 11) rest = 0;
    if (rest !== parseInt(num.substring(10, 11))) return false;

    return true;
  };

  const formatCPF = (value) => {
    return value
      .replace(/\D/g, "") // remove any non-digit character
      .replace(/(\d{3})(\d)/, "$1.$2")
      .replace(/(\d{3})(\d)/, "$1.$2")
      .replace(/(\d{3})(\d{2})$/, "$1-$2")
      .substr(0, 14); // limit to max CPF length
  };

  return (
    <Controller
      control={control}
      name="cpf"
      rules={{
        required: { value: true, message: "O CPF é obrigatório" },
        validate: {
          matchesFormat: (value) => cpfRegex.test(value) || "CPF inválido",
          isValidCPF: (value) =>
            isValidCPF(value.replace(/[.-]/g, "")) || "CPF inválido",
        },
      }}
      render={({ field }) => (
        <FormTextField
          field={{
            ...field,
            onChange: (e) => {
              const formattedValue = formatCPF(e.target.value);
              e.target.value = formattedValue; // Override the event's value
              field.onChange(e); // Call original onChange provided by RHF's Controller
            },
          }}
          error={errors.cpf}
          disabled={disabled}
          label="CPF"
        />
      )}
    />
  );
};

type InputPropertiesProps = {
  index: number;
  cities?: GetAllCitiesResponse[];
};

export const InputPropertieName = ({ index }: InputPropertiesProps) => {
  const {
    control,
    formState: { errors },
  } = useFormContext();

  return (
    <Controller
      control={control}
      name={`properties.${index}.name`}
      rules={{
        required: {
          value: true,
          message: "O nome da propriedade é obrigatório",
        },
      }}
      render={({ field }) => (
        <FormTextField
          field={{ ...field }}
          label="Nome da propriedade"
          error={errors?.properties && errors.properties[index]?.name}
        />
      )}
    />
  );
};

export const InputPropertieNirf = ({ index }: InputPropertiesProps) => {
  const {
    control,
    formState: { errors },
  } = useFormContext();

  const nirfRegex = /^\d{9}$/;

  return (
    <Controller
      control={control}
      name={`properties.${index}.nirf`}
      rules={{
        required: {
          value: true,
          message: "O NIRF da propriedade é obrigatório",
        },
        pattern: {
          value: nirfRegex,
          message: "NIRF inválido",
        },
      }}
      render={({ field }) => (
        <FormTextField
          field={{ ...field }}
          label="NIRF"
          error={errors?.properties && errors.properties[index]?.nirf}
        />
      )}
    />
  );
};

export const InputPropertieCity = ({ index, cities }: InputPropertiesProps) => {
  const {
    control,
    formState: { errors },
    setValue,
  } = useFormContext();

  const [cityOptions, setCityOptions] = useState([]);

  const provinces = cities
    .map((city) => city.province)
    .filter((province, idx, self) => self.indexOf(province) === idx);

  return (
    <>
      <Controller
        control={control}
        name={`properties.${index}.city.province`}
        rules={{
          required: {
            value: true,
            message: "Selecione o estado",
          },
        }}
        render={({ field }) => (
          <Autocomplete
            id="Estado"
            options={provinces}
            value={field.value}
            onChange={(e, newValue) => {
              field.onChange(newValue);
              const filteredCities = cities.filter(
                (city) => city.province === newValue
              );
              setCityOptions(filteredCities.map((city) => city.name));
              setValue(`properties.${index}.city.name`, "");
            }}
            renderInput={(params) => (
              <TextField
                {...params}
                label="Estado"
                error={!!errors.properties?.[index]?.province}
                helperText={errors.properties?.[index]?.province?.message}
              />
            )}
          />
        )}
      />
      <Controller
        control={control}
        name={`properties.${index}.city.name`}
        rules={{
          required: {
            value: true,
            message: "Selecione a cidade",
          },
        }}
        render={({ field }) => (
          <Autocomplete
            id="Cidade"
            options={cityOptions}
            value={field.value}
            onChange={(e, newValue) => field.onChange(newValue)}
            renderInput={(params) => (
              <TextField
                {...params}
                label="Cidade"
                error={!!errors.properties?.[index]?.city}
                helperText={errors.properties?.[index]?.city?.message}
              />
            )}
          />
        )}
      />
    </>
  );
};

export const PropertiesForm = ({ propertieIndex, cities }) => {
  const { fields, append, remove } = useFieldArray({
    name: `properties.${propertieIndex}.areas`,
  });
  return (
    <Stack spacing={2} sx={{ width: "100%", marginBottom: "32px" }}>
      <InputPropertieName index={propertieIndex} />
      <InputPropertieNirf index={propertieIndex} />
      <InputPropertieCity index={propertieIndex} cities={cities} />

      <Stack spacing={0}>
        <Stack spacing={2}>
          <Stack
            spacing={2}
            direction="row"
            alignItems="center"
            sx={{ borderBottom: "solid 1px", borderColor: "divider", pb: 2 }}
          >
            <Typography variant="body1" sx={{ color: "#5B5B5B" }}>
              Terras
            </Typography>
            <IconButton
              sx={{
                width: "15px",
                height: "15px",
                color: "green",
                "&:hover": { backgroundColor: "transparent" },
              }}
              onClick={() => {
                append([emptyAreas]);
              }}
            >
              <AddIcon />
            </IconButton>
          </Stack>

          <List>
            {fields.map((item, index) => {
              return (
                <ListItem
                  key={item.id}
                  sx={{
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "flex-start",
                    p: 0,
                  }}
                >
                  <Stack
                    direction="row"
                    alignItems="flex-start"
                    justifyContent="flex-start"
                    width="100%"
                    spacing={4}
                    mb={5}
                  >
                    <Stack
                      direction="column"
                      alignItems="center"
                      justifyContent="center"
                      spacing={2}
                    >
                      <Typography
                        variant="body2"
                        sx={{
                          width: "45px",
                          height: "45px",
                          borderRadius: 50,
                          backgroundColor: "divider",
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                        }}
                      >
                        {index + 1}
                      </Typography>
                      <IconButton
                        onClick={() => {
                          remove(index);
                        }}
                        sx={{
                          color: "#FF1F1F",
                          backgroundColor: "#FFB2B2",
                          "&:hover": { backgroundColor: "#FFCCCC" },
                        }}
                      >
                        <DeleteOutlineIcon />
                      </IconButton>
                    </Stack>
                    <Stack width="100%">
                      <AreaForm propertieIndex={propertieIndex} index={index} />
                    </Stack>
                  </Stack>
                </ListItem>
              );
            })}
          </List>
        </Stack>
      </Stack>
    </Stack>
  );
};

type InputAreaProps = {
  index: number;
  propertieIndex: number;
  disabled?: boolean;
};

export const InputAreaSize = ({ propertieIndex, index }: InputAreaProps) => {
  const {
    control,
    formState: { errors },
  } = useFormContext();

  return (
    <Controller
      control={control}
      name={`properties.${propertieIndex}.areas.${index}.metreage`}
      render={({ field }) => (
        <FormTextField field={{ ...field }} label="Área em hectare" />
      )}
    />
  );
};

export const InputAreaCondition = ({
  propertieIndex,
  index,
}: InputAreaProps) => {
  const {
    control,
    formState: { errors },
  } = useFormContext();
  const conditionTypes = useConditionTypesStore.getState().conditionTypes;
  const conditions = conditionTypes.map((e) => e.description);
  return (
    <Controller
      control={control}
      name={`properties.${propertieIndex}.areas.${index}.condition.type.description`}
      render={({ field }) => (
        <FormSelect
          field={{ ...field }}
          data={conditions}
          label="Condição"
          // error={
          //   errors.properties[index]?.areas &&
          //   errors.properties[index]?.areas[index].condition
          // }
        />
      )}
    />
  );
};

export const AreaForm = ({ propertieIndex, index }: InputAreaProps) => {
  return (
    <Stack spacing={2}>
      <InputAreaSize propertieIndex={propertieIndex} index={index} />
      <InputAreaCondition propertieIndex={propertieIndex} index={index} />
    </Stack>
  );
};
